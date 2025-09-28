import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/sections/Navbar';
import Home from './components/sections/Home';
import Benefits from './components/sections/Benefits';
import HowItWork from './components/sections/HowItWork';
import OurStory from './components/sections/ourStory';
import Solutions from './components/sections/Solutions';
import AnalyticsDashboards from './components/sections/AnalyticsDashboards';


import ExpertsSection from './components/sections/ExpertsSection';
import ContactUs from './components/sections/ContactUs';
import Footer from './components/sections/Footer';
import '@fontsource/montserrat/400.css'; 
import '@fontsource/montserrat/600.css'; 
import '@fontsource/montserrat/700.css'; 
import '@fontsource/roboto/400.css'; 
import '@fontsource/roboto/500.css'; 
import '@fontsource/roboto/700.css'; 
import '@fontsource/josefin-sans/400.css'; 
import '@fontsource/josefin-sans/600.css'; 
import '@fontsource/josefin-sans/700.css'; 
import '@fontsource/inter/400.css'; 
import '@fontsource/inter/600.css'; 
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css'; 
import OurFeeds from './components/sections/OurFeeds';
import AboutUs from './components/sections/AboutUs';
import AnimatedSection from './components/ui/AnimatedSection';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Roboto, Josefin Sans, Inter, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      '@media (max-width:600px)': {
        fontSize: '0.9rem',
      },
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      '@media (max-width:600px)': {
        fontSize: '0.8rem',
      },
    },
  },
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#dc004e',
      light: '#ff5983',
      dark: '#9a0036',
      contrastText: '#ffffff',
    },
    healthcare: {
      blue: '#1976d2',
      lightBlue: '#e3f2fd',
      darkBlue: '#0d47a1',
      green: '#4caf50',
      lightGreen: '#e8f5e8',
      red: '#f44336',
      orange: '#ff9800',
      purple: '#9c27b0',
      gray: '#757575',
      lightGray: '#f5f5f5',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  shape: {
    borderRadius: 12,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          fontWeight: 600,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          '&:hover': {
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            minHeight: '100vh', 
            width: '100%',
            overflowX: 'hidden',
            overflowY: 'hidden',
          }}
        >
          {/* 🔹 Navbar */}
          <Navbar />

          <Container 
            maxWidth={false} 
            disableGutters 
            sx={{ 
              flex: 1,
              width: '100%',
              padding: 0,
              margin: 0,
              overflowX: 'hidden',
            }}
          >
            {/* 🔹 Home */}
            <AnimatedSection>
              <Box component="section" id="home" sx={{ width: '100%' }}>
                <Home />
              </Box>
            </AnimatedSection>
            <AnimatedSection>
  <Box component="section" id="about" sx={{ width: '100%' }}>
    <AboutUs />
  </Box>
</AnimatedSection>


    <AnimatedSection>
  <Box component="section" id="our-story" sx={{ width: '100%' }}>
    <OurStory />
  </Box>
</AnimatedSection>
  <AnimatedSection>
  <Box component="section" id="howItWork" sx={{ width: '100%' }}>
    <HowItWork />
  </Box>
</AnimatedSection>

  {/* 🔹 Solutions */}
            <AnimatedSection>
              <Box component="section" id="solution" sx={{ width: '100%' }}>
                <Solutions />
              </Box>
            </AnimatedSection>

 {/* 🔹 Benefits */}
            <AnimatedSection>
              <Box component="section" id="benefits" sx={{ width: '100%' }}>
                <Benefits />
              </Box>
            </AnimatedSection>
            <AnimatedSection></AnimatedSection>
            <AnimatedSection>
  <Box component="section" id="analyticsDashboard" sx={{ width: '100%' }}>
    <AnalyticsDashboards />
  </Box>
</AnimatedSection>

           

  
            {/* 🔹 Our Team */}
            <AnimatedSection>
              <Box component="section" id="our-team" sx={{ width: '100%' }}>
                <ExpertsSection />
              </Box>
            </AnimatedSection>
 {/* 🔹 Our Feeds */}
            <AnimatedSection>
              <Box component="section" id="our-feeds" sx={{ width: '100%' }}>
                <OurFeeds />
              </Box>
            </AnimatedSection>
          

           
          





            {/* 🔹 Our Presence */}
           

            {/* 🔹 Contact Us */}
           {/* 🔹 Contact Us */}
<AnimatedSection>
  <Box component="section" id="contact" sx={{ width: '100%' }}>
    <ContactUs />
  </Box>
</AnimatedSection>
          </Container>

          {/* 🔹 Footer */}
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
