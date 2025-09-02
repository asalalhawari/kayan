"use client"

import CloseIcon from "@mui/icons-material/Close"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import MenuIcon from "@mui/icons-material/Menu"
import PhoneIcon from "@mui/icons-material/Phone"
import { Box, Container, Drawer, List, ListItem, ListItemText, useTheme, Menu, MenuItem, Fade } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import { motion } from "framer-motion"
import React from "react"
import kayanlogo from "../../img/kayanlogo55.png"

const Navbar = () => {
  const [activeSection, setActiveSection] = React.useState("home")
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [solutionsAnchor, setSolutionsAnchor] = React.useState(null)

  const theme = useTheme()

  React.useEffect(() => {
    const handleScroll = () => {
      handleSectionChange()
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSectionChange = () => {
    const sections = [
      "home",
      "benefits",
      "solution",
      "our-technology",
      "provider-solutions",
      "payer-solutions",
      "ContactUs",
      "demo",
      "how-it-works",
      "our-benefits",
      "about",
      "our-story",
      "our-experts",
      "our-clients",
      "gcc-presence",
      "our-feeds",
    ]
    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(section)
        }
      }
    })
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(id)
      setMobileOpen(false)
    }
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "our-experts", label: "Our Team" },
    { id: "benefits", label: "Benefits" },
    { id: "gcc-presence", label: "Our Presence" },
  ]

  const solutionsItems = [
    { id: "petra", label: "PETRA" },
    { id: "QUDRA", label: "QUDRA" },
     { id: "PHARMACEUTICAL", label: "PHARMACEUTICAL" },
  ]

  const handleSolutionsClick = (event) => {
    setSolutionsAnchor(event.currentTarget)
  }

  const handleSolutionsClose = () => {
    setSolutionsAnchor(null)
  }

  const handleSolutionSelect = (id) => {
    scrollToSection(id)
    handleSolutionsClose()
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box
      sx={{
        width: 280,
        pt: 2,
        height: "100vh",
        background: `linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%)`,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 2, mb: 2 }}>
        <Box
          component="img"
          src={kayanlogo}
          alt="Kayan Healthcare Logo"
          sx={{
            width: "120px",
            height: "50px",
            filter: "brightness(0) invert(1)",
          }}
        />
        <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
              },
              backgroundColor: activeSection === item.id ? "rgba(255,255,255,0.15)" : "transparent",
              borderRadius: "8px",
              mx: 1,
              mb: 1,
            }}
          >
            <ListItemText
              primary={item.label}
              sx={{
                "& .MuiListItemText-primary": {
                  fontWeight: activeSection === item.id ? 600 : 400,
                  color: "white",
                  fontSize: "1rem",
                },
              }}
            />
          </ListItem>
        ))}
        <ListItem sx={{ px: 2, py: 1 }}>
          <ListItemText
            primary="Solutions"
            sx={{
              "& .MuiListItemText-primary": {
                fontWeight: 600,
                color: "#3b82f6",
                fontSize: "0.9rem",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              },
            }}
          />
        </ListItem>
        {solutionsItems.map((item) => (
          <ListItem
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            sx={{
              cursor: "pointer",
              pl: 4,
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
              },
              backgroundColor: activeSection === item.id ? "rgba(255,255,255,0.15)" : "transparent",
              borderRadius: "8px",
              mx: 1,
              mb: 0.5,
            }}
          >
            <ListItemText
              primary={item.label}
              sx={{
                "& .MuiListItemText-primary": {
                  fontWeight: activeSection === item.id ? 600 : 400,
                  color: activeSection === item.id ? "#3b82f6" : "rgba(255,255,255,0.8)",
                  fontSize: "0.9rem",
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar
        position="fixed"
        component={motion.div}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        sx={{
          width: "100%",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          background: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(20px)",
          zIndex: 1200,
          borderBottom: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 } }}>
          <Toolbar
            sx={{
              justifyContent: "space-between",
              backgroundColor: "transparent",
              py: 1,
              minHeight: { xs: "70px", md: "80px" },
            }}
          >
            {/* Logo + Tagline */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, pl: 0 }}>
              <Box
                component="img"
                src={kayanlogo}
                alt="Kayan Healthcare Logo"
                sx={{
                  height: { xs: "40px", sm: "48px" },
                  width: "auto",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                  display: "block",
                }}
                onClick={() => scrollToSection("home")}
              />
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                  ml: 1,
                }}
              >
                <span
                  style={{
                    color: "#1f2937",
                    fontWeight: 700,
                    letterSpacing: 0.5,
                    fontSize: "1.2rem",
                    fontFamily: "Inter, sans-serif",
                    verticalAlign: "middle",
                  }}
                >
                  Kayan Healthcare Technologies
                </span>
              </Box>
            </Box>

            {/* Desktop Navigation and Contact Button - Right Aligned */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5 }}>
              {navItems.map((item) => (
                <Box
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: activeSection === item.id ? "#3b82f6" : "#4b5563",
                    fontSize: "15px",
                    fontWeight: activeSection === item.id ? 600 : 500,
                    cursor: "pointer",
                    padding: "12px 20px",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                    fontFamily: "Inter, sans-serif",
                    position: "relative",
                    "&:hover": {
                      color: "#3b82f6",
                      backgroundColor: "rgba(59, 130, 246, 0.08)",
                      transform: "translateY(-1px)",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "8px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: activeSection === item.id ? "60%" : "0%",
                      height: "2px",
                      backgroundColor: "#3b82f6",
                      transition: "all 0.3s ease",
                      borderRadius: "1px",
                    },
                    "&:hover::after": {
                      width: "60%",
                    },
                  }}
                >
                  {item.label}
                </Box>
              ))}

              <Box
                onClick={handleSolutionsClick}
                sx={{
                  color: solutionsAnchor ? "#3b82f6" : "#4b5563",
                  fontSize: "15px",
                  fontWeight: 500,
                  cursor: "pointer",
                  padding: "12px 20px",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  fontFamily: "Inter, sans-serif",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  "&:hover": {
                    color: "#3b82f6",
                    backgroundColor: "rgba(59, 130, 246, 0.08)",
                    transform: "translateY(-1px)",
                  },
                }}
              >
                Solutions
                <ExpandMoreIcon
                  sx={{
                    fontSize: "18px",
                    transform: solutionsAnchor ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </Box>

              {/* Spacer between nav items and Contact Us button */}
              <Box sx={{ width: "24px" }} />

              {/* Contact Button */}
              <Button
                variant="contained"
                startIcon={<PhoneIcon />}
                sx={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                  color: "#fff",
                  fontWeight: 600,
                  borderRadius: "30px",
                  px: 4,
                  py: 1.5,
                  boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)",
                  fontFamily: "Inter, sans-serif",
                  "&:hover": {
                    background: "linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 30px rgba(59, 130, 246, 0.4)",
                  },
                  transition: "all 0.3s ease",
                }}
                onClick={() => scrollToSection("ContactUs")}
              >
                Contact Us
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  color: "#4b5563",
                  backgroundColor: "rgba(59, 130, 246, 0.08)",
                  borderRadius: "12px",
                  padding: "12px",
                  "&:hover": {
                    backgroundColor: "rgba(59, 130, 246, 0.15)",
                    transform: "scale(1.05)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Menu
        anchorEl={solutionsAnchor}
        open={Boolean(solutionsAnchor)}
        onClose={handleSolutionsClose}
        TransitionComponent={Fade}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "16px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            border: "1px solid rgba(0,0,0,0.05)",
            mt: 1,
            minWidth: "220px",
            background: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
          },
        }}
      >
        {solutionsItems.map((item) => (
          <MenuItem
            key={item.id}
            onClick={() => handleSolutionSelect(item.id)}
            sx={{
              py: 1.5,
              px: 3,
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              color: "#3b82f6",
              "&:hover": {
                backgroundColor: "rgba(59, 130, 246, 0.08)",
                color: "#1d4ed8",
              },
              transition: "all 0.2s ease",
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            background: `linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%)`,
            border: "none",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Toolbar spacer */}
      <Toolbar sx={{ minHeight: { xs: "70px", md: "80px" } }} />
    </>
  )
}

export default Navbar
