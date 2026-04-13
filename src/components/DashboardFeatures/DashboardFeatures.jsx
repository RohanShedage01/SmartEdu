import React from 'react'
import './DashboardFeatures.css'

const previewData = {
  notes: {
    title: 'Notes Workspace',
    subtitle: 'Write, organize, and store your study notes.',
    bullets: ['Create new class notes', 'Tag content by subject', 'Search summaries instantly'],
  },
  batch: {
    title: 'Batch Manager',
    subtitle: 'Track batch details, schedule, and group updates.',
    bullets: ['View batch timetable', 'Read announcements', 'Connect with classmates'],
  },
  live: {
    title: 'Live Meeting App',
    subtitle: 'Join live classes and interact in real time.',
    bullets: ['Start video sessions', 'Chat with the teacher', 'Share learning resources'],
  },
  assignments: {
    title: 'Assignments Hub',
    subtitle: 'Monitor tasks, deadlines, and submissions.',
    bullets: ['See due dates', 'Upload work', 'Track progress'],
  },
  papers: {
    title: 'Question Papers',
    subtitle: 'Browse past exams and practice tests.',
    bullets: ['Download previous papers', 'Filter by subject', 'Access solution guides'],
  },
}

function DashboardFeatures({ features, selectedFeature, onFeatureClick }) {
  const activePreview = previewData[selectedFeature] || previewData.notes

  return (
    <section className="dashboard-section desktop-features">
      <div className="desktop-features-header">
        <div>
          <h2>Eduspace</h2>
          <p>Choose a feature from the Eduspace panel and preview what it can do for your study workflow.</p>
        </div>
      </div>

      <div className="desktop-features-grid">
        <div className="feature-sidebar">
          {features.map((feature) => (
            <button
              type="button"
              key={feature.id}
              className={`feature-card ${selectedFeature === feature.id ? 'active' : ''}`}
              onClick={() => onFeatureClick(feature.id)}
            >
              <div className="feature-card-top">
                <span className="feature-icon">{feature.icon}</span>
                <span className="feature-label">{feature.title}</span>
              </div>
              <p>{feature.description}</p>
            </button>
          ))}
        </div>

        <div className="desktop-preview">
          <div className="preview-header">
            <span className="preview-dot red" />
            <span className="preview-dot yellow" />
            <span className="preview-dot green" />
            <span>Desktop App Preview</span>
          </div>
          <div className="preview-body">
            <div className="preview-title-group">
              <span className="preview-icon">{features.find((item) => item.id === selectedFeature)?.icon}</span>
              <div>
                <h3>{activePreview.title}</h3>
                <p>{activePreview.subtitle}</p>
              </div>
            </div>
            <div className="preview-bullets">
              {activePreview.bullets.map((item) => (
                <div key={item} className="preview-bullet">
                  <span>•</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <button type="button" className="preview-launch">
              Open {features.find((item) => item.id === selectedFeature)?.title}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardFeatures
