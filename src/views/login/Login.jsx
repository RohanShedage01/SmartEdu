import React from 'react'

function Login() {
  return (
    <section className="route-page route-login">
      <div className="content-card">
        <h1>Login to SmartEdu</h1>
        <p>Sign in to access your courses, track progress, and continue learning.</p>
        <form className="login-form">
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter your password" />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  )
}

export default Login
