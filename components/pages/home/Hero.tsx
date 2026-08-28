import Header1 from "@/components/headings/Header1";
import Image from "next/image";
import React from "react";
import HeroImage from "@/public/images/home/hero.jpg";
import Parallax from "@/components/animations/Parallax";
import ParagraphAnimation from "@/components/animations/ParagraphAnimation";

function Hero() {
  return (
    <section className="flex flex-col gap-6" id="home">
      <Header1 className="max-w-3xl">
        <ParagraphAnimation>
          I'm Jasmine Maduafokwa,
          a web developer and UI designer based in Chicago, Illinois
        </ParagraphAnimation>
      </Header1>
      <div className="">
        <Parallax image={HeroImage} alt="ipad on leather couch" />
      </div>
    </section>
  );
}

export default Hero;
