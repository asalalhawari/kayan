'use client'

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

// Primary color
const OLIVE_GREEN = "#6b8e23"

// --- Custom Icons for modal ---
const PetraIcon = ({ color = OLIVE_GREEN }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
  </svg>
)

const QudraIcon = ({ color = OLIVE_GREEN }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

const PharmaIcon = ({ color = OLIVE_GREEN }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
  </svg>
)

const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = useState(null)

  const solutions = [
    {
      id: "PETRA",
      name: "PETRA",
      mainColor: OLIVE_GREEN,
      icon: <PetraIcon color="white" />,
      subtitle: "Automate, Optimize, and Control the Entire Claim Lifecycle.",
      description: "Intelligent Claims Automation for Unbeatable Efficiency.\n\nMove beyond manual reviews and legacy systems. PETRA delivers end-to-end automation powered by advanced rules and AI, giving Payer absolute control over the claim lifecycle. Slash administrative costs, dramatically reduce disputes, and transform your claims operation from a cost center into a strategic asset.",
      features: [
        { number: 1, title: "Medical & Coding Scrubber", description: "Leverage a comprehensive database with 55+ edit types to automatically validate claims against ICD, CPT, and CDT standards. Ensure clinical accuracy and compliance while reducing denials from the start." },
        { number: 2, title: "Custom Validation & Policy Engine", description: "Configure and automate your specific Terms of Benefits (TOBs), exclusions, and business rules. Apply validations at the policy, provider, or patient level to ensure every claim aligns perfectly with your internal policies." },
        { number: 3, title: "AI-Powered Claims Analysis", description: "Move from reactive to proactive management. Our AI layer detects fraud, identifies cost trends, and provides predictive insights through dashboards, enabling data-driven decision-making." },
        { number: 4, title: "Seamless Ecosystem Integration", description: "Built for your environment. PETRA integrates modularly with your existing core systems, enabling seamless data exchange and unified reporting without disruptive overhauls." },
      ],
    },
    {
      id: "QUDRA",
      name: "QUDRA",
      mainColor: "#0b8457",
      icon: <QudraIcon color="white" />,
      subtitle: "Healthcare Analytics & Fraud Detection",
      description: "Revenue Cycle Confidence, Powered by Precision.\n\nMove beyond billing uncertainties and administrative waste. QUDRA empowers healthcare providers with end-to-end claim precision powered by advanced rules and AI, giving you absolute confidence in every submission. Accelerate reimbursements, dramatically reduce denials, and transform your revenue cycle from a back-office function into a proven strategic advantage.",
      features: [
        { number: 1, title: "Medical & Coding Validation", description: "Ensure every claim is clinically and technically sound before submission. Our scrubber checks against global standards and provides real-time alerts for instant correction." },
        { number: 2, title: "Customizable Rules & Benefit Management", description: "Automatically adapt claim checks to specific payer policies and pre-authorization rules. Track patient history and financial limits to ensure accurate billing." },
        { number: 3, title: "AI Insights & Performance Analytics", description: "Gain deep visibility into your revenue cycle. Understand denial causes, identify claim patterns, and monitor coder performance through intelligent dashboards." },
        { number: 4, title: "Workflow Optimization", description: "Reduce administrative overhead. Automate repetitive validation tasks, streamline corrections, and drive first-pass acceptance rates to over 95%." },
      ],
    },
    {
      id: "PHARMA",
      name: "PHARMA",
      mainColor: "#d4a017",
      icon: <PharmaIcon color="white" />,
      subtitle: "Pharmaceutical Supply Chain Solution",
      description: "Optimize your pharmaceutical claims cycle with AI-driven adjudication, formulary management, and analytics.",
      features: [
        { number: 1, title: "Drug Claim Adjudication", description: "Automate and validate pharmaceutical claims, ensuring accurate pricing and compliance." },
        { number: 2, title: "Formulary & Price Management", description: "Manage drug formularies and pricing dynamically with real-time updates." },
        { number: 3, title: "Inventory & Dispensing Oversight", description: "Ensure accurate claim submission by monitoring inventory levels and dispensing records." },
        { number: 4, title: "Pharma Data Analytics", description: "Unlock insights on drug utilization and cost patterns through advanced analytics." },
      ],
    },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-yellow-50 flex items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
      <div className="w-full max-w-6xl flex items-center justify-between flex-wrap gap-10">
        {/* Text Section */}
        <div className="w-full lg:w-[45%] flex flex-col items-start justify-center text-gray-800 mt-8">
          <h2 className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-br from-blue-800 to-green-500 bg-clip-text text-transparent mb-2">
            Our Innovative Solutions
          </h2>
          <h3 className="text-xl lg:text-2xl text-gray-600 mb-1">
            <span className="font-bold text-blue-600">AI-Powered Intelligence for Healthcare and Pharma </span> Operations
          </h3>
          <p className="mt-3 text-base sm:text-lg text-gray-500 leading-relaxed">
            In the complex world of healthcare operations, efficiency and accuracy are paramount. KAYAN delivers tailored, AI-driven solutions that transform critical processes—from claims management to compliance—reducing costs, accelerating revenue, and mitigating risk.
            We go beyond integration, offering multi-layered innovation that combines deep industry expertise with cutting-edge automation and analytics. Our mission is to empower providers and payers to achieve smarter operations, stronger compliance, and ultimately, better outcomes.
          </p>
        </div>

        {/* Cards */}
        <div className="w-full lg:w-[45%] flex flex-col gap-8 justify-center">
          {solutions.map((s) => (
            <motion.div
              key={s.id}
              onClick={() => setSelectedSolution(s)}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-between gap-4 p-4 bg-white rounded-2xl shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl w-full max-w-md"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full shadow-md"
                  style={{ backgroundColor: s.mainColor }}
                >
                  {React.cloneElement(s.icon, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{s.name}</h3>
              </div>
              <span className="text-gray-400 font-bold text-xl">→</span>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedSolution && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedSolution(null)}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
              />

              {/* Modal Wrapper (Scrollable on mobile) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="fixed inset-0 z-[101] flex items-start md:items-center justify-center p-4 sm:p-6 overflow-y-auto"
              >
                {/* Modal Container */}
                <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl md:max-h-[90vh] md:overflow-hidden flex flex-col md:flex-row my-8 md:my-0">
                  
                  {/* Left Section */}
                  <div
                    className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between"
                    style={{ background: `linear-gradient(135deg, ${selectedSolution.mainColor}15 0%, ${selectedSolution.mainColor}30 100%)` }}
                  >
                    <div>
                      <div
                        className="w-24 h-24 rounded-2xl flex items-center justify-center mb-6 shadow-xl"
                        style={{ backgroundColor: selectedSolution.mainColor }}
                      >
                        {React.cloneElement(selectedSolution.icon, { className: 'w-14 h-14', color: 'white' })}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-gray-800 mb-2">{selectedSolution.name}</h3>
                      <p className="text-sm sm:text-base font-semibold mb-3" style={{ color: selectedSolution.mainColor }}>
                        {selectedSolution.subtitle}
                      </p>
                      {/* Added whitespace-pre-wrap here */}
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed whitespace-pre-wrap">{selectedSolution.description}</p>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="w-full md:w-3/5 bg-white flex flex-col">
                    <div className="flex justify-end items-center px-6 py-4 border-b border-gray-100">
                      <button
                        onClick={() => setSelectedSolution(null)}
                        className="text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-2 sm:p-3 rounded-xl transition-all"
                      >
                        <X size={24} />
                      </button>
                    </div>
                    {/* Features Container: Scrolls only on desktop */}
                    <div className="md:flex-1 md:overflow-y-auto p-6 md:p-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {selectedSolution.features.map((f, index) => (
                          <motion.div
                            key={f.number}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            className="flex gap-4 sm:gap-5 cursor-pointer"
                          >
                            <div
                              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0"
                              style={{ backgroundColor: selectedSolution.mainColor }}
                            >
                              {f.number.toString().padStart(2, '0')}
                            </div>
                            <div className="flex-1 pt-1">
                              <h5 className="font-bold text-gray-800 text-sm uppercase tracking-wider">{f.title}</h5>
                              <p className="text-gray-600 text-sm mt-1">{f.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Solutions