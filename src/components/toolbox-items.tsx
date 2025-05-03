import { twMerge } from 'tailwind-merge'
import { TechIcon } from './tech-icon'
import { ElementType, Fragment } from 'react'

type ToolboxItem = {
  title: string
  iconType: ElementType
}

type Props = {
  items: Array<ToolboxItem>
  className?: string
  itemsWrapperClassName?: string
}

export const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: Props) => (
  <div
    className={twMerge(
      'flex text-white [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',
      className,
    )}
  >
    <div
      className={twMerge(
        'flex flex-none py-0.5 gap-6 pr-6',
        itemsWrapperClassName,
      )}
    >
      {[
        ...new Array(2).fill(0).map((_, index) => (
          <Fragment key={index}>
            {items.map(({ title, iconType }) => (
              <div
                key={title}
                className="inline-flex items-center gap-4 py-2 3xl:py-4 px-3 3xl:px-6 outline-2 outline-white/10 rounded-lg"
              >
                <TechIcon component={iconType} />
                <span className="font-semibold">{title}</span>
              </div>
            ))}
          </Fragment>
        )),
      ]}
    </div>
  </div>
)
