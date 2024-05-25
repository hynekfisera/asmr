import tests from "@/resources/tests";
import React from "react";
import Preference from "./Preference";
import _triggers from "@/resources/triggers";

export async function generateStaticParams() {
  return tests.filter((test) => !test.disabled).map((test) => ({ test: test.id }));
}

export default function Test({ params }: { params: { test: string } }) {
  const test = tests.find((t) => t.id === params.test);

  if (!test) {
    throw new Error("Invalid test id");
  }

  if (test.id === "preference") {
    _triggers.sort(() => Math.random() - 0.5);
    return <Preference initialTriggers={_triggers.slice(0, 8)} />;
  } else {
    return <></>;
  }
}
