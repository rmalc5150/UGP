'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push('/account');
  }

  return (
    <div className="max-w-md mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-2">Sign In</h1>
      <p className="text-gray-500 text-sm mb-8">Welcome back.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest mb-1">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-black"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest mb-1">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-black"
          />
        </div>
        <div className="flex justify-end">
          <Link href="#" className="text-xs text-gray-400 hover:text-black transition-colors">
            Forgot password?
          </Link>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-3 text-sm font-medium hover:bg-stone-800 transition-colors"
        >
          Sign In
        </button>
      </form>
      <p className="text-center text-sm text-gray-500 mt-6">
        Don&apos;t have an account?{' '}
        <Link href="/auth/sign-up" className="text-black font-medium hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
