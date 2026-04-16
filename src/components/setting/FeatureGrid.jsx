import React from 'react'

function FeatureGrid({ featureBlocks }) {
  return (
    <div className="settings-panel-group">
      <h2>More iconic features</h2>
      <div className="feature-grid">
        {featureBlocks.map((feature) => (
          <article key={feature.title} className="feature-block">
            <span className="feature-icon">{feature.icon}</span>
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default FeatureGrid
