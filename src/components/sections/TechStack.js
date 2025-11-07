"use client"

export default function TechStack() {
  const languages = [
    {
      name: "React",
      icon: "https://cdn.simpleicons.org/react/61DAFB",
      color: "#61DAFB",
    },
    {
      name: "Node.js",
      icon: "https://cdn.simpleicons.org/nodedotjs/539E43",
      color: "#539E43",
    },
    {
      name: "Express",
      icon: "https://cdn.simpleicons.org/express/FFFFFF",
      color: "#FFFFFF",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#020817] via-[#041E2F] to-[#000000] relative overflow-hidden">
      {/* خلفية متحركة */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* النص */}
        <div className="lg:w-1/2 text-left">
          <p className="text-cyan-400 text-sm font-semibold mb-3 tracking-widest uppercase inline-block px-4 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20">
            START WITH MORE
          </p>
          <h2 className="text-white text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
            Get Amazing Discounts
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We've partnered with the biggest tech tools on the market to help you get started with exclusive offers.
          </p>
        </div>

        {/* اللغات بجانب بعضها */}
        <div className="lg:w-1/2 flex justify-center gap-16">
          {languages.map((lang, index) => (
            <div
              key={lang.name}
              className="group relative flex flex-col items-center text-center transition-all duration-500 hover:scale-110 cursor-pointer"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
                opacity: 0,
              }}
            >
              <div className="relative mb-4 transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500">
                <div
                  className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"
                  style={{ background: lang.color }}
                ></div>
                <img
                  src={lang.icon || "/placeholder.svg"}
                  alt={lang.name}
                  className="w-20 h-20 relative z-10 drop-shadow-2xl"
                />
              </div>
              <p
                className="text-white font-bold text-xl transition-all duration-300 group-hover:scale-110"
                style={{
                  textShadow: `0 0 20px ${lang.color}40`,
                }}
              >
                {lang.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
