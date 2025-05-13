import Link from "next/link";

export default function About() {
  return (
    <section className="w-full bg-white py-12 md:py-20 px-4">
      <div className="max-w-4xl w-full mx-auto flex flex-col items-start">
        {/* Heading above */}
        <h2 className="text-3xl md:text-4xl font-light text-left mb-6">
          <span className="italic font-serif text-4xl md:text-5xl text-gray-900">Discover</span>{" "}
          <span className="font-sans text-gray-900">Urban World Consulting</span>
        </h2>
        {/* Content below */}
        <div className="w-full pl-0 md:pl-60">
          <p className="text-gray-700 text-sm mb-6 leading-relaxed">
            URBAN WORLD Consulting Pvt. Ltd., founded by Mr. RA Rajeev, is a Mumbai based urban strategy consulting company partnering with clients on their most complex challenges in the urban sector and delivering innovative solutions that create sustainable environments.
          </p>
          <p className="text-gray-700 text-sm mb-8 leading-relaxed">
            We believe that there is an urgency to rethink the way we create or manage our cities. Our mission is to create an inclusive and happy urban life. We strive to advocate visual enhancement of our built environments while combining public art and urban design.
          </p>
          <Link href="/company" className="inline-block font-semibold italic font-serif text-lg text-gray-900 border-b-2 border-gray-400 hover:text-cyan-700 transition pr-2">
            The Company <span className="ml-1">&rsaquo;</span>
          </Link>
        </div>
      </div>
    </section>
  );
} 