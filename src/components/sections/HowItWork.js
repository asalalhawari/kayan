import React from "react";
import { Box, Typography, Card, CardContent, useMediaQuery } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const steps = [
  { id: 1, title: "POs Claims Transaction:", description: " Seamless connectivity and structured data exchange between healthcare providers and insurers comply with market regulations. "},

  { id: 2, title: "TRACKING & DASHBOARD: ", description: "Track, monitor, and visualize the entire claim lifecycle. " },
   
  { id: 3, title: "Medical & Coding Scrubber:", description: " Detect medical and coding denials swiftly for accurate claim validation. "},
     
  { id: 4, title: "Control Claim Validation:", description: "Configure relations and optimize your claim validation process to meet specific requirements while maintaining compliance. "},

  { id: 5, title: "Pharmaceutical Claims Management:", description: " Leverage our Built-In Pharmaceutical Edits and Checks Suite to streamline your workflow and reduce denials in medication-related claims. "},
  
  { id: 6, title: "AI Module:", description: "Better understand behaviours of all entities and improve data-driven decision-making with trend insights. "    },
];

const HowItWork = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Box
      id="how-it-works"
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#fff",
        padding: isSmallScreen ? "10px" : "20px",
        overflowX:"hidden"
      }}
    >
      <Box
            sx={{
                     width: '100%',
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     justifyContent: 'center',
                     textAlign: 'center',
                     marginTop: isSmallScreen ? '40px' : '85px',
                   }}
                 >
                   <Typography
                     variant="h4"
                     sx={{
                       fontWeight: '700',
                       color: '#458FF6',
                       fontFamily: 'Josefin Sans',
                       textTransform: 'uppercase',
                       fontSize: isSmallScreen ? '1.5rem' : '30px',
                     }}
                   >
         Multi-Layer Claim Cycle Solutions 
        </Typography>
         {/* <Typography
                    variant="body1"
                    sx={{
                      fontSize: isSmallScreen ? '0.7rem' : '0.9rem',
                      color: 'black',
                      marginTop: isSmallScreen ? '20px' : '10px',
                      lineHeight: '1.4',
                      maxWidth: isSmallScreen ? '90%' : '50%',
                      marginX: 'auto',
                    }}
                  >
                    Seamlessly Integrate with What Works for You 
                  </Typography> */}
      </Box>

      <Box
        sx={{
          width: isSmallScreen ? "90%" : "90%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: isSmallScreen ? "60px" : "200px",
        }}
      >
        {!isSmallScreen && (
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "3px",
              backgroundColor: "#458FF6",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
            }}
          ></Box>
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
            justifyContent: "space-between",
            position: "relative",
            gap: isSmallScreen ? "40px" : "0",
          }}
        >
          {steps.map((step, index) => (
            <Box
              key={step.id}
              sx={{
                position: "relative",
                textAlign: "center",
                top: isSmallScreen ? "0" : index % 2 === 0 ? "-120px" : "120px",
              }}
            >
              <Card
                sx={{
                  width: isSmallScreen ? "100%" : "250px",
                  minHeight: "150px",
                  padding: "8px",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)",
                  },
                  backgroundColor: index % 2 === 0 ? "#fff" : "#F8F9FA",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#232233", fontSize: isSmallScreen ? "0.9rem" : "0.8rem" }}
                  >
                    #{step.id} {step.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: isSmallScreen ? "0.7rem" : "0.6rem", color: "#666" }}
                  >
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>

              {!isSmallScreen && (
                <Box
                  sx={{
                    position: "absolute",
                    width: "2px",
                    height: "25px",
                    backgroundColor: "#458FF6",
                    left: "50%",
                    top: index % 2 === 0 ? "172px" : "-44px",
                    transform: "translateX(-50%)",
                  }}
                ></Box>
              )}
            </Box>
          ))}
        </Box>

       
      </Box>
    </Box>
  );
};

export default HowItWork;