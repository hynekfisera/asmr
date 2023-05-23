"use client";
import React, { useState, useRef } from "react";
import _triggers from "@/resources/triggers";
import Player from "./Player";
import { Trigger } from "@/types/Trigger";
import { useRouter } from "next/navigation";

_triggers.sort(() => Math.random() - 0.5);

export default function Preference() {
  const [triggers, setTriggers] = useState<Trigger[]>(_triggers.filter((t, i) => i < 4));
  const [index, setIndex] = useState(0);
  const triggersForNextRound = useRef<Trigger[]>([]);
  const router = useRouter();

  const currentTrigger1 = triggers[index];
  const currentTrigger2 = triggers[index + 1];

  const handlePick = (trigger: Trigger) => {
    triggersForNextRound.current.push(trigger);
    if (triggers.length >= index + 3) {
      setIndex((i) => i + 2);
    } else {
      if (triggersForNextRound.current.length === 1) {
        router.push(`/preference/result/${trigger.id}`);
      } else {
        setTriggers(triggersForNextRound.current);
        setIndex(0);
        triggersForNextRound.current = [];
      }
    }
  };

  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold text-gray-200 mb-1">
        <span className="text-blue-300">This</span> or <span className="text-purple-300">that</span>
      </h1>
      <div className="mb-6 max-w-lg text-center text-xs text-gray-400">
        Click <strong className="font-semibold">Play</strong> and listen to both triggers. Feel free to replay them as many times as you want. Then make a decision and click <strong className="font-semibold">Pick this one</strong> under your preferred trigger.
      </div>
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-2 gap-6">
        <Player trigger={currentTrigger1} blue={true} onPick={() => handlePick(currentTrigger1)} />
        <Player trigger={currentTrigger2} blue={false} onPick={() => handlePick(currentTrigger2)} />
      </div>
      <p></p>
    </main>
  );
}
