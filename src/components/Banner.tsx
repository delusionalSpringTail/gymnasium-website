"use client";

import Image from "next/image";
import bannerImg from "@/assets/banner.png";

export default function Banner() {
  return (
    <section className="w-full max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8 py-6">
      <div className="relative overflow-hidden rounded-2xl bg-[#12141a] border border-zinc-800/80 p-6 sm:p-10 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* left side */}
        <div className="flex-1 max-w-2xl z-10 text-left">
          {/* small text */}
          <span className="text-[#a3e635] text-xs sm:text-sm font-semibold tracking-wider uppercase">
            WORKOUT LIBRARY
          </span>

          {/* main text */}
          <h1 className="font-oswald font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none mt-3 mb-4">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          {/* details */}
          <p className="text-zinc-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mb-8">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* scroll to library */}
          <a href="#library">
            <button className="inline-flex items-center justify-center bg-[#a3e635] text-black font-oswald font-bold text-sm sm:text-base uppercase px-6 py-3 rounded-lg hover:bg-[#8ee011] transition-all duration-200 transform active:scale-95 shadow-md shadow-lime-950/20 cursor-pointer">
              BROWSE WORKOUTS
            </button>
          </a>
        </div>

        {/* right image */}
        <div className="relative w-full md:w-1/2 max-w-xs sm:max-w-sm md:max-w-md h-64 sm:h-80 md:h-96 flex items-center justify-center">
          <Image
            src={bannerImg}
            alt="Gym exercise machine illustration"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain object-center drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
