import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import kayanLogo from './img/kayanLogo.png'; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [anchorElMain, setAnchorElMain] = useState(null);
  const [anchorElSolution, setAnchorElSolution] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMainMenuOpen = (event) => {
    setAnchorElMain(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleMainMenuClose = () => {
    setAnchorElMain(null);
    setIsMenuOpen(false);
  };

  const handleSolutionMenuOpen = (event) => {
    setAnchorElSolution(event.currentTarget);
  };

  const handleSolutionMenuClose = () => {
    setAnchorElSolution(null);
  };

  // const isActive = (paths) => paths.includes(location.pathname);
  const handleSectionChange = () => {
    const sections = ['home', 'about', 'provider-solutions', 'payer-solutions','ContactUs', 'demo'];
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
    }
  };
  const isActive = (sections) => sections.includes(activeSection);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor:'rgba(108,143,153,0.48)',
          // backgroundColor: scrolled ? 'white' : 'transparent',
          transition: 'background-color 0.3s',
          paddingLeft: { md: '23%', xs: 'none' },
          paddingRight: { md: '15%', xs: 'none' },
          paddingTop: '1%',
          boxShadow: scrolled ? '0px 4px 10px rgba(0, 191, 255, 0.5)' : 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: { md: 'space-between', xs: 'flex-end' } }}>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1, justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                component="img"
                src={kayanLogo}
                alt="Kayan Healthcare Logo"
                sx={{
                  width: { xs: '60px', sm: '80px' },
                  height: { xs: '50px', sm: '50px' },
                  filter: 'grayscale(50%)',
                  transition: 'opacity 0.3s ease-in-out, transform 0.3s',
                  cursor: 'pointer',
                }}
              />
            </Box>
            <Button
              onClick={() => scrollToSection('home')} 
              sx={{
                color: 'white',
                fontSize: activeSection === 'home' ? '1.6rem' : '1.3rem',
                fontWeight: activeSection === 'home' ? 'bold' : 'normal',
                transform: activeSection === 'home' ? 'scale(1.1)' : 'scale(1)',
                transition: 'all 0.3s',
                textTransform: 'capitalize',
                textShadow: activeSection === 'home' ? '0 0 8px #00bfff, 0 0 16px #00bfff' : 'none',
              }}
            >
              Home
            </Button>
            <Button
              onClick={() => scrollToSection('about')} 
              sx={{
                color:'white',
                textTransform: 'capitalize',
                fontSize: activeSection === 'about' ? '1.6rem' : '1.3rem',
                fontWeight: activeSection === 'about' ? 'bold' : 'normal',
                transform: activeSection === 'about' ? 'scale(1.1)' : 'scale(1)',
                transition: 'all 0.3s',
                textShadow: activeSection === 'about' ? '0 0 8px #00bfff, 0 0 16px #00bfff' : 'none',
              }}
            >
              About
            </Button>
            <Button
              onClick={handleSolutionMenuOpen}
              sx={{
                color: 'white',
                textTransform: 'capitalize',
                fontSize: isActive(['/provider-solutions', '/payer-solutions']) ? '1.6rem' : '1.3rem',
                fontWeight: isActive(['/provider-solutions', '/payer-solutions']) ? 'bold' : 'normal',
                transform: isActive(['/provider-solutions', '/payer-solutions']) ? 'scale(1.1)' : 'scale(1)',
                textShadow: isActive(['/provider-solutions', '/payer-solutions']) ? '0 0 8px #00bfff, 0 0 16px #00bfff' : 'none',
                transition: 'all 0.3s',
              }}
            >
              Solution
            </Button>

            <Menu anchorEl={anchorElSolution} open={Boolean(anchorElSolution)} onClose={handleSolutionMenuClose}>
              <MenuItem onClick={() => scrollToSection('provider-solutions')}>Provider Solutions</MenuItem>
              <MenuItem onClick={() => scrollToSection('payer-solutions')}>Payer Solutions</MenuItem>
            </Menu>
            <Button
              onClick={() => scrollToSection('demo')}
              sx={{
                color:'white',
                fontSize: activeSection === 'demo' ? '1.6rem' : '1.3rem',
                fontWeight: activeSection === 'demo' ? 'bold' : 'normal',
                transform: activeSection === 'demo' ? 'scale(1.1)' : 'scale(1)',
                transition: 'all 0.3s',
                textTransform: 'capitalize',
                textShadow: activeSection === 'demo' ? '0 0 8px #00bfff, 0 0 16px #00bfff' : 'none',
              }}
            >
              Demo
            </Button>
          </Box>
          <IconButton
            sx={{ display: { xs: 'block', sm: 'none' }, color: scrolled ? 'black' : '#eaeaea' }}
            onClick={handleMainMenuOpen}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Button
        variant="contained"
        onClick={() => scrollToSection('contactUs')} 
        sx={{
          position: 'fixed',
          bottom: { xs: 80, sm: 100 },
          right: { xs: '20px', sm: '40px' },
          backgroundColor: '#1565c0',
          color: 'white',
          borderRadius: '0px',
          padding: { xs: '8px 16px', sm: '10px 20px' },
          boxShadow: '2px 2px 10px 7px #1565c0',
          zIndex: 1000,
          fontSize: { xs: '0.8rem', sm: '1rem' },
          transition: 'all 0.3s',
          '&:hover': {
            backgroundColor: '#979a9c',
            boxShadow: '2px 2px 10px 7px #979a9c',
          },
        }}
      >
        <PhoneIcon />
      </Button>

      {/* Mobile Menu */}
      <Menu anchorEl={anchorElMain} open={isMenuOpen} onClose={handleMainMenuClose}>
        <MenuItem onClick={() => scrollToSection('home')}>Home</MenuItem>
        <MenuItem onClick={() => scrollToSection('about')}>About</MenuItem>
        <MenuItem onClick={() => scrollToSection('provider-solutions')}>Provider Solutions</MenuItem>
        <MenuItem onClick={() => scrollToSection('payer-solutions')}>Payer Solutions</MenuItem>
        <MenuItem onClick={() => scrollToSection('demo')}>Demo</MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;
