import React from "react";
import { Project } from "@/types/types";
import { Badge } from "../ui/badge";
import Header5 from "../headings/Header5";

function WorkCard({ project }: { readonly project?: Project }) {
  const sample_roles = ["frontend", "backend", "web design"];
  return (
    <div className="flex flex-col gap-3">
      <div className="bg-accent-foreground h-[50vh]"></div>
      <div>
        <Header5 text="TechStar" className="font-sans-medium capitalize" />
        <div className="mt-1 flex items-center gap-2">
          {sample_roles.map((role) => {
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
