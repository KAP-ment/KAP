"use client";
import { FcGoogle } from "react-icons/fc";

export default function GoogleButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-full gap-3 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition"
    >
      <FcGoogle className="text-xl" />
      <span className="text-gray-700 font-medium">Continue with Google</span>
    </button>
  );
}
