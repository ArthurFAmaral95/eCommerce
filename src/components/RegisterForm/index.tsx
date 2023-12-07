import { useState } from 'react'

import { useForm } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import axios from 'axios'

import './styles.css'

import {
  ChangeUserStatus,
  UserLoggedInProps,
  ChangeUserName
} from '../../types/types'

type FormProps = ChangeUserStatus & UserLoggedInProps & ChangeUserName

type RegisterFormProps = z.infer<typeof createUserFormSchema>

const createUserFormSchema = z
  .object({
    firstName: z
      .string()
      .min(1, 'Please fill this field.')
      .toLowerCase()
      .transform(text =>
        text
          .trim()
          .split(' ')
          .map(word => word[0].toLocaleUpperCase().concat(word.substring(1)))
          .join(' ')
      ),
    lastName: z
      .string()
      .min(1, 'Please fill this field.')
      .toLowerCase()
      .transform(text =>
        text
          .trim()
          .split(' ')
          .map(word => word[0].toLocaleUpperCase().concat(word.substring(1)))
          .join(' ')
      ),
    email: z
      .string()
      .min(1, 'Please fill this field.')
      .email('This field should be an email address.'),
    confirmEmail: z
      .string()
      .min(1, 'Please fill this field.')
      .email('This field should be an email address.'),
    password: z.string().min(8, 'Password must be at least 8 characters.'),
    confirmPassword: z
      .string()
      .min(8, 'Password must be at least 8 characters.')
  })
  .superRefine((values, context) => {
    if (values.confirmEmail !== values.email) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['confirmEmail'],
        message: 'E-mail does not match'
      })
    }

    if (values.confirmPassword !== values.password) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['confirmPassword'],
        message: 'Password does not match'
      })
    }
  })

export function RegisterForm(props: FormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [message, setMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormProps>({
    resolver: zodResolver(createUserFormSchema)
  })

  function changePasswordVisibility() {
    setShowPassword(!showPassword)
  }
  function changeConfirmPasswordVisibility() {
    setShowConfirmPassword(!showConfirmPassword)
  }

  function createUser(data: RegisterFormProps) {
    axios
      .post('http://localhost:4001/registerUser', {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password
      })
      .then(response => {
        localStorage.setItem(
          'user',
          JSON.stringify({
            userFirstName: response.data.user.firstName,
            userLastName: response.data.user.lastName,
            userId: response.data.user.userId
          })
        )

        setMessage(response.data.message)
        props.changeUserName(response.data.user.firstName)
      })
      .then(() => {
        props.changeUserStatus()
      })
      .catch(err => {
        if (err.response.data.code === 'SQLITE_CONSTRAINT') {
          setMessage(
            'Email already registered. Try logging in or choose a different one.'
          )
        } else {
          console.error(err.response)
        }
      })
  }

  return (
    <>
      <form
        id="register-form"
        onSubmit={handleSubmit(createUser)}
        className={props.userLoggedIn ? 'hidden' : ''}
      >
        <fieldset>
          <div>
            <div className="errors">
              <label htmlFor="firstName">First name:</label>
              {errors.firstName && <span>{errors.firstName.message}</span>}
            </div>
            <input type="text" id="firstName" {...register('firstName')} />
          </div>
          <div>
            <div className="errors">
              <label htmlFor="lastName">Last name:</label>
              {errors.lastName && <span>{errors.lastName.message}</span>}
            </div>
            <input type="text" id="lastName" {...register('lastName')} />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <div className="errors">
              <label htmlFor="email">E-mail:</label>
              {errors.email && <span>{errors.email.message}</span>}
            </div>
            <input type="email" id="email" {...register('email')} />
          </div>
          <div>
            <div className="errors">
              <label htmlFor="confirmEmail">Corfirm E-mail:</label>
              {errors.confirmEmail && (
                <span>{errors.confirmEmail.message}</span>
              )}
            </div>
            <input
              type="email"
              id="confirmEmail"
              {...register('confirmEmail')}
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <div className="errors">
              <label htmlFor="password">Password:</label>
              {errors.password && <span>{errors.password.message}</span>}
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              {...register('password')}
            />
            <img
              src="./open-eye.svg"
              alt="Open eye icon"
              className={showPassword ? 'hidden' : ''}
              onClick={() => {
                changePasswordVisibility()
              }}
            />
            <img
              src="./close-eye.svg"
              alt="Close eye icon"
              className={showPassword ? '' : 'hidden'}
              onClick={() => {
                changePasswordVisibility()
              }}
            />
          </div>
          <div>
            <div className="errors">
              <label htmlFor="confirmPassword">Confirm password:</label>
              {errors.confirmPassword && (
                <span>{errors.confirmPassword.message}</span>
              )}
            </div>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              {...register('confirmPassword')}
            />
            <img
              src="./open-eye.svg"
              alt="Open eye icon"
              className={showConfirmPassword ? 'hidden' : ''}
              onClick={() => {
                changeConfirmPasswordVisibility()
              }}
            />
            <img
              src="./close-eye.svg"
              alt="Close eye icon"
              className={showConfirmPassword ? '' : 'hidden'}
              onClick={() => {
                changeConfirmPasswordVisibility()
              }}
            />
          </div>
        </fieldset>

        <button>Register</button>
      </form>
      <p>{message}</p>
    </>
  )
}
