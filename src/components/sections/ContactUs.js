"use client"

import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import SendIcon from "@mui/icons-material/Send"
import EmailIcon from "@mui/icons-material/Email" 
import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
  IconButton,
} from "@mui/material"
import { motion } from "framer-motion"
import React from "react"

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
        setSuccessMessage("Thank you! Your message has been sent successfully. We will get back to you soon.")
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <Box
      id="ContactUs"
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "20px", md: "40px" },
      }}
    >
      <Container maxWidth="lg" sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 4 }}>
        <Box component={motion.div} variants={itemVariants} sx={{ textAlign: "center", mb: 2 }}>
          <Typography variant="h2" sx={{ fontWeight: 700, color: "#1f2937", fontSize: { xs: "2rem", md: "2.8rem" } }}>
            Book a Free Consultation
            <br />
            <span style={{ color: "#3b82f6" }}>with Our Experts</span>
          </Typography>
          <Typography variant="body1" sx={{ color: "#6b7280", mt: 1 }}>
            Transform your healthcare business with cutting-edge technology solutions. Get personalized insights and strategic guidance from our industry experts.
          </Typography>
        </Box>

        {/* الكارد - عرضي */}
        <Box
          component={motion.div}
          variants={itemVariants}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            padding: { xs: 3, md: 5 },
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            border: "1px solid #e5e7eb",
          }}
        >
          {/* الفورم */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, color: "#3b82f6", mb: 2 }}>
              Send us a Message
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  required
                  size="small"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <TextField
                  label="Your Email"
                  variant="outlined"
                  fullWidth
                  required
                  size="small"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <FormControl size="small" sx={{ minWidth: 120 }}>
                  <InputLabel>Code</InputLabel>
                  <Select value={formData.countryCode} onChange={handleCountryCodeChange}>
                    <MenuItem value="+970">🇵🇸 +970</MenuItem>
                    <MenuItem value="+971">🇦🇪 +971</MenuItem>
                    <MenuItem value="+966">🇸🇦 +966</MenuItem>
                    <MenuItem value="+968">🇴🇲 +968</MenuItem>
                    <MenuItem value="+973">🇧🇭 +973</MenuItem>
                    <MenuItem value="+974">🇶🇦 +974</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  size="small"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </Box>
              <TextField
                label="Your Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
                size="small"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
              <Button type="submit" variant="contained" disabled={isSubmitting} endIcon={isSubmitting ? null : <SendIcon />}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </Box>
          </Box>

          {/* معلومات الاتصال + لينكدإن + جيميل */}
          <Box
            sx={{
              flex: 0.8,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: 3,
              mt: 7, // 
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, color: "#3b82f6" }}>
              Contact Info
            </Typography>
            <Typography variant="body2" sx={{ color: "#6b7280" }}>
              Realogics Star Estate YZ Building, 3rd Floor, Algouz 3, Dubai, UAE
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton
                component="a"
                href="https://www.linkedin.com/company/kayan-healthcare-technologies"
                target="_blank"
                sx={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#0077b5",
                  color: "white",
                  "&:hover": { backgroundColor: "#005885", transform: "scale(1.1)" },
                  borderRadius: "12px",
                }}
              >
                <LinkedInIcon />
              </IconButton>

              <IconButton
                component="a"
                href="mailto:example@company.com" // ضع هنا ايميل الشركة الحقيقي
                sx={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#d93025",
                  color: "white",
                  "&:hover": { backgroundColor: "#b1271b", transform: "scale(1.1)" },
                  borderRadius: "12px",
                }}
              >
                <EmailIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* الرسائل */}
      <Snackbar open={!!successMessage} autoHideDuration={6000} onClose={() => setSuccessMessage("")} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert onClose={() => setSuccessMessage("")} severity="success" icon={<CheckCircleIcon />} sx={{ width: "100%" }}>
          {successMessage}
        </Alert>
      </Snackbar>

      <Snackbar open={!!errorMessage} autoHideDuration={6000} onClose={() => setErrorMessage("")} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert onClose={() => setErrorMessage("")} severity="error" sx={{ width: "100%" }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default ContactUs
