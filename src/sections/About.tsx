'use client'

import { useEffect, useRef } from 'react'
import { useTextRevealAnimation } from '@/hooks/useTextRevealAnimation'
import { useInView } from 'motion/react'
import { motion } from 'framer-motion'
import { CssIcon, HtmlIcon, JsIcon } from '@/assets/icons'
import { Card, CardHeader, ToolboxItems } from '@/components'

const toolboxItems = [
  { title: 'JavaScript', iconType: JsIcon },
  { title: 'HTML5', iconType: HtmlIcon },
  { title: 'CSS3', iconType: CssIcon },
  { title: 'React', iconType: HtmlIcon },
  { title: 'Next.js', iconType: HtmlIcon },
  { title: 'Typescript', iconType: HtmlIcon },
  { title: 'Redux toolkit', iconType: HtmlIcon },
  { title: 'React query', iconType: HtmlIcon },
  { title: 'Material UI', iconType: HtmlIcon },
  { title: 'Tailwind css', iconType: HtmlIcon },
  { title: 'React hook form', iconType: HtmlIcon },
  { title: 'Jest', iconType: HtmlIcon },
  { title: 'Webpack', iconType: HtmlIcon },
  { title: 'Vite', iconType: HtmlIcon },
  { title: 'Figma', iconType: HtmlIcon },
]

const hobbies = [
  { title: 'Painting', emoji: '🎨', left: '2%', top: '5%' },
  { title: 'Photography', emoji: '📷', left: '50%', top: '5%' },
  { title: 'Hiking', emoji: '🥾', left: '35%', top: '40%' },
  { title: 'Gaming', emoji: '🎮', left: '5%', top: '35%' },
  { title: 'Music', emoji: '🎵', left: '78%', top: '45%' },
  { title: 'Fitness', emoji: '🏋️‍♂️', left: '1%', top: '65%' },
  { title: 'Reading', emoji: '📚', left: '45%', top: '70%' },
  { title: 'Yoga', emoji: '📚', left: '16%', top: '76%' },
  { title: 'Cooking', emoji: '📚', left: '64%', top: '32%' },
  { title: 'Volunteering', emoji: '📚', left: '29%', top: '58%' },
  { title: 'Astronomy', emoji: '📚', left: '70%', top: '12%' },
  { title: 'Gardening', emoji: '📚', left: '23%', top: '9%' },
  { title: 'Psychology', emoji: '📚', left: '63%', top: '63%' },
]

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const constrainRef = useRef<HTMLDivElement>(null)
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
    <section id="about" ref={sectionRef} className="section">
      <div className="container">
        <h2
          ref={scope}
          className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%] font-semibold"
        >
          Building beautiful websites with clean code and thoughtful design to
          help your business and stand out online
        </h2>
        <div className="mt-10 md:mt-20 flex flex-col gap-8 md:gap-0.5 md:grid md:grid-cols-4">
          <Card className="h-[320px] lg:h-[400px] 3xl:h-[620px] md:col-span-2">
            <CardHeader
              title="My toolbox"
              description="Explore the technologies and tools I use to craft exception digital experiences"
            />
            <ToolboxItems
              items={toolboxItems}
              className="mt-2 md:mt-0 lg:mt-5 3xl:mt-10"
              itemsWrapperClassName="animate-move-left [animation-duration:30s]"
            />
            <ToolboxItems
              items={toolboxItems}
              className="mt-8 lg:mt-12 3xl:mt-30"
              itemsWrapperClassName="animate-move-right [animation-duration:15s]"
            />
          </Card>
          <Card className="flex flex-col h-[320px] lg:h-[400px] 3xl:h-[620px] md:col-span-2">
            <CardHeader
              title="Beyond the code"
              description="Explore my interests and hobbies beyond the digital realm"
            />
            <div ref={constrainRef} className="relative flex-1">
              {hobbies.map(({ title, emoji, left, top }) => (
                <motion.div
                  key={title}
                  className="absolute inline-flex items-center gap-2 px-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full py-1.5 border border-stone-900/30"
                  style={{ left, top }}
                  drag
                  dragConstraints={constrainRef}
                >
                  <span className="font-medium text-white">{title}</span>
                  <span>{emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
