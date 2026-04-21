import React from 'react'
import './darkmode.css'

function DarkModeToggle({ isDarkMode, onToggleMode }) {
  return (
    <button 
      className={`darkmode-switch ${isDarkMode ? 'active' : ''}`} 
      type="button" 
      onClick={onToggleMode}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="switch-container">
        <span className="switch-toggle"></span>
      </span>
    </button>
  )
}

export default DarkModeToggle
