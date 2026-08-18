"use client";
import WorkCard from "@/components/cards/WorkCard";
import Header1 from "@/components/headings/Header1";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Role } from "@/types/types";
import { getFilteredProjectsByRole } from "@/utils/helpers";
import { projects } from "@/utils/works";
import React, { Fragment, useState } from "react";
import { motion } from "framer-motion";

function WorksList() {
  const [selectedTag, setSelectedTag] = useState("all");

  return (
    <section className="">
      <div className="flex flex-col gap-3">
        <Header1>
          Works ({" "}
          {selectedTag === "all"
            ? projects.length
            : getFilteredProjectsByRole(projects, selectedTag).length}{" "}
          )
        </Header1>
        <div className="flex items-center flex-wrap gap-2">
          <Button
            variant={"outline"}
            className={cn(
              "text-base hover:bg-foreground hover:text-background",
              selectedTag === "all"
                ? "bg-foreground text-background"
                : "bg-background text-foreground",
            )}
            onClick={() => setSelectedTag("all")}
          >
            All
          </Button>
          {Object.values(Role).map((role) => {
            return (
              <Button
                onClick={() => {
                  setSelectedTag(role);
                }}
                key={role}
                variant={"outline"}
                className={cn(
                  "text-base hover:bg-foreground hover:text-background",
                  selectedTag === role
                    ? "bg-foreground text-background"
                    : "bg-background text-foreground",
                )}
              >
                {role}
              </Button>
            );
          })}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mt-5">
        {selectedTag === "all"
          ? projects.map((project) => {
              return (
                <motion.div layout key={project.title}>
                  <WorkCard project={project} />
                </motion.div>
              );
            })
          : getFilteredProjectsByRole(projects, selectedTag).map((project) => {
              return (
                <motion.div layout key={project.title}>
                  <WorkCard project={project} />
                </motion.div>
              );
            })}
      </div>
    </section>
  );
}

export default WorksList;
