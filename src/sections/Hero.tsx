'use client'

import {
  ChevronDoubleDownAnimatedIcon,
  SparkleIcon,
  StarIcon,
} from '@/assets/icons'
import Image from 'next/image'
import heroImage from '@/assets/images/hero.jpg'
import { Button, HeroOrbit } from '@/components'
import { motion, useScroll, useTransform } from 'motion/react'
import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { useTextRevealAnimation } from '@/hooks/useTextRevealAnimation'

type Props = {
  isOpenContact: boolean
  toggleContact: Dispatch<SetStateAction<boolean>>
}

export const Hero = ({ isOpenContact, toggleContact }: Props) => {
  const scrollingDiv = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ['start end', 'end end'],
  })
  const portraitWidth = useTransform(scrollYProgress, [0, 1], ['100%', '240%'])
  const { scope, entranceAnimation } = useTextRevealAnimation()

  useEffect(() => {
    entranceAnimation()
  }, [entranceAnimation])

  const handleClickViewWorks = () => {
    const target = document.querySelector('#projects')

    if (!target) return
    target.scrollIntoView({ behavior: 'smooth' })
  }

  const handleClickContact = () => {
    if (!isOpenContact) {
      toggleContact(true)
    }
  }

  return (
    <section id="hero">
      <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0">
        <div className="relative md:col-span-7 flex flex-col justify-center overflow-x-clip md:[mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]">
          <div className="size-[620px] hero-ring"></div>
          <div className="size-[820px] hero-ring"></div>
          <div className="size-[1020px] hero-ring"></div>
          <div className="size-[1220px] hero-ring"></div>
          <HeroOrbit
            size={800}
            rotation={-72}
            shouldOrbit
            orbitDuration="48s"
            shouldSpin
            spinDuration="6s"
          >
            <SparkleIcon className="size-28 text-red-orange-500" />
          </HeroOrbit>
          <HeroOrbit
            size={550}
            rotation={20}
            shouldOrbit
            orbitDuration="38s"
            shouldSpin
            spinDuration="6s"
          >
            <SparkleIcon className="size-12 text-red-orange-500" />
          </HeroOrbit>
          <HeroOrbit
            size={590}
            rotation={98}
            shouldOrbit
            orbitDuration="40s"
            shouldSpin
            spinDuration="6s"
          >
            <SparkleIcon className="size-8 text-red-orange-500" />
          </HeroOrbit>
          <HeroOrbit
            size={430}
            rotation={-105}
            shouldOrbit
            orbitDuration="30s"
            shouldSpin
            spinDuration="3s"
          >
            <StarIcon className="size-8 text-red-orange-500 opacity-30" />
          </HeroOrbit>
          <HeroOrbit
            size={440}
            rotation={50}
            shouldOrbit
            orbitDuration="32s"
            shouldSpin
            spinDuration="3s"
          >
            <StarIcon className="size-5 text-red-orange-500 opacity-30" />
          </HeroOrbit>
          <HeroOrbit
            size={530}
            rotation={178}
            shouldOrbit
            orbitDuration="36s"
            shouldSpin
            spinDuration="3s"
          >
            <StarIcon className="size-10 text-red-orange-500 opacity-30" />
          </HeroOrbit>
          <HeroOrbit
            size={710}
            rotation={144}
            shouldOrbit
            orbitDuration="44s"
            shouldSpin
            spinDuration="3s"
          >
            <StarIcon className="size-14 text-red-orange-500 opacity-30" />
          </HeroOrbit>
          <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
            <div className="size-3 rounded-full bg-red-orange-500 opacity-30"></div>
          </HeroOrbit>
          <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
            <div className="size-2 rounded-full bg-red-orange-500 opacity-30"></div>
          </HeroOrbit>
          <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
            <div className="size-2 rounded-full bg-red-orange-500 opacity-30"></div>
          </HeroOrbit>
          <div className="container flex flex-col items-center !max-w-full">
            <motion.h1
              ref={scope}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0 font-semibold text-center"
            >
              Creating digital experiences through code and creative design
            </motion.h1>
            <div className="flex flex-col md:flex-row items-center mt-10 gap-6">
              <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.75,
                }}
              >
                <Button
                  variant="primary"
                  iconAfter={<ChevronDoubleDownAnimatedIcon />}
                  onClick={handleClickViewWorks}
                >
                  <span>View my works</span>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 2.2,
                }}
              >
                <Button variant="secondary" onClick={handleClickContact}>
                  Let&apos;s connect
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <motion.div
            className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:!w-full"
            style={{ width: portraitWidth }}
          >
            <Image
              src={heroImage}
              priority
              alt="My portrait"
              className="size-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      <div ref={scrollingDiv} className="md:h-[200vh]"></div>
    </section>
  )
}
