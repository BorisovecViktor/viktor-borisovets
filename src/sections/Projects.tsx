import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png'
import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png'
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png'
import { CheckIcon, ArrowUpRightIcon } from '@/assets/icons'
import Link from 'next/link'
import Image from 'next/image'
import { Button, Card } from '@/components'

const portfolioProjects = [
  {
    company: 'Acme Corp',
    year: '2022',
    title: 'Dark Saas Landing Page',
    results: [
      { title: 'Enhanced user experience by 40%' },
      { title: 'Improved site speed by 50%' },
      { title: 'Increased mobile traffic by 35%' },
    ],
    link: 'https://youtu.be/4k7IdSLxh6w',
    image: darkSaasLandingPage,
  },
  {
    company: 'Innovative Co',
    year: '2021',
    title: 'Light Saas Landing Page',
    results: [
      { title: 'Boosted sales by 20%' },
      { title: 'Expanded customer reach by 35%' },
      { title: 'Increased brand awareness by 15%' },
    ],
    link: 'https://youtu.be/7hi5zwO75yc',
    image: lightSaasLandingPage,
  },
  {
    company: 'Quantum Dynamics',
    year: '2023',
    title: 'AI Startup Landing Page',
    results: [
      { title: 'Enhanced user experience by 40%' },
      { title: 'Improved site speed by 50%' },
      { title: 'Increased mobile traffic by 35%' },
    ],
    link: 'https://youtu.be/Z7I5uSRHMHg',
    image: aiStartupLandingPage,
  },
]

export const Projects = () => (
  <section id="projects" className="section">
    <div className="container">
      <h2 className="text-4xl md:text-7xl lg:text-8xl font-semibold">
        Last landing page projects
      </h2>
      <p className="mt-4 text-xl md:text-3xl">
        See how long I transformed concepts into engaging digital experiences
      </p>
      <div className="mt-10 md:mt-20 flex flex-col gap-20">
        {portfolioProjects.map(
          ({ title, company, year, results, link, image }, index) => (
            <Card
              key={title}
              className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 lg:min-h-150 sticky"
              style={{ top: `calc(80px + ${index * 40}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-20">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{company}</span>
                    <span>&bull;</span>
                    <span>{year}</span>
                  </div>
                  <h3 className="text-2xl mt-2 md:mt-5 text-white md:text-4xl">
                    {title}
                  </h3>
                  <hr className="border-t-2 border-white/8 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {results.map(({ title }) => (
                      <li
                        key={title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{title}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={link}>
                    <Button
                      variant="primary"
                      iconAfter={<ArrowUpRightIcon className="size-5" />}
                      // onClick={handleClickContact}
                      className="w-full md:w-auto font-semibold mt-8"
                    >
                      Visit Live Site
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <Image
                    src={image}
                    alt={title}
                    className="mt-8 -mb-4 md:-mb-0 md:mx-auto lg:mt-0 lg:absolute lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ),
        )}
      </div>
    </div>
  </section>
)
