import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-12 pb-4 px-4 relative overflow-hidden">
      {/* Big faded logo background */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
        <div className="w-full h-full max-w-5xl opacity-10">
          <img src="/assets/UWC Regd Logo Only.png" alt="UWC Background Logo" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8 relative z-10">
        {/* Logo left - bigger */}
        <div className="flex flex-col items-start mb-6 md:mb-0">
          <div className="w-28 h-28 flex items-center justify-center mb-2">
            <Image
              src="/assets/UWC Regd Logo Only.png"
              alt="UWC Logo Small"
              width={120}
              height={120}
              className="object-contain w-28 h-28"
              priority
            />
          </div>
        </div>
        {/* Contact center - left aligned */}
        <div className="flex flex-col items-start mb-6 md:mb-0 md:mx-auto md:pl-8">
          <div className="font-semibold text-base mb-2">Contact Us</div>
          <div className="text-sm text-gray-300 mb-1">Email: urbanworldconsulting@gmail.com</div>
          <div className="text-sm text-gray-300">Phone: 022 6625 2401</div>
        </div>
        {/* Social right - with icons */}
        <div className="flex flex-col items-end">
          <div className="font-semibold text-base mb-2">Follow Us On</div>
          <div className="flex gap-4">
            <a href="#" className="bg-white rounded-full p-1.5 hover:opacity-80 transition">
              <Facebook className="w-5 h-5 text-black" />
            </a>
            <a href="#" className="bg-white rounded-full p-1.5 hover:opacity-80 transition">
              <Twitter className="w-5 h-5 text-black" />
            </a>
            <a href="#" className="bg-white rounded-full p-1.5 hover:opacity-80 transition">
              <Linkedin className="w-5 h-5 text-black" />
            </a>
            <a href="#" className="bg-white rounded-full p-1.5 hover:opacity-80 transition">
              <Instagram className="w-5 h-5 text-black" />
            </a>
            <a href="#" className="bg-white rounded-full p-1.5 hover:opacity-80 transition">
              <Youtube className="w-5 h-5 text-black" />
            </a>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-8 border-t border-gray-800 pt-3 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center">
        <div>© 2025 Urban World Consulting</div>
      </div>
    </footer>
  );
} 