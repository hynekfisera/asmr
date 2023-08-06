"use client";
import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { Trigger } from "@/types/Trigger";
import Link from "next/link";
import { getCreatorById } from "@/utils/creator.functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faCheck } from "@fortawesome/free-solid-svg-icons";

type Props = {
  trigger: Trigger;
  left: boolean;
  altColor: boolean;
  onPick?: () => void;
};

export default function Player({ trigger, left, altColor, onPick: handlePick }: Props) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [played, setPlayed] = useState(0);
  const playerRef = useRef<ReactPlayer>(null);

  const handleProgress = (progress: { playedSeconds: number }): void => {
    if (progress.playedSeconds > trigger.end) {
      setIsPlaying(false);
      playerRef.current?.seekTo(trigger.start);
    }
    setPlayed((playerRef.current && playerRef.current.getCurrentTime() - trigger.start) || 0);
  };

  const handlePlay = (): void => {
    if (playerRef.current && playerRef.current.getCurrentTime() < trigger.start) {
      playerRef.current?.seekTo(trigger.start);
    }
    setIsPlaying(true);
  };

  const togglePlaying = (): void => {
    if (playerRef.current && playerRef.current.getCurrentTime() < trigger.start) {
      playerRef.current?.seekTo(trigger.start);
    }
    setIsPlaying((p) => !p);
  };

  useEffect(() => {
    setIsPlaying(false);
    setIsLoaded(true);
    setPlayed(0);
  }, [trigger]);

  const creator = getCreatorById(trigger.creatorId)!;

  return (
    <section>
      <h2 className="text-gray-200 text-xl font-semibold">{trigger.name}</h2>
      <div className={`mb-3 text-xs ${left ? (altColor ? "text-blue-300" : "text-pink-300") : altColor ? "text-purple-300" : "text-rose-300"}`}>
        <Link href={trigger.url} className="hover:underline" target="_blank" rel="noopener noreferrer">
          {creator.name}
        </Link>
      </div>
      <div className="w-full aspect-video">
        {isLoaded && (
          <ReactPlayer
            playing={isPlaying}
            ref={playerRef}
            url={trigger.url}
            controls={false}
            config={{
              youtube: {
                playerVars: { controls: 0, disablekb: 1, fs: 0, modestbranding: 1, rel: 0, showinfo: 0 },
                embedOptions: { controls: 0, disablekb: 1, fs: 0, modestbranding: 1, rel: 0, showinfo: 0 },
              },
            }}
            onProgress={handleProgress}
            onError={(e) => console.log(e)}
            width="100%"
            height="100%"
            onPlay={handlePlay}
            onPause={() => setIsPlaying(false)}
            progressInterval={20}
          />
        )}
        <progress value={played} max={trigger.end - trigger.start} className={`block h-1 w-full ${left ? (altColor ? "progress-blue" : "progress-pink") : altColor ? "progress-purple" : "progress-rose"}`} />
        <div className="flex flex-wrap justify-center items-center gap-2 mt-3">
          <button onClick={togglePlaying} className={`btn ${left ? (altColor ? "btn-blue" : "btn-pink") : altColor ? "btn-purple" : "btn-rose"}`}>
            {isPlaying ? (
              <>
                <FontAwesomeIcon icon={faPause} /> Pause
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faPlay} /> Play
              </>
            )}
          </button>
          <button onClick={handlePick} className={`btn ${left ? (altColor ? "btn-blue-secondary" : "btn-pink-secondary") : altColor ? "btn-purple-secondary" : "btn-rose-secondary"}`}>
            <FontAwesomeIcon icon={faCheck} /> Pick this one
          </button>
        </div>
      </div>
    </section>
  );
}
