import { CrossIcon } from '@/assets/icons'
import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const Modal = ({
  isOpen,
  onClose,
  children,
}: PropsWithChildren & Props) => {
  return (
    <div
      onMouseDown={onClose}
      className={twMerge(
        'fixed inset-0 flex justify-center items-center transition-all z-100',
        isOpen ? 'visible' : 'invisible',
      )}
    >
      <div
        onMouseDown={(e) => e.stopPropagation()}
        className={twMerge(
          'shadow-xl/30 max-w-md w-full px-8 py-16 border-2 border-white rounded-xl bg-white/40 overflow-hidden backdrop-blur-md transition-all',
          isOpen ? 'scale-100 opacity-100' : 'scale-110 opacity-0',
        )}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 size-8 flex items-center justify-center rounded-full text-stone-900/70 bg-white hover:bg-stone-100 hover:text-stone-900 duration-500 cursor-pointer"
        >
          <CrossIcon className="size-5" />
        </button>
        {children}
      </div>
    </div>
  )
}
