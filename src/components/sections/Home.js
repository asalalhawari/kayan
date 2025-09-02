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
    if (section) section.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Dynamic Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(25, 118, 210, 0.15) 0%, rgba(21, 128, 61, 0.1) 50%, transparent 70%)`,
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* floating circles, tech rings, data flow lines remain as in original */}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Column - Text */}
            <div className={`space-y-8 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
              <div className="space-y-6">
                <h1 className="text-5xl font-bold leading-tight text-gray-900 lg:text-6xl animate-slide-up animation-delay-200">
                  <span className="block text-balance">Your Trusted Partner in</span>
                  <span className="block text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 bg-clip-text animate-gradient-shift">
                    Claim Management & AI
                  </span>
                </h1>

                <p className="max-w-2xl text-xl leading-relaxed text-gray-600 animate-slide-up animation-delay-400">
                  Simplify your e-claim process with multi-layered AI powered solutions,<br />
                  Empower your healthcare management with speed, accuracy,<br />
                  and reliability.
                </p>

                {/* CTA Button */}
                <div className="mt-8">
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
            </div>

            {/* Right Column - Image */}
            <div className={`relative ${isVisible ? "animate-slide-up animation-delay-800" : "opacity-0"}`}>
              <div className="relative group">
                <div className="relative overflow-hidden transition-all duration-500 transform shadow-2xl rounded-2xl group-hover:scale-105">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medical-banner-with-doctor-wearing-goggles.jpg-xnz8sUtiVTKpDJefJ1Z0lQCbVlKAUp.jpeg"
                    alt="Healthcare Technology"
                    className="object-cover w-full h-auto"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent group-hover:opacity-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Removed Bottom Wave Divider */}
    </div>
  )
}

export default Home
