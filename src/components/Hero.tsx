import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-8 md:py-16 bg-white">
      <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg">
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4" // Placeholder video, replace with your own
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
} 