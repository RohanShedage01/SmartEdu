import React from 'react'
import './funiq.css'

const funiqSections = [
  {
    id: 'tasks',
    icon: '🧠',
    title: 'Logical Tasks',
    description: 'Practice step-by-step reasoning challenges that build attention, strategy, and critical thinking.',
    related: 'Dashboard planning + assignment practice',
  },
  {
    id: 'games',
    icon: '🎯',
    title: 'Logic Games',
    description: 'Play interactive game-based activities designed to make logic learning fun and memorable.',
    related: 'Spark engagement + TopperSuccess challenge mode',
  },
  {
    id: 'puzzles',
    icon: '🧩',
    title: 'Puzzles',
    description: 'Solve puzzles that reinforce concepts from lessons, past papers, and skill-building sessions.',
    related: 'Revision tools + question paper practice',
  },
]

const pageMatches = [
  {
    title: 'Dashboard',
    description: 'Logical Tasks mirror your study planning and progress tracking so you can work smarter every day.',
  },
  {
    title: 'Spark',
    description: 'Logic Games carry the same vibrant energy and interactivity found in the Spark learning experience.',
  },
  {
    title: 'Topper Success',
    description: 'Puzzles connect to the same mastery-focused mindset featured in TopperSuccess prep stories.',
  },
]

function Funiq() {
  return (
    <div className="funiq-page">
      <section className="funiq-hero">
        <span className="funiq-tag">FunIQ</span>
        <h1>Logic, Games, and Puzzles for Smarter Learning</h1>
        <p>Explore three interactive FunIQ sections that sharpen reasoning while staying connected to the SmartEdu experience.</p>
      </section>

      <section className="funiq-grid-section">
        <div className="section-heading">
          <p className="section-pill">Explore</p>
          <h2>FunIQ Learning Paths</h2>
        </div>
        <div className="funiq-card-grid">
          {funiqSections.map((section) => (
            <article key={section.id} className="funiq-card">
              <div className="funiq-card-icon">{section.icon}</div>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              <div className="funiq-card-footer">
                <span>Related:</span>
                <strong>{section.related}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="funiq-match-section">
        <div className="section-heading">
          <p className="section-pill-alt">Connected Pages</p>
          <h2>How FunIQ links to previous SmartEdu pages</h2>
        </div>
        <div className="match-grid">
          {pageMatches.map((item) => (
            <article key={item.title} className="match-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Funiq
