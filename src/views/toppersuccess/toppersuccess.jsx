import React from 'react'
import './toppersuccess.css'

const exams = ['NEET', 'JEE', 'Olympiad', 'KVPY', 'Scholarship', 'State Exam']
const airCounters = { NEET: 0, JEE: 0 }
const toppers = Array.from({ length: 50 }, (_, index) => {
  const exam = exams[index % exams.length]
  const airRank = exam === 'NEET' || exam === 'JEE' ? `AIR ${++airCounters[exam]}` : ''

  return {
    id: index + 1,
    name: `Topper ${String(index + 1).padStart(2, '0')}`,
    exam,
    score: 95 + ((index * 3) % 5),
    airRank,
  }
})

function TopperSuccess() {
  return (
    <div className="topper-page">
      <div className="topper-hero">
        <div>
          <p className="topper-tag">Topper Success Wall</p>
          <h1>50 Elite Students Who Led All Competitive Exam Rankings</h1>
          <p>
            These students have toped competitive exams across NEET, JEE, Olympiads, scholarships and state-level contests. Each card follows the same premium SmartEdu theme format.
          </p>
        </div>
        <div className="topper-summary-card">
          <span className="topper-summary-icon">🏆</span>
          <h3>50 Star Toppers</h3>
          <p>Celebrating consistent high achievers and examination champions from our premium prep tracks.</p>
        </div>
      </div>

      <section className="topper-cards-section">
        <div className="section-heading">
          <p className="section-tag">Elite Leaders</p>
          <h2>All 50 students in the same premium ranked card format.</h2>
        </div>

        <div className="topper-card-grid">
          {toppers.map((student) => (
            <article key={student.id} className="topper-card">
              <div className="topper-card-header">
                <span className="topper-card-icon">{student.id <= 3 ? '🥇' : student.id <= 10 ? '🥈' : student.id <= 20 ? '🥉' : '⭐'}</span>
                <div>
                  <h3>{student.name}</h3>
                  <p className="topper-card-badge">
                    {student.exam}
                    {student.airRank ? ` • ${student.airRank}` : ''}
                  </p>
                </div>
              </div>
              <p className="topper-card-score">Score: {student.score}%</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default TopperSuccess
