import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import tests from "@/resources/tests";
import Heading from "@/components/headings/Heading";

export const dynamicParams = false;

export async function generateStaticParams() {
  return tests.filter((test) => !test.disabled).map((test) => ({ test: test.id }));
}

export default function Home({ params }: { params: { test: string } }) {
  const test = tests.find((t) => t.id === params.test);

  if (!test) {
    throw new Error("Invalid test id");
  }

  return (
    <main className="flex flex-col justify-center items-center px-6 py-12 md:py-6">
      <div className="max-w-screen-md flex flex-col justify-center items-center gap-6">
        <Heading>{test.title} test</Heading>
        <p className="text-gray-300 text-center text-sm sm:text-base">{test.descriptionLong}</p>
        <div className="flex flex-wrap justify-center gap-2.5">
          <Link href={`${test.href}/test`} className="btn btn-purple">
            Start the test
          </Link>
          <Link href={`${test.href}/tutorial`} className="btn btn-purple-secondary">
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
