"use client";
import React, { useState, useEffect, useRef } from "react";
import _triggers from "@/resources/triggers";
import ReactPlayer from "react-player";
import Link from "next/link";
import { getCreatorById } from "@/utils/creator.functions";

export default function Result({ params }: { params: { id: string } }) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const playerRef = useRef<ReactPlayer>(null);

  const trigger = _triggers.find((t) => `${t.id}` === params.id);

  const handleStart = (): void => {
    playerRef.current?.seekTo(trigger?.start ?? 0);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="flex flex-col justify-center items-center px-6 py-12 md:py-6">
      {trigger && (
        <div className="flex flex-col items-center w-full gap-8">
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl text-center text-gray-200 mb-1">We have a winner!</h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-purple-300 text-center">{trigger.name}</h2>
            <h3 className="text-sm sm:text-base md:text-lg text-gray-100 text-center">
              by{" "}
              <Link href={getCreatorById(trigger.creatorId)!.url} className="hover:underline">
                {getCreatorById(trigger.creatorId)!.name}
              </Link>
            </h3>
          </div>
          {isLoaded && (
            <div className="w-full aspect-video max-w-md">
              <ReactPlayer playing={isPlaying} ref={playerRef} url={trigger.url} controls={true} onError={(e) => console.log(e)} width="100%" height="100%" onStart={handleStart} onReady={() => setIsPlaying(true)} />
            </div>
          )}
          <div className="flex flex-wrap justify-center gap-2.5">
            <Link href={trigger.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Watch the full video
            </Link>
            <Link href="/preference" className="btn btn-secondary">
              Play again
            </Link>
          </div>
        </div>
      )}
      {!trigger && <h1 className="text-lg sm:text-xl md:text-2xl text-center text-gray-200">Invalid trigger id</h1>}
    </main>
  );
}
