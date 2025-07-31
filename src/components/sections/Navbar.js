import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, Container, Drawer, List, ListItem, ListItemText, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { motion } from 'framer-motion';
import React from 'react';
import kayanlogo from '../../img/kayanlogo55.png';

const Navbar = () => {
  const [activeSection, setActiveSection] = React.useState('home');
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  const theme = useTheme();

  React.useEffect(() => {
    const handleScroll = () => {
      handleSectionChange();
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionChange = () => {
    const sections = ['home', 'benefits', 'solution', 'our-technology', 'provider-solutions', 'payer-solutions', 'ContactUs', 'demo', 'how-it-works', 'our-benefits', 'about', 'our-story', 'our-experts', 'our-clients', 'our-feeds'];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(section);
        }
      }
    });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'solution', label: 'Solutions' },
    { id: 'about', label: 'About' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ 
      width: 280, 
      pt: 2, 
      height: '100vh', 
      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 50%, ${theme.palette.primary.light} 100%)` 
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, mb: 2 }}>
        <Box
          component="img"
          src={kayanlogo}
          alt="Kayan Healthcare Logo"
          sx={{ 
            width: '120px', 
            height: '50px',
            filter: 'brightness(0) invert(1)',
          }}
        />
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
              backgroundColor: activeSection === item.id ? 'rgba(255,255,255,0.15)' : 'transparent',
              borderRadius: '8px',
              mx: 1,
              mb: 1,
            }}
          >
            <ListItemText 
              primary={item.label}
              sx={{
                '& .MuiListItemText-primary': {
                  fontWeight: activeSection === item.id ? 600 : 400,
                  color: activeSection === item.id ? theme.palette.primary.light : 'white',
                  fontSize: '1rem',
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        component={motion.div}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        sx={{
          width: '100%',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          background:'rgba(255, 255, 255, 0.95)' ,
          backdropFilter: 'blur(15px)',
          zIndex: 1200,
          borderRadius: 0, 
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 } }}>
          <Toolbar sx={{ 
            justifyContent: 'space-between',
            backgroundColor: 'transparent', 
            py: 1,
            minHeight: { xs: '70px', md: '80px' },
            borderRadius: 0, 
          }}>
            {/* Logo + Tagline */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pl: 0 }}>
              <Box
                component="img"
                src={kayanlogo}
                alt="Kayan Healthcare Logo"
                sx={{
                  height: { xs: '40px', sm: '48px' },
                  width: 'auto',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, filter 0.2s',
                  filter: 'none', 
                  '&:hover': {
                    transform: 'scale(1.05)',
                    filter: 'drop-shadow(0 2px 8px rgba(25,118,210,0.15))',
                  },
                  display: 'block',
                }}
              />
              <Box
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  ml: 1,
                }}
              >
                <span
                  style={{
                    color:theme.palette.primary.main,
                    fontWeight: 700,
                    letterSpacing: 1,
                    fontSize: '1.2rem',
                    fontFamily: 'Montserrat, sans-serif',
                    verticalAlign: 'middle',
                  }}
                >
                  Kayan Healthcare
                </span>
              </Box>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
              {navItems.map((item) => (
                <Button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  sx={{
                    color: theme.palette.text.primary,
                    fontSize: activeSection === item.id ? '16px' : '15px',
                    fontWeight: activeSection === item.id ? 700 : 500,
                    transform: activeSection === item.id ? 'scale(1.05)' : 'scale(1)',
                    transition: 'all 0.3s ease',
                    textTransform: 'capitalize', 
                    fontFamily: 'Montserrat',
                    position: 'relative',
                    px: 3,
                    py: 1.5,
                    borderRadius: '25px', 
                    '&:hover': {
                      color: theme.palette.primary.main,
                      backgroundColor: 'rgba(25, 118, 210, 0.08)',
                      transform: 'scale(1.05)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: activeSection === item.id ? '100%' : '0%',
                      height: '3px',
                      bottom: '0px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: activeSection === item.id ? (theme.palette.primary.main) : 'transparent',
                      transition: 'all 0.3s ease',
                      borderRadius: '2px',
                    }
                  }}>
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Contact Button */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              <Button
                variant="contained"
                startIcon={<PhoneIcon />}
                sx={{
                  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
                  color: '#fff',
                  fontWeight: 600,
                  borderRadius: '25px', 
                  px: 4,
                  py: 1.5,
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                  '&:hover': {
                    background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.main} 90%)`,
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 25px rgba(0,0,0,0.25)',
                  },
                  transition: 'all 0.3s ease',
                }}
                onClick={() => scrollToSection('contactUs')}
              >
                Contact Us
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  color: theme.palette.text.primary,
                  backgroundColor: 'rgba(25, 118, 210, 0.08)',
                  borderRadius: 0, 
                  padding: '12px',
                  '&:hover': {
                    backgroundColor: 'rgba(25, 118, 210, 0.15)',
                    transform: 'scale(1.05)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 50%, ${theme.palette.primary.light} 100%)`,
            border: 'none',
            borderRadius: 0, 
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Toolbar spacer */}
      <Toolbar sx={{ minHeight: { xs: '70px', md: '80px' } }} />
    </>
  );
};

export default Navbar;