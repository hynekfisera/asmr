import tests from "@/resources/tests";
import React from "react";
import Preference from "./Preference";
import Guess from "./Guess";
import { redirect } from "next/navigation";
import triggers from "@/resources/triggers";

export const dynamic = "force-dynamic";

export default async function Test({ params }: { params: { test: string } }) {
  const test = tests.find((t) => t.id === params.test);

  if (!test) {
    redirect("/404");
  }

  triggers.sort(() => Math.random() - 0.5);

  switch (test.id) {
    case "preference":
      return <Preference initialTriggers={triggers.slice(0, 8)} />;
    case "guess":
      return <Guess trigger={triggers[0]} options={triggers.slice(0, 4).sort(() => Math.random() - 0.5)} />;
    default:
      return <></>;
  }
}
