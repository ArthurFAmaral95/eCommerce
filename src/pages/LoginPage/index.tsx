import './styles.css'

import { LoginForm } from '../../components/LoginForm'

import {
  ChangeUserStatus,
  UserLoggedInProps,
  ChangeUserName
} from '../../types/types'

type LoginFromProps = ChangeUserStatus & UserLoggedInProps & ChangeUserName

export function LoginPage(props: LoginFromProps) {
  return (
    <main id="login-page">
      <h1>Log in and continue shopping</h1>
      <LoginForm
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
