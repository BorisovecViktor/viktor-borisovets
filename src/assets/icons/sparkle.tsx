import { twMerge } from 'tailwind-merge'

type Props = {
  className: string
}

export const SparkleIcon = ({ className }: Props) => (
  <svg
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className={twMerge(className)}
  >
    <g strokeWidth="0"></g>
    <g strokeLinecap="round" strokeLinejoin="round"></g>
    <g>
      <title>107</title>
      <defs></defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path
          d="M9.601,6.4 L8,0 L6.398,6.4 L0,8 L6.398,9.601 L8,16 L9.601,9.601 L16,8 L9.601,6.4 L9.601,6.4 Z M8,9.334 C7.264,9.334 6.668,8.736 6.668,8 C6.668,7.264 7.264,6.667 8,6.667 C8.736,6.667 9.333,7.264 9.333,8 C9.333,8.736 8.736,9.334 8,9.334 L8,9.334 Z"
          fill="currentColor"
        ></path>
      </g>
    </g>
  </svg>
)
