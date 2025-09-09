"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "./OurFeeds.css"

const feeds = [
  {
    title: "Payer Solutions",
    description:
      "Our solutions help payers in quickly identifying errors in claims and settling them. Our software streamlines the process and ensures faster claim resolutions.",
    image: "https://www.kayan-healthcare.com/static/media/service1.8c40564f.webp",
  },
  {
    title: "Provider Solutions",
    description:
      "Our software provides top-of-the-line improved clinical edit checks, removes vague codes, and comes with claim management features to support providers in their day-to-day operations.",
    image: "https://www.kayan-healthcare.com/static/media/service2.bf61dbe1.webp",
  },
  {
    title: "Machine Learning Solutions",
    description:
      "Our software uses machine learning techniques to show predictions and statistics to doctors, vendors, and payers to reach optimal decisions. It adapts to new data and helps improve healthcare outcomes.",
    image: "https://www.kayan-healthcare.com/static/media/service3.32698236.webp",
  },
  {
    title: "Advanced Analytics",
    description:
      "Leverage advanced analytics to gain deeper insights into healthcare trends, optimize operations, and enhance patient outcomes with data-driven decisions.",
    image: "https://www.kayan-healthcare.com/static/media/service3.32698236.webp",
  },
  {
    title: "Kayan Healthcare Technologies and the Future of E-Prescriptions and Pharmaceutical Benefit Edits",
    description:
      "In today's rapidly evolving healthcare landscape, the integration of e-prescription systems and pharmaceutical benefits is more crucial than ever. This seamless connection streamlines the medication management process. Effective drug claim scrubbing plays a pivotal role in ensuring accuracy and compliance, reducing errors, and optimizing reimbursement. By prioritizing pharmaceutical scrubbers, we can foster a more efficient healthcare ecosystem. In this regard, Kayan Healthcare Technologies is developing a comprehensive and outstanding suite of checks and edits to automate prescription verifications against formularies and guidelines. and establishing a strong Rule Management Scrubber to automate the full process and ensure compliance with the ongoing rapid technologies and endless expectations of the industry.",
  image: "https://tmp.kayan-healthcare.com/static/media/article.24228e742dbfaaf4629c.jpg",
  },
]

const OurFeeds = () => {
  const [selectedFeed, setSelectedFeed] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const getCardsPerPage = () => {
    if (window.innerWidth <= 768) return 1
    if (window.innerWidth <= 1024) return 2
    return 3
  }

  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage())

  React.useEffect(() => {
    const handleResize = () => setCardsPerPage(getCardsPerPage())
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalPages = Math.ceil(feeds.length / cardsPerPage)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.0,
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const getShortText = (text) => {
    const words = text.split(" ")
    return words.length > 20 ? words.slice(0, 20).join(" ") + "..." : text
  }

  const handleReadMore = (feed) => {
    setSelectedFeed(feed)
  }

  const handleBack = () => {
    setSelectedFeed(null)
  }

  const nextCards = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages)
  }

  const prevCards = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1))
  }

  const goToPage = (index) => {
    setCurrentIndex(index)
  }

  const visibleFeeds = feeds.slice(currentIndex * cardsPerPage, (currentIndex + 1) * cardsPerPage)

  return (
    <div className="our-feeds-container">
      <motion.div className="feeds-wrapper" variants={containerVariants} initial="hidden" animate="visible">
        <AnimatePresence mode="wait">
          {selectedFeed ? (
            <motion.div
              key="detail"
              className="feed-detail"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <div className="detail-content">
                <div className="detail-image-section">
                  <img
                    src={selectedFeed.image || "/placeholder.svg"}
                    alt={selectedFeed.title}
                    className="detail-image"
                  />
                  <div className="image-overlay"></div>
                </div>

                <div className="detail-text-section">
                  <div className="detail-badge">Healthcare Solution</div>
                  <h2 className="detail-title">{selectedFeed.title}</h2>
                  <p className="detail-description">{selectedFeed.description}</p>

                  <button className="back-button" onClick={handleBack}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M19 12H5M12 19l-7-7 7-7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Back to Services
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              className="feeds-grid-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="feeds-grid">
                {visibleFeeds.map((feed, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    className="feed-card"
                    variants={cardVariants}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="card-image-container">
                      <img src={feed.image || "/placeholder.svg"} alt={feed.title} className="card-image" />
                      <div className="card-gradient-overlay"></div>
                      <div className="card-badge">Healthcare</div>
                    </div>

                    <div className="card-content">
                      <h3 className="card-title">{feed.title}</h3>
                    <p className="card-description">{getShortText(feed.description)}</p>
<button className="read-more-button" onClick={() => handleReadMore(feed)}>
  Read More
</button>

                    </div>
                  </motion.div>
                ))}
              </div>

              {feeds.length > cardsPerPage && (
                <>
                  <button className="nav-button nav-button-left" onClick={prevCards} aria-label="Previous cards">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M15 18l-6-6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <button className="nav-button nav-button-right" onClick={nextCards} aria-label="Next cards">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 18l6-6-6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div className="pagination-dots">
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <button
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => goToPage(index)}
                        aria-label={`Go to page ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default OurFeeds
