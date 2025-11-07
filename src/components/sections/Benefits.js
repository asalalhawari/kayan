"use client";

import "./Benefits.css";
import FlashOnIcon from "@mui/icons-material/FlashOn"; // ⚡
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch"; // 🚀
import SecurityIcon from "@mui/icons-material/Security"; // 🛡️
import TrendingUpIcon from "@mui/icons-material/TrendingUp"; // 📈
import HandshakeIcon from "@mui/icons-material/Handshake"; // 🤝
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"; // 💰

const benefitsData = [
  {
    id: "01",
    title: "Effortless Integration",
    description:
      "Experience seamless and accessible integration that streamlines workflows",
    icon: <FlashOnIcon sx={{ fontSize: 28 }} />,
    color: "#1976d2",
  },
  {
    id: "02",
    title: "Innovation & Customization",
    description:
      "Innovative AI solutions that meet demands and strictly adhere to the GCC healthcare regulations.",
    icon: <RocketLaunchIcon sx={{ fontSize: 28 }} />,
    color: "#4caf50",
  },
  {
    id: "03",
    title: "Comprehensive Medical Database",
    description:
      "Gain access to a vast, robust medical database for enhanced decision-making",
    icon: <SecurityIcon sx={{ fontSize: 28 }} />,
    color: "#ff9800",
  },
  {
    id: "04",
    title: "Future-Ready Agility",
    description:
      "Benefit from continuous updates and adaptability to stay ahead in a dynamic environment.",
    icon: <TrendingUpIcon sx={{ fontSize: 28 }} />,
    color: "#9c27b0",
  },
  {
    id: "05",
    title: "Client Advocacy",
    description: "Strong client relationships and industry reputation",
    icon: <HandshakeIcon sx={{ fontSize: 28 }} />,
    color: "#f44336",
  },
  {
    id: "06",
    title: "Cost-effectiveness",
    description: "Achieve seamless claims validation without breaking the Bank",
    icon: <MonetizationOnIcon sx={{ fontSize: 28 }} />,
    color: "#00bcd4",
  },
];

const Benefits = () => {
  return (
    <div
      id="benefits"
      data-aos="fade-right"
      data-aos-duration="1000"
      className="benefits-container bg-gradient-to-r from-[#020817] via-[#041E2F] to-[#000000]"
    >
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
          We empower healthcare stakeholders by removing the administrative
          bottleneck via our cutting-edge solutions.
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
            <div
              className="benefit-icon-container top-left"
              onClick={(e) => e.currentTarget.classList.toggle("active")}
            >
              <div
                className="icon-glow small"
                style={{
                  backgroundColor: benefit.color,
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  transform: "translate(-50%, -50%)",
                }}
              ></div>
              <div
                className="benefit-icon small with-circle"
                style={{
                  backgroundColor: `${benefit.color}20`,
                  color: benefit.color,
                  border: `2px solid ${benefit.color}30`,
                  borderRadius: "50%",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: "10",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "45px",
                  height: "45px",
                }}
              >
                {benefit.icon}
              </div>
            </div>

            <div className="benefit-content">
              <h3 className="benefit-title compact">{benefit.title}</h3>
              <p className="benefit-description compact">
                {benefit.description}
              </p>
            </div>

            <div className="benefit-number">{benefit.id}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
