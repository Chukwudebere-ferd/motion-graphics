import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { PublicNavbar } from "../components/Layout";

interface LoginPageProps {
  email?: string;
  password?: string;
  showTyping?: boolean;
}

export const LoginPage: React.FC<LoginPageProps> = ({
  email = "",
  password = "••••••••",
  showTyping = false,
}) => {
  const frame = useCurrentFrame();

  // Typing animation for email
  const emailChars = showTyping
    ? Math.min(email.length, Math.floor(frame / 2))
    : email.length;
  const displayEmail = email.substring(0, emailChars);

  return (
    <AbsoluteFill
      style={{
        background: "#0B0D13",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
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

      {/* Floating shapes */}
      <div
        style={{
          position: "absolute",
          top: 120,
          left: 80,
          width: 50,
          height: 50,
          borderRadius: 10,
          border: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.02)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 200,
          right: 120,
          width: 40,
          height: 40,
          borderRadius: 8,
          border: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.02)",
        }}
      />

      <PublicNavbar />

      {/* Login card container */}
      <div
        style={{
          position: "absolute",
          top: 80,
          left: 30,
          right: 30,
          bottom: 30,
          background: "rgba(17, 21, 32, 0.6)",
          border: "1px solid rgba(0, 212, 170, 0.15)",
          borderRadius: 16,
          display: "flex",
          flexDirection: "column",
          padding: "50px 60px",
          gap: 20,
        }}
      >
        {/* Corner brackets */}
        <div style={{ position: "absolute", top: -2, left: -2, width: 20, height: 20, borderTop: "2px solid #00d4aa", borderLeft: "2px solid #00d4aa", borderRadius: "4px 0 0 0" }} />
        <div style={{ position: "absolute", top: -2, right: -2, width: 20, height: 20, borderTop: "2px solid #00d4aa", borderRight: "2px solid #00d4aa", borderRadius: "0 4px 0 0" }} />

        <h1
          style={{
            color: "#ffffff",
            fontSize: 28,
            fontWeight: 700,
            margin: 0,
          }}
        >
          Login to the Trybe
        </h1>

        <p style={{ color: "#6b7280", fontSize: 14, margin: 0 }}>
          Don't have an Account?{" "}
          <span style={{ color: "#00d4aa", fontWeight: 500 }}>Register Now</span>
        </p>

        {/* Email field */}
        <div style={{ marginTop: 8 }}>
          <label style={{ color: "#9ca3af", fontSize: 13, fontWeight: 500, display: "block", marginBottom: 8 }}>
            Email:
          </label>
          <div
            style={{
              width: "70%",
              padding: "14px 16px",
              borderRadius: 8,
              border: "1px solid #1f2937",
              background: "#111520",
              color: displayEmail ? "#ffffff" : "#4b5563",
              fontSize: 14,
              minHeight: 20,
            }}
          >
            {displayEmail || "eg. johndoe@email.com"}
          </div>
        </div>

        {/* Password field */}
        <div>
          <label style={{ color: "#9ca3af", fontSize: 13, fontWeight: 500, display: "block", marginBottom: 8 }}>
            Password:
          </label>
          <div
            style={{
              width: "70%",
              padding: "14px 16px",
              borderRadius: 8,
              border: "1px solid #1f2937",
              background: "#111520",
              color: "#ffffff",
              fontSize: 14,
              letterSpacing: 2,
            }}
          >
            {password}
          </div>
        </div>

        {/* Forgot password */}
        <div style={{ color: "#00d4aa", fontSize: 13, textAlign: "right", width: "70%", marginTop: -8 }}>
          Forgot Password
        </div>

        {/* Login button */}
        <div
          style={{
            width: "35%",
            padding: "12px 0",
            borderRadius: 8,
            background: "linear-gradient(90deg, rgba(0,212,170,0.15), rgba(0,180,216,0.15))",
            border: "1px solid rgba(0, 212, 170, 0.3)",
            color: "#00d4aa",
            fontSize: 15,
            fontWeight: 600,
            textAlign: "center",
            marginTop: 4,
          }}
        >
          Login
        </div>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, width: "70%", marginTop: 4 }}>
          <div style={{ flex: 1, height: 1, background: "#1f2937" }} />
          <span style={{ color: "#4b5563", fontSize: 12 }}>or</span>
          <div style={{ flex: 1, height: 1, background: "#1f2937" }} />
        </div>

        {/* Google button */}
        <div
          style={{
            width: "70%",
            padding: "12px 0",
            borderRadius: 8,
            border: "1px solid #1f2937",
            background: "#ffffff",
            color: "#111520",
            fontSize: 14,
            fontWeight: 500,
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 16 }}>🔵</span>
          Continue with Google
        </div>
      </div>
    </AbsoluteFill>
  );
};
