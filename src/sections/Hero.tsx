import { ChevronDoubleDownIcon } from '@/assets/icons'
import Image from 'next/image'
import heroImage from '@/assets/images/hero-image.jpg'
import { Button } from '@/components'

export const Hero = () => {
  return (
    <section>
      <div className="grid md:grid-cols-12 md:h-screen items-stretch">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full">
            <h1 className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0">
              Creating digital experiences through code and creative design
            </h1>
            <div className="flex flex-col md:flex-row md:items-center mt-10 items-start gap-6">
              <Button
                variant="secondary"
                iconAfter={<ChevronDoubleDownIcon className="size-5" />}
              >
                <span>View my works</span>
              </Button>
              <Button variant="text">Let&apos;s Talk</Button>
            </div>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="mt-20 md:mt-0 md:h-full">
            <Image
              src={heroImage}
              alt="My portrait"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
