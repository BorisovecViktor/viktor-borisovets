'use client'

import { PlusIcon } from '@/assets/icons'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { twMerge } from 'tailwind-merge'

const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer:
      'It depends on the complexity of the website and the scope of the project.',
  },
  {
    question: 'What is your development process like?',
    answer:
      'I follow a hands-on approach starting with project planning, building out the core features, and regular check-ins to make sure everything matches your needs.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes, I work with clients globally and can accommodate different time zones for meetings and communication.',
  },
  {
    question: 'What industries do you specialize in?',
    answer:
      'I have experience across various industries including technology, retail, hospitality, and professional services, bringing fresh perspectives to each project.',
  },
]

export const FAQs = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleClick = (index: number) => {
    if (selectedIndex === index) {
      setSelectedIndex(null)
    } else {
      setSelectedIndex(index)
    }
  }

  return (
    <section id="faqs" className="section">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQs</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {faqs.map(({ question, answer }, index) => {
            const isSelected = selectedIndex === index

            return (
              <div
                key={question}
                onClick={() => handleClick(index)}
                className="border-t border-stone-400 border-dotter py-6 md:py-8 lg:py-10 last:border-b relative isolate group/faq cursor-pointer"
              >
                <div
                  className={twMerge(
                    'absolute h-0 w-full left-0 bottom-0 bg-stone-300 -z-10 group-hover/faq:h-full transition-all duration-500',
                    isSelected && 'h-full',
                  )}
                ></div>
                <div
                  className={twMerge(
                    'flex items-center justify-between gap-4 transition-all duration-500 group-hover/faq:md:px-4 group-hover/faq:lg:px-8',
                    isSelected && 'md:px-4 lg:px-8',
                  )}
                >
                  <div className="text-2xl md:text-3xl lg:text-4xl">
                    {question}
                  </div>
                  <div
                    className={twMerge(
                      'inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0 transition duration-300 bg-stone-200',
                      isSelected && 'rotate-45',
                    )}
                  >
                    <PlusIcon className="size-6" />
                  </div>
                </div>
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="overflow-hidden md:px-4 lg:px-8"
                    >
                      <p className="text-xl mt-4">{answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
