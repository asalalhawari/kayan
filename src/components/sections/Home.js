"use client"

import Button from "@mui/material/Button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-[80vh] md:min-h-[75vh] lg:min-h-screen flex flex-col justify-start lg:justify-center items-center overflow-hidden pt-16 sm:pt-20 md:pt-12 lg:pt-24"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-70" />

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-8 sm:gap-6 items-center">
          {/* Left Column - Text */}
          <div className="text-left">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full glass-light mb-6 sm:mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
            >
              <Sparkles className="w-3 h-5 text-cyan-400" />
              <span className="text-sm sm:text-base font-medium text-gray-200">
                Powered by Multi-Layered AI Technology
              </span>
            </div>

            {/* Heading */}
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-white text-balance">Smarter Claims Fewer Denials</span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Empower your healthcare management with{" "}
              <span className="text-white font-bold">speed</span>,{" "}
              <span className="text-white font-bold">accuracy</span>, and{" "}
              <span className="text-white font-bold">reliability</span>
            </p>

            {/* Description */}
            <p
              className={`text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 leading-relaxed max-w-xl transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Kayan's AI-powered claim management solutions cut through the complexity. We
              streamline your workflow to accelerate revenue and ensure unparalleled accuracy.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-12 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                size="large"
                sx={{
                  background: "linear-gradient(135deg, #1e40af, #059669)",
                  color: "white",
                  "&:hover": {
                    background: "linear-gradient(135deg, #1e40af, #059669)",
                  },
                }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-5 font-bold text-xl sm:text-3xl transition-all duration-300 transform shadow-xl rounded-2xl"
              >
                <span className="flex items-center">
                  Request a Demo
                  <ArrowRight className="ml-2 sm:ml-3 w-5 sm:w-7 h-5 sm:h-7 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </div>

          {/* Right Column - AI Head Image/Video */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative w-full aspect-video sm:aspect-video max-w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mx-auto lg:mx-0">
              {/* Glow effect (optional) */}

              {/* AI Head Video/Image */}
              <div className="relative z-10 animate-float">
                <img
                  src="/f43e9c779dbd7566b774d1ff487a66b4-removebg-preview.png"
                  alt="AI Head"
                  className="w-full h-auto object-cover drop-shadow-2xl rounded-xl"
                />
              </div>

              {/* Floating Particles */}
              <div className="absolute top-1/4 -left-2 w-2 sm:w-3 h-2 sm:h-3 bg-cyan-400 rounded-full animate-ping" />
              <div
                className="absolute top-1/3 -right-2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full animate-ping"
                style={{ animationDelay: "0.5s" }}
              />
              <div
                className="absolute bottom-1/3 -left-3 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-purple-400 rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute bottom-1/4 -right-3 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-cyan-300 rounded-full animate-ping"
                style={{ animationDelay: "1.5s" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 sm:w-6 h-8 sm:h-10 rounded-full border-2 border-cyan-400/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
