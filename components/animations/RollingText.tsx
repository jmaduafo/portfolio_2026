'use client'

import {motion} from 'framer-motion'
import React from 'react'

function RollingText({children}: {readonly children: React.ReactNode}) {
  const containerVariant = {
    initial: {
      y: 0,
    },
    hover: {
      y: 0,
    },
  }

  const textVariant = {
    initial: {
      y: '0%',
    },
    hover: {
      y: '-100%',
    },
  }

  return (
    <motion.div
      className="relative overflow-hidden"
      variants={containerVariant}
      initial="initial"
      whileHover="hover"
    >
      <motion.div variants={textVariant}>{children}</motion.div>
      <motion.div variants={textVariant} className="absolute top-full left-0 ">
        {children}
      </motion.div>
    </motion.div>
  )
}

export default RollingText
