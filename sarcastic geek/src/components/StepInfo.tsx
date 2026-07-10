import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface StepInfoProps {
  title: string;
  description: string;
  startFrame?: number;
}

export const StepInfo: React.FC<StepInfoProps> = ({ title, description, startFrame = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const f = frame - startFrame;

  const slideUp = spring({ frame: Math.max(0, f), fps, config: { damping: 16, stiffness: 100 } });
  const opacity = interpolate(f, [0, 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  if (f < 0) return null;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
        background: "linear-gradient(135deg, rgba(0, 212, 170, 0.12), rgba(0, 180, 216, 0.08))",
        border: "1px solid rgba(0, 212, 170, 0.25)",
        borderRadius: 14,
        padding: "14px 20px",
        opacity,
        transform: `translateY(${(1 - slideUp) * 20}px)`,
        zIndex: 200,
        backdropFilter: "blur(12px)",
      }}
    >
      <div style={{ color: "#00d4aa", fontSize: 14, fontWeight: 700, marginBottom: 4 }}>
        {title}
      </div>
      <div style={{ color: "#9ca3af", fontSize: 12, lineHeight: 1.4 }}>
        {description}
      </div>
    </div>
  );
};
