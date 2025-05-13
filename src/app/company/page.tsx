"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const workProjects = [
  {
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=80",
    caption: "Bicycle Parking Plan at Railway Station for Pune City",
  },
  {
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=900&q=80",
    caption: "Smart City Model for Urban Development",
  },
  {
    image: "https://images.unsplash.com/photo-1503389152951-9c3d0c6b7a5a?auto=format&fit=crop&w=900&q=80",
    caption: "Green Infrastructure Initiative",
  },
];

export default function Company() {
  const workSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[260px] md:h-[340px] lg:h-[380px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"
          alt="Company Hero"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 pb-10">
          <h1 className="text-4xl md:text-5xl font-light text-white italic font-serif inline-block border-b-4 border-white pb-2 px-2">
            The Company
          </h1>
        </div>
      </section>

      {/* About Section - match home page styling */}
      <section className="w-full bg-white py-12 md:py-20 px-4">
        <div className="max-w-4xl w-full mx-auto flex flex-col items-start">
          {/* Heading above */}
          <h2 className="text-3xl md:text-4xl font-light text-left mb-6">
            <span className="italic font-serif text-4xl md:text-5xl text-gray-900">Discover</span>{" "}
            <span className="font-sans text-gray-900">Urban World Consulting</span>
          </h2>
          {/* Content & Image row */}
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-2/3 pl-0 md:pr-8">
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                <span className="italic font-semibold">Urban World Consulting Pvt. Ltd.</span>, founded by Mr. R. A. Rajeev, is a Mumbai based urban strategy consulting company partnering with clients on their most complex challenges in the urban sector and delivering innovative solutions that create sustainable environments.
              </p>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                We believe that there is an urgency to rethink the way we create or manage our cities. Our mission is to create an inclusive and happy urban life. We strive to advocate visual enhancement of our built environments while combining public art and urban design.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                By approaching urban environment in a creative way, and focusing on citizen's well-being, we can create well connected and equitable communities. The core principles of UWC are inclusiveness, embracing complexities, devising and implementing innovative solutions to achieve resilient cities.
              </p>
              <p className="text-gray-700 text-sm mt-4 leading-relaxed">
                Our teams push the horizon of what's possible and build legacies for the coming future generations. We believe that it is possible to plan, create and manage high density urban centres with less carbon footprints and build a more livable and affordable urban environment in an increasingly sustainable manner.
              </p>
            </div>
            <div className="w-full md:w-1/3 mt-6 md:mt-0 flex justify-center">
              <div className="w-full max-w-xs h-[420px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80"
                  alt="Urban World Consulting"
                  width={400}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="w-full bg-white py-12 md:py-20 px-4 relative overflow-visible">
        {/* Faded logo background - centered on mobile, left on desktop */}
        {/* <div className="absolute inset-0 flex items-center justify-center md:justify-start md:left-0 md:top-1/2 md:-translate-y-1/2 opacity-10 z-0 pointer-events-none select-none">
          <div className="w-2/3 md:w-1/3 h-[400px] md:h-[400px]">
            <img src="/assets/UWC Regd Logo Only.png" alt="Faded Logo" className="w-full h-full object-contain" />
          </div>
        </div> */}
        <div className="max-w-4xl w-full mx-auto flex flex-col items-start relative z-10">
          {/* Heading above */}
          <h2 className="text-3xl md:text-4xl font-light text-left mb-6">
            <span className="italic font-serif text-4xl md:text-5xl text-gray-900">Our</span>{" "}
            <span className="font-sans text-gray-900">Work</span>
          </h2>
          {/* Slider below */}
          <div className="w-full pl-0 md:pl-60">
            <Slider {...workSettings}>
              {workProjects.map((project, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-full rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={project.image}
                      alt={project.caption}
                      width={900}
                      height={400}
                      className="object-cover w-full h-[220px] md:h-[350px]"
                    />
                  </div>
                  <div className="mt-4 text-left text-sm italic text-gray-800">
                    {project.caption}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </main>
  );
} 