import Link from "next/link";

type Item = {
  title: string;
  href: string;
  description: string;
  openInNewTab?: boolean;
  disabled?: boolean;
};

const items: Item[] = [
  {
    title: "This or that",
    href: "/preference",
    description: "~10 minutes",
    openInNewTab: false,
  },
  {
    title: "Guess the trigger",
    href: "/guess",
    description: "Coming soon",
    disabled: true,
  },
  {
    title: "Match the sound",
    href: "/match",
    description: "Coming soon",
    disabled: true,
  },
  {
    title: "Triggers",
    href: "/triggers",
    description: "Browse all triggers",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col px-6 py-12 md:py-6">
      <h1 className="mt-12 text-2xl md:text-3xl font-light text-gray-200 text-center sm:text-left">Interactive ASMR experience</h1>
      <div className="mt-1 text-xs text-gray-400 flex flex-wrap gap-1">
        <p>
          Created by{" "}
          <Link href="https://hynekfisera.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Hynek Fišera
          </Link>
        </p>{" "}
        -
        <Link href="https://github.com/hynekfisera/asmr" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Star on GitHub
        </Link>{" "}
        -
        <Link href="https://www.buymeacoffee.com/hynekfisera" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Buy Me a Coffee
        </Link>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {items.map((item) => (
          <Link href={item.disabled ? "#" : item.href} key={item.href} className={`flex flex-col bg-gray-200/5 px-6 py-4 rounded-lg border-2 border-transparent ${item.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:border-indigo-500"}`}>
            <div className="text-gray-300 text-lg">{item.title}</div>
            <div className="text-gray-500 text-sm">{item.description}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
