import React from 'react'
import './ContactAbout.css'

function ContactAbout() {
  return (
    <section id="contact" className="smartedu-contact-about">
      <article className="contact-card contact-summary-card">
        <span className="section-pill">Contact</span>
        <h2>Need help? We’re here.</h2>
        <p className="card-intro">
          Reach out for course guidance, batch details, or study support.
        </p>

        <div className="contact-quick">
          <div>
            <strong>Email</strong>
            <a href="mailto:support@smartedu.com">support@smartedu.com</a>
          </div>
          <div>
            <strong>Phone</strong>
            <a href="tel:+91 555 123 4567">+91 555 123 4567</a>
          </div>
        </div>
      </article>

      <article className="contact-card about-card">
        <span className="section-pill section-pill-alt">About</span>
        <h2>SmartEdu in a few words</h2>
        <p className="card-intro">
          Live classes, recorded batches, exam prep, and mentor support — all in one easy learning hub.
        </p>
      </article>
    </section>
  )
}

export default ContactAbout
