import Link from 'next/link'
import Image from 'next/image'
import { Button, Card } from '@/components'
import project1 from '@/assets/images/project-1.png'
import { CheckIcon, ArrowUpRightIcon } from '@/assets/icons'

const portfolioProjects = [
  {
    company: 'Fabnite',
    year: '2025',
    title:
      'Explore and buy tickets for events and exciting experiences near you',
    results: [
      { title: 'Setup the project from 0 to production' },
      {
        title: 'Make recommendations for improvements to existing architecture',
      },
      { title: 'Choice stack of technologies' },
      { title: 'Producing, testing and debugging code' },
      { title: 'Optimize app for maximum performance' },
      { title: 'Implementing SEO best practices' },
    ],
    link: 'https://fabnite.com',
    image: project1,
  },
  {
    company: 'Fabnite',
    year: '2025',
    title:
      'Explore and buy tickets for events and exciting experiences near you.',
    results: [
      { title: 'Setup the project from 0 to production' },
      {
        title: 'Make recommendations for improvements to existing architecture',
      },
      { title: 'Choice stack of technologies' },
      { title: 'Producing, testing and debugging code' },
      { title: 'Optimize app for maximum performance' },
      { title: 'Implementing SEO best practices' },
    ],
    link: 'https://fabnite.com',
    image: project1,
  },
  {
    company: 'Fabnite',
    year: '2025',
    title:
      'Explore and buy tickets for events and exciting experiences near you...',
    results: [
      { title: 'Setup the project from 0 to production' },
      {
        title: 'Make recommendations for improvements to existing architecture',
      },
      { title: 'Choice stack of technologies' },
      { title: 'Producing, testing and debugging code' },
      { title: 'Optimize app for maximum performance' },
      { title: 'Implementing SEO best practices' },
    ],
    link: 'https://fabnite.com',
    image: project1,
  },
]

export const Projects = () => (
  <section id="projects" className="section">
    <div className="container">
      <h2 className="text-4xl md:text-7xl lg:text-8xl font-semibold">
        Some completed projects
      </h2>
      <p className="mt-4 text-xl md:text-3xl">
        Real results from real projects — see what I’ve built
      </p>
      <div className="mt-10 md:mt-20 flex flex-col gap-10 md:gap-20">
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
                  <Link href={link} target="_blank">
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
                    className="mt-8 -mb-4 md:-mb-0 md:mx-auto lg:mt-0 lg:absolute lg:max-w-none rounded-3xl border-2 border-white/20"
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
