import "./HowItWork.css"

const AccountTreeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
    <path d="M22,11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3H22z M7,9H4V5h3V9z M17,15h3v4h-3V15z M17,5h3v4h-3V5z" />
  </svg>
)

const DashboardIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
    <path d="M3,13H11V3H3V13M3,21H11V15H3V21M13,21H21V11H13V21M13,3V9H21V3H13Z" />
  </svg>
)

const MedicalServicesIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
    <path d="M19,8H17V6A2,2 0 0,0 15,4H9A2,2 0 0,0 7,6V8H5A3,3 0 0,0 2,11V19A3,3 0 0,0 5,22H19A3,3 0 0,0 22,19V11A3,3 0 0,0 19,8M9,6H15V8H9V6M11,14H9V16H7V14H5V12H7V10H9V12H11V14M18,16H14V14H18V16M18,12H14V10H18V12Z" />
  </svg>
)

const VerifiedIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
    <path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
  </svg>
)

const MedicationIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
    <path d="M6,3H18V5H6V3M7,6H17A1,1 0 0,1 18,7V8H6V7A1,1 0 0,1 7,6M2,10V19A1,1 0 0,0 3,20H21A1,1 0 0,0 22,19V10H2M9,12H11V14H13V16H11V18H9V16H7V14H9V12Z" />
  </svg>
)

const PsychologyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
    <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
  </svg>
)

const steps = [
  {
    id: 1,
    title: "Post Office Claims Transaction",
    description:
      "Seamless connectivity and structured data exchange between healthcare providers and insurers comply with regulator mandates.",
    icon: AccountTreeIcon,
    color: "#1976d2",
  },
  {
    id: 2,
    title: "Tracking & Dashboard",
    description: "Track, monitor, and visualize the entire claim lifecycle with real-time insights and analytics.",
    icon: DashboardIcon,
    color: "#42a5f5",
  },
  {
    id: 3,
    title: "Medical & Coding Scrubber",
    description: "Detect medical and coding denials swiftly for accurate claim validation and compliance.",
    icon: MedicalServicesIcon,
    color: "#2196f3",
  },
  {
    id: 4,
    title: "Control Claim Validation",
    description:
      "Configure relations and optimize your claim validation process to meet specific requirements while maintaining compliance.",
    icon: VerifiedIcon,
    color: "#4caf50",
  },
  {
    id: 5,
    title: "Pharmaceutical Claims Management",
    description:
      "Leverage our Built-In Pharmaceutical Edits and Checks Suite to streamline your workflow and reduce denials in medication-related claims.",
    icon: MedicationIcon,
    color: "#ff9800",
  },
  {
    id: 6,
    title: "AI Module",
    description:
      "Better understand behaviours of all entities and improve data-driven decision-making with trend insights.",
    icon: PsychologyIcon,
    color: "#9c27b0",
  },
]

const HowItWork = () => {
  return (
    <div className="how-it-work-container">
      {/* Background Elements */}
      <div className="how-it-work-bg-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>

      {/* Header Section */}
      <div className="how-it-work-header">
        <h2 className="how-it-work-title">Multi-Layer Claim Cycle Solutions</h2>
        <p className="how-it-work-subtitle">
          Streamline your healthcare claims processing with our comprehensive suite of intelligent solutions
        </p>
      </div>

      {/* Circular Steps Grid */}
      <div className="circular-steps-grid">
        {steps.map((step, index) => {
          const IconComponent = step.icon
          return (
            <div key={step.id} className="circular-step-card" style={{ "--step-color": step.color }}>
              {/* Circular Icon Container */}
              <div className="circular-icon-container">
                <div className="icon-glow"></div>
                <div className="circular-icon">
                  <IconComponent />
                </div>
              </div>

              {/* Content */}
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>

              {/* Decorative Elements */}
              <div className="step-decoration decoration-1"></div>
              <div className="step-decoration decoration-2"></div>
            </div>
          )
        })}
      </div>

      {/* Bottom CTA */}
      <div className="how-it-work-cta">
        <h3 className="cta-title">Ready to transform your claims processing?</h3>
        <p className="cta-subtitle">Experience the future of healthcare claims management</p>
      </div>
    </div>
  )
}

export default HowItWork
