"use client";
import Image from "next/image";

const publications = [
  {
    title: "Urban Mobility: The Future of Cities",
    description: "A comprehensive report on the evolution and future of urban mobility systems in India.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    title: "Smart Energy for Sustainable Growth",
    description: "Insights into smart energy solutions and their impact on sustainable urban development.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    title: "Design & Construction Engineering Innovations",
    description: "Latest trends and case studies in design and construction engineering for urban infrastructure.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
];

export default function Publications() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[220px] md:h-[320px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80"
          alt="Publications Hero"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 pb-8 flex flex-col items-start">
          <h1 className="text-3xl md:text-4xl font-light text-white italic font-serif border-b-4 border-white pb-2 px-2">
            Publications
          </h1>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="w-full bg-white py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {publications.map((pub, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="relative w-full h-48">
                <Image
                  src={pub.image}
                  alt={pub.title}
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold mb-2 text-gray-900">{pub.title}</h2>
                <p className="text-gray-700 text-base mb-4 flex-1">{pub.description}</p>
                <a
                  href={pub.link}
                  className="text-pink-500 underline font-medium mt-auto hover:text-pink-700 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 