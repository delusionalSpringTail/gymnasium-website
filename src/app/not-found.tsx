import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ccff00]/5 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ccff00]/20 bg-[#ccff00]/5 px-4 py-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ccff00]">
            Error 404
          </span>
        </div>

        <h1 className="font-oswald text-6xl font-bold uppercase tracking-tight text-white sm:text-7xl md:text-8xl">
          Page not found
        </h1>

        <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved somewhere else.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b8e600] hover:shadow-[0_10px_30px_rgba(204,255,0,0.15)]"
          >

            Back to Library
          </Link>

          <Link
            href="/my-plan"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ccff00]/30 hover:bg-white/[0.06]"
          >
            My Plan

          </Link>
        </div>
      </div>
    </div>
  );
}