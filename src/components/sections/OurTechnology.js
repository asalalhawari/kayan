import { Box, Card, CardContent, Typography, useMediaQuery } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import docker from '../../img/docker.png';
import node from '../../img/nodejsLogo.png';
import postgres from '../../img/postgres.png';
import react from '../../img/reactLogo.png';
import tech from '../../img/technology.jpeg'; 
import React from "react";

const technologies = [
  {
    name: "Node.js",
    logo: node,
    color: "#339933"
  },
  {
    name: "React.js",
    logo: react,
    color: "#61DAFB"
  },
  {
    name: "Docker",
    logo: docker,
    color: "#2496ED"
  },
  {
    name: "PostgreSQL",
    logo: postgres,
    color: "#336791"
  },
];

const OurTechnology = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:900px)');
  const isLargeScreen = useMediaQuery('(min-width:1200px)');
  const controls = useAnimation();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('our-technology');
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
        staggerChildren: 0.2
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Box
      id="our-technology"
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      sx={{
        width: "100%",
        minHeight: isSmallScreen ? "auto" : "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
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
          background: "radial-gradient(circle at 30% 70%, rgba(32, 145, 249, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(21, 101, 192, 0.1) 0%, transparent 50%)",
          pointerEvents: "none"
        }
      }}
    >
      {/* Header Section */}
      <Box
        component={motion.div}
        variants={itemVariants}
        sx={{
          width: "100%",
          height: isSmallScreen ? "150px" : isMediumScreen ? "250px" : "400px",
          background: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url(${tech})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: isSmallScreen ? "20px 0" : isMediumScreen ? "30px 0" : "50px 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50px",
            background: "linear-gradient(to bottom, transparent, rgba(245, 247, 250, 1))"
          }
        }}
      >
        <Typography
          component={motion.div}
          variants={itemVariants}
          variant="h3"
          sx={{
            fontWeight: "800",
            background: "linear-gradient(135deg, #2091F9, #1565C0)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "Inter, sans-serif",
            textTransform: "uppercase",
            fontSize: isSmallScreen ? "2rem" : isMediumScreen ? "2.5rem" : isLargeScreen ? "3.5rem" : "3rem",
            textAlign: "center",
            lineHeight: 1.2,
            letterSpacing: "2px",
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
            position: "relative",
            zIndex: 2
          }}
        >
          Our Technology Stack
        </Typography>
        <Typography
          component={motion.div}
          variants={itemVariants}
          variant="h6"
          sx={{
            fontWeight: "400",
            color: "#4A5568",
            fontFamily: "Inter, sans-serif",
            fontSize: isSmallScreen ? "1rem" : isMediumScreen ? "1.2rem" : "1.5rem",
            textAlign: "center",
            marginTop: "10px",
            maxWidth: "600px",
            lineHeight: 1.5
          }}
        >
          Cutting-edge technologies powering our healthcare solutions
        </Typography>
      </Box>

      {/* Cards Container */}
      <Box
        component={motion.div}
        variants={itemVariants}
        sx={{
          width: isSmallScreen ? "95%" : isMediumScreen ? "90%" : isLargeScreen ? "80%" : "85%",
          maxWidth: "1400px",
          marginTop: isSmallScreen ? "-20px" : isMediumScreen ? "-50px" : "-80px",
          position: "relative",
          zIndex: 3,
          padding: isSmallScreen ? "20px 0 40px" : "40px 0 60px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isSmallScreen ? "1fr" : isMediumScreen ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            gap: isSmallScreen ? "30px" : isMediumScreen ? "25px" : "35px",
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          {technologies.map((tech, index) => (
            <Box
              key={index}
              component={motion.div}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
              }}
            >
              {/* Logo Container */}
              <Box
                component={motion.div}
                variants={floatingAnimation}
                animate="animate"
                sx={{
                  width: isSmallScreen ? "100px" : isMediumScreen ? "90px" : "120px",
                  height: isSmallScreen ? "100px" : isMediumScreen ? "90px" : "120px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))",
                  backdropFilter: "blur(20px)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  zIndex: 2,
                  cursor: "pointer",
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2)",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  marginBottom: isSmallScreen ? "-30px" : isMediumScreen ? "-35px" : "-40px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: `0 20px 40px rgba(${tech.color}, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.4)`,
                    transform: "translateY(-5px)"
                  }
                }}
              >
                <Box
                  component="img"
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  sx={{
                    width: "70%",
                    height: "70%",
                    objectFit: "contain",
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                    transition: "all 0.3s ease",
                  }}
                />
              </Box>

              {/* Card */}
              <Card
                component={motion.div}
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.3 }
                }}
                sx={{
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2)",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: isSmallScreen ? "40px 20px 25px" : isMediumScreen ? "45px 25px 30px" : "50px 30px 35px",
                  transition: "all 0.3s ease",
                  width: "100%",
                  height: "100%",
                  minHeight: isSmallScreen ? "180px" : isMediumScreen ? "200px" : "220px",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, ${tech.color}, ${tech.color}88)`,
                    opacity: 0,
                    transition: "opacity 0.3s ease"
                  },
                  "&:hover::before": {
                    opacity: 1
                  }
                }}
              >
                <CardContent sx={{ 
                  padding: 0, 
                  width: "100%", 
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%"
                }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "700",
                      color: "#1A202C",
                      fontFamily: "Inter, sans-serif",
                      fontSize: isSmallScreen ? "1.1rem" : isMediumScreen ? "1.2rem" : "1.4rem",
                      textAlign: "center",
                      marginTop: isSmallScreen ? "25px" : isMediumScreen ? "30px" : "35px",
                      marginBottom: "10px",
                      lineHeight: 1.3
                    }}
                  >
                    {tech.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "400",
                      color: "#4A5568",
                      fontFamily: "Inter, sans-serif",
                      fontSize: isSmallScreen ? "0.85rem" : isMediumScreen ? "0.9rem" : "1rem",
                      textAlign: "center",
                      lineHeight: 1.5,
                      maxWidth: "200px"
                    }}
                  >
                    {tech.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        component={motion.div}
        variants={itemVariants}
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "100px",
          background: "linear-gradient(to top, rgba(32, 145, 249, 0.1), transparent)",
          pointerEvents: "none"
        }}
      />
    </Box>
  );
};

export default OurTechnology;