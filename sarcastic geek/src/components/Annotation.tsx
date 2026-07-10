import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

/* ── Brand palette ── */
const BRAND = {
  bg: "#0B0D13",
  card: "#111520",
  border: "#1a1e2e",
  cyan: "#00d4aa",
  cyanGlow: "rgba(0, 212, 170, 0.25)",
  white: "#ffffff",
  gray: "#6b7280",
  lightGray: "#9ca3af",
  red: "#ef4444",
};

/* ── Annotation tooltip ── */
interface AnnotationProps {
  x: number;
  y: number;
  label: string;
  direction?: "top" | "bottom" | "left" | "right";
  startFrame?: number;
  color?: string;
}

export const Annotation: React.FC<AnnotationProps> = ({
  x, y, label, direction = "top", startFrame = 0, color = BRAND.cyan,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const f = frame - startFrame;

  const opacity = interpolate(f, [0, 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const scale = spring({ frame: Math.max(0, f), fps, config: { damping: 14, stiffness: 120 } });

  if (f < 0) return null;

  const isBottom = direction === "bottom";
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: isBottom
          ? `translate(-50%, 8px) scale(${scale})`
          : `translate(-50%, -100%) translateY(${(1 - scale) * -16}px)`,
        opacity,
        display: "flex",
        flexDirection: isBottom ? "column-reverse" : "column",
        alignItems: "center",
        gap: 2,
        pointerEvents: "none",
        zIndex: 100,
      }}
    >
      <div
        style={{
          background: color,
          color: "#000",
          fontSize: 13,
          fontWeight: 600,
          padding: "6px 14px",
          borderRadius: 8,
          whiteSpace: "nowrap",
          boxShadow: `0 0 16px ${color}55`,
        }}
      >
        {label}
      </div>
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: "6px solid transparent",
          borderRight: "6px solid transparent",
          ...(isBottom
            ? { borderBottom: `8px solid ${color}` }
            : { borderTop: `8px solid ${color}` }),
        }}
      />
    </div>
  );
};

/* ── Pulsing highlight box ── */
interface HighlightProps {
  x: number;
  y: number;
  width: number;
  height: number;
  startFrame?: number;
  color?: string;
}

export const Highlight: React.FC<HighlightProps> = ({
  x, y, width, height, startFrame = 0, color = BRAND.cyan,
}) => {
  const frame = useCurrentFrame();
  const f = frame - startFrame;

  const opacity = interpolate(f, [0, 10], [0, 0.22], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const pulse = Math.sin((f / 25) * Math.PI * 2) * 0.1;

  if (f < 0) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width,
        height,
        borderRadius: 8,
        border: `2px solid ${color}`,
        background: `${color}${Math.round((opacity + pulse) * 255).toString(16).padStart(2, "0")}`,
        boxShadow: `0 0 12px ${color}44`,
        pointerEvents: "none",
        zIndex: 99,
      }}
    />
  );
};

/* ── Step counter badge ── */
interface StepCounterProps {
  step: number;
  total: number;
}

export const StepCounter: React.FC<StepCounterProps> = ({ step, total }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 16,
        right: 16,
        background: "linear-gradient(135deg, #00d4aa, #00b4d8)",
        color: "#000",
        fontSize: 13,
        fontWeight: 700,
        padding: "6px 16px",
        borderRadius: 20,
        zIndex: 200,
        letterSpacing: 0.5,
      }}
    >
      Step {step} / {total}
    </div>
  );
};

/* ── Animated cursor click ── */
interface CursorClickProps {
  x: number;
  y: number;
  startFrame?: number;
}

export const CursorClick: React.FC<CursorClickProps> = ({ x, y, startFrame = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const f = frame - startFrame;

  if (f < 0 || f > 40) return null;

  const moveProgress = spring({ frame: Math.max(0, f), fps, config: { damping: 18, stiffness: 80 } });
  const ringScale = f > 15 ? spring({ frame: f - 15, fps, config: { damping: 10, stiffness: 200 } }) : 0;
  const ringOpacity = f > 15 ? interpolate(f - 15, [0, 20], [0.8, 0], { extrapolateRight: "clamp" }) : 0;

  return (
    <>
      {/* Cursor arrow */}
      <div
        style={{
          position: "absolute",
          left: x,
          top: y,
          transform: `scale(${moveProgress})`,
          opacity: moveProgress,
          zIndex: 150,
          pointerEvents: "none",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 3L19 12L12 13L9 20L5 3Z" fill="#ffffff" stroke="#000" strokeWidth="1" />
        </svg>
      </div>
      {/* Click ring */}
      <div
        style={{
          position: "absolute",
          left: x - 12,
          top: y - 12,
          width: 24,
          height: 24,
          borderRadius: "50%",
          border: "2px solid #00d4aa",
          transform: `scale(${1 + ringScale * 1.5})`,
          opacity: ringOpacity,
          pointerEvents: "none",
          zIndex: 149,
        }}
      />
    </>
  );
};

export { BRAND };
