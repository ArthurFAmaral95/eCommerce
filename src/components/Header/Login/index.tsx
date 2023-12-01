import './styles.css'

import { LoginPopUp } from '../../LoginPopUp'

import {
  HandleLoginPopUp,
  LoginPopUpStatus,
  UserLoggedInProps,
  ChangeUserStatus,
  HandleMenu
} from '../../../types/types'

type LoginProps = HandleLoginPopUp &
  LoginPopUpStatus &
  UserLoggedInProps &
  ChangeUserStatus &
  HandleMenu

export function Login(props: LoginProps) {
  return (
    <>
      <div className="login">
        <img
          src="./login-icon.svg"
          alt="login icon"
          onClick={() => {
            props.handleLoginPopUp()
          }}
        />
      </div>
      <LoginPopUp
        loginPopUpStatus={props.loginPopUpStatus}
        handleLoginPopUp={props.handleLoginPopUp}
        userLoggedIn={props.userLoggedIn}
        changeUserStatus={props.changeUserStatus}
        handleMenu={props.handleMenu}
      />
    </>
  )
}
