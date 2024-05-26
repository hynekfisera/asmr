import tests from "@/resources/tests";
import React from "react";
import Preference from "./Preference";
import Guess from "./Guess";
import { redirect } from "next/navigation";
import triggers from "@/resources/triggers";

export const dynamicParams = false;

export async function generateStaticParams() {
  return tests.filter((test) => !test.disabled).map((test) => ({ test: test.id }));
}

export default async function Test({ params }: { params: { test: string } }) {
  const test = tests.find((t) => t.id === params.test);

  if (!test) {
    redirect("/404");
  }

  triggers.sort(() => Math.random() - 0.5);
  const triggersForGuessing = triggers.filter((t) => t.noTalking);

  switch (test.id) {
    case "preference":
      return <Preference initialTriggers={triggers.slice(0, 8)} />;
    case "guess":
      return (
        <Guess
          trigger={triggersForGuessing[0]}
          options={triggersForGuessing
            .filter((t, i) => !(i !== 0 && t.name === triggersForGuessing[0].name))
            .slice(0, 4)
            .sort(() => Math.random() - 0.5)}
        />
      );
    default:
      return <></>;
  }
}
