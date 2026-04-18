import React from 'react'
import './darkmode.css'

function DarkModeToggle({ isDarkMode, onToggleMode }) {
  return (
    <button className={`darkmode-toggle ${isDarkMode ? 'active' : ''}`} type="button" onClick={onToggleMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
