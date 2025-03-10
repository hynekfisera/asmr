import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import tests from "@/resources/tests";

export async function generateMetadata(props: { params: Promise<{ test: string }> }, parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params;
  const testId = params.test;
  const test = tests.find((t) => t.id === testId);

  if (!test) {
    throw new Error("Invalid test id");
  }

  return {
    title: `Result | ${test.title} - Interactive ASMR`,
  };
}

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return <>{children}</>;
}
