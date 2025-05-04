import * as React from "react";

interface InfoCardProps {
    title: string;
    description: string;
    variant?: 'default' | 'alternate';
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, variant = 'default' }) => {
    const cardStyles = variant === 'default'
        ? "p-10 border border-solid backdrop-blur-lg bg-stone-950 border-white border-opacity-10 rounded-[30px]"
        : "p-10 bg-gray-900 rounded-3xl border border-solid border-neutral-700";

    return (
        <article className={cardStyles}>
            <h2 className="mb-6 text-3xl text-slate-300">{title}</h2>
            <div className="text-lg leading-relaxed text-zinc-400">
                <p>{description}</p>
            </div>
        </article>
    );
};

export const StoryMissionGrid: React.FC = () => {
    return (
        <section className="grid gap-10 mb-20 grid-cols-[repeat(2,1fr)] max-md:grid-cols-[1fr]">
            <InfoCard
                title="Our Story"
                description="Founded by a team of AI researchers, software architects, and creative futurists, DYAZ was born from a shared passion: to build systems that don't just execute code, but learn, adapt, and evolve alongside the people who use them."
                variant="alternate"
            />
            <InfoCard
                title="Our Mission"
                description="To pioneer self‑evolving AI platforms that seamlessly amplify human creativity, drive sustainable innovation, and unlock limitless possibilities in a hyper‑connected world."
                variant="alternate"
            />
        </section>
    );
};