"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

// بيانات Feeds
const feedsData = [
  {
    id: 1,
    title: "Beyond Adjudication: The Intelligent Automation Revolution for Payers",
    short: "Headline: Beyond Adjudication: The Intelligent Automation Revolution for Payers",
    full: `The health insurance landscape is at a breaking point. Escalating costs, sophisticated fraud, and cumbersome manual reviews are squeezing profitability. Traditional claims processing — slow, error-prone, and reactive — is no longer sustainable. Payers need a strategic advantage to transform this operational burden into a competitive edge.

The challenges are clear: fraud, waste, and abuse drain resources, while complex policy enforcement and rising dispute volumes cripple efficiency. Manual processes creates bottlenecks, delay settlements, and damage provider relationships.

This is where PETRA delivers a paradigm shift.

KAYAN's PETRA is an end-to-end automation platform engineered to master the entire claim lifecycle. We empower payers with precision, control, and proactive intelligence.

Stop managing claims. Start managing outcomes.`,
    image: "premium_photo-1698421947098-d68176a8f5b2.jpg",
  },
  {
    id: 2,
    title: "Break the Rejection Cycle: Secure Your Revenue with Unshakeable Claim Confidence",
    short: "Headline: Break the Rejection Cycle: Secure Your Revenue with Unshakeable Claim Confidence",
    full: `For providers, claim rejections are more than an administrative headache — they are a direct assault on financial stability and operational morale. The tedious cycle of "submit, reject, correct, resubmit" strangles cash flow and consumes valuable staff time. Navigating complex, ever-changing payer-specific rules is a constant, losing battle.

It's time to break free. It's time for QUDRA.

KAYAN's QUDRA is your strategic shield, empowering you to submit flawless claims with precision and confidence. We ensure your revenue cycle flows smoothly and predictably.

Stop leaving revenue on the table. Start securing it with QUDRA.`,
    image: "photo-1727434032773-af3cd98375ba.jpg",
  },
  {
    id: 3,
    title: "From Data to Foresight: The Non-Negotiable Power of AI in Healthcare Claims",
    short: "Headline: From Data to Foresight: The Non-Negotiable Power of AI in Healthcare Claims",
    full: `Kayan AI4Healthcare: Smarter Decisions, Simpler Workflows, Fairer Care
Healthcare faces mounting challenges: rising costs, claim rejections, and fragmented data that delay critical decisions. Patients experience this as delays and confusion. Providers struggle with administrative burden and difficulty in revenue analysis. Payers battle fraud, waste, and inconsistent adjudication. Yet leaders across business, clinical, and IT teams share a common goal: delivering faster, fairer, and safer care in a high reliability system.

Transforming Data into Action
Kayan's software bridges this gap. We streamline operations through:
• Intelligent Claims Processing: AI-powered pre-screening with automated alignment of international clinical coding guidelines (ICD-10, CPT, HCPCS)
• Advanced Analytics: Natural Language Processing (NLP) unlocks insights from unstructured healthcare text, while our sophisticated algorithmic architecture combines data-driven methods with human-in-the-loop validation. This hybrid approach leverages state-of-the-art techniques to detect fraud patterns and anomalies with unprecedented accuracy.
• Operational Intelligence: Comprehensive dashboards, Advanced Statistical Analysis, and KPIs monitor provider performance, patient outcomes, and payer efficiency in real-time. These tools serve as a practical command center for business teams and executive leadership at insurance companies, enabling data-driven decision-making at every level.
• Predictive Insights: Machine learning and deep learning models for frequency analysis, forecasting, trend identification, and pattern recognition

Expertise Meets Empathy
Our platform is powered by a diverse team of applied AI scientists, data engineers, and clinicians — recruited for both technical rigor and human empathy. Kayan partners with you to deliver measurable outcomes: accelerated payments, reduced appeals, and transparent decision-making.

Transform your healthcare operations with Kayan — where advanced AI meets practical healthcare solutions.`,
    image: "premium_photo-1669842504837-ac6c1bad2bcf.jpg",
  },
  {
    id: 4,
    title: "The Next Frontier in Digital Health: Intelligent E-Prescription and Pharmaceutical Claims Management",
    short: "Headline: The Next Frontier in Digital Health: Intelligent E-Prescription and Pharmaceutical Claims Management",
    full: `In a healthcare world that’s constantly evolving, digital transformation isn’t just an advantage—it’s essential. Nowhere is this truer than in the critical pathway of prescribing and dispensing medication. At the heart of this transformation lies the seamless integration of e-prescription systems and pharmaceutical benefits, working together to make medication management smarter, faster, and more reliable.

At Kayan Healthcare Technologies, we’re redefining what’s possible in pharmaceutical automation.
We are deploying a next-generation suite of intelligent checks and edits designed to validate prescriptions instantly against formularies, clinical guidelines, and compliance standards.

Kayan Healthcare Technologies — simplifying complexity, ensuring compliance, and shaping the future of digital healthcare.`,
    image: "premium_vector-1725372199832-32fef84e123b.jpg",
  },
]

const OurFeeds = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef(null)
  const totalFeeds = feedsData.length

  const nextFeed = (e) => {
    e.stopPropagation()
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalFeeds)
  }

  const prevFeed = (e) => {
    e.stopPropagation()
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalFeeds) % totalFeeds)
  }

  useEffect(() => {
    if (carouselRef.current) {
      const activeElement = carouselRef.current.children[activeIndex]
      if (activeElement) {
        carouselRef.current.scrollTo({
          left: activeElement.offsetLeft,
          behavior: "smooth",
        })
      }
    }
  }, [activeIndex])

  return (
    <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 animate-fade-in">
          Latest Feeds
        </h1>

        <div className="relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-hidden snap-x snap-mandatory pb-6 relative"
          >
            {feedsData.map((feed) => (
              <div
                key={feed.id}
                className={`min-w-full snap-center transition-all duration-300 p-6 md:p-8 bg-white/5 backdrop-blur-sm rounded-xl shadow-2xl border border-white/10 relative`}
              >
                <div className="flex flex-col md:flex-row h-full md:gap-8">
                  {/* الصورة والعنوان */}
                  <div className="md:w-1/2 order-1 relative">
                    <img
                      src={feed.image || "/placeholder.svg"}
                      alt={feed.title}
                      className="w-full h-48 md:h-80 object-cover rounded-lg shadow-lg"
                    />
                    <h3 className="text-xl md:text-2xl font-semibold mt-4 mb-4 text-teal-400">
                      {feed.title}
                    </h3>
                  </div>

                  {/* النص */}
                  <div className="md:w-1/2 order-2 mt-6 md:mt-0 overflow-y-auto max-h-96 px-4 md:px-6">
                    <p className="text-gray-200 text-base leading-relaxed whitespace-pre-line text-justify">
                      {feed.full}
                    </p>
                  </div>
                </div>

                {/* الأسهم والترقيم الثابت */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-8 z-10">
                  <button
                    onClick={prevFeed}
                    disabled={activeIndex === 0}
                    className="p-3 rounded-full bg-cyan-500/15 text-cyan-300 shadow-xl transition-all duration-300 hover:bg-cyan-500/30 disabled:opacity-30 disabled:cursor-not-allowed transform hover:scale-110"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </button>

                  <div className="flex justify-center space-x-2 mx-4 text-sm font-medium text-gray-400">
                    {activeIndex + 1} / {totalFeeds}
                  </div>

                  <button
                    onClick={nextFeed}
                    disabled={activeIndex === totalFeeds - 1}
                    className="p-3 rounded-full bg-cyan-500/15 text-cyan-300 shadow-xl transition-all duration-300 hover:bg-cyan-500/30 disabled:opacity-30 disabled:cursor-not-allowed transform hover:scale-110"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurFeeds
