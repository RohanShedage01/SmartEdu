import React from 'react'
import './SparkProgramCards.css'

const sparkCards = [
  {
    icon: '🎯',
    title: 'Scholarship Exams',
    description: 'Focused coaching for scholarship tests, funding strategies, and high-impact exam performance.',
  },
  {
    icon: '🧬',
    title: 'NEET Excellence',
    description: 'Targeted NEET preparation with premium biology, chemistry, and physics practice plans.',
  },
  {
    icon: '🚀',
    title: 'JEE Advanced',
    description: 'Advanced problem solving, concept clarity, and rank-building strategies for JEE aspirants.',
  },
  {
    icon: '🏆',
    title: 'Competitive Exams',
    description: 'Structured preparation for Olympiads, state-level tests, and national entrance exams.',
  },
  {
    icon: '🌟',
    title: 'Extraordinary Students',
    description: 'A premium pathway for high achievers who want to become consistent toppers.',
  },
  {
    icon: '🎓',
    title: 'Topper Support',
    description: 'Mentorship from toppers, mock exam review, and score-maximizing performance checks.',
  },
]

function SparkProgramCards() {
  return (
    <section className="spark-section spark-programs">
      <div className="section-heading">
        <p className="section-tag">Elite Preparation</p>
        <h2>Programs built to make you exam-ready, confident, and topper-ready.</h2>
      </div>
      <div className="spark-card-grid">
        {sparkCards.map((card) => (
          <article key={card.title} className="spark-card">
            <span className="spark-card-icon">{card.icon}</span>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SparkProgramCards
