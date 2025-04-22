import Image from 'next/image'
import Link from 'next/link'
import image1 from '@/assets/images/project-1.jpg'
import image2 from '@/assets/images/project-2.jpg'
import image3 from '@/assets/images/project-3.jpg'
import image4 from '@/assets/images/project-4.jpg'
import image5 from '@/assets/images/project-5.jpg'
import { ArrowUpRightIcon } from '@/assets/icons'

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

export const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">Selected works</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {projects.map(({ name, image }) => (
            <Link
              key={name}
              href="#"
              className="border-t last:border-b border-stone-400 border-dotter py-6 md:py-8 lg:py-10 flex flex-col"
            >
              <div>
                <div className="aspect-video md:hidden">
                  <Image
                    src={image}
                    alt={`${name} image`}
                    className="w-full object-cover"
                  />
                </div>
                <div className="mt-8 md:mt-0 flex justify-between items-center">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl">{name}</h3>
                  <ArrowUpRightIcon className="size-6" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
