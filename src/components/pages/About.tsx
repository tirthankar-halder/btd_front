"use client";
import * as React from "react";
import { Header } from "./Header";
import { LogoSection } from "./LogoSection";
import { StoryMissionGrid } from "./StoryMissionGrid";
import { ValuesSection } from "./ValuesSection";

const About: React.FC = () => {
  return (
    <div className="overflow-y-auto overflow-x-hidden min-h-screen bg-zinc-950 text-stone-50">
      <main className="flex flex-col px-6 pt-32 pb-20 mx-auto my-0 max-w-screen-xl">
        <LogoSection />
        <StoryMissionGrid />
        <ValuesSection />
      </main>
    </div>
  );
};

export default About;
