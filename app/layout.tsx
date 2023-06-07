import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Link from "next/link";
import GAWrapper from "./GAWrapper";

export const metadata: Metadata = {
  title: "Interactive ASMR Experience",
  description: 'Website inspired by "this or that" test from YouTube video by @TiptoeTingles and @GibiASMR. This website allows you to try this test out by yourself.',
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GAWrapper />
        <header className="absolute top-0 left-0 right-0 z-50 p-4 flex flex-row justify-center sm:justify-start">
          <Link href="/" className="text-xl font-semibold tracking-tighter text-gray-300 select-none">
            interactiveASMR
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
