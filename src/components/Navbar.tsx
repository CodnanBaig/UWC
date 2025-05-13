"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "The Company", href: "/company" },
  { name: "Sectors", href: "/sectors" },
  { name: "Services", href: "/services" },
  { name: "Publications", href: "/publications" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-black sticky top-0 z-50 border-b border-neutral-800">
      <nav className="max-w-4xl mx-auto flex items-center justify-between py-2 md:py-0 h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-16 h-16 flex items-center justify-center">
            <Image
              src="/assets/UWC Regd Logo Only.png"
              alt="UWC Logo"
              width={72}
              height={72}
              className="object-contain w-16 ms-5 h-16"
              priority
            />
          </div>
        </Link>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-3 text-sm font-extralight">
          {navLinks.map((link) => (
            <li key={link.name} className="h-20 flex items-center">
              <Link
                href={link.href}
                className={`text-white px-2 py-1 transition-colors border-b-2 border-transparent hover:border-cyan-400 hover:text-cyan-400 ${
                  pathname === link.href ? "border-cyan-400 text-cyan-400" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Open menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-black md:hidden animate-fade-in z-50 border-b border-neutral-800">
            <ul className="flex flex-col gap-2 py-4 px-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`block py-2 px-2 text-lg text-white hover:text-cyan-400 border-b border-neutral-800 ${
                      pathname === link.href ? "text-cyan-400" : ""
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
} 