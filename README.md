# Motion Graphics

A collection of motion graphics built with [Remotion](https://remotion.dev) — a framework for creating real MP4 videos programmatically with React.

## Getting Started

```bash
npm install
npm start            # Open Remotion Studio
npm run build        # Render video to out/
```

## Project Structure

```
src/
  Root.tsx            -- register compositions
  compositions/       -- individual video compositions
  components/         -- reusable React components
  assets/             -- images, fonts, audio (via public/)
public/               -- static assets (referenced via staticFile())
package.json
remotion.config.ts
```

## Compositions

A composition is a React component paired with video metadata (width, height, fps, duration). Register them in `src/Root.tsx`:

```tsx
import { Composition } from "remotion";
import { MyVideo } from "./compositions/MyVideo";

export const RemotionRoot = () => (
  <Composition
    id="MyVideo"
    component={MyVideo}
    durationInFrames={150}
    fps={30}
    width={1920}
    height={1080}
  />
);
```

## Core Concepts

| API | What it does |
| --- | ------------ |
| [`useCurrentFrame()`](https://www.remotion.dev/docs/use-current-frame) | Get the current frame number (0-indexed) |
| [`useVideoConfig()`](https://www.remotion.dev/docs/use-video-config) | Get `width`, `height`, `fps`, `durationInFrames` |
| [`<AbsoluteFill>`](https://www.remotion.dev/docs/absolute-fill) | Full-screen absolutely positioned `<div>` for layering |
| [`<Sequence>`](https://www.remotion.dev/docs/sequence) | Time-shift children with `from`, trim with `durationInFrames` |
| [`<Series>`](https://www.remotion.dev/docs/series) | Play sequences sequentially without manual offset math |
| [`interpolate()`](https://www.remotion.dev/docs/interpolate) | Map input range to output range (with easing, clamping, wrapping) |
| [`spring()`](https://www.remotion.dev/docs/spring) | Physics-based spring animation (mass, damping, stiffness) |
| [`Easing`](https://www.remotion.dev/docs/easing) | Built-in easing functions (cubic, bezier, elastic, etc.) |
| [`<Freeze>`](https://www.remotion.dev/docs/freeze) | Freeze a frame in time |
| [`<TransitionSeries>`](https://www.remotion.dev/docs/transitions) | Declarative transitions between scenes |
| [`staticFile()`](https://www.remotion.dev/docs/staticfile) | Reference assets from `public/` folder |
| [`<Img>`](https://www.remotion.dev/docs/img) | Optimized image component (lazy loads, avoids re-renders) |
| [`<Audio>` / `<Video>`](https://www.remotion.dev/docs/media) | Audio/video playback with volume ramping and trim |
| [`<OffthreadVideo>`](https://www.remotion.dev/docs/offthreadvideo) | Render video in a separate thread (no DOM jank) |

## Animation

Animate any CSS property using `interpolate()` or `spring()`:

```tsx
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const MyComp = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const scale = spring({ frame, fps, config: { damping: 12 } });

  return <div style={{ opacity, transform: `scale(${scale})` }}>Hello</div>;
};
```

## Passing Props

Make compositions data-driven — pass props, validate with schemas, and edit visually:

```tsx
<Composition
  id="Greeting"
  component={Greeting}
  durationInFrames={90}
  fps={30}
  width={1920}
  height={1080}
  defaultProps={{ name: "World" }}
/>
```

See: [Parameterized rendering](https://www.remotion.dev/docs/parameterized-rendering), [Schemas](https://www.remotion.dev/docs/schemas), [Visual editing](https://www.remotion.dev/docs/visual-editing).

## Rendering

| Method | Command / API |
| ------ | ------------- |
| Remotion Studio | Click the Render button |
| CLI | `npx remotion render <composition-id>` |
| SSR | Node.js [`renderMedia()`](https://www.remotion.dev/docs/render) API |
| Lambda | Serverless rendering at scale |
| Still images | `npx remotion still` |
| GIF | `--codec=gif` flag |
| Audio-only | `--codec=mp3` flag |

Output formats: MP4, WebM, GIF, PNG sequence, audio tracks.

## Remotion Player

Embed and interact with videos inside any React app:

```bash
npm install @remotion/player
```

```tsx
import { Player } from "@remotion/player";
import { MyVideo } from "./MyVideo";

<Player component={MyVideo} durationInFrames={150} fps={30} compositionWidth={1920} compositionHeight={1080} controls />;
```

## Resources

- [Docs](https://www.remotion.dev/docs/)
- [API Reference](https://www.remotion.dev/docs/api)
- [Templates](https://www.remotion.dev/templates)
- [Discord](https://remotion.dev/discord)
- [GitHub](https://github.com/remotion-dev/remotion)

## License

MIT
