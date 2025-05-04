import * as React from "react";

interface ValueCardProps {
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description }) => {
  return (
    <article>
      <h3 className="mb-4 text-2xl text-amber-300">{title}</h3>
      <p className="leading-normal text-zinc-400">{description}</p>
    </article>
  );
};

export const ValuesSection: React.FC = () => {
  const values = [
    {
      title: "Human‑Centered AI",
      description:
        "Our platforms are built around your workflow, not ours. We listen, iterate, and co‑create so that AI feels like an extension of your own creative spark.",
    },
    {
      title: "Relentless Innovation",
      description:
        "We're not satisfied with incremental improvements. Every line of code, every model we train, is driven by a desire to redefine what's possible.",
    },
    {
      title: "Integrity by Design",
      description:
        "Data privacy, transparent decision‑making, and fairness are baked into our architecture—no afterthoughts, no hidden black boxes.",
    },
  ];

  return (
    <section className="px-10 py-16 mb-20 text-center bg-gray-900 rounded-3xl border border-solid border-neutral-700">
      <h2 className="mb-10 text-4xl text-slate-300">Our Values</h2>
      <div className="grid gap-10 grid-cols-[repeat(3,1fr)] max-md:grid-cols-[1fr]">
        {values.map((value, index) => (
          <ValueCard
            key={index}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </section>
  );
};
