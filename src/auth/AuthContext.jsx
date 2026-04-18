import React, { createContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  login: () => ({ success: false }),
  logout: () => {},
  register: () => ({ success: false }),
})

const STORAGE_KEYS = {
  users: 'smartedu_users',
  currentUser: 'smartedu_current_user',
}

const loadUsers = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.users) || '[]')
  } catch (error) {
    return []
  }
}

const saveUsers = (users) => {
  localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users))
}

function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    if (typeof window === 'undefined') return null
    const stored = localStorage.getItem(STORAGE_KEYS.currentUser)
    return stored ? JSON.parse(stored) : null
  })

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEYS.currentUser, JSON.stringify(user))
    } else {
      localStorage.removeItem(STORAGE_KEYS.currentUser)
    }
  }, [user])

  const login = ({ email, password }) => {
    const normalizedEmail = email.trim().toLowerCase()
    if (!normalizedEmail || !password) {
      return { success: false, message: 'Please enter your email and password.' }
    }

    const users = loadUsers()
    const existingUser = users.find((account) => account.email === normalizedEmail)

    if (!existingUser) {
      return { success: false, message: 'No account found with that email.' }
    }

    if (existingUser.password !== password) {
      return { success: false, message: 'Invalid password. Please try again.' }
    }

    const currentUser = { email: existingUser.email, name: existingUser.name }
    setUser(currentUser)
    return { success: true, user: currentUser }
  }

  const register = ({ name, email, password }) => {
    const normalizedEmail = email.trim().toLowerCase()
    if (!name.trim() || !normalizedEmail || !password) {
      return { success: false, message: 'Please complete all fields to sign up.' }
    }

    const users = loadUsers()
    const existingUser = users.find((account) => account.email === normalizedEmail)

    if (existingUser) {
      return { success: false, message: 'An account already exists with that email.' }
    }

    const newUser = {
      email: normalizedEmail,
      password,
      name: name.trim(),
    }

    saveUsers([...users, newUser])
    setUser({ email: newUser.email, name: newUser.name })

    return { success: true, user: { email: newUser.email, name: newUser.name } }
  }

  const logout = () => {
    setUser(null)
  }

  const value = useMemo(
    () => ({ user, isAuthenticated: Boolean(user), login, logout, register }),
    [user]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
