import React from 'react'
import './DashboardHero.css'

function DashboardHero({ subtitle, title, description, stats }) {
  return (
    <section className="dashboard-hero">
      <div className="hero-copy">
        <p className="dashboard-subtitle">{subtitle}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="hero-notice">
          <h3>Today’s Highlights</h3>
          <ul>
            <li>Complete your Maths assignment before Friday.</li>
            <li>Join the live study session in 30 minutes.</li>
            <li>Review batch announcements and shared resources.</li>
          </ul>
        </div>
      </div>

      <div className="hero-actions">
        {stats.map((item) => (
          <div className="small-card" key={item.title}>
            {item.icon && (
              <span className="small-card-icon">
                {item.icon}
                {item.badge && <span className="small-card-badge">{item.badge}</span>}
              </span>
            )}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="hero-extra">
        <div className="hero-summary">
          <h3>Course Progress</h3>
          <div className="progress-overview">
            <div className="progress-ring-card">
              <div className="progress-ring-wrapper">
                <div className="progress-ring progress-maths" style={{ '--percent': 75 }}>
                  <span>75%</span>
                </div>
                <p>Maths</p>
              </div>
            </div>
            <div className="progress-ring-card">
              <div className="progress-ring-wrapper">
                <div className="progress-ring progress-science" style={{ '--percent': 60 }}>
                  <span>60%</span>
                </div>
                <p>Science</p>
              </div>
            </div>
            <div className="progress-ring-card">
              <div className="progress-ring-wrapper">
                <div className="progress-ring progress-english" style={{ '--percent': 85 }}>
                  <span>85%</span>
                </div>
                <p>English</p>
              </div>
            </div>
          </div>
          <div className="progress-bar-list">
            <div className="progress-bar-item">
              <span>Maths</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '75%' }} />
              </div>
            </div>
            <div className="progress-bar-item">
              <span>Science</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '60%' }} />
              </div>
            </div>
            <div className="progress-bar-item">
              <span>English</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '85%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardHero
