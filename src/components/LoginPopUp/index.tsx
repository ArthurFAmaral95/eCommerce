import './styles.css'

import {
  LoginPopUpStatus,
  HandleLoginPopUp,
  UserLoggedInProps,
  ChangeUserStatus,
  ChangeUserName,
  UserName
} from '../../types/types'
import { Link } from 'react-router-dom'

type LoginPopUpProps = LoginPopUpStatus &
  HandleLoginPopUp &
  UserLoggedInProps &
  ChangeUserStatus &
  ChangeUserName &
  UserName

export function LoginPopUp(props: LoginPopUpProps) {
  return (
    <div
      className={
        props.loginPopUpStatus ? 'login-pop-up' : 'login-pop-up hidden'
      }
    >
      <h3 className={props.userLoggedIn ? '' : 'hidden'}>
        {props.userLoggedIn ? `Welcome, ${props.userName}` : ''}
      </h3>
      <Link to={`/login`} className={props.userLoggedIn ? 'hidden' : ''}>
        <button
          id="login"
          onClick={() => {
            props.handleLoginPopUp()
          }}
        >
          Login
        </button>
      </Link>
      <Link to={`/register`} className={props.userLoggedIn ? 'hidden' : ''}>
        <button
          id="register"
          onClick={() => {
            props.handleLoginPopUp()
          }}
        >
          Register
        </button>
      </Link>
      <button
        className={props.userLoggedIn ? '' : 'hidden'}
        onClick={() => {
          localStorage.removeItem('user')
          props.changeUserStatus()
          props.handleLoginPopUp()
          props.changeUserName('')
        }}
      >
        Logout
      </button>
    </div>
  )
}
