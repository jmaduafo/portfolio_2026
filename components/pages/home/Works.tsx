import WorkCard from "@/components/cards/WorkCard";
import SectionTitle from "@/components/titles/SectionTitle";
import { Button } from "@/components/ui/button";
import { projects } from "@/utils/works";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React, { Fragment } from "react";

function Works() {
  return (
    <section className="flex flex-col gap-6">
      <SectionTitle
        text={`selected works ( ${projects.slice(0, 4).length} )`}
      />
      <div className="grid md:grid-cols-2 gap-8 mt-5">
        {projects.slice(0, 4).map((project) => {
          return (
            <Fragment key={project.title}>
              <WorkCard project={project} />
            </Fragment>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Link href={"/works"}>
          <Button size={"lg"}>
            See all projects
            <ArrowUpRight className="size-6" strokeWidth={1.5}/>
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Works;
