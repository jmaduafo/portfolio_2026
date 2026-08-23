'use client'

import {motion} from 'framer-motion'
import React from 'react'

function Appear({children}: {readonly children: React.ReactNode}) {
  const variant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  }

  return (
    <motion.div
      variants={variant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay: 0.3, ease: "easeIn", duration: 0.4 }}
    >
      {children}
    </motion.div>
  )
}

export default Appear
