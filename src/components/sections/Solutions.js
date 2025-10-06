"use client"

import { useState } from "react"

const PetraIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
    <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
  </svg>
)

const QudraIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
)

const PharmaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
    <path d="M19 8h-2V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z" />
  </svg>
)

const Solutions = () => {
  const [activeModal, setActiveModal] = useState(null)

  const petraSolutions = [
    { number: "01", title: "Post Office Integrator", description: "Seamless connectivity between Post Office, providers, and insurers with full claim cycle tracking." },
    { number: "02", title: "Medical & Coding Scrubber", description: "Effectively scrub claims with our comprehensive medical database and agile updates." },
    { number: "03", title: "Rule Management Scrubber", description: "Tailor your rules with a robust validation layer to avoid denials and secure reimbursements." },
    { number: "04", title: "AI LAYER", description: "Unlock profound insights and enhance decision-making with our advanced AI layer." },
  ]
  const qudraSolutions = [
    { number: "01", title: "Claims Validation Engine", description: "Validate claims with multi-layered checks against policy rules, business logic, and coding guidelines." },
    { number: "02", title: "Policy & Benefits Management", description: "Manage benefits and policy rules dynamically to ensure accurate and fair claim settlement." },
    { number: "03", title: "Fraud, Waste & Abuse Detection", description: "Leverage AI to detect unusual claim patterns, fraud attempts, or excessive billing." },
    { number: "04", title: "Analytics & Dashboards", description: "Visualize insurer performance with interactive dashboards for better decision-making." },
  ]
  const pharmaceuticalSolutions = [
    { number: "01", title: "Drug Claim Adjudication", description: "Automate and validate pharmaceutical claims, ensuring accurate pricing and compliance." },
    { number: "02", title: "Formulary & Price Management", description: "Manage drug formularies and pricing dynamically with real-time updates." },
    { number: "03", title: "Inventory & Dispensing Oversight", description: "Ensure accurate claim submission by monitoring inventory levels and dispensing records." },
    { number: "04", title: "Pharma Data Analytics", description: "Unlock insights on drug utilization and cost patterns through advanced analytics." },
  ]

  const solutionsMeta = [
    { id: "PETRA", name: "PETRA", subtitle: "Multi-Layered Healthcare Provider Solution", description: "Comprehensive healthcare provider solutions to streamline claims, enhance accuracy, and empower data-driven operations.", items: petraSolutions, icon: <PetraIcon /> },
    { id: "QUDRA", name: "QUDRA", subtitle: "Multi-Layered Insurer Solution", description: "Advanced insurer solutions focusing on fraud detection, policy management, and robust claim validations.", items: qudraSolutions, icon: <QudraIcon /> },
    { id: "PHARMACEUTICAL", name: "PHARMACEUTICAL", subtitle: "Pharmaceutical Claims Management", description: "Optimize your pharmaceutical claims cycle with AI-driven adjudication, formulary management, and analytics.", items: pharmaceuticalSolutions, icon: <PharmaIcon /> },
  ]

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mt-10 mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-800 to-emerald-600 bg-clip-text text-transparent">
            Multi-Modal Solutions
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed" style={{ color: "#64748b" }}>
            Mastering the full Claim Cycle from seamless transition to robust validation via our comprehensive solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 -mt-8">
          {solutionsMeta.map((s) => (
            <div
              key={s.id}
              onClick={() => setActiveModal(s)}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200 overflow-hidden"
            >
              <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-500"></div>
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white mb-6">{s.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{s.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{s.description}</p>
              <div className="flex items-center text-blue-500 font-medium text-sm">
                Explore {s.name} <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative w-full max-w-6xl p-12 bg-gray-50 shadow-2xl rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-16">
              <button
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-white/50"
                onClick={() => setActiveModal(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="relative">
              <div className="absolute top-12 left-0 right-0 h-0.5 bg-gray-300" style={{ left: "calc(12.5% + 32px)", right: "calc(12.5% + 32px)" }} />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {activeModal.items.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="relative z-10 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-6 shadow-lg">
                      {item.number}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
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
