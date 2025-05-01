'use client'

import { useState } from 'react'
import {
  FAQs,
  Footer,
  Header,
  Hero,
  Intro,
  Projects,
  Tape,
  Testimonials,
} from '@/sections'

const Home = () => {
  const [isOpenContact, setIsOpenContact] = useState(false)

  return (
    <>
      <Header isOpenContact={isOpenContact} toggleContact={setIsOpenContact} />
      <Hero isOpenContact={isOpenContact} toggleContact={setIsOpenContact} />
      <Intro />
      <Tape />
      <Projects />
      <Testimonials />
      <FAQs />
      <Footer isOpenContact={isOpenContact} toggleContact={setIsOpenContact} />
    </>
  )
}

export default Home
