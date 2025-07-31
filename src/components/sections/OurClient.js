import {
  Box,
  Container,
  Typography,
  useMediaQuery
} from "@mui/material";
import { motion } from "framer-motion";
import clients_map from '../../img/clients_map.png';
import React from "react";

const OurClient = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const scrollToContact = () => {
    const contactSection = document.getElementById('contactUs');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box
      id="our-clients"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 20% 80%, rgba(69, 143, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 212, 170, 0.1) 0%, transparent 50%)",
        }
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 4 }
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Header Section */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: "center", mb: { xs: 2, md: 2 } }}>
              <Typography
                variant={isSmallScreen ? "h4" : "h3"}
                sx={{
                  fontWeight: 800,
                  color: "#1a1a1a",
                  mb: 2,
                  background: "linear-gradient(45deg, #458FF6, #00D4AA)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textTransform: "uppercase",
                  letterSpacing: "2px"
                }}
              >
                Our Trusted Clients
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "16px", md: "18px" },
                  color: "#666",
                  maxWidth: "600px",
                  mx: "auto",
                  lineHeight: 1.6
                }}
              >
                Serving healthcare organizations across the Middle East with innovative solutions
              </Typography>
            </Box>
          </motion.div>


          {/* Interactive Map Section */}
          <motion.div variants={imageVariants}>
            <Box sx={{ textAlign: "center" }}>
              <Box
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                sx={{
                  position: "relative",
                  display: "inline-block",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  background: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  p: 2
                }}
              >
                <Box
                  component="img"
                  src={clients_map}
                  alt="Kayan clients map"
                  sx={{
                    width: { xs: '100%', sm: '800px', md: '1000px' },
                    height: { xs: 'auto', sm: '400px', md: '500px' },
                    objectFit: "contain",
                    filter: 'contrast(1.1) saturate(1.2)',
                    transition: "all 0.3s ease",
                    "&:hover": {
                      filter: 'contrast(1.2) saturate(1.3)'
                    }
                  }}
                />
              </Box>
            </Box>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: "center", mt: 6 }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "16px", md: "18px" },
                  color: "#666",
                  mb: 3,
                  maxWidth: "600px",
                  mx: "auto"
                }}
              >
                Join our growing network of healthcare innovators
              </Typography>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Box
                  component="button"
                  onClick={scrollToContact}
                  sx={{
                    background: "linear-gradient(45deg, #458FF6, #00D4AA)",
                    color: "white",
                    border: "none",
                    borderRadius: "50px",
                    padding: "12px 32px",
                    fontSize: "16px",
                    fontWeight: 600,
                    cursor: "pointer",
                    boxShadow: "0 8px 25px rgba(69, 143, 246, 0.3)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 12px 35px rgba(69, 143, 246, 0.4)",
                      transform: "translateY(-2px)"
                    }
                  }}
                >
                  Become a Client
                </Box>
              </motion.div>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default OurClient;
