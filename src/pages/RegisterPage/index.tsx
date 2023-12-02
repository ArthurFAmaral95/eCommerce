import './styles.css'

import { RegisterForm } from '../../components/RegisterForm'

import { ChangeUserStatus, UserLoggedInProps } from '../../types/types'

type RegisterPageProps = ChangeUserStatus & UserLoggedInProps

export function RegisterPage(props: RegisterPageProps) {
  return (
    <main id="register-page">
      <h1>Register to e-Commerce</h1>
      <RegisterForm
        changeUserStatus={props.changeUserStatus}
        userLoggedIn={props.userLoggedIn}
      />
      <a href="/" className={props.userLoggedIn ? '' : 'hidden'}>
        <button>Continue shopping</button>
      </a>
    </main>
  )
}
