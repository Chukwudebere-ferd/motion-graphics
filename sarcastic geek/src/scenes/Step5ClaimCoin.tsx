import React from "react";
import { AbsoluteFill, Audio, Sequence, interpolate, useCurrentFrame } from "remotion";
import { Annotation, Highlight, StepCounter, CursorClick } from "../components/Annotation";
import { StepInfo } from "../components/StepInfo";
import { PublicNavbar } from "../components/Layout";
import { pageTurn, mouseClick } from "@remotion/sfx";

const TOTAL = 4;

export const Step5ClaimCoin: React.FC = () => {
  const frame = useCurrentFrame();

  // Subtle globe rotation
  const globeRotate = interpolate(frame, [0, 120], [0, 15]);

  return (
    <AbsoluteFill style={{ background: "#0B0D13", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <StepCounter step={4} total={TOTAL} />

      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating decorative circles */}
      <div
        style={{
          position: "absolute",
          top: 80,
          left: 60,
          width: 60,
          height: 60,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 100,
          right: 80,
          width: 70,
          height: 70,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 300,
          right: 50,
          width: 45,
          height: 45,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.02)",
        }}
      />

      {/* Top nav */}
      <PublicNavbar />

      {/* Hero section with globe */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 0,
          right: 0,
          height: 400,
          padding: "40px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left text column */}
        <div style={{ maxWidth: 480, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "#9ca3af", fontSize: 13, fontWeight: 500 }}>Career Platform</span>
            <span
              style={{
                background: "#ef4444",
                color: "#fff",
                fontSize: 10,
                fontWeight: 700,
                padding: "3px 8px",
                borderRadius: 4,
                textTransform: "uppercase",
              }}
            >
              NEW
            </span>
          </div>

          <div
            style={{
              fontSize: 52,
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Hello{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #fff, #6b7280)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontStyle: "italic",
              }}
            >
              World
            </span>
          </div>

          <div style={{ color: "#9ca3af", fontSize: 14, lineHeight: 1.5, maxWidth: 420 }}>
            Get weekly radar update of newly funded startups, position yourself ahead of the job listing with Bez.ai Assistance.
          </div>

          {/* Avatars row */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
            <div style={{ display: "flex" }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: `hsl(${i * 50 + 200}, 50%, 40%)`,
                    border: "2px solid #0B0D13",
                    marginLeft: i > 0 ? -8 : 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                  }}
                >
                  {["😎", "🧑‍💻", "👨‍🎨", "🧑‍🔬", "🧑‍🚀"][i]}
                </div>
              ))}
            </div>
            <span style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>400+</span>
            <span style={{ color: "#6b7280", fontSize: 13 }}>joined the trybe.</span>
          </div>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
            <div
              style={{
                background: "#111520",
                border: "1px solid #2d3748",
                borderRadius: 8,
                padding: "10px 20px",
                color: "#fff",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              Launching on 17th July
            </div>
            <div
              style={{
                background: "#111520",
                border: "1px solid #2d3748",
                borderRadius: 8,
                padding: "10px 20px",
                color: "#fff",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              Explore Courses
            </div>
          </div>
        </div>

        {/* Right globe */}
        <div
          style={{
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 35%, #1a3a5c, #0a1628 70%)",
            boxShadow: "0 0 80px rgba(59, 130, 246, 0.15), inset 0 0 40px rgba(59, 130, 246, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 120,
            position: "relative",
            overflow: "hidden",
            transform: `rotate(${globeRotate}deg)`,
          }}
        >
          🌍
          {/* Glowing ring */}
          <div
            style={{
              position: "absolute",
              inset: -4,
              borderRadius: "50%",
              border: "1px solid rgba(59, 130, 246, 0.15)",
            }}
          />
        </div>
      </div>

      {/* What is Hello World section */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "20px 40px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 16 }}>🌐</span>
          <span style={{ color: "#fff", fontSize: 20, fontWeight: 800 }}>What is Hello World?</span>
        </div>

        <div
          style={{
            background: "#111520",
            borderLeft: "3px solid #00d4aa",
            borderRadius: "0 10px 10px 0",
            padding: "16px 20px",
          }}
        >
          <div style={{ color: "#d1d5db", fontSize: 12, lineHeight: 1.6, fontStyle: "italic", fontWeight: 600 }}>
            Hello World flips the script — track newly funded startups, get AI-powered roadmaps, and build your proof of work portfolio.
          </div>

          <div style={{ display: "flex", gap: 24, marginTop: 14 }}>
            {[
              { value: "400+", label: "TRYBE MEMBERS" },
              { value: "100%", label: "REAL PROJECT DATA" },
              { value: "AI", label: "POWERED ROADMAPS" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div style={{ color: "#fff", fontSize: 22, fontWeight: 900 }}>{value}</div>
                <div style={{ color: "#6b7280", fontSize: 9, fontWeight: 600, letterSpacing: 1 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ Annotations ═══ */}
      <Sequence from={15} durationInFrames={30}>
        <Highlight x={30} y={60} width={500} height={350} startFrame={15} color="rgba(0,212,170,0.5)" />
        <Annotation x={280} y={56} label="Hello World — Career Platform" direction="top" startFrame={15} />
      </Sequence>

      <Sequence from={45} durationInFrames={35}>
        <Highlight x={30} y={345} width={210} height={42} startFrame={45} />
        <Annotation x={135} y={340} label="Click to join when launched" direction="top" startFrame={45} />
        <CursorClick x={135} y={366} startFrame={55} />
      </Sequence>

      <Sequence from={80} durationInFrames={35}>
        <Highlight x={30} y={690} width={600} height={120} startFrame={80} />
        <Annotation x={330} y={685} label="Explore features & stats" direction="top" startFrame={80} />
      </Sequence>

      <Sequence from={15}>
        <StepInfo
          title="Step 4: Explore Hello World"
          description="Navigate to the Hello World section to discover the career platform — track startups, get AI roadmaps, and build your portfolio."
          startFrame={15}
        />
      </Sequence>

      {/* ═══ Sound Effects ═══ */}
      <Sequence from={0} durationInFrames={30}>
        <Audio src={pageTurn} volume={0.5} />
      </Sequence>
      <Sequence from={55} durationInFrames={30}>
        <Audio src={mouseClick} volume={0.6} />
      </Sequence>
    </AbsoluteFill>
  );
};
