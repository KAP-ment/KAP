'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import api from '@/lib/api';
import AuthCard from '@/components/auth/AuthCard';
import AnimatedWrapper from '@/components/auth/AnimatedWrapper';

export default function SignupPage() {
  const [form, setForm] = useState({
    phone: '',
    password: '',
    username: '',
    nickname: '',
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/auth/signup', form);
      router.push('/auth/verify-otp?phone=' + form.phone);
    } catch (err: any) {
      alert(err.response?.data?.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  /** ---------- GOOGLE ONE-TAP ---------- **/
  useEffect(() => {
    window.google?.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      callback: handleGoogleResponse,
    });
    window.google?.accounts.id.renderButton(
      document.getElementById('google-signup-btn'),
      { theme: 'outline', size: 'large', width: 280 }
    );
  }, []);

  const handleGoogleResponse = async (response: any) => {
    try {
      const id_token = response.credential;
      const res = await api.post('/auth/google', { id_token });
      localStorage.setItem('kapment_token', res.data.tokens.access_token);
      localStorage.setItem('kapment_refresh', res.data.tokens.refresh_token);
      localStorage.setItem('kapment_user', JSON.stringify(res.data.user_id));
      router.push('/dashboard');
    } catch (err: any) {
      alert(err.response?.data?.detail || 'Google signup failed');
    }
  };
  /** ------------------------------------ **/

  return (
    <AnimatedWrapper>
      <Script src="https://accounts.google.com/gsi/client" async defer />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
        <AuthCard title="Create Account">
          <form onSubmit={handleSignup} className="flex flex-col gap-3">
            <input
              className="input"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />
            <input
              className="input"
              placeholder="Username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
            />
            <input
              className="input"
              placeholder="Nickname"
              value={form.nickname}
              onChange={(e) => setForm({ ...form, nickname: e.target.value })}
            />
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
            <button type="submit" className="btn-primary">
              {loading ? 'Processing...' : 'Sign Up'}
            </button>
          </form>

          <div className="my-4 text-center text-sm text-gray-500">or</div>

          {/* ✅ This div will render the Google button */}
          <div id="google-signup-btn" />
        </AuthCard>
      </div>
    </AnimatedWrapper>
  );
}
