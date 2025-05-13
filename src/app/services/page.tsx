"use client";
import Image from "next/image";

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[260px] md:h-[340px] lg:h-[380px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80"
          alt="Services Hero"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 pb-10">
          <h1 className="text-4xl md:text-5xl font-light text-white italic font-serif inline-block border-b-4 border-white pb-2 px-2">
            Our Services
          </h1>
        </div>
      </section>

      {/* 1st Row: Image | Heading+List */}
      <section className="w-full bg-white py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col gap-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-center">
            {/* Image - On mobile, this will be first */}
            <div className="md:w-1/2 w-full flex justify-start md:justify-end items-center order-1 md:order-1">
              <div className="shadow-md overflow-hidden w-[220px] h-[320px] md:w-[260px] md:h-[360px] bg-gray-100 flex items-center justify-center border-8 border-white outline outline-1 outline-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                  alt="Studies and Planning"
                  width={260}
                  height={360}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Text - On mobile, this will be second */}
            <div className="md:w-1/2 w-full flex flex-col md:items-start order-2 md:order-2">
              <h2 className="text-2xl md:text-3xl font-light mb-6 md:mb-40">
                <span className="italic font-serif font-semibold text-pink-400">
                  Studies
                </span>{" "}
                <span className="font-sans text-gray-900">and Planning</span>
              </h2>
              <ul className="text-gray-800 text-base md:text-sm space-y-3 mb-0 list-none md:text-smeft w-full">
                <li className="font-semibold flex flex-col items-start">
                  <span>Environmental Impact Assessment</span>
                  <span className="block border-b-2 border-gray-400 w-16 mt-1"></span>
                </li>
                <li className="font-semibold flex flex-col items-start">
                  <span>Socio-economic Feasibility</span>
                  <span className="block border-b-2 border-gray-400 w-16 mt-1"></span>
                </li>
                <li className="font-semibold flex flex-col items-start">
                  <span>Pre-investment Feasibility</span>
                  <span className="block border-b-2 border-gray-400 w-16 mt-1"></span>
                </li>
                <li className="font-semibold flex flex-col items-start">
                  <span>Master Planning</span>
                  <span className="block border-b-2 border-gray-400 w-16 mt-1"></span>
                </li>
                <li className="font-semibold flex flex-col items-start">
                  <span>Architectural Design Planning</span>
                  <span className="block border-b-2 border-gray-400 w-16 mt-1"></span>
                </li>
              </ul>
            </div>
          </div>

          {/* 2nd Row: List | Image */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-center mt-8">
            {/* Text - On mobile, this will be second */}
            <div className="md:w-1/2 w-full flex flex-col md:items-end order-2 md:order-1">
              <ul className="text-gray-800 text-base md:text-sm space-y-3 mb-0 list-none md:text-smeft w-full mt-6 md:mt-40">
                <li className="font-semibold flex flex-col items-end">
                  <span>Environmental Impact Assessment</span>
                  <span className="block border-b-2 border-gray-400 w-16 mt-1"></span>
                </li>
                <li className="font-semibold flex flex-col items-end">
                  <span>Socio-economic Feasibility</span>
                  <span className="block border-b-2 border-gray-400 w-16 mt-1"></span>
                </li>
                <li className="font-semibold flex flex-col items-end">
                  <span>Pre-investment Feasibility</span>
                  <span className="block border-b-2 border-gray-400 w-16 mt-1"></span>
                </li>
                <li className="font-semibold flex flex-col items-end">
                  <span>Master Planning</span>
                  <span className="block border-b-2 border-gray-400 w-16 mt-1"></span>
                </li>
                <li className="font-semibold flex flex-col items-end">
                  <span>Architectural Design Planning</span>
                  <span className="block border-b-2 border-gray-400 w-16 mt-1"></span>
                </li>
              </ul>
            </div>
            
            {/* Image - On mobile, this will be first */}
            <div className="md:w-1/2 w-full flex justify-end md:justify-start items-center order-1 md:order-2">
              <div className="shadow-md overflow-hidden w-[220px] h-[320px] md:w-[260px] md:h-[360px] bg-gray-100 flex items-center justify-center border-8 border-white outline outline-1 outline-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                  alt="Studies and Planning"
                  width={260}
                  height={360}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Faded label after 2nd row */}
          <div className="w-full flex flex-col items-center mt-4">
            <span className="text-[1.2rem] md:text-[2.5rem] font-extrabold text-gray-300 opacity-70 tracking-widest uppercase leading-none mb-2">
              STUDIES AND PLANNING
            </span>
          </div>

          {/* 3rd Row: Image | Heading+List */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-center mt-8">
            {/* Image - On mobile, this will be first */}
            <div className="md:w-1/2 w-full flex justify-start md:justify-end items-center order-1 md:order-1">
              <div className="shadow-md overflow-hidden w-[220px] h-[320px] md:w-[260px] md:h-[360px] bg-gray-100 flex items-center justify-center border-8 border-white outline outline-1 outline-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                  alt="Design & Construction Engineering"
                  width={260}
                  height={360}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Text - On mobile, this will be second */}
            <div className="md:w-1/2 w-full flex flex-col md:items-start order-2 md:order-2">
              <h2 className="text-2xl md:text-3xl font-light mb-6 md:mb-40">
                <span className="italic font-serif font-semibold text-pink-400">
                  Design &
                </span>{" "}
                <span className="font-sans text-gray-900">Construction Engineering</span>
              </h2>
              <ul className="text-gray-800 text-base md:text-sm space-y-3 mb-0 list-none md:text-smeft w-full">
                <li className="font-semibold flex flex-col items-start">
                  <span>Assessment of Institutional Requirements</span>
                  <span className="block border-b-2 border-gray-400 w-16 mt-1"></span>
                </li>
                <li className="font-semibold flex flex-col items-start">
                  <span>Building Design Services</span>
                  <span className="block border-b-2 border-gray-400 w-16 mt-1"></span>
                </li>
                <li className="font-semibold flex flex-col items-start">
                  <span>Preliminary Designs and Cost Estimates</span>
                  <span className="block border-b-2 border-gray-400 w-16 mt-1"></span>
                </li>
                <li className="font-semibold flex flex-col items-start">
                  <span>Engineering Design, Bill of Quantities and Cost Estimates</span>
                  <span className="block border-b-2 border-gray-400 w-16 mt-1"></span>
                </li>
                <li className="font-semibold flex flex-col items-start">
                  <span>Technical Specifications and Tender Documents</span>
                  <span className="block border-b-2 border-gray-400 w-16 mt-1"></span>
                </li>
              </ul>
            </div>
          </div>

          {/* 4th Row: List | Image */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-center mt-8">
            {/* Text - On mobile, this will be second */}
            <div className="md:w-1/2 w-full flex flex-col md:items-end order-2 md:order-1">
              <ul className="text-gray-800 text-base md:text-sm space-y-3 mb-0 list-none md:text-smeft w-full mt-6 md:mt-40">
                <li className="font-semibold flex flex-col items-end">
                  <span>Tender Evaluation</span>
                  <span className="block border-b-2 border-gray-400 w-16 mt-1"></span>
                </li>
                <li className="font-semibold flex flex-col items-end">
                  <span>Contract Evaluation</span>
                  <span className="block border-b-2 border-gray-400 w-16 mt-1"></span>
                </li>
                <li className="font-semibold flex flex-col items-end">
                  <span>Urban Design</span>
                  <span className="block border-b-2 border-gray-400 w-16 mt-1"></span>
                </li>
                <li className="font-semibold flex flex-col items-end text-end">
                  <span>Tunnels, Trenchless Technology and Underground Infrastructure</span>
                  <span className="block border-b-2 border-gray-400 w-16 mt-1"></span>
                </li>
                <li className="font-semibold flex flex-col items-end text-end">
                  <span>Rehabilitation of Structures and Heritage Buildings</span>
                  <span className="block border-b-2 border-gray-400 w-16 mt-1"></span>
                </li>
              </ul>
            </div>
            
            {/* Image - On mobile, this will be first */}
            <div className="md:w-1/2 w-full flex justify-end md:justify-start items-center order-1 md:order-2">
              <div className="shadow-md overflow-hidden w-[220px] h-[320px] md:w-[260px] md:h-[360px] bg-gray-100 flex items-center justify-center border-8 border-white outline outline-1 outline-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=400&q=80"
                  alt="Design & Construction Engineering 2"
                  width={260}
                  height={360}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Faded label after 4th row */}
          <div className="w-full flex flex-col items-center mt-4">
            <span className="text-[1rem] md:text-[2.5rem] font-extrabold text-center text-gray-300 opacity-70 tracking-widest uppercase leading-none mb-2">
              DESIGN AND CONSTRUCTION ENGINEERING
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
