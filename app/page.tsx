import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center px-6 py-12 md:py-6">
      <div className="max-w-screen-md flex flex-col justify-center items-center gap-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-200 shadow text-center">Interactive ASMR experience</h1>
        <p className="text-gray-300 text-center text-sm sm:text-base">
          Inspired by &quot;this or that&quot; test from{" "}
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
          . This website allows you to try this test out by yourself.
        </p>
        <p className="text-gray-300 text-center text-sm sm:text-base">Two ASMR triggers will appear. Once you decide which one you like more, click on the button below the video. After you finish the test, you will be able to see your #1 trigger.</p>
        <Link href="/preference" className="btn btn-primary">
          Start preference test
        </Link>
      </div>
    </main>
  );
}
