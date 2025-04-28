import { isEmail, isPhoneNumber } from 'class-validator'
import { z } from 'zod'

export const defaultSchema = (max: number) =>
  z
    .string()
    .min(1, { message: 'Required field' })
    .max(max, {
      message: `Maximum number of characters: ${max}`,
    })

export const phoneNumberSchema = () =>
  z
    .string()
    .min(1, { message: 'Required field' })
    .refine((value) => isPhoneNumber(value), {
      message: 'Please enter the correct phone number format',
    })

export const emailSchema = () =>
  z
    .string()
    .min(1, { message: 'Required field' })
    .refine((value) => isEmail(value), {
      message: 'Please enter the correct email format',
    })
