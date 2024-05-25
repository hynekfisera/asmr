import { Test } from "@/types/Test";
import Preference from "/public/assets/preference.svg";
import Guess from "/public/assets/guess.svg";
import Match from "/public/assets/match.svg";

const tests: Test[] = [
  {
    id: "preference",
    image: Preference,
    title: "This or that",
    href: "/preference",
    description: "~10 minutes",
    descriptionLong: "Two ASMR triggers will appear. Once you decide which one you like more, click on the button below the video. After you finish the test, you will be able to see your #1 trigger.",
    tutorial: [
      "First, 8 sounds/triggers are randomly chosen.",
      "You will see 2 of them at a time. Use the Play buttons to watch and listen to both ASMR triggers, then use one of the Pick this one buttons to choose which one you liked better.",
      "There is a total of 3 rounds (7 decisions). Only triggers you pick continue to the next round, so the number of total triggers in the first round is 8, then 4, then 2 and after the third round we have a winner.",
      "It is recommended to use the Play button over the default YouTube player controls.",
    ],
  },
  {
    id: "guess",
    image: Guess,
    title: "Guess the trigger",
    href: "/guess",
    description: "Coming soon",
    disabled: true,
  },
  {
    id: "match",
    image: Match,
    title: "Match the sound",
    href: "/match",
    description: "Coming soon",
    disabled: true,
  },
];

export default tests;
