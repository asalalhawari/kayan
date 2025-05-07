import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import screen from "../../img/imghom.jpg"; // استخدام WebP لجودة أفضل

const Home = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)')

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home">
      <Box
        sx={{
          width: "100%",
          height: isSmallScreen ? "auto" : "100vh",
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to left bottom, #00152E, #2091F9)",
          padding: isSmallScreen ? "35px 10px" : "0px",
          gap: isSmallScreen ? "1rem" : "2rem",
          position: "relative",
          overflowX:"hidden"
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            marginTop: isSmallScreen ? "20px" : "10%",
            flexDirection: "column",
          }}
        >
          <img
            src={screen}
            alt="Screen"
            loading="lazy" // تحميل متأخر
            style={{
              width: "100%",
              maxWidth: isSmallScreen ? "400px" : "668px",
              height:  isSmallScreen ? "auto": "460px",
              borderRadius: "10px",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              imageRendering: "auto", // تحسين العرض
            }}
          />
          <Box
            sx={{
              width: "100%",
              maxWidth: "670px",
              height: "10px",
              backgroundColor: "#D8D8D8",
              borderRadius: "2px",
              marginTop: "0px",
            }}
          />
        </Box>

        {/* Text Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: isSmallScreen ? "center" : "flex-start",
            justifyContent: "center",
            padding: isSmallScreen ? "0px" : "20px",
            marginTop: isSmallScreen ? "10px" : "10%",
            textAlign: isSmallScreen ? "center" : "left",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: isSmallScreen ? "1.2rem" : "36px",
              fontWeight: "700",
              fontFamily: "Montserrat",
              marginTop: "10px",
              color: "#FFFFFF",
              letterSpacing: isSmallScreen ? "-1px" : "0.26px",
              lineHeight: isSmallScreen ? "0.9" : "44.91px",
              textTransform: "capitalize",
            }}
          >
            Your Reliable Partner in E-Claim Solutions
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: isSmallScreen ? "0.8rem" : "20px",
              color: "#FFFFFF",
              marginTop: "10px",
              fontWeight: "500",
              fontFamily: "Montserrat",
              lineHeight: "24.6px",
              letterSpacing: isSmallScreen ? "0px" : "0.26px",
            }}
          >
            Transform the way you handle claims with our simplified <br />
            e-claim multi-layered AI-powered solutions.
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: isSmallScreen ? "0.7rem" : "17px",
              color: "#FFFFFF",
              marginTop: "55px",
              fontWeight: "500",
              fontFamily: "Montserrat",
            }}
          >
            Streamline Your E-Claim Transition Cycle Today
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: "25px",
              fontSize: isSmallScreen ? "0.8rem" : "0.9rem",
              fontWeight: "bold",
              backgroundColor: "#FFFFFF",
              color: "#2091F9",
              padding: "12px 20px",
              textTransform: "capitalize",
              borderRadius: "16px",
              "&:hover": {
                backgroundColor: "rgba(214,222,231,0.5)",
              },
            }}
            onClick={() => scrollToSection("contactUs")}
          >
            Request a Demo
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Home;

