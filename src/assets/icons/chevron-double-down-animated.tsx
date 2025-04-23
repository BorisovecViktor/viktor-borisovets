import { ChevronDoubleDownIcon } from '@/assets/icons'

export const ChevronDoubleDownAnimatedIcon = () => (
  <div className="overflow-hidden size-5">
    <div className="h-10 w-5 flex flex-col -translate-y-1/2 group-hover/button:translate-y-0 transition-transform duration-300">
      <ChevronDoubleDownIcon className="size-5" />
      <ChevronDoubleDownIcon className="size-5" />
    </div>
  </div>
)
