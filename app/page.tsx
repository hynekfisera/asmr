import { faCode, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import tests from "@/resources/tests";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center px-6 py-12 md:py-6">
      <div className="w-full h-full flex flex-col items-center">
        <h1 className="mt-12 md:mt-16 text-2xl md:text-3xl xl:text-4xl text-gray-100">Interactive ASMR experience</h1>
        <div className="mt-3 text-sm md:text-base text-gray-300 flex flex-wrap gap-1 text-center max-w-xl">
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
        <div className="my-12 flex flex-wrap justify-center w-full max-w-3xl gap-6">
          {tests.map((test) => (
            <Link
              href={test.disabled ? "#" : test.href}
              key={test.href}
              className={`w-full sm:w-[calc(50%-1.5rem)] flex justify-center items-center gap-4 bg-slate-200/10 px-8 py-4 rounded-lg border-2 border-transparent ${test.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:border-purple-400"}`}
            >
              <Image src={test.image} alt={"Icon representing the " + test.title + " test"} className="h-full max-h-12 w-auto" />
              <div className="flex flex-col py-2">
                <div className="text-gray-200 text-lg">{test.title}</div>
                <div className="text-gray-400 text-sm">{test.description}</div>
              </div>
            </Link>
          ))}
        </div>
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
