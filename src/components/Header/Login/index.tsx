import './styles.css'

import { LoginPopUp } from '../../LoginPopUp'

import {
  HandleLoginPopUp,
  LoginPopUpStatus,
  UserLoggedInProps,
  ChangeUserStatus,
  ChangeUserName,
  UserName
} from '../../../types/types'

type LoginProps = HandleLoginPopUp &
  LoginPopUpStatus &
  UserLoggedInProps &
  ChangeUserStatus &
  ChangeUserName &
  UserName

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
        changeUserName={props.changeUserName}
        userName={props.userName}
      />
    </>
  )
}
