import * as React from "react";

export const ImageSection: React.FC = () => {
  return (
    <section className="overflow-hidden relative px-6 py-20 mt-3.5 w-full border-t border-b border-solid bg-white bg-opacity-0 border-y-white border-y-opacity-10">
      <div className="relative mx-auto my-0 max-w-screen-lg z-[1]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F41f741e823cc4e94baf452a17e418b14%2F083f4b3c72d14562b0cd0a84675ff6a7"
          alt="How it works demonstration"
          className="object-cover overflow-hidden w-full h-auto rounded-2xl border border-solid transition-all aspect-[2.33] border-white border-opacity-10 duration-[0.3s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] shadow-[rgba(0,0,0,0.25)_0px_25px_50px_-12px,rgba(255,255,255,0.05)_0px_0px_0px_1px] max-md:rounded-xl"
        />
      </div>
      <div className="absolute inset-0 pointer-events-none" />
    </section>
  );
};
