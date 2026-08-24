import Header3 from "@/components/headings/Header3";
import SectionTitle from "@/components/titles/SectionTitle";
import Image from "next/image";
import React from "react";
import About1 from "@/public/images/home/about1.jpg";
import About2 from "@/public/images/home/about2.jpg";
import ExposeY from "@/components/animations/ExposeY";
import ParagraphAnimation from "@/components/animations/ParagraphAnimation";

function About() {
  return (
    <section className="flex flex-col gap-7" id="about">
      <div className="flex flex-col gap-5 lg:flex-row justify-between items-start">
        <SectionTitle text="About" />
        <Header3 className="font-sans-medium max-w-5xl">
          <ParagraphAnimation>
            I am a full-stack developer with a focus on frontend technologies
            combined with a passion for user interface and experience design as
            well as other design mediums that allow me to create digital,
            engaging experiences.
          </ParagraphAnimation>
        </Header3>
      </div>
      <div className="flex flex-col sm:flex-row justify-end gap-3 items-start md:w-[63%] ml-auto">
        <div className="flex-1">
          <ExposeY>
            <Image
              src={About1}
              alt="two mobile phones on black platform"
              className="object-cover object-bottom"
              placeholder="blur"
              loading="lazy"
            />
          </ExposeY>
        </div>
        <div className="flex-2">
          <ExposeY delay={0.65}>
            <Image
              src={About2}
              alt="mobile phone leaning on rock"
              className="object-cover object-bottom"
              placeholder="blur"
              loading="lazy"
            />
          </ExposeY>
        </div>
      </div>
    </section>
  );
}

export default About;
