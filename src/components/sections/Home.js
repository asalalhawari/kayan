"use client"
import "./Home.css"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Dynamic Background with Mouse Interaction */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(25, 118, 210, 0.15) 0%, rgba(21, 128, 61, 0.1) 50%, transparent 70%)`,
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-32 h-32 rounded-full top-20 left-10 bg-gradient-to-r from-blue-400 to-blue-600 opacity-20 animate-float" />
        <div className="absolute w-24 h-24 rotate-45 rounded-lg opacity-25 top-40 right-20 bg-gradient-to-r from-green-400 to-blue-500 animate-float animation-delay-400" />
        <div className="absolute w-20 h-20 rounded-full bottom-40 left-20 bg-gradient-to-r from-blue-500 to-green-400 opacity-30 animate-float animation-delay-800" />

        <div className="absolute w-16 h-16 rounded-full opacity-25 top-1/3 left-1/3 bg-gradient-to-r from-blue-300 to-green-300 animate-bounce-slow animation-delay-200" />
        <div className="absolute w-12 h-12 rounded-full top-2/3 right-1/3 bg-gradient-to-r from-green-400 to-blue-400 opacity-20 animate-float animation-delay-600" />
        <div className="absolute w-8 h-8 rounded-full top-1/4 left-2/3 bg-gradient-to-r from-blue-500 to-green-500 opacity-35 animate-pulse animation-delay-1000" />
        <div className="absolute rounded-full bottom-1/3 right-1/4 w-14 h-14 bg-gradient-to-r from-green-300 to-blue-300 opacity-30 animate-float animation-delay-1200" />
        <div className="absolute w-10 h-10 rounded-full opacity-25 top-3/4 left-1/4 bg-gradient-to-r from-blue-400 to-green-400 animate-bounce-slow animation-delay-800" />

        <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-1/2 left-1/2 opacity-40 animate-ping animation-delay-300" />
        <div className="absolute w-1 h-1 bg-green-400 rounded-full opacity-50 top-1/3 right-1/2 animate-ping animation-delay-700" />
        <div className="absolute bottom-1/2 left-3/4 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-45 animate-ping animation-delay-1100" />

        {/* Rotating Tech Rings */}
        <div className="absolute w-64 h-64 border-2 border-blue-300 rounded-full top-1/4 right-1/4 opacity-20 animate-rotate-slow" />
        <div
          className="absolute w-48 h-48 border-2 border-green-300 rounded-full opacity-25 bottom-1/4 left-1/4 animate-rotate-slow"
          style={{ animationDirection: "reverse" }}
        />

        <div className="absolute w-32 h-32 border border-blue-200 rounded-full top-1/2 right-1/3 opacity-15 animate-rotate-slow animation-delay-500" />
        <div
          className="absolute w-40 h-40 border border-green-200 rounded-full bottom-1/3 left-1/2 opacity-20 animate-rotate-slow animation-delay-900"
          style={{ animationDirection: "reverse" }}
        />

        {/* Data Flow Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1976d2" />
              <stop offset="50%" stopColor="#42a5f5" />
              <stop offset="100%" stopColor="#15803d" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q200,50 400,100 T800,100"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M200,200 Q400,150 600,200 T1000,200"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse animation-delay-400"
          />
          <path
            d="M100,300 Q300,250 500,300 T900,300"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse animation-delay-800"
          />
        </svg>

        <div className="absolute w-6 h-6 rounded-full top-1/5 right-1/5 bg-gradient-to-r from-blue-300 to-transparent opacity-30 animate-float-slow" />
        <div className="absolute w-4 h-4 rounded-full opacity-25 bottom-1/5 left-1/5 bg-gradient-to-r from-green-300 to-transparent animate-float-slow animation-delay-600" />
        <div className="absolute w-3 h-3 rounded-full top-2/5 right-2/5 bg-gradient-to-r from-blue-400 to-transparent opacity-35 animate-float-slow animation-delay-1000" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Column - Text Content */}
            <div className={`space-y-8 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-800 bg-blue-100 rounded-full animate-fade-in-scale">
                  Trusted Healthcare Technology Partner
                </div>

                <h1 className="text-5xl font-bold leading-tight text-gray-900 lg:text-7xl animate-slide-up animation-delay-200">
                  <span className="block text-balance">Your Reliable Partner in</span>
                  <span className="block text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 bg-clip-text animate-gradient-shift">
                    Claim Management Solutions & AI
                  </span>
                </h1>

                <p className="max-w-2xl text-xl leading-relaxed text-gray-600 animate-slide-up animation-delay-400">
                  Transform the way you handle claims with our simplified e-claim multi-layered AI-powered solutions.
                  Get the most efficient management team with proven healthcare experience.
                </p>
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 ${isVisible ? "animate-slide-up animation-delay-600" : "opacity-0"}`}
              >
                <button
                  onClick={() => scrollToSection("contactUs")}
                  className="relative px-8 py-4 font-semibold text-white transition-all duration-300 transform shadow-lg group bg-gradient-to-r from-blue-600 to-green-600 rounded-xl hover:shadow-xl hover:-translate-y-1 animate-pulse-glow"
                >
                  <span className="flex items-center justify-center">
                    Request a Demo
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column - Healthcare Image */}
            <div className={`relative ${isVisible ? "animate-slide-up animation-delay-800" : "opacity-0"}`}>
              <div className="relative group">
                {/* Image Container with Hover Effects */}
                <div className="relative overflow-hidden transition-all duration-500 transform shadow-2xl rounded-2xl group-hover:scale-105">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medical-banner-with-doctor-wearing-goggles.jpg-xnz8sUtiVTKpDJefJ1Z0lQCbVlKAUp.jpeg"
                    alt="Healthcare Technology - Doctor with Digital Medical Interface"
                    className="object-cover w-full h-auto"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent group-hover:opacity-100" />
                </div>

                {/* Floating Elements Around Image */}
                <div className="absolute w-8 h-8 rounded-full -top-4 -right-4 bg-gradient-to-r from-blue-400 to-green-400 opacity-60 animate-float" />
                <div className="absolute w-12 h-12 rounded-full -bottom-6 -left-6 bg-gradient-to-r from-green-400 to-blue-400 opacity-40 animate-float animation-delay-400" />
                <div className="absolute w-6 h-6 rounded-full opacity-50 top-1/2 -right-8 bg-gradient-to-r from-blue-500 to-green-500 animate-bounce-slow animation-delay-600" />

                {/* Decorative Ring */}
                <div className="absolute border-2 border-blue-200 -inset-4 rounded-2xl opacity-30 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-24 lg:h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0 C300,60 600,60 900,30 C1050,10 1150,20 1200,40 L1200,120 L0,120 Z"
            fill="white"
            className="drop-shadow-sm"
          />
        </svg>
      </div>
    </div>
  )
}

export default Home
