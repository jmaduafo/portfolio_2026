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
    <section className="flex flex-col gap-4">
      <SectionTitle text="services" />
      <Accordion
        defaultValue={undefined}
        className="border-t border-b border-t-foreground border-b-foreground"
      >
        {services.map((item, i) => {
          return (
            <AccordionItem value={item.title} key={item.title}>
              <AccordionTrigger>
                <div className="flex items-start gap-3">
                  <p>{(i + 1).toString().padStart(2, "0")}.</p>
                  <Header2
                    className="uppercase font-sans-medium"
                    text={item.title}
                  />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex items-start gap-3">
                  <p className="invisible">
                    {(i + 1).toString().padStart(2, "0")}.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Header6 text={item.description} />
                    <div className="flex items-center gap-2">
                      {item.technologies.map((desc) => {
                        return (
                          <Badge key={desc} variant="outline" className="capitalize">
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
        <Button size={"lg"}>
            Download resume
            <Download className="size-5" strokeWidth={1.5}/>
        </Button>
      </div>
    </section>
  );
}

export default Services;
