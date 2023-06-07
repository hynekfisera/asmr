"use client";
import React, { useState, useRef } from "react";
import _triggers from "@/resources/triggers";
import Player from "./Player";
import { Trigger } from "@/types/Trigger";
import { useRouter } from "next/navigation";

const getInitialTriggers = () => {
  _triggers.sort(() => Math.random() - 0.5);
  return _triggers.slice(0, 8);
};

export default function Preference() {
  const [triggers, setTriggers] = useState<Trigger[]>(getInitialTriggers());
  const [index, setIndex] = useState(0);
  const status = useRef<{ round: number; decision: number }>({ round: 1, decision: 1 });
  const triggersForNextRound = useRef<Trigger[]>([]);
  const router = useRouter();

  const currentTrigger1 = triggers[index];
  const currentTrigger2 = triggers[index + 1];

  const handlePick = (trigger: Trigger) => {
    status.current.decision++;
    triggersForNextRound.current.push(trigger);
    if (triggers.length >= index + 3) {
      setIndex((i) => i + 2);
    } else {
      if (triggersForNextRound.current.length === 1) {
        router.push(`/preference/result/${trigger.id}`);
      } else {
        status.current.round++;
        setTriggers(triggersForNextRound.current);
        setIndex(0);
        triggersForNextRound.current = [];
      }
    }
  };

  const altColor = !!(status.current.decision % 2);

  return (
    <main className="flex flex-col justify-center items-center px-6 py-20 md:py-6">
      <h1 className="text-3xl font-semibold text-gray-200 mb-0.5">
        <span className={altColor ? "text-blue-300" : "text-pink-300"}>This</span> or <span className={altColor ? "text-purple-300" : "text-rose-300"}>that</span>
      </h1>
      <div className="mb-1 text-center text-sm text-gray-300">
        Round {status.current.round} of 3 | Decision {status.current.decision} of 7
      </div>
      <div className="mb-6 max-w-lg text-center text-xs text-gray-400">
        Click <strong className="font-semibold">Play</strong> and listen to both triggers. Feel free to replay them as many times as you want. Then make a decision using the <strong className="font-semibold">Pick this one</strong> button under your preferred trigger.
      </div>
      <div className="w-full max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10 md:gap-6">
        <Player trigger={currentTrigger1} left={true} altColor={altColor} onPick={() => handlePick(currentTrigger1)} />
        <Player trigger={currentTrigger2} left={false} altColor={altColor} onPick={() => handlePick(currentTrigger2)} />
      </div>
      <p></p>
    </main>
  );
}
