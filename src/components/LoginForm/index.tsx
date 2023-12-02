import { useState } from 'react'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  ChangeUserStatus,
  UserLoggedInProps,
  ChangeUserName
} from '../../types/types'

type FormProps = ChangeUserStatus & UserLoggedInProps & ChangeUserName

type LoginErrorProps = {
  error: string
  message: string
}

import axios from 'axios'

import './styles.css'

type UserFormProps = z.infer<typeof userLoginFormSchema>

const userLoginFormSchema = z.object({
  email: z
    .string()
    .min(1, 'Please enter your email.')
    .email('This field should be an e-mail address.'),
  password: z.string().min(8, 'Password must be at least 8 characters.')
})

export function LoginForm(props: FormProps) {
  const [showPassword, setShowPassword] = useState(false)

  const [message, setMessage] = useState('')

  const [loginError, setLoginError] = useState<LoginErrorProps>()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserFormProps>({
    resolver: zodResolver(userLoginFormSchema)
  })

  function changePasswordVisibility() {
    setShowPassword(!showPassword)
  }

  function handleUserLogin(data: UserFormProps) {
    axios
      .post('http://localhost:4001/userLogin', {
        email: data.email,
        password: data.password
      })
      .then(response => {
        localStorage.setItem(
          'user',
          JSON.stringify({
            userFirstName: response.data.user.firstName,
            userLastName: response.data.user.lastName
          })
        )

        setMessage(response.data.message)
        props.changeUserName(response.data.user.firstName)
      })
      .then(() => {
        props.changeUserStatus()
      })
      .catch(err => {
        setLoginError(err.response.data)
      })
  }

  return (
    <>
      <form
        id="login-form"
        onSubmit={handleSubmit(handleUserLogin)}
        className={props.userLoggedIn ? 'hidden' : ''}
      >
        <div className="email">
          <div className="errors">
            <label htmlFor="e-mail">E-mail</label>
            {errors.email && <span>{errors.email.message}</span>}
            <span>
              {loginError?.error === 'email' ? loginError.message : ''}
            </span>
          </div>
          <input type="email" id="e-mail" {...register('email')} />
        </div>
        <div>
          <div className="errors">
            <label htmlFor="password">Password</label>
            {errors.password && <span>{errors.password.message}</span>}
            <span>
              {loginError?.error === 'password' ? loginError.message : ''}
            </span>
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

        <button>Login</button>
      </form>

      <p>{message}</p>
    </>
  )
}
