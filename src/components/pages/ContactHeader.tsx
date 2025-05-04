import * as React from "react";

export const ContactHeader: React.FC = () => {
  return (
    <div className="mx-auto">
      <h1 className="mb-6 text-6xl font-bold">Get in touch</h1>
      <p className="mb-12 text-xl leading-relaxed text-zinc-400">
        Have questions? We're here to help. Send us a message and we'll respond
        as soon as possible.
      </p>
    </div>
  );
};
