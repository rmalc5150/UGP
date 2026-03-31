'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push('/account');
  }

  return (
    <div className="max-w-md mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-2">Create Account</h1>
      <p className="text-gray-500 text-sm mb-8">
        Join UGP to track orders and save your favourites.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest mb-1">
              First name
            </label>
            <input
              required
              className="w-full border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-black"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest mb-1">
              Last name
            </label>
            <input
              required
              className="w-full border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-black"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest mb-1">
            Email
          </label>
          <input
            type="email"
            required
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
            className="w-full border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-black"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-3 text-sm font-medium hover:bg-stone-800 transition-colors"
        >
          Create Account
        </button>
      </form>
      <p className="text-center text-sm text-gray-500 mt-6">
        Already have an account?{' '}
        <Link href="/auth/sign-in" className="text-black font-medium hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
