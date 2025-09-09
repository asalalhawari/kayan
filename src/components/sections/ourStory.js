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
    }, 2500); // كل 2.5 ثانية يتحول للبطاقة التالية
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
        background: 'linear-gradient(135deg, #f8fafc 0%, #e3f2fd 100%)',
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* خلفية نبض القلب */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 120,
          height: 120,
          background: "rgba(255,0,0,0.1)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%) scale(1)",
          animation: "heartbeat 1s infinite",
          zIndex: -1,
          "@keyframes heartbeat": {
            "0%, 100%": { transform: "translate(-50%, -50%) scale(1)", opacity: 0.6 },
            "25%": { transform: "translate(-50%, -50%) scale(1.3)", opacity: 0.8 },
            "50%": { transform: "translate(-50%, -50%) scale(1.5)", opacity: 1 },
            "75%": { transform: "translate(-50%, -50%) scale(1.3)", opacity: 0.8 },
          },
        }}
      />

      {/* العنوان */}
      <Typography
        variant="h3"
        fontWeight={700}
        mb={6}
        color="primary"
        sx={{
          fontSize: { xs: '2rem', md: '2.8rem' },
          letterSpacing: '-1px',
          textTransform: 'uppercase',
          background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 1100,
        }}
      >
        {/* الخط العمودي */}
        {!isSmallScreen && (
          <Box
            sx={{
              position: "absolute",
             
                 top: "-20%",  
              bottom: "-20%", 
              left: "51%",
              width: "3px",
              background: "linear-gradient(180deg, #1976d2 0%, #42a5f5 100%)",
              transform: "skew(-11deg)",
              zIndex: 0,
              boxShadow: "0 0 12px rgba(25,118,210,0.7), 0 0 20px rgba(66,165,245,0.6)",
              animation: "pulseGlow 2s infinite ease-in-out",
              "@keyframes pulseGlow": {
                "0%": { boxShadow: "0 0 5px rgba(25,118,210,0.4)" },
                "50%": { boxShadow: "0 0 18px rgba(25,118,210,0.9), 0 0 30px rgba(66,165,245,0.8)" },
                "100%": { boxShadow: "0 0 5px rgba(25,118,210,0.4)" },
              },
            }}
          />
        )}

        {/* الكروت */}
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
                  boxShadow: '0 8px 32px rgba(25,118,210,0.08)',
                  position: 'relative',
                  overflow: 'visible',
                  
                  mt: idx === 0 ? -4 : 6,
                  ml: idx === 1 ? { md: 4 } : 0,
                  transition: 'box-shadow 0.5s ease-in-out, border 0.5s ease-in-out',
                  border: activeCard === idx ? '2px solid #1976d2' : '2px solid transparent',
                  boxShadow: activeCard === idx ? '0 0 20px rgba(25,118,210,0.6)' : '0 8px 32px rgba(25,118,210,0.08)',
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
