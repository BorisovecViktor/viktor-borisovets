import { Dispatch, SetStateAction } from 'react'
import { Button } from './button'
import { Modal } from './modal'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputText } from './input-text'
import { z } from 'zod'
import { defaultSchema, emailSchema, isEmptyObject } from '@/services'
import instagramIcon from '@/assets/images/instagram.png'
import linkedinIcon from '@/assets/images/linkedin.png'
import { SocialsLink } from './socials-link'

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

type Props = { isOpen: boolean; toggleContact: Dispatch<SetStateAction<boolean>> }

export const ContactForm = ({ isOpen, toggleContact }: Props) => {
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
    <Modal isOpen={isOpen} toggleContact={toggleContact}>
      <div className="grid grid-cols-2 gap-x-6 mb-12">
        <SocialsLink
          name="Instagram icon"
          href="https://www.instagram.com/viktorborisovets"
          icon={instagramIcon}
        />
        <SocialsLink
          name="Linkedin icon"
          href="https://www.linkedin.com/in/viktor-borisovets"
          icon={linkedinIcon}
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
              placeholder="Your name here..."
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
              placeholder="Your email here..."
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
              placeholder="What services you are interested in..."
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
