'use client'
import { ArrowUpRightIcon } from '@/assets/icons'
import { Button } from '@/components'
import { useTextRevealAnimation } from '@/hooks/useTextRevealAnimation'
import { useInView } from 'motion/react'
import Link from 'next/link'
import { useEffect, MouseEvent, Dispatch, SetStateAction } from 'react'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faqs', label: 'Faqs' },
  { href: '#contact', label: 'Contact' },
]

type Props = {
  isOpenContact: boolean
  toggleContact: Dispatch<SetStateAction<boolean>>
}

export const Footer = ({ isOpenContact, toggleContact }: Props) => {
  const { scope, entranceAnimation } = useTextRevealAnimation()
  const inView = useInView(scope)

  useEffect(() => {
    if (inView) {
      entranceAnimation()
    }
  }, [inView, entranceAnimation])

  const handleClickNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const url = new URL(e.currentTarget.href)
    const hash = url.hash
    const target = document.querySelector(hash)

    if (!target) return
    target.scrollIntoView({ behavior: 'smooth' })
  }

  const handleClickContact = () => {
    if (!isOpenContact) {
      toggleContact(true)
    }
  }

  return (
    <footer id="contact" className="bg-stone-900 text-white">
      <div className="container">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="relative size-3 rounded-full bg-green-400">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 size-5 rounded-full bg-green-400 animate-ping"></div>
            </div>
            <span className="uppercase">Only one slot left this week</span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2
                ref={scope}
                className="text-4xl md:text-7xl lg:text-8xl mt-8 font-extralight"
              >
                Enough talk. Let&apos;s build something legendary and unforgettable together.
              </h2>
              <Button
                variant="secondary"
                iconAfter={
                  <ArrowUpRightIcon className="size-6 md:group-hover/button:translate-x-1/4 transition-transform duration-500" />
                }
                className="mt-8"
                onClick={handleClickContact}
              >
                Create a website now
              </Button>
            </div>
            <div>
              <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                {navItems.map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={handleClickNavItem}
                    className="uppercase text-lg"
                  >
                    <Button variant="text" className="text-lg">
                      {label}
                    </Button>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className="py-16 text-white/30 text-sm">
          Copyright &copy; Viktor Borisovets &bull; All rights reserved
        </p>
      </div>
    </footer>
  )
}
