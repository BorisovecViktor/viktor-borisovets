import { StarIcon } from '@/assets/icons'
import { twMerge } from 'tailwind-merge'

type Props = {
  title: string
  description: string
  className?: string
}

export const CardHeader = ({ title, description, className }: Props) => (
  <div
    className={twMerge(
      'flex flex-col text-white p-6 md:py-8 md:px-10',
      className,
    )}
  >
    <div className="inline-flex items-center gap-2">
      <StarIcon className="size-9 text-red-orange-500" />
      <h3 className="text-3xl">{title}</h3>
    </div>
    <p className="text-sm lg:text-base max-w-xs mt-2">{description}</p>
  </div>
)
