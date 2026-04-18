import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext.jsx'
import './Auth.css'

function Login() {
  const { login, register, isAuthenticated } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const destination = location.state?.from?.pathname || '/dashboard'

  useEffect(() => {
    if (isAuthenticated) {
      navigate(destination, { replace: true })
    }
  }, [isAuthenticated, navigate, destination])

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if (params.get('tab') === 'signup') {
      setActiveTab('signup')
    }
  }, [location.search])

  const handleLoginSubmit = (event) => {
    event.preventDefault()
    setError('')

    const result = login({ email, password })
    if (!result.success) {
      setError(result.message)
      return
    }

    navigate(destination, { replace: true })
  }

  const handleSignupSubmit = (event) => {
    event.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    const result = register({ name, email, password })
    if (!result.success) {
      setError(result.message)
      return
    }

    navigate(destination, { replace: true })
  }

  return (
    <section className="route-page route-auth">
      <div className="content-card">
        <div className="auth-tabs">
          <button
            className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`auth-tab ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </button>
        </div>

        {activeTab === 'login' ? (
          <>
            <div className="auth-header">
              <h1>Welcome back to SmartEdu</h1>
              <p>Login to continue your learning journey and access your personalized dashboard.</p>
            </div>

            {error && <div className="auth-error">{error}</div>}

            <form className="auth-form" onSubmit={handleLoginSubmit}>
              <label>
                Email address
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </label>

              <button type="submit" className="auth-button">
                Login
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="auth-header">
              <h1>Create your SmartEdu account</h1>
              <p>Sign up now to save progress, join courses, and personalize your learning dashboard.</p>
            </div>

            {error && <div className="auth-error">{error}</div>}

            <form className="auth-form" onSubmit={handleSignupSubmit}>
              <label>
                Full name
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </label>

              <label>
                Email address
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Create a password"
                  required
                />
              </label>

              <label>
                Confirm password
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="Repeat your password"
                  required
                />
              </label>

              <button type="submit" className="auth-button">
                Create account
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  )
}

export default Login
