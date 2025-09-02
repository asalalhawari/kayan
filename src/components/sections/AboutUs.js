"use client"

import { useState, useEffect } from "react"
import "./About.css"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about")
      if (element) {
        const rect = element.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight && rect.bottom > 0
        setIsVisible(isInView)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="about" className={`about-section ${isVisible ? "visible" : ""}`}>
      {/* Background Elements */}
      <div className="about-bg-elements">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="gradient-mesh"></div>
        <div className="tech-grid"></div>
      </div>

      <div className="about-container">
        {/* Header Section */}
        <div className="about-header">
          <div className="section-badge">
            <span className="badge-text">About Kayan</span>
            <div className="badge-glow"></div>
          </div>
          <h2 className="about-main-title">
            Revolutionizing Healthcare Through
            <span className="gradient-text"> Smart Solutions</span>
          </h2>
          <div className="title-underline"></div>
        </div>

        {/* Content Grid */}
        <div className="about-content-grid">
          {/* Left Column - Text Content */}
          <div className="about-text-column">
            <div className="text-content">
              <div className="highlight-box">
                <div className="highlight-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span>Established 2019</span>
              </div>

              <p className="about-description">
                <strong>KAYAN Healthcare Technologies</strong> is a pioneering force in the healthcare technology
                sector, dedicated to revolutionizing claims validation and administrative workflows.
              </p>

              <p className="about-description">
                Our company leverages <span className="highlight-text">advanced algorithms</span> and
                <span className="highlight-text"> AI-powered data-driven insights</span> to deliver innovative solutions
                that empower payers, providers, and regulators across the Gulf Cooperation Council (GCC).
              </p>

              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Clients Served</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">99.9%</div>
                  <div className="stat-label">Uptime</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">GCC</div>
                  <div className="stat-label">Coverage</div>
                </div>
              </div>

              <button className="about-cta-button">
                <span>Request a Demo</span>
                <div className="button-arrow">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="button-glow"></div>
              </button>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="about-visual-column">
            <div className="visual-container">
              {/* Main Circle with Image */}
              <div className="main-visual-circle">
                <div className="circle-border"></div>
                <div className="circle-content">
                 <img
   src="/images/healthcare-technology-team-working-with-ai-systems.png"
   alt="Kayan Healthcare Technology"
   className="about-image"
   onError={(e) => {
      e.target.src = "/healthcare-technology-team.png"
   }}
/>

                  <div className="image-overlay"></div>
                </div>

                {/* Floating Tech Elements */}
                <div className="tech-element tech-1">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="tech-element tech-2">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <div className="tech-element tech-3">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="orbit-ring orbit-1">
                <div className="orbit-dot"></div>
              </div>
              <div className="orbit-ring orbit-2">
                <div className="orbit-dot"></div>
              </div>
              <div className="orbit-ring orbit-3">
                <div className="orbit-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
