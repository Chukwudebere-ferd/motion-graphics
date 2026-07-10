import { Composition } from "remotion";
import { SarcasticGeek } from "./SarcasticGeek";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="SarcasticGeek"
        component={SarcasticGeek}
        durationInFrames={890}
        fps={30}
        width={1080}
        height={1080}
      />
    </>
  );
};
