import { AnimationScope, motion } from 'motion/react'

type Props = {
  topLineScope: AnimationScope<SVGRectElement>
  bottomLineScope: AnimationScope<SVGRectElement>
}

export const BarsIcon = ({ topLineScope, bottomLineScope }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <motion.rect
      x="3"
      y="7"
      width="18"
      height="2"
      fill="currentColor"
      ref={topLineScope}
      style={{
        transformOrigin: '12px 8px',
      }}
    />
    <motion.rect
      x="3"
      y="15"
      width="18"
      height="2"
      fill="currentColor"
      ref={bottomLineScope}
      style={{
        transformOrigin: '12px 16px',
      }}
    />
  </svg>
)
