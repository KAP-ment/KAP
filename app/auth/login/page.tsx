"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import api from "@/lib/api";
import AuthCard from "@/components/auth/AuthCard";
import AnimatedWrapper from "@/components/auth/AnimatedWrapper";
import GoogleButton from "@/components/auth/GoogleButton";

export default function LoginPage() {
  const [form, setForm] = useState({ phone: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/auth/login", form);
      await login(res.data);
    } catch (err: any) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatedWrapper>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
        <AuthCard title="Welcome Back">
          <form onSubmit={handleLogin} className="flex flex-col gap-3">
            <input className="input" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
            <input className="input" type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
            <button type="submit" className="btn-primary">{loading ? "Signing in..." : "Login"}</button>
          </form>
          <div className="my-4 text-center text-sm text-gray-500">or</div>
          <GoogleButton onClick={() => window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`} />
        </AuthCard>
      </div>
    </AnimatedWrapper>
  );
}
