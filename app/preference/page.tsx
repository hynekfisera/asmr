import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center px-6 py-12 md:py-6">
      <div className="max-w-screen-md flex flex-col justify-center items-center gap-6">
        <h1 className="text-2xl md:text-3xl font-light text-gray-200 text-center">Preference test</h1>
        <p className="text-gray-300 text-center text-sm sm:text-base">Two ASMR triggers will appear. Once you decide which one you like more, click on the button below the video. After you finish the test, you will be able to see your #1 trigger.</p>
        <div className="flex flex-wrap justify-center gap-2.5">
          <Link href="/preference/test" className="btn btn-purple">
            Start preference test
          </Link>
          <Link href="/preference/tutorial" className="btn btn-purple-secondary">
            Tutorial
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-3 -mt-2">
          <Link href="/" className="text-xs text-gray-400 hover:underline">
            <FontAwesomeIcon icon={faChevronLeft} /> Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
