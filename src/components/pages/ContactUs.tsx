"use client";

import * as React from "react";
import { ContactHeader } from "./ContactHeader";
import { ContactForm } from "./ContactForm";

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-slate-300">
      <header className="fixed w-full bg-gray-900 border-b border-solid border-b-neutral-700 z-[100]" />
      <main className="pt-16">
        <section className="px-6 pt-32 pb-20 mx-auto my-0 max-w-screen-xl">
          <div className="flex flex-col gap-16 grid-cols-[1fr_1fr] max-md:gap-12 max-md:grid-cols-[1fr]">
            <div className="mx-auto">
              <ContactHeader />
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;
