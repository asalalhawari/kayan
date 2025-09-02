import "./Benefits.css"

const benefitsData = [
  {
    id: "01",
    title: "Effortless Integration",
    description: "Experience seamless and accessible integration that streamlines workflows",
    icon: "⚡",
    color: "#1976d2",
  },
  {
    id: "02",
    title: "Innovation & Customization",
    description: "Innovative AI solutions that meet demands and strictly adhere to the GCC healthcare regulations.",
    icon: "🚀",
    color: "#4caf50",
  },
  {
    id: "03",
    title: "Comprehensive Medical Database",
    description: "Gain access to a vast, robust medical database for enhanced decision-making",
    icon: "🛡️",
    color: "#ff9800",
  },
  {
    id: "04",
    title: "Future-Ready Agility",
    description: "Benefit from continuous updates and adaptability to stay ahead in a dynamic environment.",
    icon: "📈",
    color: "#9c27b0",
  },
  {
    id: "05",
    title: "Client Advocacy",
    description: "Strong client relationships and industry reputation",
    icon: "🤝",
    color: "#f44336",
  },
  {
    id: "06",
    title: "Cost-effectiveness",
    description: "Achieve seamless claims validation without breaking the Bank",
    icon: "💰",
    color: "#00bcd4",
  },
]

const Benefits = () => {
  return (
    <div id="benefits" className="benefits-container">
      {/* Background Elements */}
      <div className="benefits-bg-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>

      {/* Header Section */}
      <div className="benefits-header">
        <h2 className="benefits-title">Revolutionize E-Claims With KAYAN</h2>
        <p className="benefits-subtitle">
          We empower healthcare stakeholders by removing the administrative bottleneck via our cutting-edge solutions.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="benefits-grid">
        {benefitsData.map((benefit, index) => (
          <div
            key={benefit.id}
            className="benefit-card"
            style={{
              "--delay": `${index * 0.1}s`,
              "--color": benefit.color,
            }}
          >
            <div className="benefit-icon-container">
              <div className="benefit-icon" style={{ backgroundColor: `${benefit.color}20`, color: benefit.color }}>
                {benefit.icon}
              </div>
              <div className="icon-glow" style={{ backgroundColor: benefit.color }}></div>
            </div>

            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>

            <div className="benefit-number">{benefit.id}</div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
     
    </div>
  )
}

export default Benefits
