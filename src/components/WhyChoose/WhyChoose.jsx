import React from 'react'
import './WhyChoose.css'

const reasons = [
  {
    title: 'Live & Recorded Classes',
    description: 'Attend real-time lessons with expert instructors or revisit recorded sessions anytime.',
    features: ['Online live classes', 'Recorded replay access', 'Flexible study schedule'],
    highlight: 'Learn at your pace with full session access',
  },
  {
    title: 'Offline Study Support',
    description: 'Download materials and stay productive even without an active internet connection.',
    features: ['PDF notes & slides', 'Offline quizzes', 'Batch study packs'],
    highlight: 'Keep learning from anywhere',
  },
  {
    title: 'Exam-ready Preparation',
    description: 'Practice with solved exam papers and model tests designed for deep revision.',
    features: ['Sample papers', 'Mock tests', 'Answer walkthroughs'],
    highlight: 'Build confidence for every exam',
  },
  {
    title: 'Dedicated Mentors & Assistants',
    description: 'Get real support from teachers and teaching assistants who guide every step.',
    features: ['One-on-one support', 'Weekly progress review', 'Instant doubt clearing'],
    highlight: 'Learn with active guidance',
  },
]

function WhyChoose() {
  return (
    <section id="why" className="smartedu-why-section">
      <div className="why-heading">
        <span className="section-label">What makes us special</span>
        <h2>Why Choose SmartEdu</h2>
        <p>
          SmartEdu combines modern study formats, strong mentorship, and exam-focused resources to help
          students succeed in every subject and every grade.
        </p>
      </div>

      <div className="why-card-grid">
        {reasons.map((item) => (
          <article key={item.title} className="why-card">
            <div className="why-card-badge">Pro</div>
            <h3>{item.title}</h3>
            <p className="why-card-description">{item.description}</p>
            <ul className="why-card-list">
              {item.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <p className="why-card-highlight">{item.highlight}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WhyChoose
