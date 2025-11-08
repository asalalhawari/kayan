"use client"

import CloseIcon from "@mui/icons-material/Close"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import MenuIcon from "@mui/icons-material/Menu"
import PhoneIcon from "@mui/icons-material/Phone"
 import { Box, Container, Drawer, List, ListItem, ListItemText, Menu, MenuItem, Fade } from "@mui/material"
 import { useTheme } from "@mui/material/styles";
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
  const [aboutAnchor, setAboutAnchor] = React.useState(null)


  React.useEffect(() => {
    const handleScroll = () => handleSectionChange()
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
      "our-mission",
      "our-vision",
      "our-feeds",
      "our-team",
      "gcc-presence",
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
      setAboutAnchor(null)
    } else {
      console.warn(`Section with id "${id}" not found in the DOM`)
    }
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "solution", label: "Solutions" },
    { id: "benefits", label: "Benefits" },
    { id: "our-presence", label: "Our Presence" },
  ]

  const aboutItems = [
    { id: "our-story", label: "Mission & Vision" },
    { id: "our-feeds", label: "Our Feeds" },
    { id: "our-experts", label: "Our Team" },
  ]

  const handleAboutTextClick = () => scrollToSection("about")
  const handleAboutArrowClick = (event) => setAboutAnchor(event.currentTarget)
  const handleAboutClose = () => setAboutAnchor(null)
  const handleAboutSelect = (id) => {
    scrollToSection(id)
    handleAboutClose()
  }
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
    setAboutAnchor(null)
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
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              backgroundColor: activeSection === item.id && item.id !== "about" ? "rgba(255,255,255,0.15)" : "transparent", // لا لون كحلي عن About
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
                  color: "#ffffff",
                  fontSize: "1rem",
                },
              }}
            />
            {item.id === "about" && (
              <IconButton
                onClick={(e) => {
                  e.stopPropagation()
                  setAboutAnchor(aboutAnchor ? null : e.currentTarget)
                }}
                sx={{ color: "#3b82f6" }}
              >
                <ExpandMoreIcon
                  sx={{
                    fontSize: "18px",
                    transform: aboutAnchor ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </IconButton>
            )}
          </ListItem>
        ))}
        {aboutAnchor && (
          <>
            {aboutItems.map((item) => (
              <ListItem
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  cursor: "pointer",
                  pl: 4,
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
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
          </>
        )}
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
          width: "auto",
          borderRadius: "0px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          top: "0px",
          left: "0px",
          right: "0px",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          zIndex: 1200,
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          background: "rgba(255, 255, 255, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 } }}>
          <Toolbar
            sx={{
              justifyContent: "space-between",
              backgroundColor: "transparent",
              py: 0.5,
              minHeight: { xs: "60px", md: "70px" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, pl: 0, ml: { xs: "-10px", md: "-20px" } }}>
              <Box
                component="img"
                src={kayanlogo}
                alt="Kayan Healthcare Logo"
                sx={{
                  width: { xs: "130px", md: "170px" },
                  height: { xs: "35px", md: "60px" },
                  objectFit: "contain",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.05)" },
                  display: "block",
                }}
                onClick={() => scrollToSection("home")}
              />
              <Box sx={{ display: { xs: "none", sm: "block" }, ml: 0.5 }}>
                <span
                  style={{
                    color: "#ffffff",
                    fontWeight: 700,
                    letterSpacing: 0.5,
                    fontSize: "1.1rem",
                    fontFamily: "Poppins",
                    verticalAlign: "middle",
                  }}
                >
                  Kayan Healthcare Technologies
                </span>
              </Box>
            </Box>

            {/* Nav Items */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2, pr: 1, ml: 3 }}>
              {navItems.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.4,
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    padding: "10px 16px",
                    borderRadius: "10px",
                    transition: "all 0.3s ease",
                    fontFamily: "Inter, sans-serif",
                    position: "relative",
                    "&:hover": {
                      color: "#ffffff",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      transform: "translateY(-1px)",
                      textShadow: "0 0 8px rgba(255,255,255,0.6)",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "6px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: activeSection === item.id && item.id !== "about" ? "50%" : "0%",
                      height: "2px",
                      backgroundColor: "#ffffff",
                      transition: "all 0.3s ease",
                      borderRadius: "1px",
                    },
                    "&:hover::after": {
                      width: "50%",
                    },
                  }}
                >
                  <Box
                    onClick={() =>
                      item.id === "about" ? handleAboutTextClick() : scrollToSection(item.id)
                    }
                    sx={{ padding: "0 3px" }}
                  >
                    {item.label}
                  </Box>
                  {item.id === "about" && (
                    <IconButton
                      onClick={handleAboutArrowClick}
                      sx={{ padding: 0, color: "#ffffff" }}
                    >
                      <ExpandMoreIcon
                        sx={{
                          fontSize: "18px",
                          transform: aboutAnchor ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </IconButton>
                  )}
                </Box>
              ))}

              <Button
                variant="contained"
                startIcon={<PhoneIcon />}
                sx={{
                  ml: 1,
                  background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                  color: "#fff",
                  fontWeight: 600,
                  borderRadius: "25px",
                  px: 3,
                  py: 1.2,
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

            {/* Mobile menu */}
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

      {/* About dropdown menu */}
      <Menu
        anchorEl={aboutAnchor}
        open={Boolean(aboutAnchor)}
        onClose={handleAboutClose}
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
        {aboutItems.map((item) => (
          <MenuItem
            key={item.id}
            onClick={() => handleAboutSelect(item.id)}
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
            background: "linear-gradient(135deg, #020817 0%, #041E2F 50%, #000000 100%)",
            border: "none",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}

export default Navbar
