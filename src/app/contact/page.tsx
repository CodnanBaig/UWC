"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[180px] md:h-[220px] lg:h-[320px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80"
          alt="Contact Hero"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 pb-4 md:pb-8 flex flex-col items-start">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-white italic font-serif border-b-4 border-white pb-1 md:pb-2 px-2">
            Contact <span className="not-italic font-sans">Us</span>
          </h1>
        </div>
      </section>

      {/* Main Section */}
      <section className="w-full bg-blue-50/10 py-6 sm:py-8 md:py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-pink-400 mb-1 font-light">Ready to Make a Change?</h2>
            <div className="text-xl sm:text-2xl md:text-3xl text-pink-400 font-light">Let's Talk</div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">
            {/* Contact Info */}
            <div className="w-full md:w-1/3 flex flex-col gap-6 md:gap-8 mb-8 md:mb-0">
              <div>
                <div className="font-serif italic text-lg md:text-xl font-semibold text-gray-700 mb-1 md:mb-2">Address</div>
                <div className="text-gray-700 text-sm leading-relaxed">
                  Urban World Consulting Pvt Ltd.,<br />
                  ONE BKC, C - 1419, G Block,<br />
                  Bandra Kurla Complex,<br />
                  Bandra (East), Mumbai - 400051
                </div>
              </div>
              <div>
                <div className="font-serif italic text-lg md:text-xl font-semibold text-gray-700 mb-1 md:mb-2">Email</div>
                <div className="text-gray-700 leading-relaxed">
                  urbanworldconsulting@gmail.com<br />
                  helpdesk@urbanworldco.in
                </div>
              </div>
              <div>
                <div className="font-serif italic text-lg md:text-xl font-semibold text-gray-700 mb-1 md:mb-2">Phone</div>
                <div className="text-gray-700 leading-relaxed">022 6625 2401</div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="w-full md:w-2/3 bg-blue-100/40 rounded-md p-5 md:p-8 shadow-sm flex flex-col gap-5 md:gap-6">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5">
                <div>
                  <label className="block text-gray-700 mb-1 md:mb-2 text-sm">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-1 border border-gray-200 focus:outline-red focus:border-pink-300 bg-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1 md:mb-2 text-sm">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-1 border border-gray-200 text-sm focus:outline-red focus:border-pink-300 bg-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1 md:mb-2 text-sm">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-1 border border-gray-200 text-sm focus:outline-red focus:border-pink-300 bg-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1 md:mb-2 text-sm">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 md:px-4 py-1 border border-gray-200 text-sm focus:outline-red focus:border-pink-300 bg-white"
                    required
                  />
                </div>
                <div className="mt-1 md:mt-2">
                  <button
                    type="submit"
                    className="bg-transparent text-start text-black py-1 border-b-2 border-black font-medium hover:border-pink-400 hover:text-pink-400 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-6 sm:py-8 px-4">
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow">
          <iframe
            title="Urban World Consulting Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.788073964479!2d72.8684473153676!3d19.0675809870997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8f1e2e2e2e3%3A0x2e2e2e2e2e2e2e2e!2sONE%20BKC!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
} 