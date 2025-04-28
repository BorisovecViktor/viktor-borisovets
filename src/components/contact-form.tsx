import { Dispatch, SetStateAction } from 'react'
import { Button } from './button'
import { Modal } from './modal'
import { MailIcon } from '@/assets/icons'
import { PhoneIcon } from '@/assets/icons/phone'
import { IconInfo } from './icon-info'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputText } from './input-text'
import { z } from 'zod'
import { defaultSchema, emailSchema, isEmptyObject } from '@/services'

export type ContactFormFieldValues = {
  name: string
  email: string
  message: string
}

const createSchema = () =>
  z.object({
    name: defaultSchema(50),
    email: emailSchema(),
    message: defaultSchema(500),
  })

type Props = { isOpen: boolean; onClose: Dispatch<SetStateAction<boolean>> }

export const ContactForm = ({ isOpen, onClose }: Props) => {
  const schema = createSchema()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormFieldValues>({
    defaultValues: { name: '', email: '', message: '' },
    mode: 'onTouched',
    resolver: zodResolver(schema),
  })

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="grid grid-cols-2 gap-x-6 mb-12">
        <IconInfo
          icon={<MailIcon className="w-8 h-8 mx-auto text-red-orange-500" />}
          text="viktorborisovets@gmail.com"
        />
        <IconInfo
          icon={<PhoneIcon className="w-8 h-8 mx-auto text-red-orange-500" />}
          text="+38(068)381-33-33"
        />
      </div>
      <form
        noValidate
        onSubmit={handleSubmit(async ({ name, email, message }) => {
          console.log(name)
          console.log(email)
          console.log(message)
        })}
      >
        <Controller
          control={control}
          name="name"
          render={({ field, fieldState }) => (
            <InputText
              type="text"
              label="Name"
              placeholder="Enter name here..."
              field={field}
              fieldState={fieldState}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <InputText
              type="email"
              label="Email"
              placeholder="Enter email here..."
              field={field}
              fieldState={fieldState}
            />
          )}
        />
        <Controller
          control={control}
          name="message"
          render={({ field, fieldState }) => (
            <InputText
              type="textarea"
              label="Message"
              placeholder="Enter message here..."
              field={field}
              fieldState={fieldState}
            />
          )}
        />
        <Button type="submit" variant="primary" className="w-full z-1">
          Submit
        </Button>
        {!isEmptyObject(errors) && (
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-red-500/30 to-transparent"></div>
        )}
      </form>
    </Modal>
  )
}
