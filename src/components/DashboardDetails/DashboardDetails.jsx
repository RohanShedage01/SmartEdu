import React from 'react'
import './DashboardDetails.css'

function DashboardDetails({ title, description }) {
  return (
    <div className="assistant-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="module-actions">
        <button type="button">Open Module</button>
        <button type="button">View Details</button>
      </div>
    </div>
  )
}

export default DashboardDetails
