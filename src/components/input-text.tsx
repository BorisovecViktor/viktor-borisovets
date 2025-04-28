import { twMerge } from 'tailwind-merge'
import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form'
import { ContactFormFieldValues } from './contact-form'

type Props = {
  type: 'text' | 'email' | 'phone' | 'textarea'
  label: string
  placeholder: string
  field: ControllerRenderProps<ContactFormFieldValues>
  fieldState: ControllerFieldState
}

export const InputText = ({
  type,
  label,
  placeholder,
  field,
  fieldState,
}: Props) => {
  const classes = twMerge(
    'form-control w-full py-2 px-4 border-2 border-white rounded-lg bg-transparent placeholder-stone-900/60 outline-none text-stone-900 caret-stone-900/60 opacity-70 focus:opacity-100 hover:opacity-100 duration-500 resize-none',
    fieldState.error && 'border-red-500',
  )

  return (
    <div className="form-group mb-6">
      <label htmlFor={label} className="block mb-1 text-grey-700">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={label}
          rows={3}
          placeholder={placeholder}
          className={classes}
          {...field}
        />
      ) : (
        <input
          id={label}
          type={type}
          placeholder={placeholder}
          className={classes}
          autoComplete="off"
          {...field}
        />
      )}
      {fieldState.error && (
        <p
          className={twMerge(
            'text-red-500 text-xs',
            type !== 'textarea' && 'mt-2',
          )}
        >
          {fieldState.error.message}
        </p>
      )}
    </div>
  )
}
