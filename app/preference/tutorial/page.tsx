import React from "react";
import Link from "next/link";

export default function Tutorial() {
  return (
    <main className="flex flex-col justify-center items-center px-6 py-12 md:py-6">
      <div className="max-w-lg flex flex-col justify-center items-center gap-6">
        <h1 className="text-2xl lg:text-3xl font-light text-gray-200 shadow text-center">Tutorial</h1>
        <ul className="text-gray-300 text-sm sm:text-base list-disc flex flex-col gap-2 list-inside">
          <li>
            First, <strong>8 sounds/triggers</strong> are <strong>randomly</strong> chosen.
          </li>
          <li>
            You will see <strong>2 of them</strong> at a time. Use the <strong>Play</strong> buttons to watch and listen to both ASMR triggers, then use one of the <strong>Pick this one</strong> buttons to choose which one you liked better.
          </li>
          <li>
            There is a total of <strong>3 rounds</strong> (7 decisions). Only triggers you pick continue to the next round, so the number of total triggers in the first round is 8, then 4, then 2 and after the third round we have a winner.
          </li>
          <li>
            It is recommended to use the <strong>Play</strong> button over the default YouTube player controls.
          </li>
        </ul>
        <div className="flex flex-wrap justify-center gap-2.5">
          <Link href="/preference" className="btn btn-secondary">
            Back to the test
          </Link>
        </div>
      </div>
    </main>
  );
}
