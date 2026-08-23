import React from "react";
import { Project } from "@/types/types";
import { Badge } from "../ui/badge";
import Image from "next/image";
import Link from "next/link";
import { createSlug } from "@/utils/helpers";
import Header4 from "../headings/Header4";

function WorkCard({ project }: { readonly project: Project }) {
  return (
    <div className="flex flex-col gap-3">
      <Link href={`/works/${createSlug(project.title)}`}>
        <div className="h-[40vh] md:h-[50vh] w-full group overflow-hidden">
          <Image
            src={project.images.landscape[0]}
            alt={`${project.title.toLowerCase()} landscape`}
            className="object-cover object-center h-full group-hover:scale-105 duration-300"
            placeholder="blur"
          />
        </div>
      </Link>
      <div>
        <Header4 text={project.title} className="font-sans-medium capitalize" />
        <div className="mt-1.5 flex items-center flex-wrap gap-1">
          {project.roles.map((role) => {
            return (
              <Badge variant={"outline"} key={role}>
                {role}
              </Badge>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
