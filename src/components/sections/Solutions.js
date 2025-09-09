"use client"

import { useState } from "react"

const Solutions = () => {
  const [activeModal, setActiveModal] = useState(null)

  const petraSolutions = [
    { number: "01", title: "Post Office Integrator", description: "Experience seamless connectivity between the Post Office, healthcare providers, and insurers through our Integrator. Track the full claim cycle through streamlined data exchange using HL7 and standardized requests and responses. Ensuring efficient transactions and regulatory compliance.", icon: "🔗" },
    { number: "02", title: "Medical & Coding Guidelines Scrubber", description: "Scrub your claims effectively and ensure timely reimbursement with our comprehensive medical database, featuring a suite of edits and checks. Benefit from periodic agile updates, real-time responses, and user-friendly messages for a seamless experience.", icon: "🛡️" },
    { number: "03", title: "Rule Management Scrubber", description: "Tailor your rules using our customizable relations and leverage a robust validation layer to verify the eligibility of every claim. Avoid claim denials and secure your reimbursements with our powerful validation layer, designed to enhance accuracy and optimize your revenue cycle.", icon: "⚙️" },
    { number: "04", title: "AI LAYER", description: "Unlock profound insights and a clear understanding of your data with our advanced insightful AI layer, featuring multiple functionalities. Enhance your data-driven decision-making through user-friendly dashboards and visualization tools, making it easier to interpret and act on your data.", icon: "🧠" },
  ]

  const qudraSolutions = [
    { number: "01", title: "Post Office Integrator", description: "Experience seamless connectivity between the Post Office, healthcare providers, and insurers through our Integrator. Track the full claim cycle through streamlined data exchange using HL7 and standardized requests and responses. Ensuring efficient transactions and regulatory compliance.", icon: "🔗" },
    { number: "02", title: "Medical & Coding Guidelines Scrubber", description: "Validate your claims with our robust medical database, featuring a suite of edits and checks. Enjoy periodic agile updates, real-time responses, and user-friendly messages for a seamless experience.", icon: "⚙️" },
    { number: "03", title: "Rule Management Scrubber", description: "Tailor your rules using our customizable relations and leverage a powerful validation layer to verify the eligibility of every claim. Automate your claims cycle for increased accuracy and efficiency, ensuring that no detail is overlooked.", icon: "🧠" },
    { number: "04", title: "AI LAYER", description: "Unlock profound insights and a clear understanding of your data with our advanced insightful AI layer, featuring multiple functionalities. Enhance your data-driven decision-making through user-friendly dashboards and visualization tools, making it easier to interpret and act on your data.", icon: "🎯" },
  ]

  const pharmaceuticalSolutions = [
    { number: "01", title: "Pharmaceutical Clinical Checks", description: "Automatically verify prescriptions against formularies and guidelines to ensure adherence to medical standards through our built-in Edits and Checks Suite. Benefit from real-time validations and regular database updates, empowering you to maintain accuracy and compliance at every step.", icon: "🏥" },
    { number: "02", title: "Pharmaceutical Benefit Checks", description: "Utilize built-in customizable relations and perform automated benefit verifications and identify potential claim denials.", icon: "🛡️" },
  ]

  const solutionsMeta = [
    { id: "PETRA", name: "PETRA", subtitle: "Multi-Layered Healthcare Provider Solution", description: "Comprehensive healthcare provider solutions with advanced integration, validation, and AI-powered insights for optimal claims processing.", icon: "🏥", color: "#1976d2", items: petraSolutions },
    { id: "QUDRA", name: "QUDRA", subtitle: "Multi-Layered Insurer Solution", description: "Advanced insurer solutions with seamless integration, automation, and intelligent support for comprehensive claims management.", icon: "🛡️", color: "#4caf50", items: qudraSolutions },
    { id: "PHARMACEUTICAL", name: "PHARMACEUTICAL", subtitle: "Pharmaceutical Claims Management", description: "Optimize your pharmaceutical claims using comprehensive medical data and rules management for seamless processing and impactful results.", icon: "💊", color: "#ec4899", items: pharmaceuticalSolutions },
  ]

  return (
    <div className="relative min-h-screen px-6 py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h1 className="text-4xl font-black text-transparent bg-gradient-to-r from-slate-800 to-slate-900 bg-clip-text md:text-5xl">
          Multi-Modal Solutions
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          Mastering the full Claim Cycle from seamless transition to robust validation via our comprehensive solutions
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3">
        {solutionsMeta.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveModal(s)}
            className="relative overflow-hidden text-left group rounded-2xl transition-all duration-300"
            style={{ backgroundColor: "#fff" }}
          >
            <div
              className="relative z-10 w-full h-full p-7 rounded-2xl transition-all duration-300"
              style={{
                border: `2px solid transparent`,
              }}
            >
              <div className="mb-4 text-5xl">{s.icon}</div>
              <h2 className="text-2xl font-bold text-slate-900">{s.name}</h2>
              <h3 className="mt-1 text-sm font-medium text-slate-700">{s.subtitle}</h3>
              <p className="mt-4 line-clamp-4 text-slate-700">{s.description}</p>

              <div
                className="mt-6 inline-flex items-center rounded-xl border px-4 py-2 text-sm font-semibold transition-all duration-300"
                style={{
                  borderColor: s.color,
                  color: s.color,
                  backgroundColor: "#fff",
                }}
              >
                Explore {s.name} <span className="ml-2">→</span>
              </div>
            </div>

            {/* Hover effect يضيء بنفس لون الزر */}
            <div
              className="absolute inset-0 rounded-2xl transition-all duration-300 opacity-0 group-hover:opacity-20"
              style={{ backgroundColor: s.color }}
            ></div>
          </button>
        ))}
      </div>

      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden bg-white shadow-2xl rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative flex items-center gap-4 p-6 rounded-t-2xl text-white"
              style={{ backgroundColor: activeModal.color }}
            >
              <div className="text-4xl">{activeModal.icon}</div>
              <div className="min-w-0">
                <h2 className="text-2xl font-bold truncate">{activeModal.name}</h2>
                <p className="truncate">{activeModal.subtitle}</p>
              </div>
              <button
                className="p-2 ml-auto transition rounded-full bg-white/20 hover:bg-white/30"
                onClick={() => setActiveModal(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto p-6 space-y-4">
              {activeModal.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 border shadow-sm rounded-xl bg-white/70 backdrop-blur"
                >
                  <div className="text-base font-bold" style={{ color: activeModal.color }}>
                    {item.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-slate-700">{item.description}</p>
                  </div>
                  <div className="text-2xl">{item.icon}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 p-4 border-t border-slate-100 bg-slate-50/60">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 text-sm font-semibold transition rounded-xl"
                style={{
                  borderColor: activeModal.color,
                  color: activeModal.color,
                  backgroundColor: "#fff",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Solutions
