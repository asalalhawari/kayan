
import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const AboutUs = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:900px)');

  return (
    <Box
      id="about"
      sx={{
        width: "100%",
        minHeight: isSmallScreen ? 'auto' : isMediumScreen ? '80vh' : '100vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: isSmallScreen ? '20px' : isMediumScreen ? '30px' : '40px',
        backgroundColor: "#fff",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          width: isSmallScreen ? "100%" : isMediumScreen ? "90%" : "80%",
          minHeight: isSmallScreen ? 'auto' : isMediumScreen ? '200px' : '40%',

          backgroundColor: "#E6F0FA",
          borderRadius: "16px",
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: "center",
          padding: isSmallScreen ? "20px" : isMediumScreen ? "30px" : "40px",
        }}
      >
        {/* Left Section - Text Content */}
        <Box
          sx={{
            width: isSmallScreen ? "100%" : isMediumScreen ? "60%" : "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: isSmallScreen ? "10px" : isMediumScreen ? "20px" : "30px",
            color: "#000",
            gap: isSmallScreen ? "8px" : "10px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: '400',
              color: '#458FF6',
              fontFamily: 'Josefin Sans',
              textTransform: 'uppercase',
              fontSize: isSmallScreen ? '1rem' : isMediumScreen ? '1.2rem' : '1.5rem',
              marginBottom: isSmallScreen ? "5px" : "8px",
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "700",
              color: "#2091F9",
              fontFamily: "Montserrat, sans-serif",
              fontSize: isSmallScreen ? '1.5rem' : isMediumScreen ? '2rem' : '2.5rem',
              marginBottom: isSmallScreen ? "15px" : isMediumScreen ? "20px" : "30px",
              lineHeight: 1.3,
            }}
          >
            Revolutionizing Healthcare Through Our Smart Solutions
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "400",
              color: "#666",
              fontFamily: "Montserrat, sans-serif",
              fontSize: isSmallScreen ? '0.8rem' : isMediumScreen ? '0.9rem' : '1rem',
              lineHeight: "1.6",
              maxWidth: isSmallScreen ? "100%" : isMediumScreen ? "90%" : "80%",
              marginBottom: isSmallScreen ? "15px" : isMediumScreen ? "20px" : "30px",
            }}
          >
            KAYAN Healthcare Technologies is a pioneering force in the healthcare technology sector, 
            dedicated to revolutionizing claims validation and administrative workflows.
            Established in 2019, our company leverages advanced algorithms and AI-powered data-driven insights to deliver innovative solutions that empower payers, 
            providers, and regulators across the Gulf Cooperation Council (GCC).
          </Typography>
          <Button
            variant="contained"
            sx={{
              fontSize: isSmallScreen ? "0.8rem" : "0.9rem",
              fontWeight: "bold",
              background: "linear-gradient(to right, #2091F9, #1565C0)",
              color: "#FFFFFF",
              padding: "12px 20px",
              textTransform: "capitalize",
              borderRadius: "16px",
              "&:hover": {
                background: "linear-gradient(to right, #1565C0, #2091F9)",
              },
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            onClick={() => {}}
          >
            Request a Demo
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "50%",
                width: "24px",
                height: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ArrowForwardIcon sx={{ color: "#2091F9", fontSize: "16px" }} />
            </Box>
          </Button>
        </Box>

        {/* Right Section - Circular Graphic */}
        <Box
          sx={{
            width: isSmallScreen ? "100%" : isMediumScreen ? "40%" : "50%",
            display: "flex",
            justifyContent: "flex-end",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: isSmallScreen ? "80%" : isMediumScreen ? "70%" : "60%",
              aspectRatio: "1/1",
              background: "radial-gradient(circle at center, #2091F9, #1565C0)",
              borderRadius: "50%",
              border: "10px solid #2091F9",
              boxShadow: "inset 0 0 0 5px #FFFFFF",
              position: "relative",
              margin: isSmallScreen ? "20px auto" : "0",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "-20px",
              right: "-20px",
              width: "50%",
              height: "50%",
              background: "linear-gradient(135deg, #2091F9, #1565C0)",
              clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
              zIndex: -1,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;