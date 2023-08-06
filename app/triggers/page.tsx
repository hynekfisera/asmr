import triggers from "@/resources/triggers";
import Trigger from "./Trigger";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex flex-col px-6 py-12 md:py-6">
      <Link href="/" className="mt-12 mr-auto btn btn-secondary">
        Back to home
      </Link>
      <h1 className="my-4 text-2xl md:text-3xl font-light text-gray-200">Browse all triggers</h1>
      <section className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-12">
        {triggers
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((trigger) => (
            <Trigger key={trigger.id} trigger={trigger} />
          ))}
      </section>
    </main>
  );
}
