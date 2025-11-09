'use client';

import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import OtpInput from "@/components/auth/OtpInput";
import AuthCard from "@/components/auth/AuthCard";
import api from "@/lib/api";

function VerifyOtpContent() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const params = useSearchParams();
  const phone = params.get("phone") || "";
  const router = useRouter();

  const verifyOtp = async () => {
    try {
      const code = otp.join("");
      const res = await api.post("/auth/verify-otp", { phone, otp: code });
      if (res.data.success) router.push("/auth/login");
    } catch (err: any) {
      alert(err.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <AuthCard title="Verify OTP">
        <p className="text-center text-gray-600 mb-2">OTP sent to {phone}</p>
        <OtpInput value={otp} onChange={setOtp} />
        <button onClick={verifyOtp} className="btn-primary w-full mt-6">
          Verify
        </button>
      </AuthCard>
    </div>
  );
}

export default function VerifyOtpPage() {
  return (
    <Suspense fallback={<div className="text-center mt-10 text-gray-600">Loading...</div>}>
      <VerifyOtpContent />
    </Suspense>
  );
}
