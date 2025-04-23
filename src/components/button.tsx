import { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export const Button = (
  props: {
    variant: 'primary' | 'secondary' | 'text'
    iconAfter?: ReactNode
  } & ButtonHTMLAttributes<HTMLButtonElement>,
) => {
  const { className, children, variant, iconAfter, ...rest } = props

  return (
    <button
      className={twMerge(
        'relative group/button h-11 px-6 rounded-xl border border-red-orange-500 uppercase inline-flex items-center gap-2 transition duration-300 cursor-pointer',
        variant === 'primary' && 'bg-red-orange-500 text-white',
        variant === 'secondary' && 'bg-red-orange-hover hover:text-white',
        variant === 'text' &&
          'h-auto px-0 border-transparent after:transition-all after:duration-300 after:content-[""] after:h-px after:w-0 after:absolute after:top-full bg-red-orange-after hover:after:w-full',
        className,
      )}
      {...rest}
    >
      <span>{children}</span>
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  )
}
