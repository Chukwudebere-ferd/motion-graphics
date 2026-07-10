import React from "react";
import { AbsoluteFill, Audio, Sequence } from "remotion";
import { Annotation, Highlight, StepCounter, CursorClick } from "../components/Annotation";
import { StepInfo } from "../components/StepInfo";
import { Sidebar, TopBar } from "../components/Layout";
import { whoosh, uiSwitch, mouseClick } from "@remotion/sfx";

const TOTAL = 4;

export const Step4Configure: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: "#0B0D13", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <StepCounter step={4} total={TOTAL} />

      <Sidebar activeItem="Profile" />
      <TopBar />

      {/* Main content – Profile page (dimmed) behind the Config panel */}
      <div
        style={{
          position: "absolute",
          left: 200,
          top: 56,
          right: 0,
          bottom: 0,
          opacity: 0.4,
          overflow: "hidden",
        }}
      >
        {/* Banner */}
        <div
          style={{
            height: 120,
            background: "linear-gradient(135deg, #87CEEB, #00CED1, #40E0D0)",
          }}
        />
        <div style={{ padding: "50px 32px 0 32px" }}>
          <div style={{ color: "#fff", fontSize: 20, fontWeight: 700 }}>ELzipo 🎭</div>
          <div style={{ color: "#00d4aa", fontSize: 13, marginTop: 2 }}>@elzipodev</div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 20, marginTop: 24, borderBottom: "1px solid #1f2937", paddingBottom: 8 }}>
            {["About", "Courses", "Projects", "My Jobs"].map((tab) => (
              <span key={tab} style={{ color: tab === "About" ? "#fff" : "#6b7280", fontSize: 13, fontWeight: tab === "About" ? 600 : 400 }}>
                {tab}
              </span>
            ))}
          </div>

          <div style={{ marginTop: 16 }}>
            <div style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 14 }}>Personal Info</div>
            {["Email", "Gender", "Location", "Tech Role"].map((field) => (
              <div key={field} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #111520" }}>
                <span style={{ color: "#6b7280", fontSize: 13 }}>{field}</span>
              </div>
            ))}
            <div style={{ marginTop: 14 }}>
              <div style={{ color: "#6b7280", fontSize: 13, marginBottom: 8 }}>Tech Stack</div>
              <div style={{ display: "flex", gap: 6 }}>
                {["JS", "NEXT", "NEST", "FIREBASE", "POSTGRESS"].map((tag) => (
                  <span key={tag} style={{ background: "#1a1e2e", border: "1px solid #2d3748", color: "#6b7280", fontSize: 11, padding: "5px 12px", borderRadius: 6 }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ Configs Side Panel ═══ */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 340,
          height: "100%",
          background: "#0f1219",
          borderLeft: "1px solid #1a1e2e",
          padding: "20px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          zIndex: 20,
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ color: "#fff", fontSize: 18, fontWeight: 700 }}>Configs</div>
          <div
            style={{
              color: "#6b7280",
              fontSize: 18,
              cursor: "pointer",
              width: 28,
              height: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </div>
        </div>

        {/* Select AI Engine section */}
        <div
          style={{
            background: "#111520",
            borderRadius: 12,
            border: "1px solid #1a1e2e",
            padding: "18px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <div style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>Select AI Engine</div>

          {/* Dropdown */}
          <div
            style={{
              padding: "12px 14px",
              borderRadius: 8,
              border: "1px solid #2d3748",
              background: "#0B0D13",
              color: "#fff",
              fontSize: 14,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Gemma - Local (~2GB)</span>
            <span style={{ color: "#6b7280" }}>▾</span>
          </div>

          {/* Description card */}
          <div
            style={{
              background: "#0B0D13",
              borderRadius: 8,
              padding: "14px 16px",
              border: "1px solid #1a1e2e",
            }}
          >
            <div style={{ color: "#fff", fontSize: 14, fontWeight: 600, marginBottom: 4 }}>
              Gemma (Local)
            </div>
            <div style={{ color: "#6b7280", fontSize: 12, lineHeight: 1.4 }}>
              Download model (~2GB) directly to your browser storage.
            </div>
          </div>

          {/* Download button */}
          <div
            style={{
              padding: "12px 0",
              borderRadius: 8,
              background: "linear-gradient(90deg, rgba(0,212,170,0.15), rgba(0,180,216,0.15))",
              border: "1px solid rgba(0, 212, 170, 0.3)",
              color: "#00d4aa",
              fontSize: 14,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Download (~2GB)
          </div>
        </div>

        {/* Storage Destination section */}
        <div
          style={{
            background: "#111520",
            borderRadius: 12,
            border: "1px solid #1a1e2e",
            padding: "18px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <div style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>Storage Destination</div>

          {/* Notion Connected */}
          <div
            style={{
              background: "rgba(0, 212, 170, 0.08)",
              border: "1px solid rgba(0, 212, 170, 0.2)",
              borderRadius: 10,
              padding: "14px 16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>Notion Connected</div>
              <div style={{ color: "#6b7280", fontSize: 12, marginTop: 2 }}>
                Connected to: <span style={{ color: "#fff", fontWeight: 500 }}>elzipo</span>
              </div>
            </div>
            <div
              style={{
                background: "rgba(239, 68, 68, 0.15)",
                border: "1px solid rgba(239, 68, 68, 0.3)",
                borderRadius: 6,
                padding: "6px 14px",
                color: "#ef4444",
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              Disconnect
            </div>
          </div>
        </div>
      </div>

      {/* ═══ Annotations ═══ */}

      {/* Highlight "Configs" button area on profile */}
      <Sequence from={10} durationInFrames={25}>
        <Highlight x={740} y={0} width={340} height={50} startFrame={10} color="#00d4aa" />
        <Annotation x={910} y={52} label="Click 'Configs' on your profile" direction="bottom" startFrame={10} />
      </Sequence>

      {/* Highlight AI Engine dropdown */}
      <Sequence from={35} durationInFrames={30}>
        <Highlight x={764} y={130} width={290} height={42} startFrame={35} />
        <Annotation x={909} y={125} label="Select your AI Engine" direction="top" startFrame={35} />
      </Sequence>

      {/* Highlight Download button */}
      <Sequence from={65} durationInFrames={30}>
        <Highlight x={764} y={280} width={290} height={42} startFrame={65} />
        <Annotation x={909} y={275} label="Download the model" direction="top" startFrame={65} />
        <CursorClick x={909} y={301} startFrame={75} />
      </Sequence>

      {/* Highlight Notion Connection */}
      <Sequence from={95} durationInFrames={30}>
        <Highlight x={764} y={395} width={290} height={70} startFrame={95} />
        <Annotation x={909} y={390} label="Connect your Notion workspace" direction="top" startFrame={95} />
      </Sequence>

      <Sequence from={15}>
        <StepInfo
          title="Step 4: Configure your Settings"
          description="Click 'Configs' on your profile page. Select an AI engine, download the model, and connect your Notion workspace."
          startFrame={15}
        />
      </Sequence>

      {/* ═══ Sound Effects ═══ */}
      <Sequence from={0} durationInFrames={30}>
        <Audio src={whoosh} volume={0.5} />
      </Sequence>
      <Sequence from={35} durationInFrames={20}>
        <Audio src={uiSwitch} volume={0.4} />
      </Sequence>
      <Sequence from={75} durationInFrames={30}>
        <Audio src={mouseClick} volume={0.6} />
      </Sequence>
    </AbsoluteFill>
  );
};
