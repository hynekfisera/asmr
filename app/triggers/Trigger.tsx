"use client";
import { Trigger } from "@/types/Trigger";
import { getCreatorById } from "@/utils/creator.functions";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

type Props = {
  trigger: Trigger;
};

export default function TriggerComponent({ trigger }: Props) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const playerRef = useRef<ReactPlayer>(null);

  const handleStart = (): void => {
    playerRef.current?.seekTo(trigger?.start ?? 0);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const creator = getCreatorById(trigger.creatorId)!;

  return (
    <div className="w-full flex flex-col">
      <Link href={trigger.url} className="text-lg sm:text-xl font-medium text-purple-300">
        {trigger.name}
      </Link>
      <Link href={creator.url} className="mb-4 text-md font-medium text-gray-400">
        {creator.name}
      </Link>
      {isLoaded && (
        <div className="w-full aspect-video mt-auto">
          <ReactPlayer ref={playerRef} url={trigger.url} controls={true} onError={(e) => console.log(e)} width="100%" height="100%" onStart={handleStart} />
        </div>
      )}
    </div>
  );
}
