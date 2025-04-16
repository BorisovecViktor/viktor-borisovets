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
import Link from 'next/link'

export const Header = () => {
  return (
    <header>
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
            <div className="size-11 border border-stone-400 rounded-full inline-flex items-center justify-center">
              <BarsIcon />
            </div>
            <button className="bg-red-orange-500 h-11 px-6 rounded-xl text-white border border-red-orange-500 uppercase hidden md:inline-flex items-center">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
