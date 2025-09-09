"use client"
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

      {/* Background Image with Blur */}
      <div
className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-75 "
        style={{
          backgroundImage: "url('/images/pediatrician-doctor-nurse-sitting-desk-medical-office-talking-with-child-healthcare-practitioner-specialist-medicine-providing-professional-radiographic-treatment-hospital-clinic.jpg')",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-6 sm:px-12 lg:px-24">
        <div className={`space-y-6 max-w-3xl ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          {/* العنوان الأول */}
          <h1 className="text-4xl font-bold text-white lg:text-5xl animate-slide-up animation-delay-200 drop-shadow-xl">
            Your Trusted Partner
          </h1>

          {/* العنوان الثاني */}
          <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 bg-clip-text lg:text-4xl animate-slide-up animation-delay-300 drop-shadow-sm">
            in Claim Management & AI
          </h2>

          {/* الفقرة الوصفية */}
          <p className="text-lg leading-relaxed text-gray-100 animate-slide-up animation-delay-400 drop-shadow-lg">
            Simplify your e-claim process with multi-layered AI powered solutions, <br />
            Empower your healthcare management with speed, accuracy and reliability  <br />
          </p>

          {/* CTA Button */}
          <div className="mt-6">
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
    </div>
  )
}

export default Home
