import React from 'react'
import './SparkHighlight.css'

const highlightItems = [
  'Weekly scholarship mocks with personalized feedback',
  'NEET / JEE concept coaching, advanced revision modules',
  'Exclusive topper secrets for competitive exam success',
  'Confidence-building dashboards and progress analytics',
]

const awardItems = [
  {
    label: '1st Rank',
    description: 'National Scholarship Finalist',
  },
  {
    label: 'Top 0.5%',
    description: 'NEET score improvement program',
  },
  {
    label: 'JEE Advanced',
    description: 'Elite peer learning and strategy guidance',
  },
]

function SparkHighlight() {
  return (
    <section className="spark-section spark-highlight-section">
      <div className="spark-highlight-card">
        <div className="spark-highlight-top">
          <span className="section-tag">Scholarship Excellence</span>
          <h2>A premium scholarship exam path that feels elite and expensive.</h2>
        </div>
        <p>
          Designed for high-potential students, this pathway blends deep concept drills, exam-grade analytics, and topper-led mentorship. Every element is crafted to match the SmartEdu visual identity with premium cards and a bold performance layout.
        </p>
        <ul className="spark-highlight-list">
          {highlightItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <aside className="spark-awards-card">
        <div className="spark-awards-header">
          <h3>Extraordinary Student Achievements</h3>
          <p>Our top performers shine across NEET, JEE, scholarships and competitive exams.</p>
        </div>
        <div className="spark-award-grid">
          {awardItems.map((award) => (
            <div key={award.label} className="spark-award-item">
              <strong>{award.label}</strong>
              <span>{award.description}</span>
            </div>
          ))}
        </div>
      </aside>
    </section>
  )
}

export default SparkHighlight
