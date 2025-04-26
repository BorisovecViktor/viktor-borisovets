'use client'

import Link from 'next/link'
import { useEffect, useState, MouseEvent } from 'react'
import { ArrowUpRightIcon, BarsIcon } from '@/assets/icons'
import { Button } from '@/components'
import { useAnimate } from 'motion/react'

const navItems = [
  {
    label: 'About',
    href: '#intro',
  },
  {
    label: 'Selected Works',
    href: '#projects',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'FAQs',
    href: '#faqs',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
]

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [topLineScope, topLineAnimate] = useAnimate()
  const [bottomLineScope, bottomLineAnimate] = useAnimate()
  const [navScope, navAnimate] = useAnimate()

  useEffect(() => {
    if (isOpen) {
      topLineAnimate([
        [topLineScope.current, { translateY: 4 }],
        [topLineScope.current, { rotate: 45 }],
      ])

      bottomLineAnimate([
        [bottomLineScope.current, { translateY: -4 }],
        [bottomLineScope.current, { rotate: -45 }],
      ])

      navAnimate(navScope.current, { height: '100%' }, { duration: 0.5 })
    } else {
      topLineAnimate([
        [topLineScope.current, { rotate: 0 }],
        [topLineScope.current, { translateY: 0 }],
      ])

      bottomLineAnimate([
        [bottomLineScope.current, { rotate: 0 }],
        [bottomLineScope.current, { translateY: 0 }],
      ])

      navAnimate(navScope.current, { height: 0 })
    }
  }, [
    isOpen,
    topLineScope,
    bottomLineScope,
    navScope,
    topLineAnimate,
    bottomLineAnimate,
    navAnimate,
  ])

  const handleClickNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsOpen(false)

    const url = new URL(e.currentTarget.href)
    const hash = url.hash
    const target = document.querySelector(hash)

    if (!target) return
    target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header>
      <div
        ref={navScope}
        className="fixed top-0 left-0 w-full h-0 bg-stone-900 overflow-hidden z-10"
      >
        <nav className="mt-20 flex flex-col">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={handleClickNavItem}
              className="text-stone-200 border-t last:border-b border-stone-800 py-8 group/nav-item relative isolate"
            >
              <div className="container !max-w-full flex items-center justify-between">
                <span className="text-3xl group-hover/nav-item:pl-4 transition-all duration-500">
                  {label}
                </span>
                <ArrowUpRightIcon className="size-6" />
              </div>
              <div className="absolute w-full h-0 bg-stone-800 group-hover/nav-item:h-full transition-all duration-500 bottom-0 -z-10"></div>
            </Link>
          ))}
        </nav>
      </div>
      <div className="fixed top-0 left-0 w-full mix-blend-difference backdrop-blur-md z-10">
        <div className="container !max-w-full">
          <div className="flex justify-between h-20 items-center">
            <div>
              <Link href="/">
                <span className="text-xl font-bold uppercase text-white">
                  Viktor&nbsp; Borisovets
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full z-10">
        <div className="container !max-w-full">
          <div className="flex justify-end h-20 items-center">
            <div className="flex items-center gap-4">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="size-11 border border-stone-400 rounded-full inline-flex items-center justify-center bg-stone-200 cursor-pointer"
              >
                <BarsIcon
                  topLineScope={topLineScope}
                  bottomLineScope={bottomLineScope}
                />
              </div>
              <Button
                variant="primary"
                className="hidden md:inline-flex animate-bounce"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
