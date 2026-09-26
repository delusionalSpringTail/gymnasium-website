import Image from 'next/image';
import Link from 'next/link';
import logoImg from '@/assets/logo.png';

export default function Footer() {

  return (
    <footer className="w-full bg-[#0a0a0c] text-zinc-500 border-t border-zinc-800/60 px-4 sm:px-8 py-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        

        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-6 h-6 flex items-center justify-center">
            <Image
              src={logoImg}
              alt="FITLOG Logo"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <span className="font-oswald font-bold text-lg tracking-wider text-white uppercase">
            FITLOG
          </span>
        </Link>

        <p className="text-xs sm:text-sm text-zinc-400 text-center sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}