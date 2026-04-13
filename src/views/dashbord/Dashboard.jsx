import React, { useState } from 'react'
import './Dashbord.css'
import DashboardHero from '../../components/DashboardHero/DashboardHero.jsx'
import DashboardFeatures from '../../components/DashboardFeatures/DashboardFeatures.jsx'
import DashboardDetails from '../../components/DashboardDetails/DashboardDetails.jsx'
import ChatBot from '../../components/ChatBot/ChatBot.jsx'

const featureItems = [
  {
    id: 'notes',
    title: 'Notes',
    description: 'Organize class notes, summaries, and quick references in one place.',
    icon: '📝',
  },
  {
    id: 'batch',
    title: 'Batch',
    description: 'Check your batch details, timetable, and group announcements.',
    icon: '👥',
  },
  {
    id: 'live',
    title: 'Live Meeting App',
    description: 'Join live classes, video sessions, and interactive workshops.',
    icon: '🎥',
  },
  {
    id: 'assignments',
    title: 'Assignments',
    description: 'Track upcoming tasks, deadlines, and submission status.',
    icon: '📚',
  },
  {
    id: 'papers',
    title: 'Question Papers',
    description: 'Access past exam papers, practice sets, and revision tests.',
    icon: '📄',
  },
]

const featureDetails = {
  notes: 'Your notes hub gives you instant access to class summaries, chapter highlights, and study cards so you can revise faster.',
  batch: 'Your batch view shows your class group, timetable, study coaches, and the latest group announcements.',
  live: 'Launch the live meeting app to join video lessons, ask questions in real time, and collaborate with your classmates.',
  assignments: 'Monitor all assignments, due dates, grading status, and upload reminders in one place.',
  papers: 'Download previous years question papers, practice papers, and answer templates for exam preparation.',
}

const getBotReply = (message) => {
  const text = message.toLowerCase()
  if (text.includes('notes')) {
    return 'You can open the Notes app to review summaries, add new notes, and save important class points.'
  }
  if (text.includes('batch')) {
    return 'Your batch section contains schedule details, group announcements, and teacher information.'
  }
  if (text.includes('live') || text.includes('meeting') || text.includes('class')) {
    return 'The Live Meeting App is ready to launch. Use it to join live sessions and ask questions instantly.'
  }
  if (text.includes('assignment') || text.includes('deadline')) {
    return 'Assignment section helps you track deadlines, view pending tasks, and manage submissions.'
  }
  if (text.includes('paper') || text.includes('question')) {
    return 'Question Papers includes practice tests and past exams so you can prepare smartly.'
  }
  if (text.includes('hello') || text.includes('hi')) {
    return 'Hello! I am your study assistant. Ask me about Notes, Batch, Live Meeting, Assignments, or Question Papers.'
  }
  return 'I am here to help. Try asking me about Notes, Batch, Live Meeting App, Assignments, or Question Papers.'
}

function Dashboard() {
  const [selectedFeature, setSelectedFeature] = useState('notes')
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hi! I am your SmartEdu assistant. Ask me about Notes, Batch, Live Meeting, Assignments, or Question Papers.',
    },
  ])

  const handleFeatureClick = (id) => {
    setSelectedFeature(id)
  }

  const handleSendMessage = (event) => {
    event.preventDefault()
    const trimmed = inputValue.trim()
    if (!trimmed) return

    const userMessage = { sender: 'user', text: trimmed }
    const botMessage = { sender: 'bot', text: getBotReply(trimmed) }
    setMessages((prev) => [...prev, userMessage, botMessage])
    setInputValue('')
  }

  const heroStats = [
    { title: 'Next Class', text: 'Physics Live Session at 09:30 AM', icon: '🔔', badge: 2 },
    { title: 'Pending Tasks', text: '3 assignments due this week', icon: '�', badge: 3 },
  ]

  return (
    <div className="dashboard-page">
      <DashboardHero
        subtitle="SmartEdu Dashboard"
        title="Welcome back, ready to continue learning?"
        description="Quickly access your notes, batch details, live meetings, assignments, and question papers from one place."
        stats={heroStats}
      />

      <DashboardFeatures
        features={featureItems}
        selectedFeature={selectedFeature}
        onFeatureClick={handleFeatureClick}
      />

      <section className="dashboard-section dashboard-highlight">
        <DashboardDetails
          title={featureItems.find((item) => item.id === selectedFeature)?.title}
          description={featureDetails[selectedFeature]}
        />
        <ChatBot
          messages={messages}
          inputValue={inputValue}
          onInputChange={(event) => setInputValue(event.target.value)}
          onSend={handleSendMessage}
        />
      </section>
    </div>
  )
}

export default Dashboard
