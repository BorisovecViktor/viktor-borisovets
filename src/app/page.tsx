'use client'

import {
  FAQs,
  Footer,
  Header,
  Hero,
  Intro,
  Projects,
  Testimonials,
} from '@/sections'
import { Project } from '@/sections/Project'
import { useState } from 'react'

const Home = () => {
  const [isOpenContact, setIsOpenContact] = useState(false)

  return (
    <>
      <Header isOpenContact={isOpenContact} toggleContact={setIsOpenContact} />
      <Hero isOpenContact={isOpenContact} toggleContact={setIsOpenContact} />
      <Intro />
      <Project />
      <Projects />
      <Testimonials />
      <FAQs />
      <Footer isOpenContact={isOpenContact} toggleContact={setIsOpenContact} />
    </>
  )
}

export default Home
