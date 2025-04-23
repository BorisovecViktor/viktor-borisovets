'use client'

import { stagger, useAnimate, useInView } from 'motion/react'
import { useEffect } from 'react'
import SplitType from 'split-type'

export const Intro = () => {
  const [scope, animate] = useAnimate()
  const inView = useInView(scope, {
    once: true,
  })

  useEffect(() => {
    new SplitType(scope.current.querySelector('h2'), {
      types: 'lines,words',
      tagName: 'span',
    })
  }, [scope])

  useEffect(() => {
    if (inView) {
      animate(
        scope.current.querySelectorAll('.word'),
        {
          transform: 'translateY(-105%)',
        },
        {
          duration: 0.5,
          delay: stagger(0.2),
        },
      )
    }
  }, [inView, scope, animate])

  return (
    <section id="intro" ref={scope} className="section mt-12 md:mt-16 lg:mt-20">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]">
          Building beautiful websites with clean code and thoughtful design to
          help your business and stand out online
        </h2>
      </div>
    </section>
  )
}
