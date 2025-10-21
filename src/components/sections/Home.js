"use client"
import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"

const Home = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

  
    const dots = Array.from({ length: 100 }, () => ({
      x: Math.random() * (canvas.width * 0.4), 
      y: Math.random() * canvas.height,
      length: 60 + Math.random() * 100,
      speed: 0.5 + Math.random() * 1.5,
      opacity: 0.6 + Math.random() * 0.4,
      flicker: Math.random() * 0.05,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dots.forEach((dot) => {
        dot.opacity += dot.flicker * (Math.random() > 0.5 ? 1 : -1)
        dot.opacity = Math.min(Math.max(dot.opacity, 0.3), 1)

        ctx.strokeStyle = `rgba(0, 200, 255, ${dot.opacity})`
        ctx.lineWidth = 1.2
        ctx.shadowColor = `rgba(0, 200, 255, ${dot.opacity})`
        ctx.shadowBlur = 10

        ctx.beginPath()
        ctx.moveTo(dot.x, dot.y)
        ctx.lineTo(dot.x, dot.y + dot.length)
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(dot.x, dot.y + dot.length, 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 200, 255, ${dot.opacity})`
        ctx.fill()

        dot.y += dot.speed
        if (dot.y > canvas.height) {
          dot.y = -dot.length
          dot.x = Math.random() * (canvas.width * 0.4) 
        }
      })

      requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) section.scrollIntoView({ behavior: "smooth" })
  }

  return (
   <div className="relative flex flex-col md:flex-row min-h-screen overflow-hidden">
  {/* الخلفية */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-[#041E2F] to-black z-0" />

  {/* الكانڤاس */}
  <canvas
    ref={canvasRef}
    className="absolute inset-0 z-0 pointer-events-none"
  />

  {/* الصورة اليمنى */}
  <div className="absolute top-0 right-0 z-0 w-full md:w-1/2 h-1/3 md:h-full">
    <img
      src="/images/DeWatermark.ai_1757868786616.jpeg"
      alt="Eye Tech"
      className="object-cover w-full h-full [mask-image:linear-gradient(to_left,black_80%,transparent)]"
    />
  </div>

  {/* النصوص والفورم */}
  <div className="relative z-10 flex flex-col justify-center w-full md:w-1/2 min-h-screen px-6 sm:px-12 lg:px-24 py-12 md:py-0">
    <div className="relative max-w-2xl mx-auto space-y-6">
      <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-xl">
        Your Trusted Partner
      </h1>
      <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 bg-clip-text drop-shadow-sm">
        in Claim Management & AI
      </h2>
      <p className="text-base sm:text-lg leading-relaxed text-gray-100 drop-shadow-lg">
        Simplify your e-claim process with multi-layered AI <br />
        powered solutions, Empower your healthcare <br />
        management with speed, accuracy and reliability
      </p>

      <div className="mt-6">
        <button
          onClick={() => scrollToSection("ContactUs")}
          className="w-full md:w-auto px-6 py-4 font-semibold text-white transition-all duration-300 transform shadow-lg group bg-gradient-to-r from-blue-600 to-green-600 rounded-xl hover:shadow-xl hover:-translate-y-1"
        >
          Request a Demo
          <ArrowRight className="inline-block w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home
