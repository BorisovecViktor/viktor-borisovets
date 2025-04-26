import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRightIcon } from '@/assets/icons'
import image1 from '@/assets/images/project-1.jpg'
import image2 from '@/assets/images/project-2.jpg'
import image3 from '@/assets/images/project-3.jpg'
import image4 from '@/assets/images/project-4.jpg'
import image5 from '@/assets/images/project-5.jpg'

const projects = [
  {
    name: 'Artisan Brew Co.',
    image: image1,
  },
  {
    name: 'Wavelength Studios',
    image: image2,
  },
  {
    name: 'Nova Fitness',
    image: image3,
  },
  {
    name: 'Urban Plates',
    image: image4,
  },
  {
    name: 'Bloom Botanicals',
    image: image5,
  },
]

export const Projects = () => (
  <section id="projects" className="section">
    <div className="container">
      <h2 className="text-4xl md:text-7xl lg:text-8xl">
        Last landing page projects
      </h2>
      <div className="mt-10 md:mt-16 lg:mt-20">
        {projects.map(({ name, image }) => (
          <Link
            key={name}
            href="#"
            className="border-t last:border-b border-stone-400 border-dotter py-6 md:py-8 lg:py-10 flex flex-col relative group/project"
          >
            <div className="absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full transition-all duration-500 bg-stone-300"></div>
            <div className="relative">
              <div className="aspect-video md:hidden">
                <Image
                  src={image}
                  alt={`${name} image`}
                  className="w-full object-cover"
                />
              </div>
              <div className="mt-8 md:mt-0 flex justify-between items-center md:grid md:[grid-template-columns:1fr_300px_max-content] md:gap-8 lg:gap-25">
                <div className="md:group-hover/project:pl-4 lg:group-hover/project:pl-8 transition-all duration-500">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl">{name}</h3>
                </div>
                <div className="relative">
                  <div className="absolute aspect-video w-full top-1/2 -translate-y-1/2 opacity-0 scale-90 group-hover/project:opacity-100 group-hover/project:scale-100 lg:group-hover/project:scale-110 transition-all duration-500 z-1">
                    <Image
                      src={image}
                      alt={`${name} image`}
                      className="w-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:group-hover/project:pr-4 lg:group-hover/project:pr-8 transition-all duration-500">
                  <ArrowUpRightIcon className="size-6" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
)
