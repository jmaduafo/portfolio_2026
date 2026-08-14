import Header3 from "@/components/headings/Header3";
import Header6 from "@/components/headings/Header6";
import SectionTitle from "@/components/titles/SectionTitle";
import Image from "next/image";
import React from "react";
import About1 from "@/public/images/home/about1.jpg";
import About2 from "@/public/images/home/about2.jpg";

function About() {
  return (
    <section className="flex flex-col gap-7">
      <div className="flex flex-col gap-5 md:flex-row justify-between items-start">
        <SectionTitle text="About" />
        <Header3
          className="indent-10 font-sans-medium max-w-5xl"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-end gap-3 items-start md:w-[63%] ml-auto">
        <div className="flex-1">
          <Image
            src={About1}
            alt="two mobile phones on black platform"
            className="object-cover object-bottom"
          />
        </div>
        <div className="flex-2">
          <Image
            src={About2}
            alt="mobile phone leaning on rock"
            className="object-cover object-bottom"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
