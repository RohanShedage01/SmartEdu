import React from 'react'

function SettingsHero({ isDarkMode, onToggleMode }) {
  return (
    <section className="settings-hero">
      <div>
        <span className="settings-badge">Settings</span>
        <h1>Customize your SmartEdu experience</h1>
        <p>
          Use the controls below to change the page background and enable more helpful features for your dashboard.
        </p>
      </div>
      <div className="settings-hero-card">
        <span className="settings-hero-icon">⚙️</span>
        <div>
          <h2>Feature hub</h2>
          <p>Quick access to profile, notifications, security, and theme preferences.</p>
          <button className="mode-toggle-button" type="button" onClick={onToggleMode}>
            Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </div>
    </section>
  )
}

export default SettingsHero
