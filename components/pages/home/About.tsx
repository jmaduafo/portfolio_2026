import Header3 from "@/components/headings/Header3";
import SectionTitle from "@/components/titles/SectionTitle";
import Image from "next/image";
import React from "react";
import About1 from "@/public/images/home/about1.jpg";
import About2 from "@/public/images/home/about2.jpg";
"I'm Jasmine Maduafokwa, a"
  const line2 = "full stack developer with a focus"
  const line3 = "on frontend technologies"
  const line4 = "combined with a passion for"
  const line5 = "user interface design and other"
  const line6 = "design mediums that allow me"
  const line7 = "to create digital, engaging"
  const line8 = "experiences."
function About() {
  return (
    <section className="flex flex-col gap-7" id="about">
      <div className="flex flex-col gap-5 md:flex-row justify-between items-start">
        <SectionTitle text="About" />
        <Header3
          className="indent-10 font-sans-medium max-w-5xl"
          text="I am a full-stack developer with a focus on frontend technologies combined with a passion for user interface and experience design as well as other design mediums that allow me to create digital, engaging experiences."
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-end gap-3 items-start md:w-[63%] ml-auto">
        <div className="flex-1">
          <Image
            src={About1}
            alt="two mobile phones on black platform"
            className="object-cover object-bottom"
            placeholder="blur"
          />
        </div>
        <div className="flex-2">
          <Image
            src={About2}
            alt="mobile phone leaning on rock"
            className="object-cover object-bottom"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
