import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <h1 className="mt-12 md:mt-16 text-2xl md:text-3xl font-light text-gray-100">Interactive ASMR experience</h1>
      <div className="mt-2 sm:mt-1.5 text-sm md:text-base text-gray-300 flex flex-wrap gap-1">
        <p>
          Inspired by{" "}
          <Link href="https://youtu.be/rlOQMh98S9w" className="link" target="_blank" rel="noopener noreferrer">
            this video
          </Link>{" "}
          by{" "}
          <Link href="https://www.youtube.com/@TiptoeTingles" className="link" target="_blank" rel="noopener noreferrer">
            @TiptoeTingles
          </Link>{" "}
          and{" "}
          <Link href="https://www.youtube.com/@GibiASMR" className="link" target="_blank" rel="noopener noreferrer">
            @GibiASMR
          </Link>
          . This website allows you to try out few of ASMR tests by yourself.
        </p>
      </div>
      <div className="my-6 grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {items.map((item) => (
          <Link href={item.disabled ? "#" : item.href} key={item.href} className={`flex flex-col bg-slate-200/10 px-6 py-4 rounded-lg border-2 border-transparent ${item.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:border-indigo-400"}`}>
            <div className="text-gray-200 text-lg">{item.title}</div>
            <div className="text-gray-400 text-sm">{item.description}</div>
          </Link>
        ))}
      </div>
      <footer className="px-2 flex flex-col md:flex-row justify-start items-center flex-wrap gap-3 md:gap-4 text-xs md:text-sm font-medium text-indigo-400">
        <Link href="https://hynekfisera.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          <FontAwesomeIcon icon={faCode} /> Created by <strong>Hynek Fišera</strong>
        </Link>
        <Link href="https://github.com/hynekfisera/asmr" target="_blank" rel="noopener noreferrer" className="hover:underline">
          <FontAwesomeIcon icon={faGithub} /> Star on GitHub
        </Link>
        <a href="https://www.buymeacoffee.com/hynekfisera" target="_blank" rel="noreferrer noopener" className="inline-block h-5 md:h-6">
          <img className="h-full w-auto" src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=hynekfisera&button_colour=6366f1&font_colour=f1f5f9&font_family=Inter&outline_colour=000000&coffee_colour=f1f5f9" alt="Buy Me a Coffee" />
        </a>
      </footer>
    </main>
  );
}
