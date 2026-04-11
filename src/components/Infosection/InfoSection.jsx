import React from 'react'
import './InfoSetion.css'

function InfoSection() {
  return (
    <section id="home" className="smartedu-info-section">
      <div className="info-heading">
        <span className="info-label">Project Goal</span>
        <h1>Welcome to SmartEdu</h1>
        <p>
          SmartEdu is built to transform education into a flexible, supportive, and results-driven
          experience for every student.
        </p>
      </div>

      <div className="info-card">
        <p>
          Our mission is to deliver high-quality learning with live and recorded lessons, exam-ready
          resources, and active mentor support so learners can grow with confidence.
        </p>
        <ul className="info-goals-list">
          <li>Interactive online and offline learning formats</li>
          <li>Recorded batch sessions and exam paper practice</li>
          <li>Dedicated support from teachers and assistants</li>
          <li>Clear progress tracking and skill-building guidance</li>
        </ul>
      </div>
    </section>
  )
}

export default InfoSection
