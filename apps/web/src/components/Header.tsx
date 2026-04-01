'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from '@/components/Logo';
import Untitled from '@/components/Untitled';
import Garment from '@/components/Garment';
import Project from '@/components/Project';
import Radio from '@/components/Radio';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-black flex items-center justify-between h-12 px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Logo className="h-4 w-auto dark:invert" />
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/search" className="text-gray-400 hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </Link>
          <Link href="/account" className="text-gray-400 hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </Link>
          <Link href="/cart" className="relative text-gray-400 hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </Link>
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Hero banner */}
      <Link href="/">
        <div className="relative overflow-hidden">
          <Radio fill className="object-cover" />
          <div className="relative z-10 md:flex justify-center items-center py-8 px-4 gap-4">
            <Untitled className="h-12 w-auto" />
            <Garment className="h-12 w-auto" />
            <Project className="h-12 w-auto" />
          </div>
        </div>
      </Link>

      {/* Nav links */}
      <nav className="bg-black flex justify-center">
        {[
          { label: 'We', href: '/products' },
          { label: 'Measure', href: '/products' },
          { label: 'Create', href: '/products' },
          { label: 'Sustain', href: '/products' },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="px-8 py-2 text-sm text-gray-300 hover:text-white transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-4 py-4 flex flex-col gap-4">
          {[
            { label: 'Create', href: '/create' },
            { label: 'Measure', href: '/measure' },
            { label: 'We', href: '/how' },
            { label: 'You', href: '/account' },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
