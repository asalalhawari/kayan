"use client"
import { BarChart3, Activity, Server } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

const dashboards = [
  {
    title: "Clinical Analytics",
    subtitle: "Clinical Analytics Dashboard",
    description:
      "Patient-focused insights for medical workflow optimization and resource planning. Monitor patient volumes, track diagnoses, analyze cost distributions, and receive actionable clinical recommendations.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-30%20at%204.02.05%20PM-qe8EH0DMKNiLJYJ4yLas0fNVmkW9bi.jpeg",
    icon: Activity,
    stats: { value: "2.4K", label: "Active Patients", trend: "+12%" },
  },
  {
    title: "Performance Monitoring",
    subtitle: "Real-Time System Performance Metrics",
    description:
      "API response times, health status monitoring, and Node.js application performance analytics. Track system health, monitor active requests, and optimize application performance in real-time.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-30%20at%204.02.05%20PM%20%281%29-V7t9AXVw6S8glDEwVdZ6ikbdkxwOh0.jpeg",
    icon: BarChart3,
    stats: { value: "99.9%", label: "Uptime", trend: "+0.1%" },
  },
  {
    title: "Infrastructure Analytics",
    subtitle: "Server Infrastructure Performance Dashboard",
    description:
      "CPU utilization, memory consumption, and system resource monitoring for healthcare analytics platform. Monitor server health, track resource usage, and ensure optimal infrastructure performance.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-30%20at%204.02.06%20PM-9CE4xWNODYlPtEiymQrfdw9RzJ3lKr.jpeg",
    icon: Server,
    stats: { value: "64%", label: "CPU Usage", trend: "-8%" },
  },
]

export default function AnalyticsDashboardSwiper() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#020817] via-[#041E2F] to-[#000000] overflow-hidden">
      {/* Title Section */}
    {/* Title Section */}
<div className="text-center pt-16 pb-6"> {/* قللنا padding top و bottom */}
  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
    Analytics Dashboards
  </h1>
  <p className="text-lg font-semibold text-white">
    Explore our comprehensive analytics solutions
  </p>
</div>


      {/* Swiper Section */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto" // Dynamically adjust slides to fill viewport
        spaceBetween={30} // Add some spacing to avoid overlap
        loop={true}
        speed={1000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          reverseDirection: true, // Right-to-left flow
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full"
        style={{
          width: "100%",
          paddingTop: "60px",
          paddingBottom: "80px",
        }}
      >
        {dashboards.map((dashboard, index) => {
          const IconComponent = dashboard.icon
          return (
            <SwiperSlide
              key={index}
              style={{
                width: "500px",
                height: "400px",
              }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden group shadow-lg shadow-black/20">
                <img
                  src={dashboard.image || "/placeholder.svg"}
                  alt={dashboard.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-xl p-2.5 bg-white/10 backdrop-blur-sm border border-white/20">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        {dashboard.title}
                      </h2>
                      <p className="text-sm font-medium text-blue-200">
                        {dashboard.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-white/90 mb-4 line-clamp-3">
                    {dashboard.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-white">
                        {dashboard.stats.value}
                      </span>
                      <span
                        className={`text-sm font-medium ${dashboard.stats.trend.startsWith("+")
                            ? "text-emerald-400"
                            : "text-red-400"
                          }`}
                      >
                        {dashboard.stats.trend}
                      </span>
                    </div>
                    <span className="text-sm text-white/70">
                      {dashboard.stats.label}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}

        {dashboards.map((dashboard, index) => {
          const IconComponent = dashboard.icon
          return (
            <SwiperSlide
              key={index}
              style={{
                width: "500px",
                height: "400px",
              }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden group shadow-lg shadow-black/20">
                <img
                  src={dashboard.image || "/placeholder.svg"}
                  alt={dashboard.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-xl p-2.5 bg-white/10 backdrop-blur-sm border border-white/20">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        {dashboard.title}
                      </h2>
                      <p className="text-sm font-medium text-blue-200">
                        {dashboard.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-white/90 mb-4 line-clamp-3">
                    {dashboard.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-white">
                        {dashboard.stats.value}
                      </span>
                      <span
                        className={`text-sm font-medium ${dashboard.stats.trend.startsWith("+")
                            ? "text-emerald-400"
                            : "text-red-400"
                          }`}
                      >
                        {dashboard.stats.trend}
                      </span>
                    </div>
                    <span className="text-sm text-white/70">
                      {dashboard.stats.label}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}