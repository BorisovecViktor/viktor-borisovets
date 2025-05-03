'use client'

import { useInView } from 'motion/react'
import { useEffect, useRef } from 'react'
import { useTextRevealAnimation } from '@/hooks/useTextRevealAnimation'
import { CssIcon, HtmlIcon, JsIcon } from '@/assets/icons'
import { Card, CardHeader, ToolboxItems } from '@/components'

const toolboxItems = [
  { title: 'JavaScript', iconType: JsIcon },
  { title: 'HTML5', iconType: HtmlIcon },
  { title: 'CSS3', iconType: CssIcon },
  { title: 'React', iconType: HtmlIcon },
  { title: 'Redux toolkit', iconType: HtmlIcon },
  { title: 'Next.js', iconType: HtmlIcon },
]

const hobbies = [
  { title: 'Painting', emoji: '🎨', left: '5%', top: '5%' },
  { title: 'Photography', emoji: '📷', left: '50%', top: '5%' },
  { title: 'Hiking', emoji: '🥾', left: '35%', top: '40%' },
  { title: 'Gaming', emoji: '🎮', left: '10%', top: '35%' },
  { title: 'Music', emoji: '🎵', left: '70%', top: '45%' },
  { title: 'Fitness', emoji: '🏋️‍♂️', left: '5%', top: '65%' },
  { title: 'Reading', emoji: '📚', left: '45%', top: '70%' },
]

export const About = () => {
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
    <section id="about" ref={sectionRef} className="section">
      <div className="container">
        <h2 ref={scope} className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]">
          Building beautiful websites with clean code and thoughtful design to
          help your business and stand out online
        </h2>
        <div className="mt-10 md:mt-20 flex flex-col gap-8 md:gap-0.5 md:grid md:grid-cols-4">
          <Card className="h-[320px] lg:h-[400px] md:col-span-2">
            <CardHeader
              title="My toolbox"
              description="Explore the technologies and tools I use to craft exception digital experiences"
            />
            <ToolboxItems items={toolboxItems} className="mt-2 md:mt-0" />
            <ToolboxItems
              items={toolboxItems}
              className="mt-8 lg:mt-12"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
          <Card className="flex flex-col h-[320px] lg:h-[400px] md:col-span-2">
            <CardHeader
              title="Beyond the code"
              description="Explore the technologies and tools I use to craft exception digital experiences"
            />
            <div className="relative flex-1">
              {hobbies.map(({ title, emoji, left, top }) => (
                <div
                  key={title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-red-500/85 to-orange-500/85 rounded-full py-1.5 absolute"
                  style={{ left, top }}
                >
                  <span className="font-medium">{title}</span>
                  <span>{emoji}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
