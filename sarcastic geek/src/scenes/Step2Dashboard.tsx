import React from "react";
import { AbsoluteFill, Audio, Sequence } from "remotion";
import { Annotation, Highlight, StepCounter, CursorClick } from "../components/Annotation";
import { StepInfo } from "../components/StepInfo";
import { Sidebar, TopBar } from "../components/Layout";
import { pageTurn, mouseClick } from "@remotion/sfx";

const TOTAL = 4;

const dashCard: React.CSSProperties = {
  background: "#111520",
  borderRadius: 12,
  border: "1px solid #1a1e2e",
  padding: "18px 20px",
  display: "flex",
  flexDirection: "column",
  gap: 8,
  flex: 1,
};

export const Step2Dashboard: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "#0B0D13",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <StepCounter step={2} total={TOTAL} />

      <Sidebar activeItem="Dashboard" />
      <TopBar />

      {/* Main content area */}
      <div
        style={{
          position: "absolute",
          left: 200,
          top: 56,
          right: 0,
          bottom: 0,
          padding: "24px 28px",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          overflow: "hidden",
        }}
      >
        {/* Rank & Group bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 24,
            fontSize: 12,
          }}
        >
          <div>
            <span style={{ color: "#6b7280" }}>Rank</span>
            <div style={{ color: "#fff", fontWeight: 600, fontSize: 13 }}>Software Developer</div>
          </div>
          <div>
            <span style={{ color: "#6b7280" }}>Group</span>
            <div style={{ color: "#22c55e", fontWeight: 600, fontSize: 13 }}>● activated</div>
          </div>
        </div>

        {/* Section title */}
        <div style={{ color: "#fff", fontSize: 18, fontWeight: 700 }}>
          All Activity Balances
          <div style={{ width: 40, height: 3, background: "#3b82f6", borderRadius: 2, marginTop: 6 }} />
        </div>

        {/* Balance cards row 1 */}
        <div style={{ display: "flex", gap: 14 }}>
          <div style={dashCard}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "#1a1e2e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>📈</div>
              <div>
                <div style={{ color: "#6b7280", fontSize: 11 }}>Total Balance</div>
                <div style={{ color: "#fff", fontSize: 22, fontWeight: 700 }}>459.00 🐚</div>
              </div>
            </div>
            <div style={{ color: "#6b7280", fontSize: 11, marginTop: 4 }}>All accounts combined</div>
            <div style={{ height: 3, background: "#3b82f6", borderRadius: 2, marginTop: 2 }} />
          </div>

          <div style={dashCard}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "#1a1e2e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🎯</div>
              <div>
                <div style={{ color: "#6b7280", fontSize: 11 }}>Hangman</div>
                <div style={{ color: "#00d4aa", fontSize: 22, fontWeight: 700 }}>6.00</div>
              </div>
            </div>
            <div style={{ color: "#6b7280", fontSize: 11, marginTop: 4 }}>1.3% of total</div>
            <div style={{ height: 3, background: "#1a1e2e", borderRadius: 2, marginTop: 2 }}>
              <div style={{ width: "1.3%", height: "100%", background: "#3b82f6", borderRadius: 2 }} />
            </div>
          </div>

          <div style={dashCard}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "#1a1e2e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🐍</div>
              <div>
                <div style={{ color: "#6b7280", fontSize: 11 }}>Snake</div>
                <div style={{ color: "#00d4aa", fontSize: 22, fontWeight: 700 }}>63.00</div>
              </div>
            </div>
            <div style={{ color: "#6b7280", fontSize: 11, marginTop: 4 }}>13.7% of total</div>
            <div style={{ height: 3, background: "#1a1e2e", borderRadius: 2, marginTop: 2 }}>
              <div style={{ width: "13.7%", height: "100%", background: "#3b82f6", borderRadius: 2 }} />
            </div>
          </div>
        </div>

        {/* Balance cards row 2 */}
        <div style={{ display: "flex", gap: 14 }}>
          <div style={dashCard}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "#1a1e2e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>⊕</div>
              <div>
                <div style={{ color: "#6b7280", fontSize: 11 }}>Obstacle</div>
                <div style={{ color: "#00d4aa", fontSize: 22, fontWeight: 700 }}>90.00</div>
              </div>
            </div>
            <div style={{ color: "#6b7280", fontSize: 11, marginTop: 4 }}>19.6% of total</div>
            <div style={{ height: 3, background: "#1a1e2e", borderRadius: 2, marginTop: 2 }}>
              <div style={{ width: "19.6%", height: "100%", background: "#3b82f6", borderRadius: 2 }} />
            </div>
          </div>

          <div style={dashCard}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "#1a1e2e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>📋</div>
              <div>
                <div style={{ color: "#6b7280", fontSize: 11 }}>Airdrop</div>
                <div style={{ color: "#00d4aa", fontSize: 22, fontWeight: 700 }}>300.00</div>
              </div>
            </div>
            <div style={{ color: "#6b7280", fontSize: 11, marginTop: 4 }}>65.4% of total</div>
            <div style={{ height: 3, background: "#1a1e2e", borderRadius: 2, marginTop: 2 }}>
              <div style={{ width: "65.4%", height: "100%", background: "#3b82f6", borderRadius: 2 }} />
            </div>
          </div>

          <div style={{ ...dashCard, opacity: 0 }} /> {/* spacer */}
        </div>

        {/* Quick Actions / Account Summary row */}
        <div style={{ display: "flex", gap: 14 }}>
          <div style={{ ...dashCard, flex: 1.2 }}>
            <div style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>Quick Actions</div>
            <div style={{ width: 40, height: 3, background: "#3b82f6", borderRadius: 2, marginTop: 2 }} />
          </div>
          <div style={{ ...dashCard, flex: 1 }}>
            <div style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>Account Summary</div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
              <span style={{ color: "#6b7280", fontSize: 12 }}>Email</span>
              <span style={{ color: "#fff", fontSize: 12 }}>chukwudebereferdinard@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated highlights on sidebar navigation items */}
      <Sequence from={15} durationInFrames={30}>
        <Highlight x={12} y={370} width={176} height={36} startFrame={15} />
        <Annotation x={100} y={365} label="Go to Profile" direction="top" startFrame={15} />
        <CursorClick x={100} y={388} startFrame={25} />
      </Sequence>

      <Sequence from={50} durationInFrames={30}>
        <Highlight x={12} y={276} width={176} height={36} startFrame={50} />
        <Annotation x={100} y={271} label="Explore Hello World" direction="top" startFrame={50} />
      </Sequence>

      <Sequence from={15}>
        <StepInfo
          title="Step 2: Explore your Dashboard"
          description="After login you'll see your activity balances, quick actions, and account summary. Use the sidebar to navigate."
          startFrame={15}
        />
      </Sequence>

      {/* ═══ Sound Effects ═══ */}
      <Sequence from={0} durationInFrames={30}>
        <Audio src={pageTurn} volume={0.5} />
      </Sequence>
      <Sequence from={25} durationInFrames={30}>
        <Audio src={mouseClick} volume={0.6} />
      </Sequence>
    </AbsoluteFill>
  );
};
