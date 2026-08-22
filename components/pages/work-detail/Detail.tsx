import Header1 from "@/components/headings/Header1";
import Header2 from "@/components/headings/Header2";
import Header3 from "@/components/headings/Header3";
import Header4 from "@/components/headings/Header4";
import Header6 from "@/components/headings/Header6";
import Paragraph from "@/components/headings/Paragraph";
import SmallParagraph from "@/components/headings/SmallParagraph";
import SectionTitle from "@/components/titles/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { createSlug, deSlug } from "@/utils/helpers";
import { projects } from "@/utils/works";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Detail({ title }: { title: string }) {
  const project = projects.find(
    (project) => project.title.toLowerCase() === deSlug(title),
  );

  const projectIndex = projects.findIndex(
    (project) => project.title.toLowerCase() === deSlug(title),
  );

  if (!project || projectIndex < 0)
    return <Paragraph text="Project not found" />;

  const landscapeImages = project.images.landscape.slice(1);
  const portraitImages = project.images.portrait;

  const durationData = +project.duration.split(" ")[0];
  const durationTitle = project.duration.split(" ")[1];

  const prevProject =
    projects[(projectIndex + projects.length - 1) % projects.length];
  const nextProject =
    projects[(projectIndex + projects.length + 1) % projects.length];

  return (
    <div className="flex flex-col gap-8">
      <section>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 w-full">
            <Image
              src={project.images.landscape[0]}
              alt={`${project.title} opening img`}
              className="object-cover object-center"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col gap-3 lg:max-w-xl xl:max-w-2xl 2xl:max-w-5xl">
            <div>
              <Header1>{project.title}</Header1>
              <div className="flex items-center gap-2 flex-wrap mt-1">
                {project.roles.map((role) => {
                  return (
                    <Badge
                      key={role}
                      variant={"outline"}
                      className="capitalize"
                    >
                      {role}
                    </Badge>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Paragraph
                text={project.descriptions[0]}
                className="font-sans-medium"
              />
              <div className="flex flex-col gap-1">
                <Badge className="text-sm 2xl:text-base">Tools used</Badge>
                {/* <SmallParagraph text="TOOLS USED" className="font-sans-medium underline"/> */}
                <p className="font-sans-medium">
                  {project.technologies.map((tool, i) => {
                    return (
                      <span key={tool} className="capitalize">
                        {tool}
                        {i !== project.technologies.length - 1 ? ", " : ""}
                      </span>
                    );
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="flex-1 flex flex-col gap-5">
          {/* border-t border-t-foreground */}
          <div className="py-6 border-[1.5px] border-foreground flex items-center justify-evenly gap-3">
            <Statistics data={durationData} title={durationTitle} />
            <div className="h-6 w-px bg-foreground/50"></div>
            <Statistics
              data={project.technologies.length}
              title={"tools used"}
            />
            <div className="h-6 w-px bg-foreground/50"></div>
            <Statistics data={project.roles.length} title={"roles"} />
            <div className="h-6 w-px bg-foreground/50"></div>
            <Statistics data={+project.year} title={"year created"} />
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {landscapeImages.map((img, i) => {
            return (
              <div className="md:col-span-2" key={`${img} ${i + 1}`}>
                <Image
                  src={img}
                  alt={`${project.title} landscape img ${i + 1}`}
                  className="object-cover object-center w-full"
                  placeholder={Boolean(img.blurDataURL) ? "blur" : "empty"}
                />
              </div>
            );
          })}
          {portraitImages.map((img, i) => {
            return (
              <div className="md:h-[95vh]" key={`${img} ${i + 1}`}>
                <Image
                  src={img}
                  alt={`${project.title} portrait img ${i + 1}`}
                  className="object-cover object-center h-full w-full"
                  placeholder={Boolean(img.blurDataURL) ? "blur" : "empty"}
                />
              </div>
            );
          })}
        </div>
      </section>
      <section className="py-4 flex flex-row flex-wrap justify-between gap-6">
        <div>
          <Link className="" href={`/works/${createSlug(prevProject.title)}`}>
            <button className="flex items-center gap-2 text-4xl md:text-5xl uppercase font-sans-medium">
              <ArrowLeft className="size-12" />
              {prevProject.title}
            </button>
          </Link>
        </div>
        <div>
          <Link className="" href={`/works/${createSlug(nextProject.title)}`}>
            <button className="flex items-center gap-2 text-4xl md:text-5xl uppercase font-sans-medium">
              {nextProject.title}
              <ArrowRight className="size-12" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Detail;

function Statistics({
  data,
  title,
}: {
  readonly data: number;
  readonly title: string;
}) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <Header2 text={`${data}`} className="font-sans-medium" />
      <Paragraph text={title} />
    </div>
  );
}
