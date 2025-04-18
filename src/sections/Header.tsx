// const navItems = [
//   {
//     label: "About",
//     href: "#intro",
//   },
//   {
//     label: "Selected Works",
//     href: "#projects",
//   },
//   {
//     label: "Testimonials",
//     href: "#testimonials",
//   },
//   {
//     label: "FAQs",
//     href: "#faqs",
//   },
//   {
//     label: "Contact",
//     href: "#contact",
//   },
// ];

import { BarsIcon } from '@/assets/icons/bars'
import { Button } from '@/components'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md">
      <div className="container">
        <div className="flex justify-between h-20 items-center">
          <div>
            <Link href="/">
              <span className="text-xl font-bold uppercase">
                Viktor&nbsp; Borisovets
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="size-11 border border-stone-400 rounded-full inline-flex items-center justify-center bg-stone-200">
              <BarsIcon />
            </div>
            <Button variant="primary" className="hidden md:inline-flex">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
