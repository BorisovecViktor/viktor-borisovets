import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  size: number
  rotation: number
  shouldOrbit?: boolean
  shouldSpin?: boolean
  spinDuration?: string
  orbitDuration?: string
}

export const HeroOrbit = ({
  size,
  rotation,
  shouldOrbit = false,
  shouldSpin = false,
  spinDuration,
  orbitDuration,
  children,
}: PropsWithChildren & Props) => {
  return (
    <div
      className={twMerge(
        'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
        shouldOrbit && 'animate-spin',
      )}
      style={{ animationDuration: orbitDuration }}
    >
      <div
        className="flex items-start justify-start"
        style={{
          height: `${size}px`,
          width: `${size}px`,
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <div
          className={twMerge(shouldSpin && 'animate-spin')}
          style={{ animationDuration: spinDuration }}
        >
          <div
            className="inline-flex"
            style={{
              transform: `rotate(${rotation * -1}deg)`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
