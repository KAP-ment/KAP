import { ReactNode } from "react";

export default function AuthCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="w-full max-w-md mx-auto bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
        {title}
      </h2>
      {children}
    </div>
  );
}
