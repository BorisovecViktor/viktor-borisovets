'use client'

import { ChevronDoubleDownAnimatedIcon } from '@/assets/icons'
import Image from 'next/image'
import heroImage from '@/assets/images/hero.jpg'
import { Button } from '@/components'
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
    <section>
      <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full">
            <motion.h1
              ref={scope}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0"
            >
              Creating digital experiences through code and creative design
            </motion.h1>
            <div className="flex flex-col md:flex-row md:items-center mt-10 items-start gap-6">
              <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.75,
                }}
              >
                <Button
                  variant="secondary"
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
                <Button variant="text" onClick={handleClickContact}>
                  I want to ask a question
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
