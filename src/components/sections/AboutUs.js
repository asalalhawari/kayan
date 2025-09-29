"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about")
      if (element) {
        const rect = element.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight && rect.bottom > 0
        setIsVisible(isInView)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-12 py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image Layout */}
          <motion.div
            className="relative"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Main container with blue rounded background */}
            <div className="relative bg-blue-500 rounded-[3rem] p-8 overflow-hidden">
              <motion.div variants={childVariants} className="relative mb-6">
                <img
                  src="/professional-team-meeting.png"
                  alt="KAYAN Healthcare Team"
                  className="w-full h-auto max-h-96 object-cover rounded-2xl shadow-lg"
                />
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                </div>
              </div>

              {/* Star decorations */}
              <div className="absolute top-4 -right-2 text-blue-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div className="absolute bottom-8 -left-2 text-blue-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={childVariants}>
              <p className="text-blue-500 font-medium mb-2">About Us</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Transforming <span className="text-blue-500">Healthcare</span>
                <br />
                into Digital Reality
              </h2>
            </motion.div>

            <motion.p variants={childVariants} className="text-gray-600 text-lg leading-relaxed">
              <strong className="text-gray-900">KAYAN Healthcare Technologies</strong> has been transforming the
              healthcare landscape since 2019. Our AI-driven solutions optimize claims processing and enhance
              administrative efficiency across the GCC & MENA regions.
            </motion.p>

            {/* Statistics */}
            <motion.div variants={childVariants} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-blue-500">200+</h3>
                <p className="text-gray-600 text-sm">Clients Served</p>
              </div>
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-blue-500">99.9%</h3>
                <p className="text-gray-600 text-sm">System Uptime</p>
              </div>
              <div>
                 <h3 className="text-xl lg:text-2xl font-bold text-blue-500 whitespace-nowrap">
       &nbsp;MENA
    </h3>
    <p className="text-gray-600 text-sm">Regional Coverage</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
