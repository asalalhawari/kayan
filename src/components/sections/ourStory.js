'use client'

import { useState } from "react"
import { Box, Grid, Typography, useMediaQuery, CardMedia } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';

import missionImg from "../../img/medical-banner-with-doctor-wearing-vr-glasses.jpg";
import visionImg from "../../img/hologram-feminine-silhouette-man-hand.jpg";

// محتوى المهمة والرؤية
const content = [
  {
    title: "Mission",
    description: "Our mission is to drive efficiency and innovation in the healthcare sector by delivering tailored, intelligent solutions that optimize operations, ensure compliance, and create lasting value for all stakeholders.", 
    image: missionImg, 
    icon: <FavoriteIcon color="primary" sx={{ fontSize: 40 }} />,
  },
  {
    title: "Vision",
    description: "To pioneer cutting-edge, AI-powered solutions that empower payers, providers, and regulators, shaping a smarter, more efficient healthcare ecosystem for the future.",
    image: visionImg, 
    icon: <VisibilityIcon color="primary" sx={{ fontSize: 40 }} />,
  },
];

const OurMissionAndVision = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:900px)');
  const [activeCard, setActiveCard] = useState(0); 
  
  const getItemDirection = (index) => index % 2 === 0 ? 'row' : 'row-reverse';

  return (
    <Box
      id="our-mission-vision"
      sx={{
        width: "100%",
        minHeight: isMediumScreen ? 'auto' : '80vh',
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        overflow: "hidden",
        position: "relative",
        background: '#fff', 
      }}
    >
      <Grid container spacing={isMediumScreen ? 4 : 8} sx={{ maxWidth: 1200, width: '100%' }}>
        {/* العنوان */}
        <Grid 
          item xs={12} md={4} 
          sx={{ 
            textAlign: { xs: 'center', md: 'left' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: { xs: 'center', md: 'flex-start' },
            mb: { xs: 4, md: 0 },
          }}
        >
          <Typography
            variant="h2"
            fontWeight={900}
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              color: '#333', 
              mb: 1,
            }}
          >
            Our Mission
          </Typography>
          <Typography
            variant="h2"
            fontWeight={900}
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              color: '#333',
              mb: 3,
            }}
          >
            & Vision
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.5 }}>
             <Box sx={{ width: '60px', height: '4px', background: '#4CAF50' }} /> 
             <Box sx={{ width: '40px', height: '4px', background: '#1976d2' }} /> 
          </Box>
        </Grid>

        {/* المحتوى */}
        <Grid item xs={12} md={8}>
          <Box sx={{ width: '100%' }}>
            {content.map((item, idx) => (
              <Box
                key={item.title}
                sx={{
                  display: 'flex',
                  flexDirection: isSmallScreen ? 'column' : getItemDirection(idx),
                  alignItems: 'center',
                  py: 4,
                  borderBottom: idx === 0 ? '1px solid #eee' : 'none', 
                  mb: idx === 0 ? 4 : 0, 
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'translateY(-8px)' },
                }}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(0)}
              >
                {/* الصورة الدائرية */}
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={`${item.title} image`}
                  sx={{
                    width: { xs: 120, sm: 150 },
                    height: { xs: 120, sm: 150 },
                    borderRadius: '50%',
                    objectFit: 'cover',
                    flexShrink: 0,
                    mr: idx % 2 === 0 ? { xs: 0, sm: 4 } : 0,
                    ml: idx % 2 !== 0 ? { xs: 0, sm: 4 } : 0,
                    mb: { xs: 2, sm: 0 },
                    border: activeCard === idx ? '3px solid #1976d2' : '3px solid transparent',
                    boxShadow: activeCard === idx
                      ? '0 0 20px rgba(25,118,210,0.6)'
                      : '0 8px 32px rgba(25,118,210,0.08)',
                    transition: 'box-shadow 0.5s ease-in-out, border 0.5s ease-in-out, transform 0.3s ease-in-out',
                  }}
                />

                {/* النصوص */}
                <Box 
                  sx={{ 
                      flexGrow: 1,
                      textAlign: { xs: 'center', sm: idx % 2 === 0 ? 'left' : 'right' },
                      mt: { xs: 2, sm: 0 },
                  }}
                >
                  <Typography
                    variant="h4"
                    fontWeight={700}
                    sx={{
                      color: '#333',
                      fontSize: { xs: '1.5rem', md: '2rem' },
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      lineHeight: 1.7,
                      color: '#666',
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurMissionAndVision;
