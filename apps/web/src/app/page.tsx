'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const measureVideoRef = useRef<HTMLVideoElement>(null);
  const designVideoRef = useRef<HTMLVideoElement>(null);
  const ordersVideoRef = useRef<HTMLVideoElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const activeVideoRef = useRef<HTMLVideoElement | null>(null);
  const [playingVideo, setPlayingVideo] = useState<'measure' | 'design' | 'orders' | null>(null);
  const [progress, setProgress] = useState({
    measure: 0,
    design: 0,
    orders: 0,
  });

  const togglePlay = async (
    videoKey: 'measure' | 'design' | 'orders',
    selectedVideoRef: React.RefObject<HTMLVideoElement | null>,
  ) => {
    const selectedVideo = selectedVideoRef.current;
    if (!selectedVideo) return;

    const videos = [measureVideoRef.current, designVideoRef.current, ordersVideoRef.current];

    videos.forEach((video) => {
      if (video && video !== selectedVideo) video.pause();
    });

    if (selectedVideo.paused) {
      await selectedVideo.play();
      activeVideoRef.current = selectedVideo;
      setPlayingVideo(videoKey);
      stopProgressAnimation();
      animationFrameRef.current = requestAnimationFrame(() => updateProgress(videoKey));
      return;
    }

    selectedVideo.pause();
    setPlayingVideo(null);
    stopProgressAnimation();
  };

  const updateProgress = (videoKey: 'measure' | 'design' | 'orders') => {
    const video = activeVideoRef.current;
    if (!video || !video.duration) return;

    setProgress((currentProgress) => ({
      ...currentProgress,
      [videoKey]: (video.currentTime / video.duration) * 100,
    }));

    animationFrameRef.current = requestAnimationFrame(() => updateProgress(videoKey));
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
          <div className="mb-4 flex w-full items-center gap-4 pr-4 py-3">
            <button
              type="button"
              onClick={() => togglePlay('measure', measureVideoRef)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-800 text-white transition"
              aria-label={playingVideo === 'measure' ? 'Pause video' : 'Play video'}
            >
              <span className="text-sm font-semibold leading-none">
                {playingVideo === 'measure' ? 'Ⅱ' : '▶'}
              </span>
            </button>

            <div className="relative h-6 flex-grow overflow-hidden">
              <p
                className="absolute top-1/2 whitespace-nowrap text-2xl font-bold text-white will-change-transform"
                style={{
                  left: `${progress.measure}%`,
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
                ref={measureVideoRef}
                className="block w-auto h-60 md:h-full object-cover"
                muted
                loop
                playsInline
                controls={false}
                onClick={() => togglePlay('measure', measureVideoRef)}
                onEnded={() => {
                  setPlayingVideo(null);
                  stopProgressAnimation();
                }}
              >
                <source src="/measure.mp4" type="video/mp4" />
              </video>
            </div>
          </Link>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8"></div>
        <div className="inline-block">
          <div className="mb-4 flex w-full items-center gap-4 pr-4 py-3">
            <button
              type="button"
              onClick={() => togglePlay('design', designVideoRef)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-800 text-white transition"
              aria-label={playingVideo === 'design' ? 'Pause video' : 'Play video'}
            >
              <span className="text-sm font-semibold leading-none">
                {playingVideo === 'design' ? 'Ⅱ' : '▶'}
              </span>
            </button>

            <div className="relative h-6 flex-grow overflow-hidden">
              <p
                className="absolute top-1/2 whitespace-nowrap text-2xl font-bold text-white will-change-transform"
                style={{
                  left: `${progress.design}%`,
                  transform: 'translate3d(-0%, -50%, 0)',
                }}
              >
                Design
              </p>
            </div>
          </div>
          <Link href="/measure">
            <div className="overflow-hidden rounded-2xl bg-black">
              <video
                ref={designVideoRef}
                className="block w-auto h-60 md:h-full object-cover"
                muted
                loop
                playsInline
                controls={false}
                onClick={() => togglePlay('design', designVideoRef)}
                onEnded={() => {
                  setPlayingVideo(null);
                  stopProgressAnimation();
                }}
              >
                <source src="/design.mp4" type="video/mp4" />
              </video>
            </div>
          </Link>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8"></div>
        <div className="inline-block">
          <div className="mb-4 flex w-full items-center gap-4 pr-4 py-3">
            <button
              type="button"
              onClick={() => togglePlay('orders', ordersVideoRef)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-800 text-white transition"
              aria-label={playingVideo === 'orders' ? 'Pause video' : 'Play video'}
            >
              <span className="text-sm font-semibold leading-none">
                {playingVideo === 'orders' ? 'Ⅱ' : '▶'}
              </span>
            </button>

            <div className="relative h-6 flex-grow overflow-hidden">
              <p
                className="absolute top-1/2 whitespace-nowrap text-2xl font-bold text-white will-change-transform"
                style={{
                  left: `${progress.orders}%`,
                  transform: 'translate3d(-0%, -50%, 0)',
                }}
              >
                Your Creations
              </p>
            </div>
          </div>
          <Link href="/measure">
            <div className="overflow-hidden rounded-2xl bg-black">
              <video
                ref={ordersVideoRef}
                className="block w-auto h-60 md:h-full object-cover"
                muted
                loop
                playsInline
                controls={false}
                onClick={() => togglePlay('orders', ordersVideoRef)}
                onEnded={() => {
                  setPlayingVideo(null);
                  stopProgressAnimation();
                }}
              >
                <source src="/orders.mp4" type="video/mp4" />
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
