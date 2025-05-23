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
        'relative group/button h-11 px-4 rounded-xl border border-red-orange-500 uppercase inline-flex items-center justify-center gap-2 transition-colors duration-300 ease-linear cursor-pointer',
        variant === 'primary' &&
          'bg-gradient-to-r from-red-500 to-orange-500 hover:bg-gradient-to-l text-white',
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
