import Image from "next/image";

export default function Services() {
  return (
    <section className="w-full bg-white py-12 md:py-20 px-4">
      <div className="max-w-4xl w-full mx-auto flex flex-col items-start">
        {/* Heading above */}
        <h2 className="text-3xl md:text-4xl font-light text-left mb-6">
          <span className="italic font-serif text-4xl md:text-5xl text-gray-900">Our</span>{" "}
          <span className="font-sans text-gray-900">Services</span>
        </h2>
        {/* Description below heading */}
        <div className="w-full pl-0 md:pl-60 mb-8">
          <p className="text-gray-700 text-sm mb-2 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam ut wisi enim ad minim.
          </p>
        </div>
        {/* Image and services list row */}
        <div className="w-full pl-0 md:pl-60 flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400&h=250&auto=format&fit=crop"
              alt="Services"
              width={400}
              height={250}
              className="object-cover shadow-md"
            />
          </div>
          <ul className="flex-1 flex flex-col justify-center gap-4 text-blue-800 text-lg min-w-[260px] ">
            <li><span className="font-serif italic text-xl text-blue-900">Studies</span> <span className="text-gray-800">and Planning</span> <span className="text-blue-900">›</span><div className="w-16 border-b-2 border-blue-800 mt-1" /></li>
            <li><span className="font-serif italic text-xl text-blue-900">Design</span> <span className="text-gray-800">& Construction Engineering</span><div className="w-16 border-b-2 border-blue-800 mt-1" /></li>
            <li><span className="font-serif italic text-xl text-blue-900">Project</span> <span className="text-gray-800">Management</span><div className="w-16 border-b-2 border-blue-800 mt-1" /></li>
            <li><span className="font-serif italic text-xl text-blue-900">Financial</span> <span className="text-gray-800">Management</span><div className="w-16 border-b-2 border-blue-800 mt-1" /></li>
            <li><span className="font-serif italic text-xl text-blue-900">Surveys</span> <span className="text-gray-800">and Investigations</span><div className="w-16 border-b-2 border-blue-800 mt-1" /></li>
            <li><span className="font-serif italic text-xl text-blue-900">Other</span> <span className="text-gray-800">Services</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
} 