import WorkCard from "@/components/cards/WorkCard";
import SectionTitle from "@/components/titles/SectionTitle";
import React, { Fragment } from "react";

function Works() {
  return (
    <section>
      <SectionTitle text={`selected works ( 4 )`} />
      <div className="grid md:grid-cols-2 gap-8 mt-5">
        {Array.from({ length: 4 }).map((_, i) => {
          return (
            <Fragment key={i + 1}>
              <WorkCard />
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}

export default Works;
