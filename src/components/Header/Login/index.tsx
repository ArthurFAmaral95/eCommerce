import { LoginPopUp } from '../../LoginPopUp'
import './styles.css'

export function Login() {
  return (
    <div className="login">
      <img src="./login-icon.svg" alt="login icon" />
      <LoginPopUp/>
    </div>
  )
}
