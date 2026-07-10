import React from "react";
import { Audio, Sequence } from "remotion";
import { LoginPage } from "./LoginPage";
import { Annotation, Highlight, StepCounter, CursorClick } from "../components/Annotation";
import { StepInfo } from "../components/StepInfo";
import { uiSwitch, mouseClick } from "@remotion/sfx";

const TOTAL = 4;

export const Step1Login: React.FC = () => {
  return (
    <>
      <StepCounter step={1} total={TOTAL} />

      <LoginPage
        email="chukwudebereferdinard@gmail.com"
        password="••••••••"
        showTyping
      />

      {/* Highlight email field */}
      <Sequence from={10} durationInFrames={40}>
        <Highlight x={90} y={310} width={500} height={48} startFrame={10} />
        <Annotation x={340} y={305} label="Type your email address" direction="top" startFrame={10} />
      </Sequence>

      {/* Highlight password field */}
      <Sequence from={50} durationInFrames={35}>
        <Highlight x={90} y={425} width={500} height={48} startFrame={50} />
        <Annotation x={340} y={420} label="Enter your password" direction="top" startFrame={50} />
      </Sequence>

      {/* Highlight Login button + cursor click */}
      <Sequence from={85} durationInFrames={45}>
        <Highlight x={90} y={545} width={250} height={44} startFrame={85} />
        <Annotation x={215} y={540} label="Click Login" direction="top" startFrame={85} />
        <CursorClick x={215} y={567} startFrame={95} />
      </Sequence>

      <Sequence from={10}>
        <StepInfo
          title="Step 1: Sign in to your account"
          description="Go to sarcasticgeeks.com/login — enter your email and password, then click the Login button."
          startFrame={10}
        />
      </Sequence>

      {/* ═══ Sound Effects ═══ */}
      <Sequence from={10} durationInFrames={30}>
        <Audio src={uiSwitch} volume={0.5} />
      </Sequence>
      <Sequence from={95} durationInFrames={30}>
        <Audio src={mouseClick} volume={0.6} />
      </Sequence>
    </>
  );
};
