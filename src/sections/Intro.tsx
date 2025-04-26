'use client'

import { useInView } from 'motion/react'
import { useEffect, useRef } from 'react'
import { useTextRevealAnimation } from '@/hooks/useTextRevealAnimation'

export const Intro = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { scope, entranceAnimation } = useTextRevealAnimation()
  const inView = useInView(scope, {
    once: true,
  })

  useEffect(() => {
    if (inView) {
      entranceAnimation()
    }
  }, [inView, entranceAnimation])

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="section mt-12 md:mt-16 lg:mt-20"
    >
      <div className="container">
        <h2 ref={scope} className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]">
          Building beautiful websites with clean code and thoughtful design to
          help your business and stand out online
        </h2>
      </div>
    </section>
  )
}
