import './styles.css'

import { LoginPopUpStatus } from '../../types/types'

export function LoginPopUp(props: LoginPopUpStatus) {
  return (
    <div
      className={
        props.loginPopUpStatus ? 'login-pop-up' : 'login-pop-up hidden'
      }
    >
      <button id="login">Login</button>
      <button id="register">Register</button>
    </div>
  )
}
