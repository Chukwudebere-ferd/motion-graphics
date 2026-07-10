import React from "react";
import { AbsoluteFill, Audio, Sequence } from "remotion";
import { Annotation, Highlight, StepCounter, CursorClick } from "../components/Annotation";
import { StepInfo } from "../components/StepInfo";
import { Sidebar, TopBar } from "../components/Layout";
import { pageTurn, uiSwitch } from "@remotion/sfx";

const TOTAL = 4;

const labelStyle: React.CSSProperties = {
  color: "#00d4aa", fontSize: 12, fontWeight: 500, marginBottom: 6, display: "block",
};

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "12px 14px", borderRadius: 8,
  border: "1px solid #1f2937", background: "#111520", color: "#fff",
  fontSize: 14, outline: "none", boxSizing: "border-box",
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  appearance: "none" as const,
};

export const Step3Profile: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: "#0B0D13", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <StepCounter step={3} total={TOTAL} />

      <Sidebar activeItem="Profile" />
      <TopBar />

      {/* Main content */}
      <div
        style={{
          position: "absolute",
          left: 200,
          top: 56,
          right: 0,
          bottom: 0,
          padding: 0,
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

        {/* Profile pic */}
        <div
          style={{
            position: "absolute",
            top: 75,
            left: 32,
            width: 80,
            height: 80,
            borderRadius: "50%",
            border: "3px solid #0B0D13",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 32,
            zIndex: 5,
          }}
        >
          🤓
        </div>

        {/* Name + Username section */}
        <div style={{ padding: "50px 32px 0 32px" }}>
          <div style={{ color: "#fff", fontSize: 20, fontWeight: 700 }}>ELzipo 🎭</div>
          <div style={{ color: "#00d4aa", fontSize: 13, marginTop: 2 }}>@elzipodev</div>

          {/* Edit fields */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 20 }}>
            <div>
              <label style={labelStyle}>Full Name</label>
              <div style={inputStyle}>ELzipo</div>
            </div>
            <div>
              <label style={labelStyle}>Username</label>
              <div style={inputStyle}>elzipodev</div>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 20, marginTop: 24, borderBottom: "1px solid #1f2937", paddingBottom: 8 }}>
            {["About", "Courses", "Projects", "My Jobs"].map((tab) => (
              <span key={tab} style={{ color: tab === "About" ? "#fff" : "#6b7280", fontSize: 13, fontWeight: tab === "About" ? 600 : 400, borderBottom: tab === "About" ? "2px solid #3b82f6" : "none", paddingBottom: 6 }}>
                {tab}
              </span>
            ))}
          </div>

          {/* Personal Info */}
          <div style={{ marginTop: 16 }}>
            <div style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 14 }}>Personal Info</div>

            {/* Email */}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #111520" }}>
              <span style={{ color: "#00d4aa", fontSize: 13 }}>Email</span>
              <span style={{ color: "#fff", fontSize: 13 }}>chukwudebereferdinard@gmail.com</span>
            </div>

            {/* Gender */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #111520" }}>
              <span style={{ color: "#00d4aa", fontSize: 13 }}>Gender</span>
              <div style={{ ...selectStyle, width: "auto", minWidth: 160, padding: "8px 12px", fontSize: 13 }}>Male ▾</div>
            </div>

            {/* Location */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #111520" }}>
              <span style={{ color: "#00d4aa", fontSize: 13 }}>Location</span>
              <div style={{ ...inputStyle, width: "auto", minWidth: 160, padding: "8px 12px", fontSize: 13 }}>Ihiala</div>
            </div>

            {/* Tech Role */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #111520" }}>
              <span style={{ color: "#00d4aa", fontSize: 13 }}>Tech Role</span>
              <div style={{ ...selectStyle, width: "auto", minWidth: 200, padding: "8px 12px", fontSize: 13 }}>Software Developer ▾</div>
            </div>

            {/* Tech Stack */}
            <div style={{ marginTop: 14 }}>
              <div style={{ color: "#00d4aa", fontSize: 13, marginBottom: 8 }}>Tech Stack</div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {["JS", "NEXT", "NEST", "FIREBASE", "POSTGRESS"].map((tag) => (
                  <span key={tag} style={{ background: "#1a1e2e", border: "1px solid #2d3748", color: "#d1d5db", fontSize: 11, padding: "5px 12px", borderRadius: 6, fontWeight: 500 }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations: Highlight fields */}
      <Sequence from={15} durationInFrames={25}>
        <Highlight x={232} y={226} width={640} height={42} startFrame={15} />
        <Annotation x={552} y={221} label="Enter your full name" direction="top" startFrame={15} />
      </Sequence>

      <Sequence from={40} durationInFrames={25}>
        <Highlight x={232} y={282} width={640} height={42} startFrame={40} />
        <Annotation x={552} y={277} label="Choose a username" direction="top" startFrame={40} />
      </Sequence>

      <Sequence from={65} durationInFrames={25}>
        <Highlight x={636} y={448} width={232} height={36} startFrame={65} />
        <Annotation x={752} y={443} label="Set your location" direction="top" startFrame={65} />
      </Sequence>

      <Sequence from={90} durationInFrames={25}>
        <Highlight x={636} y={492} width={232} height={36} startFrame={90} />
        <Annotation x={752} y={487} label="Select tech role" direction="top" startFrame={90} />
      </Sequence>

      <Sequence from={115} durationInFrames={25}>
        <Highlight x={232} y={550} width={420} height={34} startFrame={115} />
        <Annotation x={442} y={545} label="Add your tech stack" direction="top" startFrame={115} />
      </Sequence>

      <Sequence from={15}>
        <StepInfo
          title="Step 3: Set up your Profile"
          description="Click 'Edit Profile' on your profile page. Fill in your name, username, location, tech role, and skills."
          startFrame={15}
        />
      </Sequence>

      {/* ═══ Sound Effects ═══ */}
      <Sequence from={0} durationInFrames={30}>
        <Audio src={pageTurn} volume={0.5} />
      </Sequence>
      <Sequence from={15} durationInFrames={20}>
        <Audio src={uiSwitch} volume={0.4} />
      </Sequence>
      <Sequence from={40} durationInFrames={20}>
        <Audio src={uiSwitch} volume={0.4} />
      </Sequence>
      <Sequence from={65} durationInFrames={20}>
        <Audio src={uiSwitch} volume={0.4} />
      </Sequence>
      <Sequence from={90} durationInFrames={20}>
        <Audio src={uiSwitch} volume={0.4} />
      </Sequence>
    </AbsoluteFill>
  );
};
