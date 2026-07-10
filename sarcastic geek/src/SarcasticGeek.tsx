import React from "react";
import { Series } from "remotion";
import { Intro } from "./scenes/Intro";
import { Step1Login } from "./scenes/Step1Login";
import { Step2Dashboard } from "./scenes/Step2Dashboard";
import { Step3Profile } from "./scenes/Step3Profile";
import { Step4Configure } from "./scenes/Step4Configure";
import { Step5ClaimCoin } from "./scenes/Step5ClaimCoin";
import { Outro } from "./scenes/Outro";

export const SarcasticGeek: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={70}>
        <Intro />
      </Series.Sequence>
      <Series.Sequence durationInFrames={150}>
        <Step1Login />
      </Series.Sequence>
      <Series.Sequence durationInFrames={120}>
        <Step2Dashboard />
      </Series.Sequence>
      <Series.Sequence durationInFrames={160}>
        <Step3Profile />
      </Series.Sequence>
      <Series.Sequence durationInFrames={150}>
        <Step4Configure />
      </Series.Sequence>
      <Series.Sequence durationInFrames={140}>
        <Step5ClaimCoin />
      </Series.Sequence>
      <Series.Sequence durationInFrames={100}>
        <Outro />
      </Series.Sequence>
    </Series>
  );
};
