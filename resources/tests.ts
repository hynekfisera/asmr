import { Test } from "@/types/Test";
import Preference from "/public/assets/preference.svg";
import Guess from "/public/assets/guess.svg";
import Match from "/public/assets/match.svg";

const tests: Test[] = [
  {
    image: Preference,
    title: "This or that",
    href: "/preference",
    description: "~10 minutes",
    openInNewTab: false,
  },
  {
    image: Guess,
    title: "Guess the trigger",
    href: "/guess",
    description: "Coming soon",
    disabled: true,
  },
  {
    image: Match,
    title: "Match the sound",
    href: "/match",
    description: "Coming soon",
    disabled: true,
  },
];

export default tests;
