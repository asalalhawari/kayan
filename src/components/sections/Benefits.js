import React from 'react';
import { Grid, useMediaQuery, Box, Typography, Card, CardContent } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const cardsData = [
  {
    id: "01",
    title: "Effortless Integration",
    description: "Experience seamless and accessible integration that streamlines workflows"
  },
  {
    id: "02",
    title: "Innovation and Customization",
    description: "I nnovative AI solutions that meet demands and strictly adhere to the GCC healthcare regulations. "
  },
  {
    id: "03",
    title: "Comprehensive Medical Database",
    description: "Gain access to a vast, robust medical database for enhanced decision-making"
  },
  {
    id: "04",
    title: "Future-Ready Agility",
    description: "Benefit from continuous updates and adaptability to stay ahead in a dynamic environment."
  },
  {
    id: "05",
    title: "Client Advocacy",
    description: "Strong client relationships and industry reputation"
  },
  
  {
    id: "06",
    title: "Cost-effectiveness",
    description: "Achieve seamless claims validation without breaking the Bank"
  },
];

const Benefits = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <div id="benefits">
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          backgroundColor: "#FFFFFF",
        }}
      >
        {/* Wave Background */}
        <Box
          sx={{
            position: "absolute",
            top: "-1px",
            left: 0,
            width: "100%",
            height: isSmallScreen ? "150px" : "210px",
            overflow: "hidden",
          }}
        >
          <svg
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "20px",
            }}
          >
            <path
              fill="#D8D8D8"
              d="M0,224L80,202.7C160,181,320,139,480,149.3C640,160,800,224,960,245.3C1120,267,1280,245,1360,234.7L1440,224V0H0Z"
            />
          </svg>

          <svg
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            <defs>
              <linearGradient id="waveGradient" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(19, 85, 165)" />
                <stop offset="100%" stopColor="rgb(87, 174, 255)" />
              </linearGradient>
            </defs>
            <path
              fill="url(#waveGradient)"
              d="M0,224L80,202.7C160,181,320,139,480,149.3C640,160,800,224,960,245.3C1120,267,1280,245,1360,234.7L1440,224V0H0Z"
            />
          </svg>
        </Box>

        {/* Heading and Description */}
        <Box
          sx={{
            width: '100%',
            textAlign: 'center',
            marginTop: isSmallScreen ? "150px" : "190px",
            justifyContent: "center"
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: '700',
              color: "#458FF6",
              fontFamily: 'Josefin Sans',
              textTransform: 'uppercase',
              fontSize: isSmallScreen ? "1.5rem" : "2rem", overflowX:"hidden"
            }}
          >
            Revolutionize E-Claims With KAYAN 
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: isSmallScreen ? '0.7rem' : '0.8rem',
              color: 'black',
              marginTop: isSmallScreen ? '20px' : '15px',
              lineHeight: '1.4',
              maxWidth: isSmallScreen ? '90%' : '50%',
              color: '#666',
              marginX: 'auto',
            }}
          >
            We empower healthcare stakeholders by removing the administrative bottleneck<br/> via our cutting-edge solutions
          </Typography>
        </Box>

        {/* Main Content: Image and Cards */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: isSmallScreen ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: isSmallScreen ? '20px' : '0px 65px',
            width: '100%',
            gap: isSmallScreen ? '20px' : '60px',
          }}
        >
          <Grid
            container
            spacing={isSmallScreen ? 2 : 3}
            sx={{
              width: '100%',
              padding: isSmallScreen ? '5%' : '0 0%',
              marginTop:isSmallScreen ?'0px': '40px',
              justifyContent: 'center',
            }}
          >
            {cardsData.map((card, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={card.id}
                sx={{
                  display: 'flex',
                  justifyContent: index === cardsData.length - 1 && !isSmallScreen ? 'center' : 'inherit',
                }}
              >
                <Card
                  sx={{
                    height: "100%",
                    width: '100%',
                    boxShadow: 2,
                    backgroundColor: "#E6F0FA",
                    borderRadius: "16px", // Add rounded edges to the card
                    transition: "box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <CheckCircleIcon
                        sx={{
                          color: "#458FF6",
                          fontSize: isSmallScreen ? "20px" : "24px",
                        }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#232233',
                          fontWeight: "600",
                          fontFamily: "Josefin Sans",
                          fontSize: isSmallScreen ? '0.9rem' : '1rem',
                          textTransform: "uppercase",
                          letterSpacing: "0px",
                        }}
                      >
                        {card.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: isSmallScreen ? '0.7rem' : '0.9rem',
                        lineHeight: '1.4',
                        fontWeight: "400",
                        fontFamily: "Josefin Sans",
                        color: '#666',
                        marginTop: "8px",
                        paddingLeft: "32px", // Add slight left offset to the description
                      }}
                    >
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Benefits;
        
       