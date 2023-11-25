export function LoginForm() {
  return (
    <form id="login-form">
      <label htmlFor="user">User</label>
      <input type="text" name="user" id="user" />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        minLength={8}
        required
      />

      <button>Log in</button>
    </form>
  )
}
