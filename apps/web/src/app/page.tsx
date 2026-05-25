'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = async () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      await videoRef.current.play();
      setIsPlaying(true);
      stopProgressAnimation();
      animationFrameRef.current = requestAnimationFrame(updateProgress);
      return;
    }

    videoRef.current.pause();
    setIsPlaying(false);
    stopProgressAnimation();
  };

  const updateProgress = () => {
    if (!videoRef.current || !videoRef.current.duration) return;

    setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    animationFrameRef.current = requestAnimationFrame(updateProgress);
  };

  const stopProgressAnimation = () => {
    if (animationFrameRef.current === null) return;

    cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = null;
  };

  useEffect(() => {
    return () => stopProgressAnimation();
  }, []);

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8"></div>
        <div className="inline-block">
          <div className="mb-4 flex w-full items-center gap-4 px-4 py-3">
            <button
              type="button"
              onClick={togglePlay}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-200 hover:bg-white text-black transition"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              <span className="text-sm font-semibold leading-none">{isPlaying ? 'Ⅱ' : '▶'}</span>
            </button>

            <div className="relative h-6 flex-grow overflow-hidden">
              <p
                className="absolute top-1/2 whitespace-nowrap text-2xl font-bold text-white will-change-transform"
                style={{
                  left: `${progress}%`,
                  transform: 'translate3d(-0%, -50%, 0)',
                }}
              >
                Measure
              </p>
            </div>
          </div>
          <Link href="/measure">
            <div className="overflow-hidden rounded-2xl bg-black">
              <video
                ref={videoRef}
                className="block w-auto h-60 lg:h-full object-cover"
                muted
                loop
                playsInline
                controls={false}
                onClick={togglePlay}
                onEnded={() => {
                  setIsPlaying(false);
                  stopProgressAnimation();
                }}
              >
                <source src="/measure.mp4" type="video/mp4" />
              </video>
            </div>
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl font-bold mb-3">The Loop</h2>
          <p className="text-gray-500 mb-8 text-sm">Exclusive offers</p>
          <form className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 border border-stone-800 px-4 py-2 text-sm focus:outline-none focus:border-stone-700 rounded-full bg-transparent"
            />
            <button className="bg-black text-stone-400 px-6 py-2 text-sm font-medium hover:text-white transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
