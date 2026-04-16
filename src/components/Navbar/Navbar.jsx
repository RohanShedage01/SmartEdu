import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header className="smartedu-navbar">
      <div className="navbar-brand">
        <div className="brand-icon">SE</div>
        <div className="brand-text">
          <span className="brand-title">SmartEdu</span>
          <span className="brand-subtitle">Learn smarter, grow faster</span>
        </div>
      </div>

      <div className="navbar-right">
        <nav className="navbar-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            Home
          </NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            Dashboard
          </NavLink>
          <NavLink to="/courses" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            Spark
          </NavLink>
        </nav>
        <NavLink to="/login" className="nav-cta">
          Get Started
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => (isActive ? 'nav-settings active' : 'nav-settings')} aria-label="Settings">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <rect x="4" y="6" width="16" height="2" rx="1" />
            <rect x="4" y="11" width="16" height="2" rx="1" />
            <rect x="4" y="16" width="16" height="2" rx="1" />
          </svg>
        </NavLink>
      </div>
    </header>
  )
}

export default Navbar
