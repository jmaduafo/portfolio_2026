import Appear from "@/components/animations/Appear";
import RollingText from "@/components/animations/RollingText";
import Header2 from "@/components/headings/Header2";
import Header6 from "@/components/headings/Header6";
import SectionTitle from "@/components/titles/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { services } from "@/utils/data";
import { Download } from "lucide-react";
import React from "react";

function Services() {
  return (
    <section className="flex flex-col gap-4" id="services">
      <SectionTitle text="services" />
      <Accordion
        defaultValue={undefined}
        className="border-t border-b border-t-foreground border-b-foreground"
      >
        {services.map((item, i) => {
          return (
            <AccordionItem value={item.title} key={item.title}>
              <AccordionTrigger>
                <div className="flex items-start gap-1.5 sm:gap-3">
                  <p>{(i + 1).toString().padStart(2, "0")}.</p>
                  <RollingText>
                    <Header2
                      className="uppercase font-sans-medium"
                      text={item.title}
                    />
                  </RollingText>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex items-start gap-1.5 sm:gap-3">
                  <p className="invisible">
                    {(i + 1).toString().padStart(2, "0")}.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Header6 text={item.description} />
                    <div className="flex items-center flex-wrap gap-2">
                      {item.technologies.map((desc) => {
                        return (
                          <Badge
                            key={desc}
                            variant="outline"
                            className="capitalize"
                          >
                            {desc}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
      <div className="flex justify-center">
        <Appear>
          <a
            href="/documents/resume.pdf"
            download="Jasmine_Maduafokwa_Resume.pdf"
          >
            <Button size={"lg"}>
              Download resume
              <Download className="size-5" strokeWidth={1.5} />
            </Button>
          </a>
        </Appear>
      </div>
    </section>
  );
}

export default Services;
