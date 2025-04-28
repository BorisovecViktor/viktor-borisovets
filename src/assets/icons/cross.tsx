import { twMerge } from 'tailwind-merge'

type Props = {
  className: string
}

export const CrossIcon = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="24px"
    height="24px"
    viewBox="0 0 16 16"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    className={twMerge(className)}
  >
    <path d="m11.25 4.75-6.5 6.5m0-6.5 6.5 6.5" />
  </svg>
)
