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
    <section
      id="about"
      className="relative flex items-center justify-center min-h-screen px-6 py-24 overflow-hidden text-gray-900 md:px-16 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200"
    >
      {/* Subtle Background Decorations */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-64 h-64 rounded-full top-20 left-20 bg-blue-300/20 blur-2xl animate-pulse-slow" />
        <div className="absolute rounded-full w-80 h-80 bottom-20 right-20 bg-white/10 blur-2xl animate-pulse" />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2
          variants={childVariants}
          className="mb-8 text-4xl font-bold leading-tight tracking-tight md:text-5xl"
        >
          Pioneering{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900">
            Healthcare Innovation
          </span>
        </motion.h2>

        <motion.p
          variants={childVariants}
          className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl"
        >
          <strong className="font-bold text-gray-900">
            KAYAN Healthcare Technologies
          </strong>{" "}
          has been transforming the healthcare landscape since{" "}
          <span className="font-semibold text-blue-600">2019</span>. Our{" "}
          <span className="font-semibold text-blue-600">AI-driven</span>{" "}
          solutions optimize{" "}
          <span className="font-semibold text-blue-600">
            claims processing
          </span>{" "}
          and enhance{" "}
          <span className="font-semibold text-blue-600">
            administrative efficiency
          </span>{" "}
          across the GCC, empowering providers and payers.
        </motion.p>

        <motion.p
          variants={childVariants}
          className="mb-10 text-lg leading-relaxed text-gray-700 md:text-xl"
        >
          We are dedicated to delivering scalable, reliable, and innovative
          technologies that drive{" "}
          <span className="font-semibold text-blue-600">growth</span> and
          elevate{" "}
          <span className="font-semibold text-blue-600">
            patient care standards
          </span>.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={childVariants}
          className="grid grid-cols-1 gap-6 mb-10 sm:grid-cols-3"
        >
          {[
            { value: "50+", label: "Clients Served" },
            { value: "99.9%", label: "System Uptime" },
            { value: "GCC", label: "Regional Coverage" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 text-center transition-transform duration-300 bg-white/50 rounded-xl backdrop-blur-lg hover:bg-white/70 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-sm text-blue-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
      
      </motion.div>
    </section>
  )
}

export default About