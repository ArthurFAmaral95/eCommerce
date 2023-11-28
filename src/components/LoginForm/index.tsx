import { useState } from 'react'
import './styles.css'

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  function changePasswordVisibility() {
    setShowPassword(!showPassword)
  }
  return (
    <form id="login-form">
      <div>
        <label htmlFor="e-mail">E-mail</label>
        <input type="text" name="e-mail" id="e-mail" required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          id="password"
          minLength={8}
          required
        />
        <img
          src="./open-eye.svg"
          alt="Open eye icon"
          className={showPassword ? 'hidden' : ''}
          onClick={() => {
            changePasswordVisibility()
          }}
        />
        <img
          src="./close-eye.svg"
          alt="Close eye icon"
          className={showPassword ? '' : 'hidden'}
          onClick={() => {
            changePasswordVisibility()
          }}
        />
      </div>

      <button>Log in</button>
    </form>
  )
}
