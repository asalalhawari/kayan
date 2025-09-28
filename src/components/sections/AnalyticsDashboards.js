"use client"
import { useState } from "react"
import { BarChart3, Activity, Server, TrendingUp, ArrowLeft, ArrowRight } from "lucide-react"

const dashboards = [
  {
    title: "Clinical Analytics",
    subtitle: "Clinical Analytics Dashboard",
    description:
      "Patient-focused insights for medical workflow optimization and resource planning. Monitor patient volumes, track diagnoses, analyze cost distributions, and receive actionable clinical recommendations.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-30%20at%204.02.05%20PM-qe8EH0DMKNiLJYJ4yLas0fNVmkW9bi.jpeg",
    icon: Activity,
    color: "clinical",
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
    color: "performance",
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
    color: "infrastructure",
    stats: { value: "64%", label: "CPU Usage", trend: "-8%" },
  },
]

const AnalyticsDashboards = () => {
  const [current, setCurrent] = useState(0)

  const next = () => {
    if (current < dashboards.length - 1) {
      setCurrent((prev) => prev + 1)
    }
  }

  const prev = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1)
    }
  }

  const dashboard = dashboards[current]
  const IconComponent = dashboard.icon

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-[#1e40af] to-[#059669] bg-clip-text text-transparent mb-4">
            Analytics Dashboards
          </h1>
        </div>
      </div>

      {/* Dashboard Card */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 relative">
          {/* Content */}
          <div className="space-y-8 relative">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="rounded-xl p-3 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 dark:from-blue-950/20 dark:to-indigo-950/20 dark:border-blue-800/30">
                  <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold text-foreground">{dashboard.title}</h2>
                  <p className="text-base font-medium text-blue-700 dark:text-blue-300">{dashboard.subtitle}</p>
                </div>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">{dashboard.description}</p>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-foreground">{dashboard.stats.value}</span>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm font-medium text-emerald-500">{dashboard.stats.trend}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{dashboard.stats.label}</p>
              </div>
            </div>

            {/* Navigation Arrows Positioned Inside Content */}
            <div className="flex gap-4 pt-8">
              {current > 0 && (
                <button
                  onClick={prev}
                  className="bg-white/90 dark:bg-gray-800/90 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
                >
                  <ArrowLeft className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </button>
              )}

              {current < dashboards.length - 1 && (
                <button
                  onClick={next}
                  className="bg-white/90 dark:bg-gray-800/90 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
                >
                  <ArrowRight className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </button>
              )}
            </div>
          </div>

          {/* Image */}
          <div>
            <div className="group relative overflow-hidden rounded-2xl max-h-80">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={dashboard.image || "/placeholder.svg"}
                  alt={dashboard.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsDashboards
