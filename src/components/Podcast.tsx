"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const podcasts = [
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    title: "Barcelona City FAD Award 2014",
    desc: "Winning entry at the City of Barcelona FAD Award 2014.",
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Urban Mobility Podcast",
    desc: "Episode 12: Smart Cities and Mobility.",
  },
];

export default function Podcast() {
  const swiperRef = useRef<any>(null);
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-12 md:py-20 px-4">
      <div className="max-w-4xl w-full mx-auto flex flex-col items-start">
        {/* Heading above */}
        <h2 className="text-3xl md:text-4xl font-light text-left mb-6">
          <span className="italic font-serif text-4xl md:text-5xl text-gray-900">Listen</span>{" "}
          <span className="font-sans text-gray-900">Podcast</span>
        </h2>
        {/* Swiper carousel */}
        <div className="w-full pl-0 md:pl-60">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={30}
            slidesPerView={1}
            className="rounded-lg shadow-md"
          >
            {podcasts.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={800}
                    height={250}
                    className="object-cover w-full h-40 sm:h-48 md:h-64 rounded-lg"
                  />
                  <div className="p-3 w-full">
                    <div className="font-medium text-gray-800 text-base mb-1">{item.title}</div>
                    <div className="text-gray-600 text-sm mb-2">{item.desc}</div>
                    <a href="#" className="text-cyan-700 underline text-xs">View All Podcasts &rarr;</a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom navigation below */}
          <div className="flex justify-center gap-6 mt-6">
            <button
              className="bg-white border border-gray-400 rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-gray-100 transition"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous"
              type="button"
            >
              <ChevronLeft className="w-7 h-7 text-gray-700" />
            </button>
            <button
              className="bg-white border border-gray-400 rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-gray-100 transition"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next"
              type="button"
            >
              <ChevronRight className="w-7 h-7 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 