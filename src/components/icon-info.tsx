import { ReactNode } from 'react'

type Props = {
  icon: ReactNode
  text: string
}

export const IconInfo = ({ icon, text }: Props) => (
  <div className="text-center mx-auto">
    {icon}
    <h6 className="text-sm font-medium mt-2">{text}</h6>
  </div>
)
