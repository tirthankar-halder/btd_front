"use client";

import * as React from "react";

interface FormTextareaProps {
  label: string;
  className?: string;
  value: string;
  onChange: (value: string) => void;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  className = "",
  value,
  onChange,
}) => {
  return (
    <div>
      <label className="mb-2 text-sm text-slate-300 block">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`px-4 py-3 w-full text-base rounded-lg border border-solid resize-y bg-white bg-opacity-10 border-white border-opacity-10 min-h-[120px] text-slate-300 ${className}`}
      />
    </div>
  );
};
