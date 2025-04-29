import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

type Props = {
  name: string
  href: string
  icon: StaticImageData
}

export const SocialsLink = ({ name, href, icon }: Props) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="mx-auto hover:opacity-80 transition-all duration-300"
    >
      <Image src={icon} alt={name} />
    </Link>
  )
}
