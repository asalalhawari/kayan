"use client"

import { useState } from "react"

const Solutions = () => {
  const [activeModal, setActiveModal] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // PETRA Solutions
  const petraSolutions = [
    {
      number: "01",
      title: "Post Office Integrator",
      description:
        "Experience seamless connectivity between the Post Office, healthcare providers, and insurers through our Integrator. Track the full claim cycle through streamlined data exchange using HL7 and standardized requests and responses. Ensuring efficient transactions and regulatory compliance.",
    },
    {
      number: "02",
      title: "Medical & Coding Guidelines Scrubber",
      description:
        "Scrub your claims effectively and ensure timely reimbursement with our comprehensive medical database, featuring a suite of edits and checks. Benefit from periodic agile updates, real-time responses, and user-friendly messages for a seamless experience.",
    },
    {
      number: "03",
      title: "Rule Management Scrubber",
      description:
        "Tailor your rules using our customizable relations and leverage a robust validation layer to verify the eligibility of every claim. Avoid claim denials and secure your reimbursements with our powerful validation layer, designed to enhance accuracy and optimize your revenue cycle.",
    },
    {
      number: "04",
      title: "AI LAYER",
      description:
        "Unlock profound insights and a clear understanding of your data with our advanced insightful AI layer, featuring multiple functionalities. Enhance your data-driven decision-making through user-friendly dashboards and visualization tools, making it easier to interpret and act on your data.",
    },
  ]

  // QUDRA Solutions
  const qudraSolutions = [
    {
      number: "01",
      title: "Claims Validation Engine",
      description:
        "Validate claims with multi-layered checks against policy rules, business logic, and coding guidelines, ensuring accuracy and minimizing rejections.",
    },
    {
      number: "02",
      title: "Policy & Benefits Management",
      description:
        "Manage benefits and policy rules dynamically to ensure accurate and fair claim settlement, reducing discrepancies and enhancing trust.",
    },
    {
      number: "03",
      title: "Fraud, Waste & Abuse Detection",
      description:
        "Leverage AI-powered analytics to detect unusual claim patterns, fraud attempts, or excessive billing, safeguarding financial resources.",
    },
    {
      number: "04",
      title: "Analytics & Dashboards",
      description:
        "Visualize insurer performance with interactive dashboards and reporting tools, enabling better decision-making and transparency.",
    },
  ]

  // PHARMACEUTICAL Solutions
  const pharmaceuticalSolutions = [
    {
      number: "01",
      title: "Drug Claim Adjudication",
      description:
        "Automate and validate pharmaceutical claims, ensuring accurate pricing, dosage checks, and formulary compliance.",
    },
    {
      number: "02",
      title: "Formulary & Price Management",
      description:
        "Manage drug formularies and pricing dynamically, supporting real-time updates and compliance with regulatory frameworks.",
    },
    {
      number: "03",
      title: "Inventory & Dispensing Oversight",
      description:
        "Ensure accurate claim submission by monitoring inventory levels, dispensing records, and reconciliation with claims.",
    },
    {
      number: "04",
      title: "Pharma Data Analytics",
      description:
        "Unlock insights on drug utilization, cost patterns, and prescribing behaviors through advanced pharmaceutical data analytics.",
    },
  ]

  const solutionsMeta = [
    {
      id: "PETRA",
      name: "PETRA",
      subtitle: "Multi-Layered Healthcare Provider Solution",
      description:
        "Comprehensive healthcare provider solutions to streamline claims, enhance accuracy, and empower data-driven operations.",
      color: "#60a5fa",
      items: petraSolutions,
    },
    {
      id: "QUDRA",
      name: "QUDRA",
      subtitle: "Multi-Layered Insurer Solution",
      description:
        "Advanced insurer solutions focusing on fraud detection, policy management, and robust claim validations.",
      color: "#34d399",
      items: qudraSolutions,
    },
    {
      id: "PHARMACEUTICAL",
      name: "PHARMACEUTICAL",
      subtitle: "Pharmaceutical Claims Management",
      description:
        "Optimize your pharmaceutical claims cycle with AI-driven adjudication, formulary management, and analytics.",
      color: "#f472b6",
      items: pharmaceuticalSolutions,
    },
  ]

  const cardBackground = `radial-gradient(circle at 20% 80%, rgba(107, 159, 241, 0.15) 0%, transparent 60%), 
                          radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), 
                          radial-gradient(circle at 40% 40%, rgba(95, 133, 195, 0.05) 0%, transparent 70%)`

  const handleNext = () => {
    if (activeModal) {
      setCurrentIndex((prev) => (prev + 1) % activeModal.items.length)
    }
  }

  const handlePrev = () => {
    if (activeModal) {
      setCurrentIndex((prev) =>
        prev === 0 ? activeModal.items.length - 1 : prev - 1
      )
    }
  }

  return (
    <div className="relative min-h-screen px-6 py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Title */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h1 className="text-4xl font-black text-transparent bg-gradient-to-r from-slate-800 to-slate-900 bg-clip-text md:text-5xl">
          Multi-Modal Solutions
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          Mastering the full Claim Cycle from seamless transition to robust validation via our comprehensive solutions
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3">
        {solutionsMeta.map((s) => (
          <button
            key={s.id}
            onClick={() => {
              setActiveModal(s)
              setCurrentIndex(0)
            }}
            className="relative overflow-hidden text-left transition-all duration-300 transform shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-1 hover:scale-105 p-7"
            style={{ background: cardBackground }}
          >
            <h2 className="text-2xl font-bold text-slate-900">{s.name}</h2>
            <h3 className="mt-1 text-sm font-medium text-slate-700">{s.subtitle}</h3>
            <p className="mt-4 line-clamp-4 text-slate-700">{s.description}</p>

            <div className="inline-flex items-center px-4 py-2 mt-6 text-sm font-semibold text-blue-700 transition-all duration-300 bg-white rounded-xl hover:bg-blue-100">
              Explore {s.name} <span className="ml-2">→</span>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden bg-white shadow-xl rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="flex items-center gap-4 p-6 text-white"
              style={{
                background: `linear-gradient(135deg, ${activeModal.color} 0%, rgba(255,255,255,0.2) 100%)`,
              }}
            >
              <div>
                <h2 className="text-2xl font-bold">{activeModal.name}</h2>
                <p className="text-sm text-white/90">{activeModal.subtitle}</p>
              </div>
              <button
                className="p-2 ml-auto rounded-full bg-white/30 hover:bg-white/50"
                onClick={() => setActiveModal(null)}
              >
                ✕
              </button>
            </div>

            {/* Body with one item at a time */}
            <div className="p-6 text-center">
              <span className="block text-2xl font-bold text-blue-500 opacity-60">
                {activeModal.items[currentIndex].number}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                {activeModal.items[currentIndex].title}
              </h3>
              <p className="mt-4 text-slate-700">
                {activeModal.items[currentIndex].description}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between px-6 py-4 border-t bg-slate-50">
              <button
                onClick={handlePrev}
                className="px-4 py-2 bg-white rounded-full shadow hover:bg-slate-100"
              >
                ← Prev
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-white rounded-full shadow hover:bg-slate-100"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Solutions