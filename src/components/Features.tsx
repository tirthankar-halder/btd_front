export const Features = () => {
  return (
    <section className="px-6 py-20 mx-auto my-0 max-w-screen-xl bg-neutral-900">
      <h2 className="mb-16 text-5xl text-center">
        Simplify. Empower. Achieve.
      </h2>
      <div className="grid gap-8 mb-16 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
        <div className="p-8 bg-gray-900 rounded-lg border border-solid border-neutral-700">
          <h3 className="mb-4 text-2xl">
            ✅&nbsp; Enhanced Focus and Efficiency
          </h3>
          <p className="leading-normal text-zinc-400">
            Streamlined steps help professionals stay focused, minimize
            cognitive load, and execute tasks with greater precision.
          </p>
        </div>
        <div className="p-8 bg-gray-900 rounded-lg border border-solid border-neutral-700">
          <h3 className="mb-4 text-2xl">
            🔁&nbsp; Repeatable, Scalable Processes
          </h3>
          <p className="leading-normal text-zinc-400">
            Consistent, well-structured instructions enable easy
            replication—ideal for training, onboarding, and scaling workflows.
          </p>
        </div>
        <div className="p-8 bg-gray-900 rounded-lg border border-solid border-neutral-700">
          <h3 className="mb-4 text-2xl">🌈&nbsp; Inclusive Support</h3>
          <p className="leading-normal text-zinc-400">
            Designed for Neurodiverse Minds. By breaking down complex
            instructions into clear, manageable steps, the platform offers
            meaningful support for folks who benefit from structure—promoting
            confidence, reducing overwhelm, and encouraging independence.
          </p>
        </div>
      </div>
    </section>
  );
};
