"use client"


const OurMissionAndVision = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center p-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: "url('/310404ac259f1a66e81f2e3699424e1f.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Background Effects - keeping the subtle blur effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl w-full">
        <div
          className="relative rounded-[40px] p-12 backdrop-blur-xl"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            boxShadow: `
              inset 0 1px 1px rgba(255, 255, 255, 0.3),
              inset 0 -1px 1px rgba(0, 0, 0, 0.2),
              0 20px 60px rgba(0, 0, 0, 0.4),
              0 0 1px rgba(255, 255, 255, 0.5)
            `,
            border: "1px solid rgba(255, 255, 255, 0.18)",
          }}
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Mission & Vision</h2>
            <p className="text-white/70 text-lg">Shaping the future of healthcare through innovation and commitment</p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Mission */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">🎯</div>
                <h3 className="text-2xl font-bold text-white">Mission</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                Our mission is to drive efficiency and innovation in the healthcare sector by delivering tailored,
                intelligent solutions that optimize operations, ensure compliance, and create lasting value for all
                stakeholders.
              </p>
             
            </div>

            {/* Vision */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">🚀</div>
                <h3 className="text-2xl font-bold text-white">Vision</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                To pioneer cutting-edge, AI-powered solutions that empower payers, providers, and regulators, shaping a
                smarter, more efficient healthcare ecosystem for the future.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurMissionAndVision
