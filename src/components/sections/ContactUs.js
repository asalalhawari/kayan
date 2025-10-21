"use client"

import React from "react"
import { Mail, MapPin, Linkedin } from "lucide-react"
import GCCPresenceMap from "./GCCPresenceMap"

const ContactUs = () => {
  const [formData, setFormData] = React.useState({
    name: "",
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
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleCountryCodeChange = (e) => {
    setFormData({
      ...formData,
      countryCode: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")
    setSuccessMessage("")

    try {
      const response = await fetch("http://localhost:5000/api/send-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
        setFormData({ name: "", email: "", phone: "", message: "", countryCode: "+970" })
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
    <div id="ContactUs" className="px-4 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Anchor offset لتعديل مكان ظهور العنوان عند النزول */}
        <span id="anchor-contactus" style={{ display: "block", height: "150px", marginTop: "-150px" }} />

        <div className="mb-12 text-center">
          <h2
            className="mb-4 text-4xl font-bold"
            style={{
              background: "linear-gradient(135deg, #1e40af, #059669)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
               marginTop: "60px",
            }}
          >
            Book a Free Consultation
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Transform your healthcare business with cutting-edge technology solutions. Get personalized insights and
            strategic guidance from our industry experts.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left side - Contact Info */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-blue-600">Send us a Message</h3>
            <p className="mb-8 text-gray-600">
              Get in touch with our healthcare technology experts for personalized solutions.
            </p>

            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Address */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-20 h-12 bg-blue-900 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">
                      Realogics Star Estate YZ Building, 3rd Floor, Algouz 3, Dubai, UAE
                    </p>
                  </div>
                </div>

                {/* Support */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-900 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Support</h4>
                    <p className="text-gray-600">support@kayan-healthcare.com</p>
                  </div>
                </div>
              </div>

              {/* Row 2: Contact + LinkedIn */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Contact */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-900 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Contact</h4>
                    <p className="text-gray-600">contact@kayan-healthcare.com</p>
                  </div>
                </div>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/kayan-healthcare-technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 transition-all hover:scale-105"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-700 rounded-lg">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                    <p className="text-gray-600">Kayan Healthcare Technologies</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div>
            <div className="p-8 bg-gray-100 border-0 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <input
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <input
                      placeholder="Your Email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

               <div className="flex flex-col sm:flex-row gap-2 w-full">
  <select
    value={formData.countryCode}
    onChange={handleCountryCodeChange}
    className="w-full sm:w-1/4 px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="+970">🇵🇸 +970</option>
    <option value="+971">🇦🇪 +971</option>
    <option value="+966">🇸🇦 +966</option>
    <option value="+968">🇴🇲 +968</option>
    <option value="+973">🇧🇭 +973</option>
    <option value="+974">🇶🇦 +974</option>
    <option value="+965">🇰🇼 +965</option>
  </select>
  
  <input
    placeholder="Phone Number"
    name="phone"
    value={formData.phone}
    onChange={handleInputChange}
    className="w-full sm:flex-1 min-w-0 px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

                <div>
                  <textarea
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 font-medium text-white transition-colors bg-blue-900 rounded-lg hover:bg-blue-800 disabled:bg-blue-400"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>

              {successMessage && (
                <div className="p-4 mt-4 text-green-700 bg-green-100 border border-green-400 rounded-md">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="p-4 mt-4 text-red-700 bg-red-100 border border-red-400 rounded-md">
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
