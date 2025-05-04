"use client";

import * as React from "react";
import { useState } from "react";
import { FormInput } from "./FormInput";
import { FormTextarea } from "./FormTextarea";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="p-12 rounded-2xl border border-solid bg-white bg-opacity-0 border-white border-opacity-10 max-sm:p-6">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          value={formData.name}
          onChange={(value) =>
            setFormData((prev) => ({ ...prev, name: value }))
          }
        />
        <FormInput
          label="Email"
          type="email"
          value={formData.email}
          onChange={(value) =>
            setFormData((prev) => ({ ...prev, email: value }))
          }
        />
        <FormTextarea
          label="Message"
          value={formData.message}
          onChange={(value) =>
            setFormData((prev) => ({ ...prev, message: value }))
          }
        />
        <button
          type="submit"
          className="px-8 py-4 text-base font-medium text-black bg-amber-300 rounded-lg transition-all cursor-pointer border-none duration-200 hover:bg-amber-400"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
