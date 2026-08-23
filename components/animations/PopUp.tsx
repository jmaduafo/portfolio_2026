'use client'

import {motion} from 'framer-motion'
import React from 'react'

function PopUp({children}: {readonly children: React.ReactNode}) {
  const variant = {
    initial: {
      y: '100%',
    },
    animate: {
      y: '0%',
    },
  }
  return (
    <div className="overflow-hidden">
      <motion.div
        variants={variant}
        initial="initial"
        whileInView="animate"
        viewport={{once: true}}
        transition={{delay: 0.3, ease: 'easeOut', duration: 0.3 }}
        className=""
      >
        {children}
      </motion.div>
    </div>
  )
}

export default PopUp
