import React from "react";
import { AbsoluteFill, Audio, Sequence, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { whoosh, ding } from "@remotion/sfx";

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({ frame, fps, config: { damping: 12, stiffness: 80 } });
  const titleOpacity = interpolate(frame, [10, 25], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const titleSlide = interpolate(frame, [10, 25], [30, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const subtitleOpacity = interpolate(frame, [22, 35], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const stepsOpacity = interpolate(frame, [32, 45], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Grid lines in background
  const gridOpacity = interpolate(frame, [0, 20], [0, 0.06], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "#0B0D13",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Inter', system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: gridOpacity,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orb top-right */}
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,170,0.12), transparent 70%)",
        }}
      />

      {/* Glow orb bottom-left */}
      <div
        style={{
          position: "absolute",
          bottom: -100,
          left: -100,
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,180,216,0.1), transparent 70%)",
        }}
      />

      <div style={{ textAlign: "center", zIndex: 1 }}>
        {/* Logo icon */}
        <div
          style={{
            transform: `scale(${logoScale})`,
            marginBottom: 20,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 20,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 42,
              boxShadow: "0 8px 32px rgba(99,102,241,0.3)",
            }}
          >
            🤓
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 44,
            fontWeight: 800,
            color: "#ffffff",
            opacity: titleOpacity,
            transform: `translateY(${titleSlide}px)`,
            letterSpacing: -1,
            lineHeight: 1.1,
          }}
        >
          Sarcastic Geek
          <br />
          <span style={{ color: "#00d4aa" }}>Trybe</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 18,
            color: "#00d4aa",
            marginTop: 16,
            opacity: subtitleOpacity,
            fontWeight: 500,
          }}
        >
          Getting Started Tutorial
        </div>

        {/* Steps list */}
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            marginTop: 28,
            opacity: stepsOpacity,
          }}
        >
          {["Sign Up", "Setup Profile", "Configure", "Hello World"].map((step, i) => (
            <div
              key={step}
              style={{
                background: "rgba(0, 212, 170, 0.08)",
                border: "1px solid rgba(0, 212, 170, 0.2)",
                borderRadius: 8,
                padding: "8px 14px",
                color: "#9ca3af",
                fontSize: 12,
                fontWeight: 500,
              }}
            >
              {step}
            </div>
          ))}
        </div>
      </div>

      {/* ═══ Sound Effects ═══ */}
      <Sequence from={0} durationInFrames={30}>
        <Audio src={whoosh} volume={0.5} />
      </Sequence>
      <Sequence from={10} durationInFrames={30}>
        <Audio src={ding} volume={0.4} />
      </Sequence>
    </AbsoluteFill>
  );
};
