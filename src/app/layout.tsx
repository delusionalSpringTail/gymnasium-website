import type { Metadata } from "next";
import "./globals.css";
import { Inter, Oswald } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Fit Log - Home",
  description: "All the information your need about Gym, Workout and Health.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className={`${inter.variable} bg-slate-700 text-white min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
