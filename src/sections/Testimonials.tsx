'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react'
import { Testimonial } from '@/components'
import { ArrowLeftIcon, ArrowRightIcon } from '@/assets/icons'
import image1 from '@/assets/images/testimonial-1.jpg'
import image2 from '@/assets/images/testimonial-2.jpg'
import image3 from '@/assets/images/testimonial-3.jpg'
import image4 from '@/assets/images/testimonial-4.jpg'

const testimonials = [
  {
    name: 'Emily R.',
    company: 'Brew and Bean Café',
    role: 'Founder',
    quote:
      'Working with Viktor was a game-changer for our coffee shop. Stunning, user-friendly website that truly captures the cozy vibe of our café also he implemented solid SEO practices.',
    image: image1,
    imagePositionY: 0.6,
  },
  {
    name: 'Daniel K.',
    company: 'Perfect lines',
    role: 'Marketing Director',
    quote:
      'Viktor listened to our needs, delivered on time, and gave our brand a strong online presence. SEO work really paid off — we started getting organic traffic within the first month.',
    image: image2,
    imagePositionY: 1,
  },
  {
    name: 'Linda T.',
    company: 'Studio Max',
    role: 'Creative Director',
    quote:
      'Viktor designed a sleek, modern site that reflects our business perfectly. He made the whole process smooth and stress-free. Recommend him for anyone looking for quality design and reliability.',
    image: image3,
    imagePositionY: 0.4,
  },
  {
    name: 'Jason M.',
    company: 'GreenEdge Solutions',
    role: 'Project manager',
    quote:
      "Viktor's work exceeded our expectations. The website he developed for us is not only beautiful but also super functional. His attention to detail and commitment to quality are outstanding.",
    image: image4,
    imagePositionY: 0.6,
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
  const buttonClasses =
    'border border-stone-400 size-11 inline-flex items-center justify-center rounded-full hover:bg-stone-900 hover:text-stone-200 transition-all duration-300 cursor-pointer'

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
    <section id="testimonials">
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
          Here&apos;s what my awesome clients think
        </motion.span>
        <motion.span
          className="whitespace-nowrap self-end text-red-orange-500"
          style={{
            x: transformBottom,
          }}
        >
          Here&apos;s what my awesome clients think
        </motion.span>
      </h2>
      <div className="container">
        <div className="mt-10 md:mt-20">
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
        <div className="flex gap-8 mt-4 lg:mt-6">
          <button onClick={handleClickPrev} className={buttonClasses}>
            <ArrowLeftIcon className="size-6" />
          </button>
          <button onClick={handleClickNext} className={buttonClasses}>
            <ArrowRightIcon className="size-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
