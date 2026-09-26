'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logoImg from '@/assets/logo.png'; 

interface NavbarProps {
  planCount?: number;
  savedCount?: number;
}

export default function Navbar({ planCount = 10, savedCount = 0 }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check active routes
  const isWorkoutsActive = pathname === '/workouts' || pathname === '/';
  const isMyPlanActive = pathname === '/my-plan';

  return (
    <nav className="w-full bg-[#0a0a0c] text-white border-b border-zinc-800/60 px-4 sm:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-7 h-7 flex items-center justify-center">
            <Image
              src={logoImg}
              alt="FITLOG Logo"
              width={28}
              height={28}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-oswald font-bold text-xl tracking-wider text-white uppercase">
            FITLOG
          </span>
        </Link>

        {/* Desktop Center Nav Links */}
        <div className="hidden md:flex items-center p-1">
          <Link
            href="/workouts"
            className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              isWorkoutsActive
                ? 'bg-[#1e2e05] text-[#a3e635] shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              isMyPlanActive
                ? 'bg-[#1e2e05] text-[#a3e635] shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Desktop Right Action Badges */}
        <div className="hidden md:flex items-center gap-5 text-sm font-medium">
          {/* Plan Counter */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
          >
            <span>Plan</span>
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#a3e635] text-black font-semibold text-xs">
              {planCount}
            </span>
          </Link>

          {/* Saved Counter */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
          >
            <span>Saved</span>
            <span className="flex items-center justify-center w-6 h-6 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 font-semibold text-xs">
              {savedCount}
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-zinc-800 space-y-3 px-1 pb-2">
          <div className="flex flex-col gap-2">
            <Link
              href="/workouts"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full block px-4 py-2 rounded-lg text-sm font-medium ${
                isWorkoutsActive
                  ? 'bg-[#1e2e05] text-[#a3e635]'
                  : 'text-zinc-300 hover:bg-zinc-800/50'
              }`}
            >
              Workouts
            </Link>
            <Link
              href="/my-plan"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full block px-4 py-2 rounded-lg text-sm font-medium ${
                isMyPlanActive
                  ? 'bg-[#1e2e05] text-[#a3e635]'
                  : 'text-zinc-300 hover:bg-zinc-800/50'
              }`}
            >
              My Plan
            </Link>
          </div>

          <div className="flex items-center justify-around pt-2 border-t border-zinc-800/60">
            <Link
              href="/my-plan"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-zinc-300 hover:text-white text-sm"
            >
              <span>Plan</span>
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#a3e635] text-black font-bold text-xs">
                {planCount}
              </span>
            </Link>

            <Link
              href="/my-plan"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-zinc-300 hover:text-white text-sm"
            >
              <span>Saved</span>
              <span className="flex items-center justify-center w-5 h-5 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 font-bold text-xs">
                {savedCount}
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}