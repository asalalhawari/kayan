"use client"

import React from "react"

const dashboards = [
  {
    title: "Clinical Analytics Dashboard",
    description:
      "Patient-focused insights for medical workflow optimization and resource planning. Monitor patient volumes, track diagnoses, analyze cost distributions, and receive actionable clinical recommendations.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-30%20at%204.02.05%20PM-qe8EH0DMKNiLJYJ4yLas0fNVmkW9bi.jpeg",
    category: "Clinical Analytics",
  },
  {
    title: "Real-Time System Performance Metrics",
    description:
      "API response times, health status monitoring, and Node.js application performance analytics. Track system health, monitor active requests, and optimize application performance in real-time.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-30%20at%204.02.05%20PM%20%281%29-V7t9AXVw6S8glDEwVdZ6ikbdkxwOh0.jpeg",
    category: "Performance Monitoring",
  },
  {
    title: "Server Infrastructure Performance Dashboard",
    description:
      "CPU utilization, memory consumption, and system resource monitoring for healthcare analytics platform. Monitor server health, track resource usage, and ensure optimal infrastructure performance.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-30%20at%204.02.06%20PM-9CE4xWNODYlPtEiymQrfdw9RzJ3lKr.jpeg",
    category: "Infrastructure Analytics",
  },
]

const AnalyticsDashboards = () => {
  return (
    <div className="container p-6 mx-auto">
      <h2 className="mb-12 text-3xl font-bold text-center text-slate-800">
        Analytics Dashboards
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {dashboards.map((dashboard, idx) => (
          <div
            key={idx}
            className="flex flex-col overflow-hidden transition-shadow duration-300 bg-white shadow-2xl rounded-2xl hover:shadow-xl"
          >
            {/* الصورة بنسبة ثابتة */}
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src={dashboard.image}
                alt={dashboard.title}
                className="w-full h-full object-content object-center"
              />
            </div>

            {/* المحتوى */}
            <div className="flex flex-col flex-1 p-6">
              <div className="mb-3 text-sm font-semibold text-blue-700">
                {dashboard.category}
              </div>
              <h3 className="mb-4 text-xl font-bold text-slate-800">
                {dashboard.title}
              </h3>
              <p className="flex-1 text-base leading-relaxed text-slate-600">
                {dashboard.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnalyticsDashboards
