import React from "react";
import { AbsoluteFill, Audio, Sequence, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { ding, yippee } from "@remotion/sfx";

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [75, 90], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const opacity = Math.min(fadeIn, fadeOut);

  const titleScale = spring({ frame, fps, config: { damping: 12, stiffness: 80 } });
  const checkOpacity = interpolate(frame, [15, 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const stepsOpacity = interpolate(frame, [25, 40], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const ctaOpacity = interpolate(frame, [40, 55], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "#0B0D13",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Inter', system-ui, sans-serif",
        opacity,
        overflow: "hidden",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div
        style={{
          position: "absolute",
          top: -80,
          left: "50%",
          transform: "translateX(-50%)",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,170,0.1), transparent 70%)",
        }}
      />

      <div style={{ textAlign: "center", zIndex: 1 }}>
        {/* Big checkmark */}
        <div
          style={{
            opacity: checkOpacity,
            marginBottom: 20,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #00d4aa, #00b4d8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              boxShadow: "0 0 40px rgba(0,212,170,0.3)",
            }}
          >
            ✓
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 38,
            fontWeight: 800,
            color: "#ffffff",
            transform: `scale(${titleScale})`,
            letterSpacing: -1,
          }}
        >
          You're All Set!
        </div>

        {/* Completion steps */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginTop: 24,
            opacity: stepsOpacity,
          }}
        >
          {[
            { icon: "✅", text: "Signed in to your account" },
            { icon: "✅", text: "Profile setup complete" },
            { icon: "✅", text: "Settings configured" },
            { icon: "✅", text: "Hello World explored" },
          ].map(({ icon, text }) => (
            <div
              key={text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: 14 }}>{icon}</span>
              <span style={{ color: "#9ca3af", fontSize: 14, fontWeight: 500 }}>{text}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ opacity: ctaOpacity, marginTop: 32 }}>
          <div
            style={{
              display: "inline-block",
              background: "linear-gradient(90deg, rgba(0,212,170,0.12), rgba(0,180,216,0.08))",
              border: "1px solid rgba(0, 212, 170, 0.25)",
              borderRadius: 10,
              padding: "12px 28px",
              color: "#00d4aa",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Visit sarcasticgeeks.com
          </div>
          <div style={{ color: "#4b5563", fontSize: 12, marginTop: 16 }}>
            Questions? Reach out to the Sarcastic Geeks community
          </div>
        </div>
      </div>

      {/* ═══ Sound Effects ═══ */}
      <Sequence from={15} durationInFrames={30}>
        <Audio src={ding} volume={0.5} />
      </Sequence>
      <Sequence from={5} durationInFrames={40}>
        <Audio src={yippee} volume={0.4} />
      </Sequence>
    </AbsoluteFill>
  );
};
