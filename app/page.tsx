import { faCode, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import tests from "@/resources/tests";
import creators from "@/resources/creators";

export default function Home() {
  return (
    <main className="px-6 py-12">
      <div className="max-w-3xl mx-auto flex flex-col gap-12 items-stretch">
        <section className="pt-12 md:pt-24 flex flex-col items-center gap-8 w-full">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-2xl md:text-3xl xl:text-4xl text-gray-200 text-center">Interactive ASMR</h1>
            <div className="text-sm md:text-base text-purple-300 flex flex-wrap gap-1 text-center max-w-[250px] sm:max-w-none">Experience ASMR tests from the comfort of your home</div>
          </div>
          <div className="flex flex-wrap justify-center w-full max-w-3xl gap-6">
            {tests.map((test) => (
              <Link
                href={test.disabled ? "#" : test.href}
                key={test.href}
                className={`w-full sm:w-[calc(50%-0.75rem)] flex justify-center items-center gap-4 bg-slate-200/10 px-8 py-4 rounded-lg border-2 border-transparent ${test.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:border-purple-400"}`}
              >
                <Image src={test.image} alt={"Icon representing the " + test.title + " test"} className="h-full max-h-10 sm:max-h-12 w-auto" />
                <div className="flex flex-col py-2">
                  <div className="text-gray-200 text-lg">{test.title}</div>
                  <div className="text-gray-400 text-sm">{test.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section className="w-full max-w-3xl flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold text-gray-200 tracking-tight">Featured Creators</h2>
            <p className="text-gray-300">Please support these ASMR creators by subscribing!</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {creators.map((creator) => (
              <Link href={creator.url} key={creator.id} className="bg-slate-200/5 px-6 py-4 flex items-center gap-3 text-gray-300 font-medium hover:underline rounded-lg" target="_blank" rel="noopener noreferrer">
                <Image src={creator.icon} alt={creator.name + " icon"} className="w-12 h-12 rounded-full" />
                <div className="text-lg">{creator.name}</div>
              </Link>
            ))}
          </div>
        </section>
        <section className="w-full max-w-3xl flex flex-col gap-1.5">
          <h2 className="text-xl font-semibold text-gray-200 tracking-tight">About This Project</h2>
          <div className="flex flex-col gap-4">
            <p className="text-gray-300 leading-relaxed">
              This project was inspired by a video called{" "}
              <Link href="https://youtu.be/rlOQMh98S9w" className="link" target="_blank" rel="noopener noreferrer">
                Trying ASMR Tests
              </Link>{" "}
              by{" "}
              <Link href="https://www.youtube.com/@TiptoeTingles" className="link" target="_blank" rel="noopener noreferrer">
                @TiptoeTingles
              </Link>{" "}
              and{" "}
              <Link href="https://www.youtube.com/@GibiASMR" className="link" target="_blank" rel="noopener noreferrer">
                @GibiASMR
              </Link>
              . Here you can try out a few of ASMR tests yourself.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Just watching ASMR videos is wonderful, but I wanted to create something that replicates the experience of those real-life ASMR tests. Although it&apos;s not exactly the same, I believe this is as close as we can get using just online content. I hope you enjoy it!
            </p>
            <p className="text-sm text-gray-400">
              All video material rights belong to their original creators. Clips are embedded directly from the original YouTube videos; no content is self-hosted. Since it is possible to disable the embed option in YouTube Studio, I assume that creators who enable it are okay with having their
              content here. If that&apos;s not the case, please feel free to reach out to me about content removal.
            </p>
          </div>
        </section>
        <footer className="px-2 flex flex-col md:flex-row justify-start items-center flex-wrap gap-3 md:gap-4 text-xs md:text-sm font-medium text-purple-400">
          <Link href="https://hynekfisera.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <FontAwesomeIcon icon={faCode} /> Created by <strong>Hynek Fišera</strong>
          </Link>
          <Link href="https://www.buymeacoffee.com/hynekfisera" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <FontAwesomeIcon icon={faHeart} /> Support this project
          </Link>
        </footer>
      </div>
    </main>
  );
}
