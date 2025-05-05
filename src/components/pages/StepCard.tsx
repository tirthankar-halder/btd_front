import * as React from "react";

interface StepCardProps {
  title: string;
  description: string;
}

export const StepCard: React.FC<StepCardProps> = ({ title, description }) => {
  return (
    <article className="p-8 text-left rounded-2xl border border-solid bg-white bg-opacity-0 border-white border-opacity-10">
      <h3 className="mb-4 text-2xl font-[510] text-stone-50">{title}</h3>
      <p className="text-base leading-6 text-neutral-400">{description}</p>
    </article>
  );
};
