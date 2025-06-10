import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer
      className="flex flex-col px-6 py-10 bg-gray-900 border-t border-solid border-t-neutral-700 text-zinc-400"
      role="contentinfo"
    >
      <div className="flex gap-12 justify-center items-center p-6 mx-auto my-0 max-w-screen-xl">
        <a
          className="text-sm no-underline cursor-pointer pointer-events-auto duration-[0.2s] font-[510] text-neutral-400 transition-[color]"
          href="/about"
        >
          About
        </a>
        <a
          className="text-sm no-underline cursor-pointer pointer-events-auto duration-[0.2s] font-[510] text-neutral-400 transition-[color]"
          href="/contact"
        >
          Contact Us
        </a>
      </div>
      <img
        alt="DYAZ Logo"
        src="https://cdn.builder.io/api/v1/image/assets%2F41f741e823cc4e94baf452a17e418b14%2F9c77971f08cf453f9736f93efdbccd88"
        className="object-cover overflow-hidden mx-auto h-auto opacity-90 transition-opacity aspect-[3.14] duration-[0.2s] ease-[ease] w-[120px] max-sm:w-20"
      />
    </footer>
  );
};
