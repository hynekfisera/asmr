import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Triggers - Interactive ASMR",
  description: 'Website inspired by "this or that" test from YouTube video by @TiptoeTingles and @GibiASMR. This website allows you to try this test out by yourself.',
};

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return <>{children}</>;
}
