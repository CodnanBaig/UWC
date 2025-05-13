"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sectors = [
  {
    src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    label: "Urban Mobility",
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    label: "Smart Energy",
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    label: "Infrastructure",
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    label: "Urban Planning",
  },
  {
    src: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c8a?auto=format&fit=crop&w=400&q=80",
    label: "Sustainable Design",
  },
];

function Arrow(props: any) {
  const { className, style, onClick, direction } = props;
  return (
    <button
      className={`slick-arrow z-10 bg-white border border-gray-400 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 transition absolute top-1/2 -translate-y-1/2 ${direction === "left" ? "-left-16" : "-right-16"}`}
      style={{ ...style }}
      onClick={onClick}
      aria-label={direction === "left" ? "Previous" : "Next"}
      type="button"
    >
      {direction === "left" ? <ChevronLeft className="w-9 h-9 pe-1 text-gray-700" /> : <ChevronRight className="w-9 h-9 text-gray-700" />}
    </button>
  );
}

export default function Sectors() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { 
          slidesToShow: 2,
          arrows: false,
          centerMode: false
        },
      },
      {
        breakpoint: 480,
        settings: { 
          slidesToShow: 2,
          arrows: false,
          centerMode: false,
          slidesToScroll: 2
        },
      }
    ],
  };
  return (
    <section className="w-full bg-white py-12 md:py-20 px-4">
      <div className="max-w-4xl w-full mx-auto flex flex-col items-start">
        {/* Heading above */}
        <h2 className="text-3xl md:text-4xl font-light text-left mb-6">
          <span className="italic font-serif text-4xl md:text-5xl text-gray-900">Our</span>{" "}
          <span className="font-sans text-gray-900">Sectors</span>
        </h2>
        {/* Static section description */}
        <div className="w-full pl-0 md:pl-60 mb-8">
          <p className="text-gray-700 text-sm mb-2 leading-relaxed">
            We are different, we don't plan cities for cars but suggest to MOVE people. We stand for moving people not cars.
          </p>
        </div>
        {/* Swiper below */}
        <div className="w-full pl-0 md:pl-60">
          <Slider {...settings}>
            {sectors.map((sector, i) => (
              <div key={i} className="flex flex-col items-center px-2">
                <div className="m-auto w-28 sm:w-32 md:w-36 h-56 md:h-64 relative overflow-hidden shadow-md mb-2 group">
                  <Image
                    src={sector.src}
                    alt={sector.label}
                    fill
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-base md:text-xl font-serif italic text-center drop-shadow-md">{sector.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
} 