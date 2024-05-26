"use client";
import React, { useEffect, useRef, useState } from "react";
import { Trigger } from "@/types/Trigger";
import Link from "next/link";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import fetchNewTriggers from "@/app/actions";
import { useRouter } from "next/navigation";

export default function Guess({ trigger, options }: { trigger: Trigger; options: Trigger[] }) {
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [chosenOption, setChosenOption] = useState<Trigger | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [played, setPlayed] = useState(0);
  const playerRef = useRef<ReactPlayer>(null);
  const router = useRouter();

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

  const handleGuess = (option: Trigger): void => {
    setChosenOption(option);
  };

  const answerRevealed = chosenOption !== null;

  if (answerRevealed) {
    router.prefetch(`/guess/result/${trigger.id}`);
  }

  useEffect(() => {
    setIsPlaying(false);
    setIsLoaded(true);
    setPlayed(0);
  }, [trigger]);

  return (
    <main className="flex flex-col justify-center items-center px-6 py-20 md:py-6">
      <h1 className="text-3xl font-semibold text-gray-200 mb-2">
        <span className="text-purple-300">Guess</span> the <span className="text-purple-300">trigger</span>
      </h1>
      <div className="mb-6 max-w-lg text-center text-xs text-gray-400">
        Click <strong className="font-semibold">Play</strong> and listen to the trigger. You may try to guess in your head first without seeing the options. Then click the <strong className="font-semibold">Show options</strong> button and choose which trigger you think it is.
      </div>
      <div className="w-full max-w-sm">
        <div className="hidden">
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
        </div>
        <progress value={played} max={trigger.end - trigger.start} className="block h-1 w-full progress-purple" />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-2 mt-3">
        <button onClick={togglePlaying} className={`btn ${answerRevealed ? "btn-purple-secondary" : "btn-purple"}`}>
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
        {!optionsVisible && (
          <button onClick={() => setOptionsVisible(true)} className="btn btn-purple-secondary">
            Show options
          </button>
        )}
      </div>
      <div className={`w-full my-4 flex flex-col items-center gap-2 text-sm text-slate-300 ${optionsVisible ? "" : "invisible"}`}>
        <div className="grid sm:grid-cols-2 gap-4 w-full max-w-xl">
          {options.map((option, i) => (
            <button onClick={() => handleGuess(option)} className={`w-full truncate btn ${answerRevealed ? (trigger.id === option.id ? "btn-green" : chosenOption?.id === option.id ? "btn-rose-secondary" : "btn-blue-secondary") : "btn-blue-secondary"}`} disabled={answerRevealed} key={i}>
              {option.name}
            </button>
          ))}
        </div>
      </div>
      <div className={`mb-2 text-gray-100 font-medium ${answerRevealed ? "" : "invisible"}`}>{trigger.id === chosenOption?.id ? "You guessed correctly!" : "Better luck next time!"}</div>
      <Link href={"/guess/result/" + trigger.id} onClick={() => fetchNewTriggers()} className={`btn btn-purple ${answerRevealed ? "" : "invisible"}`}>
        Continue <FontAwesomeIcon icon={faChevronRight} />
      </Link>
    </main>
  );
}
