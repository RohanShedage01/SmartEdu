import React from 'react'
import './SparkHero.css'

const heroStats = [
  {
    icon: '📈',
    title: '92% Success Rate',
    description: 'Students clearing scholarship benchmarks every year.',
  },
  {
    icon: '🥇',
    title: 'Top Rankers',
    description: 'Mentorship from achievers who cracked NEET, JEE and national exams.',
  },
  {
    icon: '💼',
    title: 'Premium Support',
    description: 'Exclusive strategy sessions, mock reviews, and scholarship coaching.',
  },
]

function SparkHero() {
  return (
    <section className="spark-hero">
      <div className="spark-hero-copy">
        <span className="spark-label">Premium Exam Track</span>
        <h1>Scholarship, NEET, JEE and Competitive Exam Coaching for Toppers</h1>
        <p>
          SmartEdu Spark brings a high-value page for students aiming for scholarships, NEET, JEE and other top competitive exams. This premium experience uses the same polished theme as the homepage and dashboard, with strong visuals, expert cards, and an elite student path.
        </p>
        <div className="spark-hero-actions">
          <button className="spark-primary-btn">Get Premium Guidance</button>
          <button
            className="spark-secondary-btn"
            onClick={() => { window.location.href = '/toppersuccess' }}
          >
            See Toppers' Success
          </button>
        </div>
      </div>

      <div className="spark-hero-stats">
        {heroStats.map((stat) => (
          <div key={stat.title} className="spark-stat-card">
            <span className="spark-stat-icon">{stat.icon}</span>
            <h3>{stat.title}</h3>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SparkHero
