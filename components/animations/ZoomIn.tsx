"use client";
import React from "react";
import { motion } from "framer-motion";

function ZoomIn({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="w-full h-full"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1, transition: { duration: .5, delay: 0.3 } }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default ZoomIn;
