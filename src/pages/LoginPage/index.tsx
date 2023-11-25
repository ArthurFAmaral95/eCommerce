import { LoginForm } from '../../components/LoginForm'
import { RegisterForm } from '../../components/RegisterForm'

export function LoginPage() {
  return (
    <main id="login-page">
      <LoginForm />

      <RegisterForm />
    </main>
  )
}
