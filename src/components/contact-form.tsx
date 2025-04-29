'use client'

import { Dispatch, SetStateAction, useState } from 'react'
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
import { CheckIcon, CrossIcon } from '@/assets/icons'

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

type Props = {
  isOpen: boolean
  toggleContact: Dispatch<SetStateAction<boolean>>
}

export const ContactForm = ({ isOpen, toggleContact }: Props) => {
  const schema = createSchema()
  const [isSuccess, setIsSuccess] = useState(false)
  const [message, setMessage] = useState('')

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormFieldValues>({
    defaultValues: { name: '', email: '', message: '' },
    mode: 'onTouched',
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: ContactFormFieldValues) => {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB_FORM_ACCESS_KEY,
        from_name: data.name,
        subject: `${data.name} sent a message from Viktor Borisovets portfolio`,
        ...data,
      }),
    })
      .then(async (response) => {
        const json = await response.json()

        if (json.success) {
          setIsSuccess(true)
          setMessage(json.message)
          reset()
        } else {
          setIsSuccess(false)
          setMessage('Something went wrong. Try again later')
        }
      })
      .catch((error) => {
        setIsSuccess(false)
        setMessage('Something went wrong. Try again later')
        console.log(error)
      })
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        toggleContact(false)
        setMessage('')
      }}
    >
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
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
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
          {isSubmitting ? (
            <svg
              className="w-5 h-5 mx-auto text-white animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            'Submit'
          )}
        </Button>
        {!isEmptyObject(errors) && (
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-red-500/30 to-transparent"></div>
        )}
      </form>
      {message && (
        <div className="flex items-center justify-center text-center gap-3 mt-2">
          {isSuccess ? (
            <>
              <CheckIcon className="size-6 text-green-500" />
              <p className="text-green-500">{message}</p>
            </>
          ) : (
            <>
              <CrossIcon className="size-8 text-red-500" />
              <p className="text-red-500">{message}</p>
            </>
          )}
        </div>
      )}
    </Modal>
  )
}
