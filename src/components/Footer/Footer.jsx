import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="smartedu-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3>SmartEdu</h3>
          <p>
            A smart learning platform built to support every student with live classes, offline
            study tools, exam preparation, and expert teaching support.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <nav>
            <a href="/">Home</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/login">Login</a>
          </nav>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>
            <a href="mailto:support@smartedu.com">support@smartedu.com</a>
          </p>
          <p>
            <a href="tel:+91 555 123 4567">+91 555 123 4567</a>
          </p>
          <p>24 Knowledge Drive, Learning City</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 SmartEdu. All rights reserved.</p>
        <div className="footer-social">
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">Facebook</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
