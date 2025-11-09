"use client";
import { useRef } from "react";

export default function OtpInput({ value, onChange }: { value: string[]; onChange: (val: string[]) => void }) {
  const inputs = Array.from({ length: 6 });
  const refs = useRef<HTMLInputElement[]>([]);

  const handleChange = (val: string, idx: number) => {
    const newVal = [...value];
    newVal[idx] = val;
    onChange(newVal);
    if (val && idx < 5) refs.current[idx + 1].focus();
  };

  return (
    <div className="flex justify-center gap-2 mt-4">
      {inputs.map((_, i) => (
        <input
          key={i}
          ref={(el) => (refs.current[i] = el!)}
          maxLength={1}
          value={value[i]}
          onChange={(e) => handleChange(e.target.value.replace(/\D/, ""), i)}
          className="w-10 h-10 text-center border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500"
        />
      ))}
    </div>
  );
}
