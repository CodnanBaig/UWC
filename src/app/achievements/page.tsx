"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const achievements = [
  {
    title: "Mumbai Trans Harbour Link",
    description: "Led the planning and design of India's longest sea bridge, connecting Mumbai with Navi Mumbai.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    year: "2023",
    category: "Infrastructure",
  },
  {
    title: "Smart City Initiative",
    description: "Implemented comprehensive smart city solutions across multiple urban centers in India.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80",
    year: "2022",
    category: "Urban Development",
  },
  {
    title: "Metro Rail Project",
    description: "Successfully delivered metro rail infrastructure projects in major metropolitan cities.",
    image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=1200&q=80",
    year: "2021",
    category: "Transportation",
  },
  {
    title: "Renewable Energy Integration",
    description: "Pioneered the integration of renewable energy systems in urban infrastructure.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80",
    year: "2020",
    category: "Energy",
  },
];

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="w-full bg-white py-16 md:py-24 px-0">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light text-left mb-8 px-4">
            <span className="italic font-serif">Proud</span>{" "}
            <span className="font-sans">Achievements</span>
          </h1>
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="achievement-swiper"
          >
            {achievements.map((achievement) => (
              <SwiperSlide key={achievement.title}>
                <div className="flex flex-col items-center">
                  <div className="w-full flex justify-center">
                    <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        width={1200}
                        height={500}
                        className="object-cover w-full h-[250px] md:h-[400px]"
                      />
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <div className="text-2xl font-semibold text-gray-900 mb-1">{achievement.title}</div>
                    <div className="text-base text-gray-600 mb-2">{achievement.description}</div>
                    <div className="text-xs text-cyan-700 font-semibold tracking-wide uppercase">{achievement.year} &middot; {achievement.category}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-600 mb-2">50+</div>
              <div className="text-gray-700">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-600 mb-2">15+</div>
              <div className="text-gray-700">Cities Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-600 mb-2">10+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-600 mb-2">100%</div>
              <div className="text-gray-700">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-8">
            <span className="italic font-serif">Ready to</span>{" "}
            <span className="font-sans">Start Your Project?</span>
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Let's work together to create the next landmark achievement in urban development.
          </p>
          <a
            href="/contact"
            className="inline-block bg-cyan-600 text-white px-8 py-3 rounded-lg hover:bg-cyan-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
} 