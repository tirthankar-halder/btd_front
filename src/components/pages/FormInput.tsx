"use client";

import * as React from "react";

interface FormInputProps {
  label: string;
  type?: string;
  className?: string;
  value: string;
  onChange: (value: string) => void;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  type = "text",
  className = "",
  value,
  onChange,
}) => {
  return (
    <div>
      <label className="mb-2 text-sm text-slate-300 block">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`px-4 py-3 w-full text-base rounded-lg border border-solid bg-white bg-opacity-10 border-white border-opacity-10 text-slate-300 ${className}`}
      />
    </div>
  );
};
