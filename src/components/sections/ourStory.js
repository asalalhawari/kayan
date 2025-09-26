"use client"

import { useState, useEffect } from "react"
import { Box, Card, Grid, Typography, useMediaQuery } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';

const content = [
  {
    title: "Mission",
    description: "Our mission is to drive efficiency and innovation in the healthcare sector by delivering tailored, intelligent solutions that optimize operations, ensure compliance, and create lasting value for all stakeholders.",
    icon: <FavoriteIcon color="primary" sx={{ fontSize: 40 }} />,
  },
  {
    title: "Vision",
    description: "To pioneer cutting-edge, AI-powered solutions that empower payers, providers, and regulators, shaping a smarter, more efficient healthcare ecosystem for the future.",
    icon: <VisibilityIcon color="primary" sx={{ fontSize: 40 }} />,
  },
];

const OurStory = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:900px)');

  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard(prev => (prev === content.length - 1 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

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
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        overflow: "hidden",
        position: "relative",
        background: "linear-gradient(135deg, #f8fafa, #dbe9fb, #a5c7f3)", // mix colors
      }}
    >
      {/* Dynamic Background Decorations */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
          "&::before": {
            content: '""',
            position: "absolute",
            width: "600px",
            height: "600px",
            top: "-100px",
            left: "-100px",
            background: "radial-gradient(circle, rgba(255,182,193,0.3), transparent 70%)",
            borderRadius: "50%",
            filter: "blur(120px)",
            animation: "float1 12s ease-in-out infinite",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            width: "500px",
            height: "500px",
            bottom: "-150px",
            right: "-150px",
            background: "radial-gradient(circle, rgba(173,216,230,0.25), transparent 70%)",
            borderRadius: "50%",
            filter: "blur(100px)",
            animation: "float2 15s ease-in-out infinite",
          },
          "@keyframes float1": {
            "0%,100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(30px)" },
          },
          "@keyframes float2": {
            "0%,100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-40px)" },
          },
        }}
      />

      {/* Cards */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 1100,
        }}
      >
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {content.map((item, idx) => (
            <Grid item xs={12} md={6} key={item.title}>
              <Card
                elevation={6}
                sx={{
                  borderRadius: 4,
                  p: { xs: 2, md: 4 },
                  background: '#fff',
                  minHeight: 260,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'visible',
                  mt: idx === 0 ? -4 : 6,
                  ml: idx === 1 ? { md: 4 } : 0,
                  border: activeCard === idx ? '2px solid #1976d2' : '2px solid transparent',
                  boxShadow: activeCard === idx
                    ? '0 0 20px rgba(25,118,210,0.6)'
                    : '0 8px 32px rgba(25,118,210,0.08)',
                  transition: 'box-shadow 0.5s ease-in-out, border 0.5s ease-in-out',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {item.icon}
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    sx={{ ml: 2, color: '#1976d2', fontSize: { xs: '1.3rem', md: '1.7rem' } }}
                  >
                    {item.title}
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, textAlign: 'left', lineHeight: 1.7 }}
                >
                  {item.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default OurStory;
