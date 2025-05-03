import { StarsIcon } from '@/assets/icons'
import { Fragment } from 'react'

const words = [
  'Performant',
  'SEO friendly',
  'Semantic',
  'Meta optimized',
  'Accessible',
  'Secure',
  'Interactive',
  'Scalable',
  'User friendly',
  'Responsive',
  'Maintainable',
  'Search optimized',
  'Usable',
  'Reliable',
  'Modern',
  'Intuitive',
  'Consistent',
  'Fast',
  'Well structured',
  'Cross browser',
  'API ready',
  'Analytics enabled',
  'Traffic ready',
  'Content driven',
]

export const Tape = () => (
  <div className="overflow-x-clip">
    <div className="bg-gradient-to-r from-red-500 to-orange-500 -rotate-3 -mx-1">
      <div className="flex px-2 md:px-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex flex-none gap-4 py-3 animate-move-left [animation-duration:30s]">
          {[
            ...new Array(2).fill(0).map((_, index) => (
              <Fragment key={index}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-white uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StarsIcon className="size-6 text-white -rotate-3" />
                  </div>
                ))}
              </Fragment>
            )),
          ]}
        </div>
      </div>
    </div>
  </div>
)
