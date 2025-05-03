'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react'
import { Testimonial } from '@/components'
import { ArrowLeftIcon, ArrowRightIcon } from '@/assets/icons'
import image1 from '@/assets/images/testimonial-1.jpg'
import image2 from '@/assets/images/testimonial-2.jpg'
import image3 from '@/assets/images/testimonial-3.jpg'

const testimonials = [
  {
    name: 'Sarah Chen',
    company: 'Pixel Perfect',
    role: 'Head of Design',
    quote:
      "Alex's expertise in both technical development and design created a beautiful, high-performing website.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: 'Marcus Rodriguez',
    company: 'Craft Coffee Co.',
    role: 'Founder',
    quote:
      'Alex transformed our boutique coffee brand with a website that perfectly balances aesthetics and functionality.',
    image: image2,
    imagePositionY: 0.1,
  },
  {
    name: 'Emily Watson',
    company: 'Studio Minimal',
    role: 'Creative Director',
    quote:
      'The collaborative process was amazing. Alex brought lots of fresh perspectives and innovative solutions.',
    image: image3,
    imagePositionY: 0.55,
  },
]

export const Testimonials = () => {
  const titleRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ['start end', 'end start'],
  })
  const transformTop = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const transformBottom = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  const handleClickPrev = () =>
    setTestimonialIndex((prev) => {
      if (prev === 0) {
        return testimonials.length - 1
      }

      return prev - 1
    })

  const handleClickNext = () =>
    setTestimonialIndex((prev) => {
      if (prev === testimonials.length - 1) {
        return 0
      }

      return prev + 1
    })

  return (
    <section id="testimonials" className="section">
      <h2
        ref={titleRef}
        className="text-4xl md:text-7xl lg:text-8xl font-semibold flex flex-col overflow-hidden tracking-tighter"
      >
        <motion.span
          className="whitespace-nowrap"
          style={{
            x: transformTop,
          }}
        >
          Some nice words from my past clients
        </motion.span>
        <motion.span
          className="whitespace-nowrap self-end text-red-orange-500"
          style={{
            x: transformBottom,
          }}
        >
          Some nice words from my past clients
        </motion.span>
      </h2>
      <div className="container">
        <div className="mt-20">
          <AnimatePresence mode="wait" initial={false}>
            {testimonials.map(
              ({ name, company, role, quote, image, imagePositionY }, index) =>
                index === testimonialIndex && (
                  <Testimonial
                    key={name}
                    name={name}
                    company={company}
                    role={role}
                    quote={quote}
                    image={image}
                    imagePositionY={imagePositionY}
                  />
                ),
            )}
          </AnimatePresence>
        </div>
        <div className="flex gap-4 mt-6 lg:mt-10">
          <button
            onClick={handleClickPrev}
            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full bg-red-orange-hover hover:text-white border-red-orange-hover transition-all duration-300 cursor-pointer"
          >
            <ArrowLeftIcon className="size-6" />
          </button>
          <button
            onClick={handleClickNext}
            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full bg-red-orange-hover hover:text-white border-red-orange-hover transition-all duration-300 cursor-pointer"
          >
            <ArrowRightIcon className="size-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
