import { CrossIcon } from '@/assets/icons'
import { Dispatch, ReactNode, SetStateAction } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  isOpen: boolean
  onClose: Dispatch<SetStateAction<boolean>>
  children: ReactNode
}

export const Modal = ({ isOpen, onClose, children }: Props) => {
  return (
    <div
      onMouseDown={() => onClose(false)}
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
          onClick={() => onClose(false)}
          className="absolute top-2 right-2 size-8 flex items-center justify-center rounded-full text-stone-900/60 bg-white hover:bg-stone-200 hover:text-stone-900 duration-500 cursor-pointer"
        >
          <CrossIcon className="size-5" />
        </button>
        {children}
      </div>
    </div>
  )
}
