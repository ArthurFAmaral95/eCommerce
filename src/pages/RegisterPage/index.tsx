import './styles.css'

import { RegisterForm } from '../../components/RegisterForm'

import {
  ChangeUserStatus,
  UserLoggedInProps,
  ChangeUserName
} from '../../types/types'

type RegisterPageProps = ChangeUserStatus & UserLoggedInProps & ChangeUserName

export function RegisterPage(props: RegisterPageProps) {
  return (
    <main id="register-page">
      <h1>Register to e-Commerce</h1>
      <RegisterForm
        changeUserStatus={props.changeUserStatus}
        userLoggedIn={props.userLoggedIn}
        changeUserName={props.changeUserName}
      />
      <a href="/" className={props.userLoggedIn ? '' : 'hidden'}>
        <button>Continue shopping</button>
      </a>
    </main>
  )
}
