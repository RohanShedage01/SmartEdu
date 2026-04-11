import React from 'react'
import './index.css'
import InfoSection from '../../components/Infosection/InfoSection.jsx'
import WhyChoose from '../../components/WhyChoose/WhyChoose.jsx'
import ContactAbout from '../../components/ContactAbout/ContactAbout.jsx'
import TeachingAssistantDetails from '../../components/Teaching assistant/TeachingAssistantDetails.jsx'

function Index() {
  return (
    <div className="smartedu-page">
      <InfoSection />
      <WhyChoose />
      <ContactAbout />
      <TeachingAssistantDetails />
    </div>
  )
}

export default Index
