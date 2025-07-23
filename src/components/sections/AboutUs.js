
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import React from "react";

const AboutUs = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:900px)');
  const controls = useAnimation();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (isVisible) {
      controls.start('visible');
    }
  }, [isVisible, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Box
      id="about"
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      sx={{
        width: "100%",
        minHeight: isSmallScreen ? 'auto' : isMediumScreen ? '80vh' : '100vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: isSmallScreen ? '20px' : isMediumScreen ? '30px' : '40px',
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
          background: "radial-gradient(circle at 20% 80%, rgba(32, 145, 249, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(21, 101, 192, 0.1) 0%, transparent 50%)",
          pointerEvents: "none"
        }
      }}
    >
      <Box
        component={motion.div}
        variants={itemVariants}
        sx={{
          width: isSmallScreen ? "100%" : isMediumScreen ? "90%" : "80%",
          minHeight: isSmallScreen ? 'auto' : isMediumScreen ? '200px' : '40%',
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          borderRadius: "24px",
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: "center",
          padding: isSmallScreen ? "20px" : isMediumScreen ? "30px" : "40px",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, #2091F9, #1565C0, #2091F9)",
            backgroundSize: "200% 100%",
            animation: "shimmer 3s ease-in-out infinite"
          }
        }}
      >
        {/* Left Section - Text Content */}
        <Box
          component={motion.div}
          variants={itemVariants}
          sx={{
            width: isSmallScreen ? "100%" : isMediumScreen ? "60%" : "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: isSmallScreen ? "10px" : isMediumScreen ? "20px" : "30px",
            color: "#000",
            gap: isSmallScreen ? "8px" : "10px",
            position: "relative",
            zIndex: 2
          }}
        >
          <Typography
            component={motion.div}
            variants={itemVariants}
            variant="h6"
            sx={{
              fontWeight: '600',
              background: "linear-gradient(135deg, #2091F9, #1565C0)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: 'Inter, sans-serif',
              textTransform: 'uppercase',
              fontSize: isSmallScreen ? '0.9rem' : isMediumScreen ? '1rem' : '1.2rem',
              marginBottom: isSmallScreen ? "5px" : "8px",
              letterSpacing: "2px"
            }}
          >
            About Us
          </Typography>
          <Typography
            component={motion.div}
            variants={itemVariants}
            variant="h4"
            sx={{
              fontWeight: "800",
              background: "linear-gradient(135deg, #2091F9, #1565C0)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "Inter, sans-serif",
              fontSize: isSmallScreen ? '1.8rem' : isMediumScreen ? '2.2rem' : '2.8rem',
              marginBottom: isSmallScreen ? "15px" : isMediumScreen ? "20px" : "30px",
              lineHeight: 1.2,
              textShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}
          >
            Revolutionizing Healthcare Through Our Smart Solutions
          </Typography>
          <Typography
            component={motion.div}
            variants={itemVariants}
            variant="body1"
            sx={{
              fontWeight: "400",
              color: "#4A5568",
              fontFamily: "Inter, sans-serif",
              fontSize: isSmallScreen ? '0.9rem' : isMediumScreen ? '1rem' : '1.1rem',
              lineHeight: "1.7",
              maxWidth: isSmallScreen ? "100%" : isMediumScreen ? "90%" : "80%",
              marginBottom: isSmallScreen ? "20px" : isMediumScreen ? "25px" : "35px",
            }}
          >
            KAYAN Healthcare Technologies is a pioneering force in the healthcare technology sector, 
            dedicated to revolutionizing claims validation and administrative workflows.
            Established in 2019, our company leverages advanced algorithms and AI-powered data-driven insights to deliver innovative solutions that empower payers, 
            providers, and regulators across the Gulf Cooperation Council (GCC).
          </Typography>
          <Button
            component={motion.div}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variant="contained"
            sx={{
              fontSize: isSmallScreen ? "0.9rem" : "1rem",
              fontWeight: "600",
              background: "linear-gradient(135deg, #2091F9, #1565C0)",
              color: "#FFFFFF",
              padding: "16px 28px",
              textTransform: "capitalize",
              borderRadius: "50px",
              boxShadow: "0 8px 25px rgba(32, 145, 249, 0.3)",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "linear-gradient(135deg, #1565C0, #2091F9)",
                boxShadow: "0 12px 35px rgba(32, 145, 249, 0.4)",
                transform: "translateY(-2px)"
              },
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontFamily: "Inter, sans-serif"
            }}
            onClick={() => {}}
          >
            Request a Demo
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "50%",
                width: "28px",
                height: "28px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "rotate(45deg)"
                }
              }}
            >
              <ArrowForwardIcon sx={{ color: "#2091F9", fontSize: "18px" }} />
            </Box>
          </Button>
        </Box>

        {/* Right Section - Modern Graphic */}
        <Box
          component={motion.div}
          variants={itemVariants}
          sx={{
            width: isSmallScreen ? "100%" : isMediumScreen ? "40%" : "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 1
          }}
        >
          <Box
            component={motion.div}
            variants={floatingAnimation}
            animate="animate"
            sx={{
              position: "relative",
              width: isSmallScreen ? "200px" : isMediumScreen ? "250px" : "300px",
              height: isSmallScreen ? "200px" : isMediumScreen ? "250px" : "300px",
            }}
          >
            {/* Main Circle */}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, #2091F9, #1565C0)",
                borderRadius: "50%",
                position: "relative",
                boxShadow: "0 20px 40px rgba(32, 145, 249, 0.3)",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  right: "10px",
                  bottom: "10px",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))",
                  borderRadius: "50%",
                  backdropFilter: "blur(10px)"
                }
              }}
            />
            
            {/* Floating Elements */}
            <Box
              component={motion.div}
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80%",
                height: "80%",
                borderRadius: "50%",
                border: "2px dashed rgba(255,255,255,0.3)",
                animation: "rotate 20s linear infinite"
              }}
            />
            
            <Box
              component={motion.div}
              animate={{
                y: [-5, 5, -5],
                x: [-3, 3, -3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              sx={{
                position: "absolute",
                top: "20%",
                left: "20%",
                width: "12px",
                height: "12px",
                background: "#FFFFFF",
                borderRadius: "50%",
                boxShadow: "0 0 20px rgba(255,255,255,0.8)"
              }}
            />
            
            <Box
              component={motion.div}
              animate={{
                y: [5, -5, 5],
                x: [3, -3, 3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              sx={{
                position: "absolute",
                top: "70%",
                right: "20%",
                width: "8px",
                height: "8px",
                background: "#FFFFFF",
                borderRadius: "50%",
                boxShadow: "0 0 15px rgba(255,255,255,0.6)"
              }}
            />
            
            <Box
              component={motion.div}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              sx={{
                position: "absolute",
                top: "50%",
                right: "10%",
                width: "6px",
                height: "6px",
                background: "#FFFFFF",
                borderRadius: "50%",
                boxShadow: "0 0 10px rgba(255,255,255,0.4)"
              }}
            />
          </Box>
        </Box>
      </Box>
      
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </Box>
  );
};

export default AboutUs;