"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

// Use the company logo as fallback for all slides
const fallbackImage = "/assets/UWC Regd Logo.png";

const achievements = [
  {
    label: "Mumbai Trans Harbour Link",
  },
  {
    label: "Metro Rail Project",
  },
  {
    label: "Smart City Initiative",
  },
  {
    label: "Highway Infrastructure Development",
  },
  {
    label: "Urban Water Management System",
  },
  {
    label: "Sustainable Energy Projects",
  },
];

export default function Achievements() {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="w-full bg-white py-12 md:py-20 px-0 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-8 px-4">
          <h2 className="text-3xl md:text-4xl font-light">
            <span className="italic font-serif text-4xl md:text-5xl text-gray-900">Proud</span>{" "}
            <span className="font-sans text-gray-900">Achievements</span>
          </h2>
        </div>
      </div>

      {/* Full-width Swiper with visible overflow */}
      <div className="relative w-full">
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            slidesPerView={1.1}
            centeredSlides={true}
            spaceBetween={10}
            loop={true}
            initialSlide={0}
            className="!overflow-visible"
          >
            {achievements.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="overflow-hidden bg-gray-100 flex items-center justify-center">
                  <Image
                    src={fallbackImage}
                    alt={item.label}
                    width={1200}
                    height={600}
                    className="object-contain w-[60%] aspect-[21/9]"
                    priority
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Label below swiper */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center text-base md:text-lg mt-4 mb-8 font-medium text-black">
          {achievements[activeIndex % achievements.length]?.label}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-4 mt-2">
          <button
            className="rounded-full w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100 transition"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous"
            type="button"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            className="rounded-full w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100 transition"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next"
            type="button"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
