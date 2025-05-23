'use client'

import { stagger, useAnimate } from 'motion/react'
import { useCallback, useEffect } from 'react'
import SplitType from 'split-type'

export const useTextRevealAnimation = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    new SplitType(scope.current, {
      types: 'lines,words',
      tagName: 'span',
    })
  }, [scope])

  const entranceAnimation = useCallback(() => {
    return animate(
      scope.current.querySelectorAll('.word'),
      {
        transform: 'translateY(-105%)',
      },
      {
        duration: 0.5,
        delay: stagger(0.15),
      },
    )
  }, [scope, animate])

  const exitAnimation = useCallback(() => {
    return animate(
      scope.current.querySelectorAll('.word'),
      {
        transform: 'translateY(100%)',
      },
      {
        duration: 0.2,
        delay: stagger(-0.015, {
          startDelay: scope.current.querySelectorAll('.word').length * 0.015,
        }),
      },
    )
  }, [scope, animate])

  return {
    scope,
    entranceAnimation,
    exitAnimation,
  }
}
