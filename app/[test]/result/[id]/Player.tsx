"use client";
import { Trigger } from "@/types/Trigger";
import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player/youtube";

type Props = {
  trigger: Trigger;
};

export default function Player({ trigger }: Props) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const playerRef = useRef<ReactPlayer>(null);

  const handleStart = (): void => {
    playerRef.current?.seekTo(trigger.start ?? 0);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {isLoaded && (
        <div className="w-full aspect-video max-w-md">
          <ReactPlayer playing={isPlaying} ref={playerRef} url={trigger.url} controls={true} onError={(e) => console.log(e)} width="100%" height="100%" onStart={handleStart} onReady={() => setIsPlaying(true)} />
        </div>
      )}
    </>
  );
}
