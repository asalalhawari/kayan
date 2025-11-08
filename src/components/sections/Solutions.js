"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// أيقونات
const PetraIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const QudraIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const PharmaIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104a24.301 24.301 0 014.5 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Solutions = () => {
  const [selected, setSelected] = useState(null)

 
  const solutions = [
    {
      id: "PETRA",
      name: "PETRA",
      gradientClass: "bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900",
      icon: <PetraIcon color="white" />,
      subtitle: "Automate, Optimize, and Control the Entire Claim Lifecycle.",
      description:
        "Automate, Optimize, and Control the Entire Claim Lifecycle Intelligent Claims Automation for Unbeatable Efficiency Move beyond manual reviews and legacy systems. PETRA delivers end-to-end automation powered by advanced rules and AI, giving Payer absolute control over the claim lifecycle. Slash administrative costs, dramatically reduce disputes, and transform your claims operation from a cost center into a strategic asset.",
      features: [
        { number: 1, title: "Medical & Coding Scrubber", description: "Leverage a comprehensive database with 55+ edit types to automatically validate claims against ICD, CPT, and CDT standards. Ensure clinical accuracy and compliance while reducing denials from the start." },
        { number: 2, title: "Custom Validation & Policy Engine", description: "Configure and automate your specific Terms of Benefits (TOBs), exclusions, and business rules. Apply validations at the policy, provider, or patient level to ensure every claim aligns perfectly with your internal policies.." },
        { number: 3, title: "AI-Powered Claims Analysis", description: "Move from reactive to proactive management. Our AI layer detects fraud, identifies cost trends, and provides predictive insights through dashboards, enabling data-driven decision-making.." },
        { number: 4, title: "Seamless Ecosystem Integration", description: "Built for your environment. PETRA integrates modularly with your existing core systems, enabling seamless data exchange and unified reporting without disruptive overhauls." },
      ],
    },
    {
      id: "QUDRA",
      name: "QUDRA",
      gradientClass: "bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900",
      icon: <QudraIcon color="white" />,
      subtitle: "Healthcare Analytics & Fraud Detection",
      description:
        "Healthcare Analytics & Fraud Detection Revenue Cycle Confidence, Powered by Precision QUDRA empowers healthcare providers with end-to-end claim precision powered by advanced rules and AI, giving you absolute confidence in every submission.",
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
      gradientClass: "bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900",
      icon: <PharmaIcon color="white" />,
      subtitle: "Pharmaceutical Supply Chain Solution",
      description:
        "Pharmaceutical Supply Chain Solution Optimize your pharmaceutical claims cycle with AI-driven adjudication, formulary management, and analytics.",
      features: [
        { number: 1, title: "Drug Claim Adjudication", description: "Automate and validate pharmaceutical claims, ensuring accurate pricing and compliance." },
        { number: 2, title: "Formulary & Price Management", description: "Manage drug formularies and pricing dynamically with real-time updates.." },
        { number: 3, title: "Inventory & Dispensing Oversight", description: "Ensure accurate claim submission by monitoring inventory levels and dispensing records." },
        { number: 4, title: "Pharma Data Analytics", description: "Unlock insights on drug utilization and cost patterns through advanced analytics." },
      ],
    },
  ]

  const selectedSolution = solutions.find(s => s.id === selected)

  return (
    <section className="relative min-h-screen bg-gradient-to-r from-[#020817] via-[#041E2F] to-[#000000] overflow-hidden py-16 px-8 md:px-16 font-sans">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* الكروت */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {solutions.slice(0, 2).map((sol) => (
                <SolutionCard
                  key={sol.id}
                  sol={sol}
                  isSelected={selected === sol.id}
                  onClick={() => setSelected(selected === sol.id ? null : sol.id)}
                />
              ))}
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <SolutionCard
                  sol={solutions[2]}
                  isSelected={selected === solutions[2].id}
                  onClick={() => setSelected(selected === solutions[2].id ? null : solutions[2].id)}
                />
              </div>
            </div>

            {/* البوكس المعدّل */}
            <AnimatePresence>
              {selectedSolution && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0.95 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  exit={{ opacity: 0, scaleY: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="w-[95vw] -mx-[5vw] mt-12"
                >
                  <div className="bg-transparent backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-xl w-full max-w-none">
                    <div className="flex flex-col xl:flex-row items-start justify-between gap-10">
                      {/* العنوان */}
                      <div className="min-w-[320px] xl:w-1/3">
                        <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                          {selectedSolution.name} Solutions
                        </h3>
                        <p className="mt-4 text-white/80 text-sm max-w-md">
                          {selectedSolution.description.split('\n\n')[0]}
                        </p>
                       
                      </div>

                      {/* الميزات */}
                      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {selectedSolution.features.map((feat) => (
                          <div key={feat.number} className="flex gap-4">
                            <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-300 font-bold text-sm flex-shrink-0">
                              {feat.number}
                            </div>
                            <div>
                              <h4 className="text-white font-semibold text-base">{feat.title}</h4>
                              <p className="text-white/70 text-xs mt-1 leading-relaxed">
                                {feat.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* النص اليمين */}
          <div className="space-y-6 text-right sticky top-8">
          <motion.h2
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
>
  Our Innovative Solutions
</motion.h2>

            <p className="text-lg md:text-xl font-semibold bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
              AI-Powered Intelligence for Healthcare and Pharma Operations
            </p>
            <p className="text-base md:text-lg text-white leading-relaxed max-w-xl ml-auto">
                In the complex world of healthcare operations, efficiency and accuracy are paramount. KAYAN delivers tailored, AI-driven solutions that transform critical processes—from claims management to compliance—reducing costs, accelerating revenue, and mitigating risk. We go beyond integration, offering multi-layered innovation that combines deep industry expertise with cutting-edge automation and analytics. Our mission is to empower providers and payers to achieve smarter operations, stronger compliance, and ultimately, better outcomes.

            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const SolutionCard = ({ sol, isSelected, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    onClick={onClick}
    className={`
      relative group cursor-pointer rounded-3xl p-6 shadow-2xl overflow-hidden
      w-56 h-56 flex flex-col justify-between transition-all duration-300
      bg-white/5 backdrop-blur-xl border
      ${isSelected ? 'border-cyan-400 shadow-cyan-500/30' : 'border-white/10 hover:border-cyan-400/50'}
    `}
  >
    <div className="relative z-10 flex flex-col h-full">
      <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
        <div className="text-cyan-400">{sol.icon}</div>
      </div>
      <div>
        <h3 className="text-xl font-black text-white mb-1">{sol.name}</h3>
        <p className="text-white/80 text-xs leading-tight line-clamp-2">{sol.subtitle}</p>
      </div>
      <div className="mt-4">
        <span className="text-cyan-400 text-sm font-semibold group-hover:text-white transition">
          {isSelected ? 'Close' : 'Read More'}
        </span>
      </div>
    </div>
  </motion.div>
)

export default Solutions