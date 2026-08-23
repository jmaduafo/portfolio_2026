"use client";
import { motion } from "framer-motion";
import React from "react";

function Descend({ children }: { readonly children: React.ReactNode }) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
    >
      {children}
    </motion.div>
  );
}

export default Descend;
