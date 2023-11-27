export function RegisterForm() {
  return (
    <form id="register-form">
      <label htmlFor="first-name">First name:</label>
      <input type="text" name="first-name" id="first-name" required />

      <label htmlFor="last-name">Last name:</label>
      <input type="text" name="last-name" id="last-name" required />

      <label htmlFor="email">E-mail:</label>
      <input type="email" name="email" id="email" required />

      <label htmlFor="confirm-email">E-mail:</label>
      <input type="email" name="confirm-email" id="confirm-email" required />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="pasword"
        minLength={8}
        required
      />

      <label htmlFor="confirm-password">Confirm password</label>
      <input
        type="password"
        name="confirm-password"
        id="confirm-password"
        required
      />

      <button>Register</button>
    </form>
  )
}
