'use client';

import Image from "next/image";
import { useRef } from "react";

const insights = [
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "Top 10 Infrastructure Development Consultants in India 2023",
    desc: "",
    href: "#",
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "E-Bike & E- Bicycle They're not quite the same",
    desc: "",
    href: "#",
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Five Reasons You Must Attend Mumbai International Byke Fair 2022 (MIBF)",
    desc: "",
    href: "#",
  },
];

export default function Insights() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full bg-white py-12 md:py-20 px-4 relative overflow-visible">
      {/* Faded logo background */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[350px] md:h-[400px] opacity-10 z-0 pointer-events-none select-none">
        <img src="/assets/UWC Regd Logo Only.png" alt="Faded Logo" className="w-full h-full object-contain" />
      </div>
      <div className="max-w-4xl w-full mx-auto flex flex-col items-start relative z-10">
        {/* Heading and description */}
        <h2 className="text-3xl md:text-4xl font-light text-left mb-6">
          <span className="italic font-serif text-4xl md:text-5xl text-gray-900">Insights</span>{" "}
          <span className="font-sans text-gray-900">& Innovations</span>
        </h2>
        <div className="w-full pl-0 md:pl-60 mb-8">
          <p className="text-gray-700 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.
          </p>
        </div>
        {/* Cards row - scrollable on mobile */}
        <div 
          ref={scrollContainerRef}
          className="w-full pl-0 md:pl-60 flex flex-row gap-6 mb-4 overflow-x-auto pb-4 snap-x scrollbar-hide"
          style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {insights.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="group flex-none md:flex-1 w-[80vw] max-w-xs flex flex-col bg-white rounded-none shadow-none cursor-pointer transition-transform hover:-translate-y-1 snap-center"
              style={{ minWidth: 220 }}
            >
              <div className="w-full h-72 relative overflow-hidden mb-2">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="font-semibold text-gray-900 text-base leading-tight mb-2 group-hover:underline">
                {item.title}
              </div>
              <div className="w-full bg-gray-200 text-gray-500 text-xs italic px-2 py-1 mt-auto mb-2 tracking-wide">
                Read the article &rsaquo;
              </div>
            </a>
          ))}
          {/* Read All card for mobile */}
          <a
            href="#"
            className="group flex-none md:hidden w-[80vw] max-w-xs flex flex-col justify-center items-center bg-gray-100 rounded-none shadow-none cursor-pointer transition-transform hover:-translate-y-1 snap-center h-72"
            style={{ minWidth: 220 }}
          >
            <div className="font-semibold text-gray-900 text-xl leading-tight mb-2 text-center">
              View All Blogs
            </div>
            <span className="text-3xl">&rsaquo;</span>
          </a>
        </div>
        {/* View all blogs link - desktop only */}
        <div className="pl-0 md:pl-60 mt-2 hidden md:block">
          <a href="#" className="font-semibold underline text-gray-900 text-base inline-block border-b-2 border-gray-900 pb-0.5">View All Blogs &rsaquo;</a>
        </div>
      </div>
      
      {/* Mobile scroll indicator dots */}
      <div className="flex justify-center gap-2 mt-4 md:hidden">
        {insights.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-gray-300"></div>
        ))}
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
      </div>
    </section>
  );
} 