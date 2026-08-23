'use client'

import {cn} from '@/lib/utils'
import {motion, useScroll, useTransform} from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import React, {useRef} from 'react'

function Parallax({
  height,
  image,
  alt,
  scale,
}: {
  readonly height?: string
  readonly image: StaticImageData
  readonly alt: string
  readonly scale?: string
}) {
  const containerRef = useRef(null)

  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const yScroll = useTransform(scrollYProgress, [0, 1], ['10%', '0%'])

  return (
    <div ref={containerRef} className={cn('overflow-hidden w-full h-auto', height)}>
      <motion.div style={{y: yScroll}} className={cn('w-full', scale)}>
        <Image
          src={image}
          alt={alt}
          className={cn("w-full object-cover object-center scale-125")}
          placeholder='blur'
        />
      </motion.div>
    </div>
  )
}

export default Parallax
