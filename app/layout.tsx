import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import GAWrapper from "./GAWrapper";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import type { Viewport } from "next";
import Header from "./Header";

export const viewport: Viewport = {
  themeColor: "black",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://asmr.hynekfisera.com"),
  title: "Interactive ASMR",
  description: 'Website inspired by "this or that" test from YouTube video by @TiptoeTingles and @GibiASMR. This website allows you to try this test out by yourself.',
};

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GAWrapper />
        <Header />
        {children}
      </body>
    </html>
  );
}
