import { ElementType } from 'react'

type Props = {
  component: ElementType
}

export const TechIcon = ({ component }: Props) => {
  const Component = component

  return (
    <>
      <Component className="size-10 fill-[url(#icon-gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="icon-gradient">
          <stop offset="0%" stopColor="rgb(255, 0, 0)" />
          <stop offset="100%" stopColor="rgb(255, 165, 0)" />
        </linearGradient>
      </svg>
    </>
  )
}
