import { twMerge } from 'tailwind-merge'

type Props = {
  className: string
}

export const ReactHookFormIcon = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    fill="none"
    className={twMerge(className)}
  >
    <g strokeWidth="0"></g>
    <g strokeLinecap="round" strokeLinejoin="round"></g>
    <g>
      <rect width="48" height="48" fill="white" fillOpacity="0.01"></rect>
      <rect
        x="4"
        y="8"
        width="40"
        height="32"
        rx="2"
        fill="#2F88FF"
        stroke="white"
        strokeWidth="4"
        strokeLinejoin="round"
      ></rect>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 29H44H4Z"
        fill="#2F88FF"
      ></path>
      <path
        d="M4 29H44"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 19H44H4Z"
        fill="#2F88FF"
      ></path>
      <path
        d="M4 19H44"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 40V19V40Z"
        fill="#2F88FF"
      ></path>
      <path
        d="M17 40V19"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 38V17V38Z"
        fill="#2F88FF"
      ></path>
      <path
        d="M4 38V17"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 38V17V38Z"
        fill="#2F88FF"
      ></path>
      <path
        d="M44 38V17"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 40V19V40Z"
        fill="#2F88FF"
      ></path>
      <path
        d="M31 40V19"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M9 40H39"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
  </svg>
)
