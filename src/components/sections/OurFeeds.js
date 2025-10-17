"use client"

import { useState } from "react"

const feedsData = [
  {
    id: 1,
    title: "Payers",
    short: "Headline: Beyond Adjudication: The Intelligent Automation Revolution for Payers",
    full: `The health insurance landscape is at a breaking point. Escalating costs, sophisticated fraud, and cumbersome manual reviews are squeezing profitability. Traditional claims processing — slow, error-prone, and reactive — is no longer sustainable. Payers need a strategic advantage to transform this operational burden into a competitive edge.

The challenges are clear: fraud, waste, and abuse drain resources, while complex policy enforcement and rising dispute volumes cripple efficiency. Manual processes create bottlenecks, delay settlements, and damage provider relationships.

This is where PETRA delivers a paradigm shift.

KAYAN's PETRA is an end-to-end automation platform engineered to master the entire claim lifecycle. We empower payers with precision, control, and proactive intelligence.

Stop managing claims. Start managing outcomes.`,
    image: "https://www.kayan-healthcare.com/static/media/service1.8c40564f.webp",
  },
  {
    id: 2,
    title: "Providers",
    short: "Headline: Break the Rejection Cycle: Secure Your Revenue with Unshakeable Claim Confidence",
    full: `For providers, claim rejections are more than an administrative headache — they are a direct assault on financial stability and operational morale. The tedious cycle of "submit, reject, correct, resubmit" strangles cash flow and consumes valuable staff time. Navigating complex, ever-changing payer-specific rules is a constant, losing battle.

It's time to break free. It's time for QUDRA.

KAYAN's QUDRA is your strategic shield, empowering you to submit flawless claims with precision and confidence. We ensure your revenue cycle flows smoothly and predictably.

Stop leaving revenue on the table. Start securing it with QUDRA.`,
    image: "https://www.kayan-healthcare.com/static/media/service2.bf61dbe1.webp",
  },
  {
    id: 3,
    title: "AI",
    short: "Headline: From Data to Foresight: The Non-Negotiable Power of AI in Healthcare Claims",
     id: 3,
    title: "AI",
    short: "Headline: From Data to Foresight: The Non-Negotiable Power of AI in Healthcare Claims",
    full: `Kayan AI4Healthcare: Smarter Decisions, Simpler Workflows, Fairer Care
Healthcare faces mounting challenges: rising costs, claim rejections, and fragmented data that delay critical decisions. Patients experience this as delays and confusion. Providers struggle with administrative burden and difficulty in revenue analysis. Payers battle fraud, waste, and inconsistent adjudication. Yet leaders across business, clinical, and IT teams share a common goal: delivering faster, fairer, and safer care in a high reliability system.

For providers, claim rejections are more than an administrative headache — they are a direct assault on financial stability and operational morale. The tedious cycle of "submit, reject, correct, resubmit" strangles cash flow and consumes valuable staff time. Navigating complex, ever-changing payer-specific rules is a constant, losing battle.

Transforming Data into Action
Kayan's software bridges this gap. We streamline operations through:
• Intelligent Claims Processing: AI-powered pre-screening with automated alignment of international clinical coding guidelines (ICD-10, CPT, HCPCS)
• Advanced Analytics: Natural Language Processing (NLP) unlocks insights from unstructured healthcare text, while our sophisticated algorithmic architecture combines data-driven methods with human-in-the-loop validation. This hybrid approach leverages state-of-the-art techniques to detect fraud patterns and anomalies with unprecedented accuracy.
• Operational Intelligence: Comprehensive dashboards, Advanced Statistical Analysis, and KPIs monitor provider performance, patient outcomes, and payer efficiency in real-time. These tools serve as a practical command center for business teams and executive leadership at insurance companies, enabling data-driven decision-making at every level.
• Predictive Insights: Machine learning and deep learning models for frequency analysis, forecasting, trend identification, and pattern recognition

Expertise Meets Empathy
Our platform is powered by a diverse team of applied AI scientists, data engineers, and clinicians — recruited for both technical rigor and human empathy. Kayan partners with you to deliver measurable outcomes: accelerated payments, reduced appeals, and transparent decision-making.

Transform your healthcare operations with Kayan — where advanced AI meets practical healthcare solutions.`,
    image: "https://www.kayan-healthcare.com/static/media/service3.32698236.webp",
  },
  {
    id: 4,
    title: "Pharmaceutical & E-Prescription Integration",
    short:
      "Headline: The Next Frontier in Digital Health: Intelligent E-Prescription and Pharmaceutical Claims Management",
    full: `In a healthcare world that's constantly evolving, digital transformation isn't just an advantage — it's essential. At Kayan Healthcare Technologies, we're redefining what's possible in pharmaceutical automation.

Kayan Healthcare Technologies — simplifying complexity, ensuring compliance, and shaping the future of digital healthcare.`,
    image: "https://www.kayan-healthcare.com/static/media/service3.32698236.webp",
  },
  
]

const OurFeeds = () => {
  const [hoveredFeed, setHoveredFeed] = useState(feedsData[0])

  return (
    <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 animate-fade-in">
          Latest Feeds
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="grid grid-cols-2 gap-4 lg:w-5/12 mx-auto lg:mx-0">
            {feedsData.map((feed) => (
              <div
                key={feed.id}
                className="relative group cursor-pointer rounded-xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105 aspect-square"
                onMouseEnter={() => setHoveredFeed(feed)}
              >
                <img
                  src={feed.image || "/placeholder.svg"}
                  alt={feed.title}
                  className="w-full h-full object-cover brightness-90 group-hover:brightness-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-4">
                  <h3 className="text-base sm:text-lg font-bold text-white drop-shadow-lg animate-slide-up">
                    {feed.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* رفع الكارد لفوق */}
          <div className="lg:w-7/12 flex flex-col justify-start mt-[-20px]">
            <div className="h-[420px] bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-white/10 transition-all duration-500 overflow-y-auto">
              <h3 className="text-2xl font-semibold mb-4 text-teal-400 sticky top-0 bg-gray-900/80 backdrop-blur-sm py-2 -mx-6 px-6">
                {hoveredFeed.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">{hoveredFeed.full}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurFeeds
