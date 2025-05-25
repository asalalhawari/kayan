import React from "react";
import { Box, Typography, Card, CardContent, useMediaQuery } from "@mui/material";

const content = [
  {
    title: "Mission",
     description: "Our mission is to drive efficiency and innovation in the healthcare sector by delivering tailored, intelligent solutions that optimize operations, ensure compliance, and create lasting value for all stakeholders.",
},
  {
    title: "Vision",
   description: "To pioneer cutting-edge, AI-powered solutions that empower payers, providers, and regulators, shaping a smarter, more efficient healthcare ecosystem for the future.",
},
];

const OurStory = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:900px)');

  return (
    <Box
      id="our-story"
      sx={{
        width: "100%",
        minHeight: isSmallScreen ? 'auto' : isMediumScreen ? '60vh' : '90vh',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#fff",
        padding: isSmallScreen ? "20px" : isMediumScreen ? "30px" : "40px",
        overflowX: "hidden",
      }}
    >
      {/* First Row: Title and Mission Card */}
      <Box
        sx={{
          width: isSmallScreen ? "100%" : isMediumScreen ? "90%" : "100%",
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: isSmallScreen ? "20px" : isMediumScreen ? "30px" : "70px",
        }}
      >
        {/* Title Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            textAlign: 'left',
            width: isSmallScreen ? "100%" : "50%",
          }}
        >
          <Typography
            // variant="h4"
            sx={{
              fontWeight: '700',
              color: '#000',
              fontFamily: 'Josefin Sans',
              textTransform: 'uppercase',
              fontSize: isSmallScreen ? '1.5rem' : isMediumScreen ? '2rem' : '3.5rem',
              letterSpacing:"-1px",
              whiteSpace: 'pre-line', 
            }}
          >
            Our Mission
            {"\n"}& Vision
          </Typography>
          <Box
            sx={{
              width: "145px",
              height: "4px",
              backgroundColor: "black",
              marginTop: "8px",
            }}
          />
          <Box
            sx={{
              width: "145px",
              height: "4px",
              backgroundColor: "#458ff6",
              marginTop: "5px",
            }}
          />
        </Box>

        {/* Mission Card */}
        <Card
          sx={{
            width: isSmallScreen ? "100%" : isMediumScreen ? "45%" : "50%",
            minHeight: isSmallScreen ? "150px" : isMediumScreen ? "200px" : "225px",
            padding: isSmallScreen ? "10px" : "15px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: " 104px 0 0 104px ", // Rounded on the left side
            backgroundColor: "rgba(0,0,0,0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CardContent
            sx={{
              textAlign: "left",
              width: "100%",
            }}
          >
            <Typography
              // variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#000",
                fontSize: isSmallScreen ? "1rem" : isMediumScreen ? "1.2rem" : "2rem",

              }}
            >
              {content[0].title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: isSmallScreen ? "0.8rem" : isMediumScreen ? "0.9rem" : "1rem",
                color: "#666",
                marginTop: "10px",
                lineHeight: 1.5,
              }}
            >
              {content[0].description}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Second Row: Vision Card */}
      <Box
        sx={{
          width: isSmallScreen ? "100%" : isMediumScreen ? "90%" : "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop:"50px"
        }}
      >
        <Card
          sx={{
            width: isSmallScreen ? "100%" : isMediumScreen ? "45%" : "50%",
            minHeight: isSmallScreen ? "150px" : isMediumScreen ? "200px" : "225px",
            padding: isSmallScreen ? "10px" : "15px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: " 0 104px 104px 0 ", // Rounded on the left side
            backgroundColor: "rgba(0,0,0,0.1)",
          display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CardContent
            sx={{
              textAlign: "left",
              width: "100%",
            }}
          >
            <Typography
              // variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#000",
                fontSize: isSmallScreen ? "1rem" : isMediumScreen ? "1.2rem" : "2rem",
              }}
            >
              {content[1].title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: isSmallScreen ? "0.8rem" : isMediumScreen ? "0.9rem" : "1rem",
                color: "#666",
                marginTop: "10px",
                lineHeight: 1.5,
              }}
            >
              {content[1].description}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default OurStory;