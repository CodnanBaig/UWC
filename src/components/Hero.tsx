"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-8 md:py-16 bg-white">
      <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg">
        <div className="relative w-full h-full">
          <Image
            src="/video-thumbnail.svg"
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
      </div>
    </section>
  );
} 