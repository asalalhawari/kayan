"use client"

import React from "react"
import GCCPresenceMap from "./GCCPresenceMap"

const ContactUs = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    countryCode: "+970",
  })

  const [errorMessage, setErrorMessage] = React.useState("")
  const [successMessage, setSuccessMessage] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleCountryCodeChange = (e) => {
    setFormData({ ...formData, countryCode: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")
    setSuccessMessage("")

    try {
      const response = await fetch("http://localhost:5000/api/send-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      let result
      try {
        result = await response.json()
      } catch (jsonError) {
        console.error("Failed to parse JSON response:", jsonError)
        throw new Error("Invalid JSON response from server.")
      }

      if (response.ok) {
        setSuccessMessage(
          "Thank you! Your message has been sent successfully. We will get back to you soon."
        )
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
          countryCode: "+970",
        })
      } else {
        setErrorMessage(result?.message || "An error occurred while sending the data.")
      }
    } catch (error) {
      console.error("Request Error:", error)
      setErrorMessage("Failed to connect to the server. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
  data-aos="fade-up"
  data-aos-duration="1000"
  id="ContactUs"
  className="px-4 py-16 bg-gradient-to-r from-[#020817] via-[#041E2F] to-[#000000]"
  style={{ fontFamily: "'Inter', sans-serif", scrollMarginTop: "120px" }}
>

      <div className="max-w-7xl mx-auto">
      <div id="anchor-contactus" className="absolute top-0 -mt-32"></div>


        {/* العنوان الرئيسي */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-bold text-white">
            Book a Free Consultation
          </h2>
          <p className="max-w-3xl mx-auto text-gray-100">
            Transform your healthcare business with cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left side - Contact Info - مرفوع جدًا لفوق */}
          <div className="lg:pr-8 flex flex-col justify-center h-full -mt-12">


            <h3
              className="mb-3 text-2xl font-bold"
              style={{
                background: "linear-gradient(135deg, #1e40af, #059669)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              Send us a Message
            </h3>

            <p className="mb-6 text-gray-100">
              Get in touch with our healthcare technology experts.
            </p>

            <div className="flex flex-col space-y-5">

{/* Address Box */}
<div className="bg-gray-900 bg-opacity-50 p-4 rounded-2xl shadow-md flex items-start space-x-4">
  <div className="flex items-center justify-center w-12 h-12">
    <img src="/299087_marker_map_icon.svg" alt="map" className="w-8 h-8" />
  </div>
  <div>
    <h4 className="font-semibold text-white text-sm mb-1">Address</h4>
    <p className="text-gray-100 text-sm">
      Realogics Star: Star Estate YZ Building, 3rd Floor, Algouz 3, Dubai, UAE
    </p>
  </div>
</div>

{/* Mail Box */}
<div className="bg-gray-900 bg-opacity-50 p-4 rounded-2xl shadow-md flex items-start space-x-4">
  <div className="flex items-center justify-center w-12 h-12">
    <img src="/6296671_microsoft_office_office365_outlook_icon.svg" alt="mail" className="w-8 h-8" />
  </div>
  <div>
    <h4 className="font-semibold text-white text-sm mb-1">Mail</h4>
    <p className="text-gray-100 text-sm">support@kayan-healthcare.com</p>
    <p className="text-gray-100 text-sm">contact@kayan-healthcare.com</p>
  </div>
</div>

{/* LinkedIn Box */}
<a
  href="https://www.linkedin.com/company/kayan-healthcare-technologies"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-900 bg-opacity-50 p-4 rounded-2xl shadow-md flex items-start space-x-4 hover:scale-105 transition-all"
>
  <div className="flex items-center justify-center w-12 h-12">
    <img
      src="/4102586_applications_linkedin_social_social media_icon.svg"
      alt="linkedin"
      className="w-8 h-8"
    />
  </div>
  <div>
    <h4 className="font-semibold text-white text-sm mb-1">LinkedIn</h4>
    <p className="text-gray-100 text-sm">Kayan Healthcare Technologies</p>
  </div>
</a>

</div>

          </div>

          {/* Right side - Contact Form */}
          <div className="flex flex-col justify-center">
            <div
              className="p-8 rounded-2xl bg-gradient-to-r from-[#020817] via-[#041E2F] to-[#000000]"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.15)",
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Company */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-white mb-1">Name*</label>
                    <input
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-1">Company*</label>
                    <input
                      placeholder="Company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-white mb-1">E-mail*</label>
                    <input
                      placeholder="E-mail"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-1">Phone Number*</label>
                    <div className="flex rounded-full overflow-hidden border border-gray-300 focus-within:ring-2 focus-within:ring-cyan-400 focus-within:border-cyan-400 transition-all">
                      <select
                        value={formData.countryCode}
                        onChange={handleCountryCodeChange}
                        className="px-3 py-3 bg-white text-gray-900 font-medium border-r border-gray-300 focus:outline-none min-w-[90px]"
                      >
                        <option value="+970">+970</option>
                        <option value="+971">+971</option>
                        <option value="+966">+966</option>
                        <option value="+968">+968</option>
                        <option value="+973">+973</option>
                        <option value="+974">+974</option>
                        <option value="+965">+965</option>
                      </select>
                      <input
                        placeholder="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="flex-1 px-4 py-3 bg-white text-gray-900 placeholder-gray-500 focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-white mb-1">Message*</label>
                  <textarea
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl text-gray-900 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>

              {/* Messages */}
              {successMessage && (
                <div className="p-4 mt-4 text-green-300 bg-green-900 bg-opacity-30 border border-green-600 rounded-lg">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="p-4 mt-4 text-red-300 bg-red-900 bg-opacity-30 border border-red-600 rounded-lg">
                  {errorMessage}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <GCCPresenceMap />
        </div>
      </div>
    </div>
  )
}

export default ContactUs