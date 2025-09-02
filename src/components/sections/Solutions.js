"use client"

import { useState } from "react"
import "./Solutions.css"

const Solutions = () => {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [activeModal, setActiveModal] = useState(null)

  const petraSolutions = [
    {
      number: "01",
      title: "Post Office Integrator",
      description:
        "Experience seamless connectivity between the Post Office, healthcare providers, and insurers through our Integrator. Track the full claim cycle through streamlined data exchange using HL7 and standardized requests and responses. Ensuring efficient transactions and regulatory compliance.",
      icon: "🔗",
      color: "#1976d2",
    },
    {
      number: "02",
      title: "Medical & Coding Guidelines Scrubber",
      description:
        "Scrub your claims effectively and ensure timely reimbursement with our comprehensive medical database, featuring a suite of edits and checks. Benefit from periodic agile updates, real-time responses, and user-friendly messages for a seamless experience.",
      icon: "🛡️",
      color: "#42a5f5",
    },
    {
      number: "03",
      title: "Rule Management Scrubber",
      description:
        "Tailor your rules using our customizable relations and leverage a robust validation layer to verify the eligibility of every claim. Avoid claim denials and secure your reimbursements with our powerful validation layer, designed to enhance accuracy and optimize your revenue cycle.",
      icon: "⚙️",
      color: "#2196f3",
    },
    {
      number: "04",
      title: "AI LAYER",
      description:
        "Unlock profound insights and a clear understanding of your data with our advanced insightful AI layer, featuring multiple functionalities. Enhance your data-driven decision-making through user-friendly dashboards and visualization tools, making it easier to interpret and act on your data.",
      icon: "🧠",
      color: "#4caf50",
    },
  ]

  const qudraSolutions = [
    {
      number: "01",
      title: "Post Office Integrator",
      description:
        "Experience seamless connectivity between the Post Office, healthcare providers, and insurers through our Integrator. Track the full claim cycle through streamlined data exchange using HL7 and standardized requests and responses. Ensuring efficient transactions and regulatory compliance.",
      icon: "🔗",
      color: "#1976d2",
    },
    {
      number: "02",
      title: "Medical & Coding Guidelines Scrubber",
      description:
        "Validate your claims with our robust medical database, featuring a suite of edits and checks. Enjoy periodic agile updates, real-time responses, and user-friendly messages for a seamless experience.",
      icon: "⚙️",
      color: "#42a5f5",
    },
    {
      number: "03",
      title: "Rule Management Scrubber",
      description:
        "Tailor your rules using our customizable relations and leverage a powerful validation layer to verify the eligibility of every claim. Automate your claims cycle for increased accuracy and efficiency, ensuring that no detail is overlooked.",
      icon: "🧠",
      color: "#2196f3",
    },
    {
      number: "04",
      title: "AI LAYER",
      description:
        "Unlock profound insights and a clear understanding of your data with our advanced insightful AI layer, featuring multiple functionalities. Enhance your data-driven decision-making through user-friendly dashboards and visualization tools, making it easier to interpret and act on your data.",
      icon: "🎯",
      color: "#4caf50",
    },
  ]

  const pharmaceuticalSolutions = [
    {
      number: "01",
      title: "Pharmaceutical Clinical Checks",
      description:
        "Automatically verify prescriptions against formularies and guidelines to ensure adherence to medical standards through our built-in Edits and Checks Suite. Benefit from real-time validations and regular database updates, empowering you to maintain accuracy and compliance at every step.",
      icon: "🏥",
      color: "#ff9800",
    },
    {
      number: "02",
      title: "Pharmaceutical Benefit Checks",
      description:
        "Utilize built-in customizable relations and perform automated benefit verifications and identify potential claim denials.",
      icon: "🛡️",
      color: "#ff5722",
    },
  ]

  const showSolutionDetails = (solutionType) => {
    setActiveModal(solutionType)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  const getSolutionData = (type) => {
    switch (type) {
      case "PETRA":
        return {
          solutions: petraSolutions,
          title: "PETRA",
          subtitle: "Multi-Layered Healthcare Provider Solution",
          theme: "petra",
        }
      case "QUDRA":
        return {
          solutions: qudraSolutions,
          title: "QUDRA",
          subtitle: "Multi-Layered Insurer Solution",
          theme: "qudra",
        }
      case "PHARMACEUTICAL":
        return {
          solutions: pharmaceuticalSolutions,
          title: "PHARMACEUTICAL",
          subtitle: "Pharmaceutical Claims Management",
          theme: "pharmaceutical",
        }
      default:
        return null
    }
  }

  return (
    <div className="solutions-container">
      {/* Background Elements */}
      <div className="solutions-bg-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="data-flow-line line-1"></div>
        <div className="data-flow-line line-2"></div>
      </div>

      {/* Header Section */}
      <div className="solutions-header">
        <h1 className="solutions-title">Multi-Modal Solutions</h1>
        <p className="solutions-subtitle">
          Mastering the full Claim Cycle from seamless transition to robust validation via our comprehensive solutions
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="solutions-grid">
        {/* PETRA Card */}
        <div
          className="solution-card petra-card"
          onMouseEnter={() => setHoveredCard("petra")}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => showSolutionDetails("PETRA")}
        >
          <div className="solution-card-inner">
            <div className="solution-icon-container petra-icon">
              <span className="solution-icon">🏥</span>
            </div>
            <h2 className="solution-name">PETRA</h2>
            <h3 className="solution-subtitle">Multi-Layered Healthcare Provider Solution</h3>
            <p className="solution-description">
              Comprehensive healthcare provider solutions with advanced integration, validation, and AI-powered insights
              for optimal claims processing.
            </p>
            <button className="solution-cta-btn petra-btn">
              <span>Explore PETRA</span>
              <span className="btn-arrow">→</span>
            </button>
          </div>
          <div className="card-glow petra-glow"></div>
        </div>

        {/* QUDRA Card */}
        <div
          className="solution-card qudra-card"
          onMouseEnter={() => setHoveredCard("qudra")}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => showSolutionDetails("QUDRA")}
        >
          <div className="solution-card-inner">
            <div className="solution-icon-container qudra-icon">
              <span className="solution-icon">🛡️</span>
            </div>
            <h2 className="solution-name">QUDRA</h2>
            <h3 className="solution-subtitle">Multi-Layered Insurer Solution</h3>
            <p className="solution-description">
              Advanced insurer solutions with seamless integration, automation, and intelligent support for
              comprehensive claims management.
            </p>
            <button className="solution-cta-btn qudra-btn">
              <span>Explore QUDRA</span>
              <span className="btn-arrow">→</span>
            </button>
          </div>
          <div className="card-glow qudra-glow"></div>
        </div>

        {/* PHARMACEUTICAL Card */}
        <div
          className="solution-card pharmaceutical-card"
          onMouseEnter={() => setHoveredCard("pharmaceutical")}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => showSolutionDetails("PHARMACEUTICAL")}
        >
          <div className="solution-card-inner">
            <div className="solution-icon-container pharmaceutical-icon">
              <span className="solution-icon">💊</span>
            </div>
            <h2 className="solution-name">PHARMACEUTICAL</h2>
            <h3 className="solution-subtitle">Pharmaceutical Claims Management</h3>
            <p className="solution-description">
              Optimize Your Pharmaceutical Claims, and leverage our comprehensive medical data and rules management for
              seamless processing and impactful results.
            </p>
            <button className="solution-cta-btn pharmaceutical-btn">
              <span>Explore PHARMACEUTICAL</span>
              <span className="btn-arrow">→</span>
            </button>
          </div>
          <div className="card-glow pharmaceutical-glow"></div>
        </div>
      </div>

      {activeModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className={`modal-content ${getSolutionData(activeModal)?.theme}-modal`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className={`modal-icon ${getSolutionData(activeModal)?.theme}-modal-icon`}>
                {activeModal === "PETRA" && "🏥"}
                {activeModal === "QUDRA" && "🛡️"}
                {activeModal === "PHARMACEUTICAL" && "💊"}
              </div>
              <div className="modal-title-section">
                <h2 className="modal-title">{getSolutionData(activeModal)?.title}</h2>
                <p className="modal-subtitle">{getSolutionData(activeModal)?.subtitle}</p>
              </div>
              <button className="modal-close-btn" onClick={closeModal}>
                ×
              </button>
            </div>

            <div className="modal-body">
              <div className="solutions-list">
                {getSolutionData(activeModal)?.solutions.map((solution, index) => (
                  <div key={index} className={`solution-item ${getSolutionData(activeModal)?.theme}-item`}>
                    <div className="solution-number">{solution.number}</div>
                    <div className="solution-content">
                      <h3 className="solution-item-title">{solution.title}</h3>
                      <p className="solution-item-description">{solution.description}</p>
                    </div>
                    <div className="solution-item-icon">{solution.icon}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Solutions
