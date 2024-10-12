import tests from "@/resources/tests";
import React from "react";
import Preference from "./Preference";
import Guess from "./Guess";
import { redirect } from "next/navigation";
import _triggers from "@/resources/triggers";
import { Trigger } from "@/types/Trigger";

export const dynamic = "force-dynamic";

export const revalidate = 0;

/* export const dynamicParams = false;

export async function generateStaticParams() {
  return tests.filter((test) => !test.disabled).map((test) => ({ test: test.id }));
} */

const randomizeTriggers = () => {
  return _triggers.sort(() => Math.random() - 0.5);
};

export default async function Test({ params }: { params: { test: string } }) {
  const test = tests.find((t) => t.id === params.test);

  if (!test) {
    redirect("/404");
  }

  const triggers = randomizeTriggers();

  switch (test.id) {
    case "preference":
      const triggersForPreference = triggers.slice(0, 8);
      return <Preference initialTriggers={triggersForPreference} />;
    case "guess":
      const triggersForGuessing = triggers.filter((t) => t.noTalking);
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
