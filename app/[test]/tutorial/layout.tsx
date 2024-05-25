import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tutorial | This or that - Interactive ASMR",
};

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return <>{children}</>;
}
