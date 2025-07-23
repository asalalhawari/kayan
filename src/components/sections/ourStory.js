import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Card, Grid, Typography, useMediaQuery } from "@mui/material";

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
        overflowX: "hidden",
      }}
    >
      <Typography
        variant="h3"
        fontWeight={700}
        mb={4}
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
        Our Mission & Vision
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch" sx={{ maxWidth: 1100 }}>
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
                mt: idx === 1 && !isSmallScreen ? { md: 6 } : 0,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                {item.icon}
                <Typography variant="h5" fontWeight={700} sx={{ ml: 2, color: '#1976d2', fontSize: { xs: '1.3rem', md: '1.7rem' } }}>
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
  );
};

export default OurStory;