import './styles.css'

import {
  LoginPopUpStatus,
  HandleLoginPopUp,
  UserLoggedInProps,
  ChangeUserStatus,
  HandleMenu
} from '../../types/types'
import { Link } from 'react-router-dom'

type LoginPopUpProps = LoginPopUpStatus &
  HandleLoginPopUp &
  UserLoggedInProps &
  ChangeUserStatus &
  HandleMenu

export function LoginPopUp(props: LoginPopUpProps) {
  const userInfo = JSON.parse(localStorage.getItem('user') || 'false') || []

  return (
    <div
      className={
        props.loginPopUpStatus ? 'login-pop-up' : 'login-pop-up hidden'
      }
    >
      <h3 className={props.userLoggedIn ? '' : 'hidden'}>
        {props.userLoggedIn ? `Welcome, ${userInfo.userFirstName}` : ''}
      </h3>
      <Link to={`/login`} className={props.userLoggedIn ? 'hidden' : ''}>
        <button
          id="login"
          onClick={() => {
            props.handleLoginPopUp()
            props.handleMenu(false)
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
            props.handleMenu(false)
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
        }}
      >
        Logout
      </button>
    </div>
  )
}
