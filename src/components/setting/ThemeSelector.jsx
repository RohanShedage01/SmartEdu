import React from 'react'

function ThemeSelector({ themeOptions, selectedTheme, onThemeSelect, onApply }) {
  return (
    <div className="settings-panel-group">
      <h2>Choose page background</h2>
      <div className="theme-grid">
        {themeOptions.map((theme) => (
          <button
            key={theme.key}
            type="button"
            className={`theme-option ${theme.key} ${selectedTheme === theme.key ? 'selected' : ''}`}
            onClick={() => onThemeSelect(theme.key)}
          >
            <span className="theme-label">{theme.title}</span>
            <div className="theme-swatch-row">
              {theme.colors.map((color) => (
                <span key={color} className="theme-swatch" style={{ background: color }} />
              ))}
            </div>
            <p>{theme.description}</p>
          </button>
        ))}
      </div>
      <button className="settings-action" type="button" onClick={onApply}>
        Apply Background
      </button>
    </div>
  )
}

export default ThemeSelector
