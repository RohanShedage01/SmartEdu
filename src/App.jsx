import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import HomePage from './views/index/index.jsx'
import About from './views/index/About.jsx'
import Contact from './views/index/Contact.jsx'
import Dashboard from './views/dashbord/Dashboard.jsx'
import Login from './views/login/Login.jsx'
import Spark from './views/spark/spark.jsx'
import TopperSuccess from './views/toppersuccess/toppersuccess.jsx'
import Settings from './views/settings/Settings.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Spark />} />
          <Route path="/toppersuccess" element={<TopperSuccess />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
