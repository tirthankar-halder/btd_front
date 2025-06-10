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

  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }
    setStatus("Sending...");

    try {
      const response = await fetch("https://breakthemdown.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        setStatus(`Error: ${errorData.message || "Something went wrong"}`);
      }
    } catch (error: any) {
      setStatus(`Network error: ${error.message}`);
    }

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
          {status && (
              <p className="text-sm text-white mt-2">{status}</p>
          )}
        </form>
      </div>
  );
};
