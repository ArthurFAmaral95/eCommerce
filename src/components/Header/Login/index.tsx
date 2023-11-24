import './styles.css'

import { LoginPopUp } from '../../LoginPopUp'

import { HandleLoginPopUp, LoginPopUpStatus } from '../../../types/types'

type LoginProps = HandleLoginPopUp & LoginPopUpStatus

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
      <LoginPopUp loginPopUpStatus={props.loginPopUpStatus} />
    </>
  )
}
