import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Sectors from "@/components/Sectors";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import Insights from "@/components/Insights";
import Podcast from "@/components/Podcast";
import Interview from "@/components/Interview";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Sectors />
      <Services />
      <Achievements />
      <Insights />
      <Podcast />
      <Interview />


    </>
  );
}
