# Motion Graphics

A collection of motion graphics built with [Remotion](https://remotion.dev).

## Getting Started

Install dependencies:

```bash
npm install
```

Start the Remotion studio:

```bash
npm start
```

Render a video:

```bash
npm run build
```

## Project Structure

```
src/
  compositions/   -- individual video compositions
  assets/         -- images, fonts, audio
  components/     -- reusable React components
  Root.tsx        -- entry point registering compositions
```

## Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm start`       | Open Remotion Studio         |
| `npm run build`   | Render video to `out/`       |
| `npm test`        | Run tests                    |

## License

MIT
