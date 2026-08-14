import Header1 from "@/components/headings/Header1";
import Image from "next/image";
import React from "react";
import HeroImage from "@/public/images/home/hero.jpg";

function Hero() {
  return (
    <section className="flex flex-col gap-6">
      <Header1 className="max-w-3xl">
        <span className="">
          I'm <span className="font-sans-italic">Jasmine Maduafokwa</span>, a
          web developer and UI/UX designer based in Chicago, Illinois
        </span>
      </Header1>
      <div className="">
        <Image
          src={HeroImage}
          alt="ipad on leather couch"
          className="object-cover object-bottom"
          placeholder="blur"
        />
      </div>
    </section>
  );
}

export default Hero;
