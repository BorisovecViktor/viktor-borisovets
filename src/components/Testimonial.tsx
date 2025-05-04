'use client'

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { HTMLAttributes, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { useTextRevealAnimation } from '@/hooks/useTextRevealAnimation'
import { usePresence, motion } from 'motion/react'

type Props = {
  name: string
  company: string
  role: string
  quote: string
  image: string | StaticImport
  imagePositionY: number
  className?: string
}

export const Testimonial = (props: Props & HTMLAttributes<HTMLDivElement>) => {
  const {
    name,
    company,
    role,
    quote,
    image,
    imagePositionY,
    className,
    ...rest
  } = props

  const {
    scope: quoteScope,
    entranceAnimation: quoteEntranceAnimation,
    exitAnimation: quoteExitAnimation,
  } = useTextRevealAnimation()
  const {
    scope: citeScope,
    entranceAnimation: citeEntranceAnimation,
    exitAnimation: citeExitAnimation,
  } = useTextRevealAnimation()
  const [isPresent, safeToRemove] = usePresence()

  useEffect(() => {
    const entranceAnimate = async () => {
      if (isPresent) {
        await quoteEntranceAnimation()
        citeEntranceAnimation()
      } else {
        await Promise.all([quoteExitAnimation(), citeExitAnimation()])
        safeToRemove()
      }
    }

    entranceAnimate()
  }, [
    isPresent,
    citeEntranceAnimation,
    citeExitAnimation,
    quoteEntranceAnimation,
    quoteExitAnimation,
    safeToRemove,
  ])

  return (
    <div
      className={twMerge(
        'grid md:grid-cols-5 md:gap-8 lg:gap-16 md:items-center',
        className,
      )}
      {...rest}
    >
      <div className="aspect-square md:aspect-[9/12] max-h-[1000px] md:col-span-2 relative">
        <motion.div
          initial={{
            width: '100%',
          }}
          animate={{ width: 0 }}
          exit={{ width: '100%' }}
          transition={{ duration: 0.5 }}
          className="absolute h-full bg-stone-900"
        ></motion.div>
        <Image
          src={image}
          alt={name}
          className="size-full object-cover"
          style={{ objectPosition: `50% ${imagePositionY * 100}%` }}
        />
      </div>
      <blockquote className="md:col-span-3">
        <div
          ref={quoteScope}
          className="text-2xl md:text-3xl lg:text-5xl 3xl:text-6xl mt-8 md:mt-0"
        >
          <span>&ldquo;</span>
          {quote}
          <span>&rdquo;</span>
        </div>
        <cite
          ref={citeScope}
          className="mt-4 md:mt-8 not-italic block md:text-lg lg:text-xl"
        >
          {`${name}, ${role} at ${company}`}
        </cite>
      </blockquote>
    </div>
  )
}
