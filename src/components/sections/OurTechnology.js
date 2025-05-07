import React from "react";
import { Box, Typography, Card, CardContent, useMediaQuery } from "@mui/material";
import react from '../../img/reactLogo.png';
import node from '../../img/nodejsLogo.png';
import docker from '../../img/docker.png';
import postgres from '../../img/postgres.png';
import tech from '../../img/technology.jpeg';

const technologies = [
  {
    name: "Node js",
    logo: node
  },
  {
    name: "React js",
    logo: react
  },
  {
    name: "Docker",
    logo: docker
  },
  {
    name: "PostgreSQL",
    logo: postgres
  },
];

const OurTechnology = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:900px)');
  const isLargeScreen = useMediaQuery('(min-width:1200px)');

  return (
    <Box
      id="our-technology"
      sx={{
        width: "100%",
        minHeight: isSmallScreen ? "auto" : "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
        ...(isSmallScreen && {
          backgroundImage: `url(${tech})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginTop:"4rem"
        }),
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: isSmallScreen ? "120px" : isMediumScreen ? "200px" : "350px",
          ...(!isSmallScreen && {
            backgroundImage: `url(${tech})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }),
          padding: isSmallScreen ? "8px 0" : isMediumScreen ? "15px 0" : "30px 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "700",
            color: "#458FF6",
            fontFamily: "Josefin Sans",
            textTransform: "uppercase",
            fontSize: isSmallScreen ? "1.6rem" : isMediumScreen ? "1.6rem" : isLargeScreen ? "2.5rem" : "2rem",
            marginTop: isSmallScreen ? "56px" : isMediumScreen ? "20px" : "80px",
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          Our Technology
        </Typography>
      </Box>

      {/* Cards Container */}
      <Box
        sx={{
          width: isSmallScreen ? "90%" : isMediumScreen ? "90%" : isLargeScreen ? "80%" : "85%",
          maxWidth: "1200px",
          marginTop: isSmallScreen ? "-30px" : isMediumScreen ? "-85px" : "-110px",
          zIndex: 2,
          padding: isSmallScreen ? "20px 0" : "0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
            gap: isSmallScreen ? "20px" : isMediumScreen ? "15px" : "30px",
            overflowX: isSmallScreen ? "visible" : "auto", 
            paddingBottom: isSmallScreen ? "0" : "10px",
            justifyContent: isSmallScreen ? "center" : "center",
            alignItems: "center",
            "&::-webkit-scrollbar": {
              height: isSmallScreen ? "0" : "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#555",
            },
          }}
        >
          {technologies.map((tech, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: isSmallScreen ? "100%" : "auto", // Full width on small screens
                minWidth: isSmallScreen ? "auto" : isMediumScreen ? "160px" : "200px", // Adjusted for medium screens
                maxWidth: isSmallScreen ? "300px" : "none", // Limit card width on small screens
                overflow: "visible",
              }}
            >
              {/* Logo in Circle */}
              <Box
                sx={{
                  width: isSmallScreen ? "85px" : isMediumScreen ? "80px" : "120px",
                  height: isSmallScreen ? "85px" : isMediumScreen ? "80px" : "120px",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 1,
                  cursor: "pointer",
                  boxShadow: "8px 8px 20px rgba(0, 0, 0, 0.15)",

                  marginBottom: isSmallScreen ? "-30px" : isMediumScreen ? "-30px" : "-40px",
                }}
              >
                <Box
                  component="img"
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    padding: isSmallScreen ? "8px" : "10px",
                    borderRadius: "50%",
                  }}
                />
              </Box>

              {/* Card */}
              <Card
                sx={{
                  backgroundColor: "white",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  // backgroundColor: "rgba(0,0,0,0.14)",
                  padding: isSmallScreen ? "30px 15px 15px" : isMediumScreen ? "30px 15px 15px" : "40px 20px 20px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  width: "100%",
                  minWidth: isSmallScreen ? "180px" : isMediumScreen ? "180px" : "255px",
                  height: isSmallScreen ? "140px" : isMediumScreen ? "140px" : "150px",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
                  },
                  overflow: "visible",
                }}
              >
                {/* Technology Name */}
                <CardContent sx={{ padding: 0 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "600",
                      color: "#232233",
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: isSmallScreen ? "1rem" : isMediumScreen ? "0.9rem" : "1.2rem",
                      textAlign: "center",
                      marginTop: isSmallScreen ? "20px" : isMediumScreen ? "20px" : "25px",
                    }}
                  >
                    {tech.name}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default OurTechnology;