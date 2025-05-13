"use client";
import Image from "next/image";

const sectorData = [
  {
    title: "Urban Mobility",
    hero: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80",
    bannerImage: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80",
    paragraphs: [
      "In modern times, cities are known to be drivers of growth for a nation. The activities which we reach in order to live are dependent upon the mobility systems that are built. However, today many cities' mobility systems are standing on a burning platform and if action is not taken in the very near future, they will play a major role in slowing the growth of development of their host nations. The reform of urban mobility systems is one of the biggest challenges confronting policymakers, stakeholders and consumers today. We at UWC believe that a major push is required to bring in an innovative, ambitious, equitable and rational approach to make cities sustainable by transforming mobility.",
      "As cities continue to recover and reinvent themselves from the pandemic to provide equitable, safe and sustainable places for people to live, play and thrive, we believe that supporting and advancing equitable urban mobility systems in cities will deliver long-lasting outcomes.",
      "Clearly, urban mobility is a major societal challenge. But human ingenuity and innovation, if supported by a well-articulated and strongly backed vision, can bring positive outcomes for the benefit of all.",
    ],
    supportingImages: [
      {
        src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80",
        alt: "City Bus at Night"
      },
      {
        src: "https://images.unsplash.com/photo-1570355661836-173e00fef45d?auto=format&fit=crop&w=600&q=80",
        alt: "Double Decker Bus"
      },
      {
        src: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=600&q=80",
        alt: "Urban Highway Junction"
      }
    ],
    portraitImage: "https://images.unsplash.com/photo-1580323956606-036ab21c1981?auto=format&fit=crop&w=600&q=80"
  },
  // Add more sector objects here for Smart Energy, Infrastructure, etc.
];

export default function Sectors() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <section className="relative w-full h-[260px] md:h-[340px] lg:h-[380px] flex items-end">
        <Image
          src={sectorData[0].bannerImage}
          alt="Sectors Hero"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 pb-10">
          <h1 className="text-4xl md:text-5xl font-light text-white italic font-serif inline-block border-b-4 border-white pb-2 px-2">
            Our Sectors
          </h1>
        </div>
      </section>
      
      {/* Urban Mobility Section */}
      <section className="w-full relative py-16 md:py-20 px-4 overflow-hidden">
        {/* Background faded label - removed as we'll add it at the end */}
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Left column: Title */}
            <div className="w-full md:w-1/4">
              <h2 className="text-2xl md:text-3xl font-light sticky md:top-10 mb-8 md:mb-0">
                <span className="italic font-serif text-3xl md:text-4xl text-gray-900 block md:inline">Urban</span>{" "}
                <span className="font-sans text-gray-900">Mobility</span>
              </h2>
            </div>
            
            {/* Right column: Content */}
            <div className="w-full md:w-3/4">
              {/* Hero Image */}
              <div className="mb-8">
                <Image
                  src={sectorData[0].hero}
                  alt="High Speed Train"
                  width={1200}
                  height={500}
                  className="w-full rounded-lg shadow-md object-cover aspect-[21/9]"
                />
              </div>
              
              {/* First paragraph */}
              <div className="mb-8 text-sm md:text-base text-gray-800 leading-relaxed">
                <p className="mb-0 md:text-sm" dangerouslySetInnerHTML={{ __html: sectorData[0].paragraphs[0] }}></p>
              </div>
              
              {/* Supporting images grid - 2 images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Image
                  src={sectorData[0].supportingImages[0].src}
                  alt={sectorData[0].supportingImages[0].alt}
                  width={600}
                  height={350}
                  className="rounded-lg shadow-md object-cover w-full h-[280px]"
                />
                <Image
                  src={sectorData[0].supportingImages[1].src}
                  alt={sectorData[0].supportingImages[1].alt}
                  width={600}
                  height={350}
                  className="rounded-lg shadow-md object-cover w-full h-[280px]"
                />
              </div>
              
              {/* Text left and portrait image right */}
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <div className="w-full md:w-2/4">
                  <div className="text-sm md:text-base text-gray-800 leading-relaxed">
                    <p className="mb-4 md:text-sm" dangerouslySetInnerHTML={{ __html: sectorData[0].paragraphs[1] }}></p>
                    <p className="md:text-sm" dangerouslySetInnerHTML={{ __html: sectorData[0].paragraphs[2] }}></p>
                  </div>
                </div>
                <div className="w-full md:w-2/4">
                  <div className="rounded-lg overflow-hidden shadow-md h-[420px]">
                    <Image
                      src={sectorData[0].portraitImage}
                      alt="Urban Highway Junction"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Urban Mobility text positioned right after content */}
              <div className="w-full mt-12">
                <h3 className="text-5xl md:text-7xl font-medium tracking-wider uppercase text-gray-200">
                  URBAN MOBILITY
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Removed the standalone Urban Mobility section that was too large */}
    </main>
  );
} 