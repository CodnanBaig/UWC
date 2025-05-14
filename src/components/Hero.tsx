"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full flex flex-col items-center justify-center py-8 md:py-16 bg-white">
      <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg">
        {isPlaying ? (
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4" // Placeholder video, replace with your own
            autoPlay
            controls
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
            <Image
              src="/video-thumbnail.svg" // Using the SVG thumbnail
              alt="Video thumbnail"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black bg-opacity-50 rounded-full p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 