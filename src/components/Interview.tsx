import Link from "next/link";

export default function Interview() {
  return (
    <section className="w-full bg-white py-12 md:py-20 px-4">
      <div className="max-w-4xl w-full mx-auto flex flex-col items-start">
        {/* Heading above */}
        <h2 className="text-3xl md:text-4xl font-light text-left mb-6">
          <span className="italic font-serif text-4xl md:text-5xl text-gray-900">Interview</span>{" "}
          <span className="font-sans text-gray-900">with the Founder Director</span>
        </h2>
        {/* Content below */}
        <div className="w-full pl-0 md:pl-60">
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            UWC's policy & research staff led the work in 2023 on a new standard. The papers, articles & the innovative scalable solutions contain a deep challenge and a vision for the future. For further information, visit our sections or follow updates posted by the founder.
          </p>
          <p className="text-cyan-700 text-base font-light mb-4">Delivering a better urban world</p>
          <Link href="#" className="inline-block font-semibold italic font-serif text-lg text-gray-900 border-b-2 border-gray-400 hover:text-cyan-700 transition pr-2">
            Watch the full interview <span className="ml-1">&rsaquo;</span>
          </Link>
        </div>
      </div>
    </section>
  );
} 