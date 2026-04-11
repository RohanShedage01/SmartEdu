import React from 'react'
import './TeachingAssistantDetails.css'

const assistants = [
  {
    name: 'Riya Sharma',
    role: 'Senior Tutor',
    subject: 'Mathematics',
    education: 'M.Sc. Mathematics, IIT Delhi',
    experience: '8 years of classroom and online teaching',
    availability: 'Live classes, recorded sessions, doubt clinics',
    email: 'riya.sharma@smartedu.com',
  },
  {
    name: 'Anjali Mehta',
    role: 'Science Mentor',
    subject: 'Science',
    education: 'B.Tech Biology, NIT Trichy',
    experience: '7 years designing lab-based science lessons',
    availability: 'Live labs, practical guides, exam reviews',
    email: 'anjali.mehta@smartedu.com',
  },
  {
    name: 'Aman Patel',
    role: 'Language Specialist',
    subject: 'English',
    education: 'M.A. English Literature, DU',
    experience: '6 years in English reading, writing, and communication',
    availability: 'Live workshops, writing feedback, speaking practice',
    email: 'aman.patel@smartedu.com',
  },
  {
    name: 'Nina Roy',
    role: 'Social Studies Mentor',
    subject: 'Social Studies',
    education: 'M.A. History, JNU',
    experience: '5 years teaching history, civics and current affairs',
    availability: 'Recorded batches, discussion sessions, model papers',
    email: 'nina.roy@smartedu.com',
  },
]

function TeachingAssistantDetails() {
  return (
    <section id="assistants" className="smartedu-assistant-section">
      <div className="assistant-header">
        <span className="section-pill">Teacher Network</span>
        <h2>Subject-wise Teaching Assistants</h2>
        <p>
          Meet our teaching specialists for every major subject. Each teacher is assigned to a specific
          subject batch with their education background, experience, and available session format.
        </p>
      </div>

      <div className="assistant-grid">
        {assistants.map((assistant) => (
          <article key={assistant.email} className="assistant-card">
            <div className="assistant-card-top">
              <h3>{assistant.name}</h3>
              <span>{assistant.subject}</span>
            </div>
            <p className="assistant-role">{assistant.role}</p>
            <div className="assistant-detail">
              <strong>Education:</strong>
              <span>{assistant.education}</span>
            </div>
            <div className="assistant-detail">
              <strong>Experience:</strong>
              <span>{assistant.experience}</span>
            </div>
            <div className="assistant-detail">
              <strong>Format:</strong>
              <span>{assistant.availability}</span>
            </div>
            <div className="assistant-contact">
              <strong>Email</strong>
              <span>{assistant.email}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="education-contact-card">
        <h3>Education Contact Details</h3>
        <p>Office Address: 24 Knowledge Drive, Learning City</p>
        <p>Phone: +1 (555) 987-6543</p>
        <p>Email: info@smartedu.com</p>
      </div>
    </section>
  )
}

export default TeachingAssistantDetails
