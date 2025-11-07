"use client"

import { useState } from "react"
// **تم استبدال استيراد MUI بـ lucide-react و Box و Container (يجب التأكد من وجودهما أو استبدالهما)**
import { Container, Box } from "@mui/material" 

import {
  GitBranch, // لـ AccountTreeIcon -> Post Office Claims Transaction
  LayoutDashboard, // لـ DashboardIcon -> Tracking & Dashboard
  Stethoscope, // لـ MedicalServicesIcon -> Medical & Coding Scrubber
  ShieldCheck, // لـ VerifiedIcon -> Control Claim Validation
  Pill, // لـ MedicationIcon -> Pharmaceutical Claims Management
  Brain, // لـ PsychologyIcon -> AI Module
} from "lucide-react" 

// *** تم حذف تعريفات الأيقونات القديمة (AccountTreeIcon, DashboardIcon, إلخ) واستبدالها بالاستيراد أعلاه ***

const steps = [
  {
    id: 1,
    title: "Post Office Claims Transaction",
    description:
      "Seamless connectivity and structured data exchange between healthcare providers and insurers comply with regulator mandates.",
    icon: GitBranch, // رمز يدل على التفرع والمسارات/المعاملات
    color: "#1976d2",
  },
  {
    id: 2,
    title: "Tracking & Dashboard",
    description: "Track, monitor, and visualize the entire claim lifecycle with real-time insights and analytics.",
    icon: LayoutDashboard, // رمز لوحة تحكم
    color: "#42a5f5",
  },
  {
    id: 3,
    title: "Medical & Coding Scrubber",
    description: "Detect medical and coding denials swiftly for accurate claim validation and compliance.",
    icon: Stethoscope, // رمز سماعة الطبيب يدل على الجانب الطبي
    color: "#2196f3",
  },
  {
    id: 4,
    title: "Control Claim Validation",
    description:
      "Configure relations and optimize your claim validation process to meet specific requirements while maintaining compliance.",
    icon: ShieldCheck, // رمز درع مع علامة صح يدل على التحقق والحماية
    color: "#4caf50",
  },
  {
    id: 5,
    title: "Pharmaceutical Claims Management",
    description:
      "Leverage our Built-In Pharmaceutical Edits and Checks Suite to streamline your workflow and reduce denials in medication-related claims.",
    icon: Pill, // رمز حبة دواء
    color: "#ff9800",
  },
  {
    id: 6,
    title: "AI Module",
    description:
      "Better understand behaviours of all entities and improve data-driven decision-making with trend insights.",
    icon: Brain, // رمز الدماغ يدل على الذكاء الاصطناعي
    color: "#9c27b0",
  },
]

const HowItWork = () => {
  return (
    <div className="benefits-container" data-aos="fade-up" data-aos-duration="1000" className="bg-gradient-to-r from-[#020817] via-[#041E2F] to-[#000000]">
      {/* خلفيات دوائر */}
      <div className="benefits-bg-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>

      <Container maxWidth="lg">
        {/* العنوان */}
        <Box className="benefits-header">
          <h2 className="benefits-title">
            Multi-Layer Claim Cycle Solutions
          </h2>
          <p className="benefits-subtitle">
            Streamline your healthcare claims processing with our comprehensive suite of intelligent solutions
          </p>
        </Box>

        {/* الكروت */}
        <div className="benefits-grid">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div
                className="benefit-card"
                key={step.id}
                style={{ "--color": step.color, "--delay": `${index * 0.1}s` }}
              >
                <div className="benefit-icon-container top-left">
                  <span className="icon-glow small" style={{ 
                    background: step.color,
                    borderRadius: "50%",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    transform: "translate(-50%, -50%)",
                       }}></span>
                  <span className="benefit-icon small with-circle" style={{ 
                    color: step.color,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: "10",
                       }}>
                    {/* استخدام أيقونات Lucide-React مباشرة */}
                    <IconComponent size={20} /> 
                  </span>
                </div>

                <div className="benefit-content">
                  <h3 className="benefit-title compact">{step.title}</h3>
                  <p className="benefit-description compact">{step.description}</p>
                </div>

                <div className="benefit-number">{String(step.id).padStart(2, "0")}</div>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

export default HowItWork