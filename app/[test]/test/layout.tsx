import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import tests from "@/resources/tests";

export const dynamic = "force-dynamic";

export const revalidate = 0;

export async function generateMetadata({ params }: { params: { test: string } }, parent: ResolvingMetadata): Promise<Metadata> {
  const testId = params.test;
  const test = tests.find((t) => t.id === testId);

  if (!test) {
    throw new Error("Invalid test id");
  }

  return {
    title: `Test | ${test.title} - Interactive ASMR`,
  };
}

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return <>{children}</>;
}
