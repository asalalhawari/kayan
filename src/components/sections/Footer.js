"use client"

import { LocationOn } from "@mui/icons-material"
import { Box, Container, Divider, Grid, Link, Typography } from "@mui/material"
import { motion } from "framer-motion"
import kayanlogo from "../../img/kayanlogo55.png"

const Footer = () => {
  const navigateToHome = () => {
    window.location.href = "/"
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const footerLinks = {
    company: [
      { name: "About Us", action: () => scrollToSection("about") },
      { name: "Our Story", action: () => scrollToSection("our-story") },
      { name: "Our Team", action: () => scrollToSection("our-experts") },
    ],
    services: [{ name: "E-Claim Solutions", action: () => scrollToSection("solution") }],
    resources: [{ name: "Support Center", action: () => scrollToSection("contactUs") }],
    contact: [
      { name: "Realogics Star Estate YZ Building, 3rd Floor, Algouz 3, Dubai, UAE", icon: LocationOn, action: () => {} },
    ],
  }

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      sx={{
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)",
        color: "#1f2937",
        pt: 10,
        pb: 6,
        position: "relative",
        borderTop: "1px solid #e5e7eb",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent 0%, #3b82f6 50%, transparent 100%)",
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: { xs: "center", md: "left" }, mb: 3 }}>
              <Box
                component="img"
                src={kayanlogo}
                alt="Kayan Healthcare Logo"
                onClick={navigateToHome}
                sx={{
                  width: { xs: "120px", sm: "150px" },
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": { transform: "scale(1.05)", filter: "drop-shadow(0 4px 10px rgba(59, 130, 246, 0.3))" },
                }}
              />
            </Box>
            <Typography sx={{ color: "#6b7280", lineHeight: 1.7, fontSize: { xs: "0.9rem", md: "1rem" }, mb: 2 }}>
              Partner with Kayan Healthcare technologies to streamline operations, enhance compliance, and drive efficiency through AI powered automation.
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                color: "#3b82f6",
                fontStyle: "italic",
                textAlign: { xs: "center", md: "left" },
                backgroundColor: "rgba(59, 130, 246, 0.05)",
                padding: "8px 16px",
                borderRadius: "8px",
                border: "1px solid rgba(59, 130, 246, 0.1)",
                fontSize: { xs: "0.85rem", md: "0.95rem" },
              }}
            >
              Deep Belief, Strong Commitment, Firmly Work
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              {Object.keys(footerLinks).map((section, idx) => (
                <Grid item xs={6} sm={3} key={idx}>
                  <Typography sx={{ fontWeight: 600, mb: 2, color: "#1f2937" }}>{section.charAt(0).toUpperCase() + section.slice(1)}</Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    {footerLinks[section].map((link, i) =>
                      section === "contact" ? (
                        <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1, color: "#6b7280", fontSize: "0.9rem" }}>
                          <link.icon sx={{ color: "#3b82f6", fontSize: "1rem" }} />
                          <Typography component="span" sx={{ "&:hover": { color: "#3b82f6" }, transition: "color 0.3s" }}>
                            {link.name}
                          </Typography>
                        </Box>
                      ) : (
                        <Link
                          key={i}
                          component="button"
                          onClick={link.action}
                          sx={{
                            color: "#6b7280",
                            textDecoration: "none",
                            textAlign: "left",
                            fontSize: "0.85rem",
                            "&:hover": { color: "#3b82f6", textDecoration: "underline" },
                            transition: "color 0.3s ease",
                          }}
                        >
                          {link.name}
                        </Link>
                      )
                    )}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, borderColor: "#e5e7eb" }} />

        {/* Bottom Section */}
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography sx={{ color: "#9ca3af", fontSize: "0.85rem" }}>© 2025 Kayan Healthcare. All rights reserved.</Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
