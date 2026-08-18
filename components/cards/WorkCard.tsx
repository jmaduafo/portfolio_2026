import React from "react";
import { Project } from "@/types/types";
import { Badge } from "../ui/badge";
import Header5 from "../headings/Header5";
import Image from "next/image";
import Link from "next/link";
import { createSlug } from "@/utils/helpers";

function WorkCard({ project }: { readonly project: Project }) {
  return (
    <Link href={`/works/${createSlug(project.title)}`}>
      <div className="flex flex-col gap-3">
        <div className="h-[50vh] w-full group overflow-hidden">
          <Image
            src={project.images.landscape[0]}
            alt={`${project.title.toLowerCase()} landscape`}
            className="object-cover object-center h-full group-hover:scale-105 duration-300"
            placeholder="blur"
          />
        </div>
        <div>
          <Header5
            text={project.title}
            className="font-sans-medium capitalize"
          />
          <div className="mt-1.5 flex items-center gap-1">
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
    </Link>
  );
}

export default WorkCard;
