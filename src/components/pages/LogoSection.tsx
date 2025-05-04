import * as React from "react";

export const LogoSection: React.FC = () => {
  return (
    <section className="text-center">
      <img
        alt="DYAZ Logo"
        src="https://cdn.builder.io/api/v1/image/assets%2F41f741e823cc4e94baf452a17e418b14%2F9c77971f08cf453f9736f93efdbccd88"
        className="object-cover overflow-hidden mx-auto mb-6 w-full aspect-square h-[120px] max-w-[388px]"
      />
      <div className="mb-20">
        <p className="mx-auto my-0 text-2xl leading-normal max-w-[800px] text-zinc-400">
          At DYAZ, we believe the future of technology lies at the intersection
          of human ingenuity and autonomous intelligence.&nbsp;
        </p>
      </div>
    </section>
  );
};
