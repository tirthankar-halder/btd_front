"use client";
import * as React from "react";
import { useState } from "react";
import { StepCard } from "./StepCard";
import { ImageSection } from "./ImageSection";

export const HowItWorks: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const steps = [
    {
      title: "1. Input Task",
      description:
        "Enter your complex task or project description. Our AI analyzes and understands the requirements.",
    },
    {
      title: "2. Smart Analysis",
      description:
        "Our system breaks down the task into logical steps and dependencies, creating a clear workflow.",
    },
    {
      title: "3. Track Progress",
      description:
        "Monitor completion of each step and adjust the breakdown as needed with real-time updates.",
    },
  ];

  return (
    <main className="overflow-x-hidden min-h-screen bg-zinc-950 text-stone-50">
      <header className="fixed w-full bg-gray-900 z-[100]" />
      <section className="px-6 pt-32 pb-20 mx-auto my-0 max-w-screen-lg text-center">
        <h1 className="mb-6 text-6xl tracking-tighter text-yellow-400 font-[538] leading-[61.6px]">
          How It Works
        </h1>
        <p className="mx-auto mt-0 mb-8 text-xl tracking-tight leading-7 font-[510] max-w-[800px] text-neutral-400">
          Break down complex tasks into manageable steps with our intelligent
          task analysis system
        </p>

        <div className="grid gap-8 mt-16 grid-cols-[repeat(3,1fr)] max-md:gap-6 max-md:grid-cols-[1fr]">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

      </section>

      <ImageSection />
    </main>
  );
};

export default HowItWorks;
