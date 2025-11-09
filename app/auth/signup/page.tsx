"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import AuthCard from "@/components/auth/AuthCard";
import AnimatedWrapper from "@/components/auth/AnimatedWrapper";
import GoogleButton from "@/components/auth/GoogleButton";

export default function SignupPage() {
  const [form, setForm] = useState({ phone: "", password: "", username: "", nickname: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/auth/signup", form);
      router.push("/auth/verify-otp?phone=" + form.phone);
    } catch (err: any) {
      alert(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatedWrapper>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
        <AuthCard title="Create Account">
          <form onSubmit={handleSignup} className="flex flex-col gap-3">
            <input className="input" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
            <input className="input" placeholder="Username" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} required />
            <input className="input" placeholder="Nickname" value={form.nickname} onChange={(e) => setForm({ ...form, nickname: e.target.value })} />
            <input className="input" type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
            <button type="submit" className="btn-primary">{loading ? "Processing..." : "Sign Up"}</button>
          </form>
          <div className="my-4 text-center text-sm text-gray-500">or</div>
          <GoogleButton onClick={() => window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`} />
        </AuthCard>
      </div>
    </AnimatedWrapper>
  );
}
