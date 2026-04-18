import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import HomePage from './views/index/index.jsx'
import About from './views/index/About.jsx'
import Contact from './views/index/Contact.jsx'
import Dashboard from './views/dashbord/Dashboard.jsx'
import Login from './views/login/Login.jsx'
import Signup from './views/login/Signup.jsx'
import Spark from './views/spark/spark.jsx'
import TopperSuccess from './views/toppersuccess/toppersuccess.jsx'
import Settings from './views/settings/Settings.jsx'
import Funiq from './views/funiq/funiq.jsx'
import { AuthProvider } from './auth/AuthContext.jsx'
import ProtectedRoute from './auth/ProtectedRoute.jsx'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const handleToggleMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar isDarkMode={isDarkMode} onToggleMode={handleToggleMode} />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/courses" element={<Spark />} />
            <Route path="/funiq" element={<Funiq />} />
            <Route path="/toppersuccess" element={<TopperSuccess />} />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings isDarkMode={isDarkMode} />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
