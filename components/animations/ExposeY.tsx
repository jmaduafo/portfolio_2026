"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

function ExposeY({
  children,
  delay,
}: {
  readonly children: React.ReactNode;
  readonly delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    // margin: "0px 0px -50px 0px"
  });

  return (
    <motion.div
      ref={ref}
      initial={{ gridTemplateRows: "0fr" }}
      animate={
        isInView ? { gridTemplateRows: "1fr" } : { gridTemplateRows: "0fr" }
      }
      transition={{ duration: 0.6, delay: delay ?? 0.6 }}
      className="grid w-full overflow-hidden"
    >
      {/* min-h-0 is strictly required on the child for the grid animation to clip properly */}
      <div className="min-h-0 w-full">{children}</div>
    </motion.div>
  );
}

export default ExposeY;
