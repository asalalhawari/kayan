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
    if (element) element.scrollIntoView({ behavior: "smooth" })
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
        backgroundColor: "#1b2a4e",
        color: "#ffffff",
        py: { xs: 4, md: 6 }, // قلل padding عمودي لتصغير حجم الفوتر
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start">
          {/* Logo and Description */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box
                component="img"
                src={kayanlogo}
                alt="Kayan Healthcare Logo"
                onClick={navigateToHome}
                sx={{
                  width: { xs: "100px", md: "100px" },
                  cursor: "pointer",
                }}
              />
            </Box>
            <Typography sx={{ color: "#d1d5db", fontSize: { xs: "0.9rem", md: "1rem" }, mb: 2 }}>
              Partner with Kayan Healthcare technologies to streamline operations, enhance compliance, and drive efficiency through AI powered automation.
            </Typography>
          </Grid>

          {/* Quick Links */}
          {Object.keys(footerLinks).map((section, idx) => (
            section !== "contact" && (
              <Grid item xs={6} md={3} key={idx}>
                <Typography sx={{ fontWeight: 700, mb: 1.5, color: "#ffffff", fontSize: { xs: "1rem", md: "1.05rem" } }}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {footerLinks[section].map((link, i) => (
                    <Link
                      key={i}
                      component="button"
                      onClick={link.action}
                      sx={{
                        color: "#d1d5db",
                        textDecoration: "none",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        textAlign: 'left',
                        "&:hover": { color: "#facc15", textDecoration: "underline" },
                        transition: "color 0.3s ease",
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Box>
              </Grid>
            )
          ))}
        </Grid>

        {/* Contact Icon Row */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 3, flexWrap: 'wrap', gap: 2 }}>
          {footerLinks.contact.map((link, i) => (
            <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  backgroundColor: '#2f4b7a',
                  borderRadius: '50%',
                  width: '45px',
                  height: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.3s',
                  '&:hover': { backgroundColor: '#3b5585' }
                }}
              >
                {link.icon && <link.icon sx={{ color: '#facc15', fontSize: '1.4rem' }} />}
              </Box>
              <Typography sx={{ color: '#d1d5db', fontSize: '0.95rem' }}>{link.name}</Typography>
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: 3, borderColor: "#3b82f6" }} />

        {/* Bottom Section */}
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ color: "#d1d5db", fontSize: { xs: "0.85rem", md: "0.95rem" } }}>
            © 2025 Kayan Healthcare. All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
