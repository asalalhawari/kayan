"use client"

import { useState } from "react"

const OurFeeds = () => {
  const [selectedFeed, setSelectedFeed] = useState(null)

  const feeds = [
    {
      id: 1,
      title: "Payer Solutions",
      short: "Our solutions help payers in quickly identifying errors in claims and settling them.",
      full: "Our solutions help payers in quickly identifying errors in claims and settling them. Our software streamlines the process and ensures faster claim resolutions.",
      image: "https://www.kayan-healthcare.com/static/media/service1.8c40564f.webp",
    },
    {
      id: 2,
      title: "Provider Solutions",
      short: "Our software provides top-of-the-line improved clinical edit checks.",
      full: "Our software provides top-of-the-line improved clinical edit checks, removes vague codes, and comes with claim management features.",
      image: "https://www.kayan-healthcare.com/static/media/service2.bf61dbe1.webp",
    },
    {
      id: 3,
      title: "Advanced Analytics",
      short: "Leverage advanced analytics to gain deeper insights into healthcare trends.",
      full: "Leverage advanced analytics to gain deeper insights into healthcare trends, optimize operations, and enhance patient outcomes.",
      image: "https://www.kayan-healthcare.com/static/media/service3.32698236.webp",
    },
    {
      id: 4,
      title: "E-Prescriptions and Pharmaceutical Edits",
      short: "Integrating e-prescription systems with pharmaceutical benefits streamlines medication management, reduces errors, and ensures compliance.",
      full: "In today's rapidly evolving healthcare landscape, the integration of e-prescription systems and pharmaceutical benefits is more crucial than ever. This seamless connection streamlines the medication management process. Effective drug claim scrubbing plays a pivotal role in ensuring accuracy and compliance, reducing errors, and optimizing reimbursement. By prioritizing pharmaceutical scrubbers, we can foster a more efficient healthcare ecosystem. In this regard, Kayan Healthcare Technologies is developing a comprehensive and outstanding suite of checks and edits to automate prescription verifications against formularies and guidelines, and establishing a strong Rule Management Scrubber to automate the full process and ensure compliance with the ongoing rapid technologies and endless expectations of the industry.",
      image: "https://www.kayan-healthcare.com/static/media/service3.32698236.webp",
    },
  ]

  return (
    <div 
      id="our-feeds-section"
      className="max-w-7xl mx-auto px-4 pt-32 pb-12 scroll-mt-32"
    >
      <h1 className="text-4xl font-bold text-left mb-8 bg-gradient-to-r from-blue-900 to-emerald-500 bg-clip-text text-transparent">
        Latest Feeds
      </h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* الكارد الكبير الأول */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col lg:flex-row lg:w-1/2">
          <img
            src={feeds[0].image || "/placeholder.svg"}
            alt={feeds[0].title}
            className="w-full lg:w-1/2 h-64 lg:h-auto object-cover"
          />
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-emerald-500 mb-4">
                {feeds[0].title}
              </h2>
              <p className="text-gray-600 text-sm">{feeds[0].short}</p>
            </div>
            <button
              onClick={() => setSelectedFeed(feeds[0])}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-auto self-end"
            >
              Read More
            </button>
          </div>
        </div>

        {/* الكروت الصغيرة */}
        <div className="flex flex-col gap-4 lg:w-1/2">
          {feeds.slice(1).map((feed) => (
            <div
              key={feed.id}
              className={`flex bg-white rounded-xl shadow-md overflow-hidden items-start ${
                feed.id === 4 ? "h-36 sm:h-40 lg:h-40" : "h-28 sm:h-32 lg:h-32"
              }`}
            >
              <img
                src={feed.image || "/placeholder.svg"}
                alt={feed.title}
                className={`${
                  feed.id === 4 ? "w-28 h-28 sm:w-32 sm:h-32 lg:w-32 lg:h-32" : "w-20 h-20 sm:w-24 sm:h-24 lg:w-24 lg:h-24"
                } object-cover rounded-md m-3 flex-shrink-0`}
              />
              <div className="flex flex-col justify-between p-3 h-full w-full">
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-emerald-500 mb-1">
                    {feed.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-3">
                    {feed.short}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedFeed(feed)}
                  className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium mt-auto self-end"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* البوب أب */}
      {selectedFeed && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4">
          <div className="bg-white max-w-2xl w-full rounded-xl p-6 shadow-xl relative">
            <button
              onClick={() => setSelectedFeed(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
            <h3 className="text-xl font-bold text-gray-800 mb-4 pr-8">
              {selectedFeed.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{selectedFeed.full}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default OurFeeds
