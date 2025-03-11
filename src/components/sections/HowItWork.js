import React from "react";
import { Box, Typography, Card, CardContent, useMediaQuery } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const steps = [
  { id: 1, title: "Assemble the right team", description: "We handle all aspects of vetting and choosing the right team that you don’t have the time, expertise, or desire to do." },
  { id: 2, title: "Sprint planning", description: "Sprint meetings is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding." },
  { id: 3, title: "Tech architecture", description: "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently." },
  { id: 4, title: "Standups & weekly demos", description: "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns." },
  { id: 5, title: "Code reviews", description: "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells." },
  { id: 6, title: "Iterative delivery", description: "We divide the implementation process into several checkpoints rather than a single deadline." },
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
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: isSmallScreen ? "60px" : "80px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "700",
            color: "#458FF6",
            fontFamily: "monospace",
            fontSize: isSmallScreen ? "1.5rem" : "2rem",
          }}
        >
          HOW IT WORK
        </Typography>
      </Box>

      <Box
        sx={{
          width: isSmallScreen ? "90%" : "75%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: isSmallScreen ? "60px" : "240px",
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
                  width: isSmallScreen ? "100%" : "200px",
                  minHeight: "100px",
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
                    top: index % 2 === 0 ? "170px" : "-42px",
                    transform: "translateX(-50%)",
                  }}
                ></Box>
              )}
            </Box>
          ))}
        </Box>

        {!isSmallScreen && (
          <Box sx={{ position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)" }}>
            <EmojiEventsIcon sx={{ fontSize: "30px", color: "#FDC830" }} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HowItWork;