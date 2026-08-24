"use client";
import React from "react";
import { motion } from "framer-motion";

function ParagraphAnimation({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <span className="flex gap-x-2 flex-wrap">
      {children
        ?.toString()
        .split(" ")
        .map((text, i) => {
          return (
            <span
              className="overflow-hidden inline-grid"
              key={`${text} ${i + 1}`}
            >
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className=""
              >
                {text}
              </motion.span>
            </span>
          );
        })}
    </span>
  );
}

export default ParagraphAnimation;
