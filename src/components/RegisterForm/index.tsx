import { useState } from 'react'
import './styles.css'

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  function changePasswordVisibility() {
    setShowPassword(!showPassword)
  }
  function changeConfirmPasswordVisibility() {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <form id="register-form">
      <fieldset>
        <div>
          <label htmlFor="first-name">First name:</label>
          <input type="text" name="first-name" id="first-name" required />
        </div>
        <div>
          <label htmlFor="last-name">Last name:</label>
          <input type="text" name="last-name" id="last-name" required />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label htmlFor="confirm-email">Corfirm E-mail:</label>
          <input
            type="email"
            name="confirm-email"
            id="confirm-email"
            required
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="password">Password:</label>
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
        <div>
          <label htmlFor="confirm-password">Confirm password:</label>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirm-password"
            id="confirm-password"
            minLength={8}
            required
          />
          <img
            src="./open-eye.svg"
            alt="Open eye icon"
            className={showConfirmPassword ? 'hidden' : ''}
            onClick={() => {
              changeConfirmPasswordVisibility()
            }}
          />
          <img
            src="./close-eye.svg"
            alt="Close eye icon"
            className={showConfirmPassword ? '' : 'hidden'}
            onClick={() => {
              changeConfirmPasswordVisibility()
            }}
          />
        </div>
      </fieldset>

      <button>Register</button>
    </form>
  )
}
