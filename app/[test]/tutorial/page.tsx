import React from "react";
import Link from "next/link";
import tests from "@/resources/tests";

export async function generateStaticParams() {
  return tests.filter((test) => !test.disabled).map((test) => ({ test: test.id }));
}

export default function Tutorial({ params }: { params: { test: string } }) {
  const test = tests.find((t) => t.id === params.test);

  if (!test) {
    throw new Error("Invalid test id");
  }

  return (
    <main className="flex flex-col justify-center items-center px-6 py-12 md:py-6">
      <div className="max-w-lg flex flex-col justify-center items-center gap-6">
        <h1 className="text-2xl lg:text-3xl font-light text-gray-200 text-center">Tutorial</h1>
        <ul className="text-gray-300 text-sm sm:text-base list-disc flex flex-col gap-2 list-inside">
          {test.tutorial?.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
        <div className="flex flex-wrap justify-center gap-2.5">
          <Link href={test.href} className="btn btn-purple-secondary">
            Back to the test
          </Link>
        </div>
      </div>
    </main>
  );
}
