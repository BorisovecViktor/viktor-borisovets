import { ReactElement } from 'react'

type Props = { icon: ReactElement }

export const OutlinedButton = ({ icon }: Props) => {
  return (
    <button
      type="button"
      className="mt-8 cursor-pointer text-white-700 border focus:ring-1 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 border-purple-700 hover:bg-purple-800 dark:border-purple-400 dark:text-white-400 dark:hover:bg-purple-500 focus:ring-purple-300 dark:focus:ring-purple-900"
    >
      <div className="flex items-center gap-3">
        <span className="uppercase">viktorborisovets@gmail.com</span>
        {icon}
      </div>
    </button>
  )
}
