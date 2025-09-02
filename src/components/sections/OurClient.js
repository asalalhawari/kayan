import {
  Box,
  Container,
  Typography,
  useMediaQuery
} from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import GCCPresenceMap from "./GCCPresenceMap";

const OurClient = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

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
                  maxWidth: "800px",
                  mx: "auto",
                  lineHeight: 1.6
                }}
              >
                Serving healthcare organizations across the Middle East with innovative solutions
              </Typography>
            </Box>
          </motion.div>

          <GCCPresenceMap />

        </motion.div>
      </Container>
    </Box>
  );
};

export default OurClient;
