"use client"

import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import SendIcon from "@mui/icons-material/Send"
import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
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
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <Box
      id="contactUs"
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
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          component={motion.div}
          variants={itemVariants}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            marginBottom: { xs: 4, md: 6 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "700",
              color: "#1f2937",
              fontFamily: "Inter, sans-serif",
              textTransform: "none",
              fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.5rem" },
              lineHeight: 1.1,
              mb: 3,
              letterSpacing: "-0.02em",
            }}
          >
            Book a Free Consultation
            <br />
            <span
              style={{
                color: "#3b82f6",
                fontWeight: "700",
              }}
            >
              with Our Experts
            </span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
              color: "#6b7280",
              lineHeight: "1.7",
              maxWidth: { xs: "90%", sm: "80%", md: "70%" },
              marginX: "auto",
              fontWeight: 400,
            }}
          >
            Transform your healthcare business with cutting-edge technology solutions. Get personalized insights and
            strategic guidance from our industry experts.
          </Typography>
        </Box>

        <Box
          component={motion.div}
          variants={itemVariants}
          sx={{
            width: { xs: "100%", md: "100%", lg: "100%" },
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: 3, lg: 4 },
            alignItems: "stretch",
          }}
        >
          {/* Contact Form */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              padding: { xs: 4, md: 5 },
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              border: "1px solid #e5e7eb",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "#3b82f6",
                mb: 4,
                textAlign: "center",
                fontSize: { xs: "1.8rem", md: "2.2rem" },
              }}
            >
              Send us a Message
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  gap: 3,
                  mb: 3,
                }}
              >
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      backgroundColor: "#f8fafc",
                      border: "1px solid #e5e7eb",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#f1f5f9",
                        borderColor: "#3b82f6",
                      },
                      "&.Mui-focused": {
                        backgroundColor: "#ffffff",
                        borderColor: "#3b82f6",
                        boxShadow: "0 0 0 3px rgba(59,130,246,0.1)",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      fontWeight: 500,
                      color: "#6b7280",
                    },
                  }}
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <TextField
                  label="Your Email"
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      backgroundColor: "#f8fafc",
                      border: "1px solid #e5e7eb",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#f1f5f9",
                        borderColor: "#3b82f6",
                      },
                      "&.Mui-focused": {
                        backgroundColor: "#ffffff",
                        borderColor: "#3b82f6",
                        boxShadow: "0 0 0 3px rgba(59,130,246,0.1)",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      fontWeight: 500,
                      color: "#6b7280",
                    },
                  }}
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Box>

              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <FormControl sx={{ minWidth: 140 }}>
                    <InputLabel sx={{ fontWeight: 500, color: "#6b7280" }}>Country Code</InputLabel>
                    <Select
                      value={formData.countryCode}
                      label="Country Code"
                      onChange={handleCountryCodeChange}
                      sx={{
                        borderRadius: "8px",
                        backgroundColor: "#f8fafc",
                        border: "1px solid #e5e7eb",
                        "&:hover": {
                          backgroundColor: "#f1f5f9",
                        },
                        "&.Mui-focused": {
                          backgroundColor: "#ffffff",
                        },
                      }}
                    >
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
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        backgroundColor: "#f8fafc",
                        border: "1px solid #e5e7eb",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "#f1f5f9",
                          borderColor: "#3b82f6",
                        },
                        "&.Mui-focused": {
                          backgroundColor: "#ffffff",
                          borderColor: "#3b82f6",
                          boxShadow: "0 0 0 3px rgba(59,130,246,0.1)",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        fontWeight: 500,
                        color: "#6b7280",
                      },
                    }}
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </Box>
              </Box>

              <TextField
                label="Your Message"
                variant="outlined"
                fullWidth
                multiline
                rows={5}
                required
                sx={{
                  mb: 4,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e5e7eb",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#f1f5f9",
                      borderColor: "#3b82f6",
                    },
                    "&.Mui-focused": {
                      backgroundColor: "#ffffff",
                      borderColor: "#3b82f6",
                      boxShadow: "0 0 0 3px rgba(59,130,246,0.1)",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    fontWeight: 500,
                    color: "#6b7280",
                  },
                }}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isSubmitting}
                endIcon={isSubmitting ? null : <SendIcon />}
                sx={{
                  backgroundColor: "#3b82f6",
                  borderRadius: "8px",
                  py: 2,
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  textTransform: "none",
                  boxShadow: "0 4px 12px rgba(59,130,246,0.3)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#2563eb",
                    boxShadow: "0 8px 20px rgba(59,130,246,0.4)",
                    transform: "translateY(-2px)",
                  },
                  "&:disabled": {
                    backgroundColor: "#e5e7eb",
                    color: "#9ca3af",
                    transform: "none",
                  },
                }}
              >
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </Button>
            </Box>
          </Box>

          {/* Contact Information */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Box
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: { xs: 4, md: 5 },
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                border: "1px solid #e5e7eb",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: "#3b82f6",
                  mb: 4,
                  textAlign: "center",
                  fontSize: { xs: "1.8rem", md: "2.2rem" },
                }}
              >
                Get in Touch
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}>
                  <Box
                    sx={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "12px",
                      backgroundColor: "#3b82f6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      boxShadow: "0 4px 12px rgba(59,130,246,0.3)",
                    }}
                  >
                    <LocationOnOutlinedIcon sx={{ fontSize: "1.8rem" }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#1f2937", mb: 1 }}>
                      Our Location
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#6b7280", lineHeight: 1.6 }}>
                      Realogics Star Estate YZ Building, 3rd Floor, Algouz 3, Dubai, UAE
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Social Media */}
            <Box
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: { xs: 4, md: 5 },
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                border: "1px solid #e5e7eb",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#3b82f6",
                  mb: 3,
                  textAlign: "center",
                }}
              >
                Connect With Us
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/company/kayan-healthcare-technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: "70px",
                    height: "70px",
                    backgroundColor: "#0077b5",
                    color: "white",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,119,181,0.3)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#005885",
                      transform: "translateY(-2px) scale(1.05)",
                      boxShadow: "0 8px 20px rgba(0,119,181,0.4)",
                    },
                  }}
                >
                  <LinkedInIcon sx={{ fontSize: "2rem" }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Success/Error Messages */}
      <Snackbar
        open={!!successMessage}
        autoHideDuration={6000}
        onClose={() => setSuccessMessage("")}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSuccessMessage("")}
          severity="success"
          icon={<CheckCircleIcon />}
          sx={{ width: "100%" }}
        >
          {successMessage}
        </Alert>
      </Snackbar>

      <Snackbar
        open={!!errorMessage}
        autoHideDuration={6000}
        onClose={() => setErrorMessage("")}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={() => setErrorMessage("")} severity="error" sx={{ width: "100%" }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default ContactUs
