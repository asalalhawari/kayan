"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Clock, BookOpen, Sparkles, X } from "lucide-react"

const feedsData = [
  {
    id: 1,
    title: "Beyond Adjudication: The Intelligent Automation Revolution for Payers",
    category: "AI Automation",
    excerpt:
      "The health insurance landscape is at a breaking point. Escalating costs, sophisticated fraud, and cumbersome manual reviews are squeezing profitability.",
    full: `The health insurance landscape is at a breaking point. Escalating costs, sophisticated fraud, and cumbersome manual reviews are squeezing profitability. Traditional claims processing slow, error-prone, and reactive is no longer sustainable. Payers need a strategic advantage to transform this operational burden into a competitive edge.
The challenges are clear: fraud, waste, and abuse drain resources, while complex policy enforcement and rising dispute volumes cripple efficiency. Manual processes create bottlenecks, delay settlements, and damage provider relationships.
This is where PETRA delivers a paradigm shift.
KAYAN's PETRA is an end-to-end automation platform engineered to master the entire claim lifecycle. We empower payers with precision, control, and proactive intelligence.
1.	Unbreachable Compliance: Our Medical & Coding Scrubber automatically validates claims against global standards, slashing errors and denials at the source.
2.	Absolute Policy Control: The Custom Validation Engine lets payer configure and automate your unique TOBs and exclusions, embedding your business logic directly into the workflow.
3.	Proactive Intelligence: The AI-Powered Analysis module detects subtle fraud patterns and predicts trends, transforming raw data into actionable, strategic insights.
The Outcome? Imagine faster processing and a reduction in disputes. Imagine your teams liberated from manual reviews to focus on strategic growth. This is the future PETRA delivers.
Stop managing claims. Start managing outcomes.`,
    image: "/photo-1727434032773-af3cd98375ba.jpg",
    gradient: "from-cyan-500/20 to-blue-600/20",
    accentColor: "cyan",
  },
  {
    id: 2,
    title: "Break the Rejection Cycle: Secure Your Revenue with Unshakeable Claim Confidence",
    category: "Revenue Protection",
    excerpt:
      "For providers, claim rejections are more than an administrative headache they are a direct assault on financial stability and operational morale.",
    full: `For providers, claim rejections are more than an administrative headache they are a direct assault on financial stability and operational morale. The tedious cycle of "submit, reject, correct, resubmit" strangles cash flow and consumes valuable staff time. Navigating complex, ever-changing payer-specific rules is a constant, losing battle.
It's time to break free. It's time for QUDRA.
KAYAN's QUDRA is your strategic shield, empowering you to submit flawless claims with precision and confidence. We ensure your revenue cycle flows smoothly and predictably.
QUDRA delivers a multi-layered defense:
1.	Pre-Emptive Error Elimination: Our Real-Time Claim Review scrubs every claim against coding standards before submission, providing clear alerts for instant correction.
2.	Payer-Specific Automation: The Customizable Rules engine adapts validation to each insurer's policies, ensuring your claims are formatted for first-pass approval.
3.	Deep Performance Insights: AI-Powered Dashboards reveal denial causes and coder patterns, providing the intelligence to optimize your entire billing process.
The Result? Achieve a reduction in rejections and accelerate payments. Reclaim your team's time and secure your financial velocity.
Stop leaving revenue on the table. Start securing it with QUDRA.`,
    image: "/healthcare-automation.png",
    gradient: "from-emerald-500/20 to-teal-600/20",
    accentColor: "emerald",
  },
  {
    id: 3,
    title: "From Data to Foresight: The Non-Negotiable Power of AI in Healthcare Claims",
    category: "Predictive Intelligence",
    excerpt:
      "Healthcare is drowning in data but starving for insights. Legacy systems offer a rear-view mirror look at claims, leaving payers and providers reactive.",
    full: `Healthcare is drowning in data but starving for insights. Legacy systems offer a rear-view mirror look at claims, leaving payers and providers reactive to fraud, waste, and inefficiency. In today's landscape, this is a recipe for financial erosion.
The modern solution is proactive intelligence the ability to predict, prevent, and optimize. This requires a shift from basic automation to cognitive learning.
KAYAN embeds this sophisticated AI as the intelligent core of our solutions.
Our AI layer transforms your claims data into a strategic command center, operating on three pillars:
1.	Predictive Fraud Detection: Using machine learning, we analyze thousands of claims to establish normal patterns and flag subtle, sophisticated anomalies, shifting from "pay and chase" to "predict and prevent."
2.	Intelligent Trend Analysis: Uncover hidden cost drivers and utilization patterns. Forecast future trends to make smarter decisions about network management and resource allocation.
3.	Actionable Intelligence: We deliver insights through clear dashboards and KPIs, translating complex data into straightforward, actionable business intelligence.
The Bottom Line: Integrating AI is no longer a luxury—it's a necessity for survival and growth. It's the difference between reacting to the past and commanding the future.
Stop being overwhelmed by data. Start commanding it.`,
    image: "/premium_photo-1669842504837-ac6c1bad2bcf.jpg",
    gradient: "from-purple-500/20 to-pink-600/20",
    accentColor: "purple",
  },
  {
    id: 4,
    title: "The Next Frontier in Digital Health: Intelligent E-Prescription",
    category: "Digital Healthcare",
    excerpt:
      "In a healthcare world that's constantly evolving, digital transformation isn't just an advantage—it's essential. Nowhere is this truer than in medication management.",
    full: `In a healthcare world that's constantly evolving, digital transformation isn't just an advantage—it's essential. Nowhere is this truer than in the critical and dispensing medication. At the heart of this transformation lies the seamless integration of e-prescription systems and pharmaceutical benefits, working together to make medication management smarter, faster, and more reliable.
However, this digital connection is only as strong as its smartest link. Every successful prescription journey begins with accuracy. That's why effective drug claim scrubbing is vital—it ensures precision, compliance, and efficiency at every step. Errors in dosing, drug interactions, or formulary compliance aren't just administrative headaches; they are direct threats to patient safety and pharmacy reimbursement. By catching discrepancies before they become costly errors, automated scrubbers help reduce rejections, improve reimbursements, and ultimately create a safer patient experience.
At Kayan Healthcare Technologies, we're redefining what's possible in pharmaceutical automation.
We are deploying a next-generation suite of intelligent checks and edits designed to validate prescriptions instantly against formularies, clinical guidelines, and compliance standards. Imagine a system that automatically flags inappropriate dosages, detects critical drug-drug interactions, and verifies coverage in real-time at the point of prescribing or dispensing.
Powered by our advanced Rule Management Scrubber, this system automates the entire verification process—eliminating manual bottlenecks and ensuring that every claim meets the highest standards of accuracy and compliance. This means fewer rejected pharmacy claims, faster patient access to medication, and reduced administrative burden for both prescribers and payers.
With innovation at its core, Kayan's technology keeps pace with the rapid advancements and growing expectations of the healthcare industry. The result? A more connected, efficient, and error-free ecosystem—where technology empowers providers, payers, and patients alike.
Kayan Healthcare Technologies — simplifying complexity, ensuring compliance, and shaping the future of digital healthcare.`,
    image: "/premium_photo-1698421947098-d68176a8f5b2.jpg",
    gradient: "from-blue-500/20 to-indigo-600/20",
    accentColor: "blue",
  },
]

export default function FeedsSection() {
  const [modalFeed, setModalFeed] = useState(null)
  const [hoveredCard, setHoveredCard] = useState(null)

  const accentColors = {
    cyan: {
      border: "border-cyan-400/50",
      bg: "bg-cyan-500/10",
      text: "text-cyan-400",
      shadow: "shadow-cyan-500/30",
      gradient: "from-cyan-500 to-blue-600",
      button: "bg-cyan-500 hover:bg-cyan-600",
    },
    emerald: {
      border: "border-emerald-400/50",
      bg: "bg-emerald-500/10",
      text: "text-emerald-400",
      shadow: "shadow-emerald-500/30",
      gradient: "from-emerald-500 to-teal-600",
      button: "bg-emerald-500 hover:bg-emerald-600",
    },
    purple: {
      border: "border-purple-400/50",
      bg: "bg-purple-500/10",
      text: "text-purple-400",
      shadow: "shadow-purple-500/30",
      gradient: "from-purple-500 to-pink-600",
      button: "bg-purple-500 hover:bg-purple-600",
    },
    blue: {
      border: "border-blue-400/50",
      bg: "bg-blue-500/10",
      text: "text-blue-400",
      shadow: "shadow-blue-500/30",
      gradient: "from-blue-500 to-indigo-600",
      button: "bg-blue-500 hover:bg-blue-600",
    },
  }

  return (
    <section className="relative min-h-screen overflow-hidden py-24 px-6">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-70" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-light mb-6 border border-cyan-500/30">
            <Sparkles className="w-4 h-5 text-cyan-400" />
            <span className="text-sm font-medium text-gray-200 uppercase tracking-wider">Latest Insights</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent">
              Our Feeds
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Discover the latest innovations, insights, and trends shaping the future of healthcare technology
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {feedsData.map((feed, index) => {
            const colors = accentColors[feed.accentColor]
            return (
              <motion.div
                key={feed.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredCard(feed.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 h-[450px]"
                onClick={() => setModalFeed(feed)}
              >
                {/* Background Image with Parallax Effect */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: hoveredCard === feed.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <img src={feed.image || "/placeholder.svg"} alt={feed.title} className="w-full h-full object-cover" />
                </motion.div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${feed.gradient} via-black/60 to-black/80`} />

                {/* Accent Border */}
                <div
                  className={`absolute inset-0 border-2 ${colors.border} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Top Section */}
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <span
                        className={`px-3 py-1 rounded-full ${colors.bg} ${colors.text} text-xs font-bold uppercase tracking-wider border ${colors.border}`}
                      >
                        {feed.category}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight drop-shadow-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-cyan-200 transition-all duration-500 line-clamp-2">
                      {feed.title}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">{feed.excerpt}</p>
                  </div>

                  {/* Bottom Section */}
                  <div className="space-y-3">
                    {/* Metadata */}
                    <div className="flex items-center gap-3 text-gray-400 text-xs">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{feed.readTime}</span>
                      </div>
                      <span className="w-1 h-1 rounded-full bg-gray-500" />
                      <span>{feed.date}</span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02, x: 3 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center gap-2 ${colors.button} px-5 py-2.5 rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 group/btn`}
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </motion.button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-transparent via-transparent to-${feed.accentColor}-500/20 pointer-events-none`}
                />
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {modalFeed && (
          <motion.div
            key="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={() => setModalFeed(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[85vh] bg-gradient-to-b from-gray-900 via-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setModalFeed(null)}
                className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-20"
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>

              {/* Modal Content */}
              <div className="overflow-y-auto max-h-[85vh] custom-scrollbar">
                {/* Header with Image */}
                <div className="relative h-72">
                  <img
                    src={modalFeed.image || "/placeholder.svg"}
                    alt={modalFeed.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${modalFeed.gradient} via-black/50 to-transparent`}
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span
                      className={`px-4 py-2 rounded-full ${accentColors[modalFeed.accentColor].bg} ${accentColors[modalFeed.accentColor].text} text-sm font-bold uppercase tracking-wider border ${accentColors[modalFeed.accentColor].border}`}
                    >
                      {modalFeed.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">{modalFeed.title}</h2>

                  {/* Metadata */}
                  <div className="flex items-center gap-5 text-gray-400 text-sm mb-8 pb-6 border-b border-gray-800">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{modalFeed.readTime}</span>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                    <span>{modalFeed.date}</span>
                  </div>

                  {/* Article Content */}
                  <div className="prose prose-invert prose-lg max-w-none mb-10">
                    <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">{modalFeed.full}</p>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full ${accentColors[modalFeed.accentColor].button} px-8 py-4 rounded-xl text-white font-bold text-base shadow-xl transition-all duration-300 flex items-center justify-center gap-3`}
                  >
                    <span>Explore Our Solutions</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(100, 200, 255, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(100, 200, 255, 0.5);
        }
      `}</style>
    </section>
  )
}
