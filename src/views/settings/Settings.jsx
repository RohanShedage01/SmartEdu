import React from 'react'
import './Settings.css'
import SettingsHero from '../../components/setting/SettingsHero'
import FeatureGrid from '../../components/setting/FeatureGrid'

const featureBlocks = [
  { icon: '👤', title: 'Profile', caption: 'Manage your account details and preferences.' },
  { icon: '🔔', title: 'Notifications', caption: 'Control alerts, reminders, and app updates.' },
  { icon: '🔒', title: 'Security', caption: 'Protect your data and enable secure access.' },
  { icon: '🖥️', title: 'Display', caption: 'Customize the app visuals and text settings.' },
  { icon: '🎨', title: 'Theme', caption: 'Pick a look that feels right for your mood.' },
  { icon: '💬', title: 'Support', caption: 'Reach out for help and quick guidance anytime.' },
]

function Settings({ isDarkMode }) {
  const activeTheme = isDarkMode ? 'dark' : 'default'

  return (
    <div className={`settings-page ${activeTheme}`}>
      <div className="settings-shell">
        <SettingsHero />

        <section className="settings-panel">
          <FeatureGrid featureBlocks={featureBlocks} />
        </section>
      </div>
    </div>
  )
}

export default Settings
