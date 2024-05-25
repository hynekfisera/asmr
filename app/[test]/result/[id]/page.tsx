import React from "react";
import _triggers from "@/resources/triggers";
import Link from "next/link";
import { getCreatorById } from "@/utils/creator.functions";
import Player from "./Player";
import tests from "@/resources/tests";

export const dynamicParams = false;

export async function generateStaticParams() {
  return _triggers.map((trigger) => ({ test: "preference", id: `${trigger.id}` }));
}

export default function Result({ params }: { params: { test: string; id: string } }) {
  const trigger = _triggers.find((t) => `${t.id}` === params.id);
  const test = tests.find((t) => t.id === params.test);

  if (!trigger) {
    throw new Error("Invalid trigger id");
  }
  if (!test) {
    throw new Error("Invalid test id");
  }

  return (
    <main className="flex flex-col justify-center items-center px-6 py-12 md:py-6">
      {trigger && (
        <div className="flex flex-col items-center w-full gap-8">
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl text-center text-gray-200 mb-1">We have a winner!</h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-purple-300 text-center">{trigger.name}</h2>
            <h3 className="text-sm sm:text-base md:text-lg text-gray-100 text-center">
              by{" "}
              <Link href={getCreatorById(trigger.creatorId)!.url} className="hover:underline">
                {getCreatorById(trigger.creatorId)!.name}
              </Link>
            </h3>
          </div>
          <Player trigger={trigger} />
          <div className="flex flex-wrap justify-center gap-2.5">
            <Link href={trigger.url} className="btn btn-purple" target="_blank" rel="noopener noreferrer">
              Watch the full video
            </Link>
            <Link href={test.href} className="btn btn-purple-secondary">
              Play again
            </Link>
          </div>
        </div>
      )}
      {!trigger && <h1 className="text-lg sm:text-xl md:text-2xl text-center text-gray-200">Invalid trigger id</h1>}
    </main>
  );
}
