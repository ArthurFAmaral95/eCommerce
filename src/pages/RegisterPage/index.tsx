import './styles.css'

import { RegisterForm } from '../../components/RegisterForm'

import { ChangeUserStatus } from '../../types/types'

export function RegisterPage(props: ChangeUserStatus) {
  return (
    <main id="register-page">
      <h1>Register to e-Commerce</h1>
      <RegisterForm changeUserStatus={props.changeUserStatus} />
    </main>
  )
}
