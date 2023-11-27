import './styles.css'

import { LoginPopUpStatus, HandleLoginPopUp } from '../../types/types'
import { Link } from 'react-router-dom'

type LoginPopUpProps = LoginPopUpStatus & HandleLoginPopUp

export function LoginPopUp(props: LoginPopUpProps) {
  return (
    <div
      className={
        props.loginPopUpStatus ? 'login-pop-up' : 'login-pop-up hidden'
      }
    >
      <Link to={`/login`}>
        <button
          id="login"
          onClick={() => {
            props.handleLoginPopUp()
          }}
        >
          Login
        </button>
      </Link>
      <Link to={`/register`}>
        <button
          id="register"
          onClick={() => {
            props.handleLoginPopUp()
          }}
        >
          Register
        </button>
      </Link>
    </div>
  )
}
