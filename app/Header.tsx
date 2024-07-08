import React from "react";
import Account from "./Account";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4 flex flex-row items-center justify-between">
      <Link href="/" className="text-lg sm:text-xl font-medium tracking-tighter text-gray-300 select-none">
        interactiveASMR
      </Link>
      <Account />
    </header>
  );
}
