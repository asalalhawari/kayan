import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';
import kayanlogo from '../../img/kayanlogo55.png'; 
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PhoneIcon from '@mui/icons-material/Phone';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [anchorElSolution, setAnchorElSolution] = useState(null);
  const [anchorElCompany, setAnchorElCompany] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const [anchorElMain, setAnchorElMain] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      handleSectionChange();
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSolutionMenuOpen = (event) => {
    setAnchorElSolution(event.currentTarget);
  };

  const handleSolutionMenuClose = () => {
    setAnchorElSolution(null);
  };

  const handleCompanyMenuOpen = (event) => {
    setAnchorElCompany(event.currentTarget);
  };

  const handleCompanyMenuClose = () => {
    setAnchorElCompany(null);
  };

  const handleMainMenuOpen = (event) => {
    setAnchorElMain(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleMainMenuClose = () => {
    setAnchorElMain(null);
    setIsMenuOpen(false);
  };

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
      handleSolutionMenuClose();
      handleCompanyMenuClose();
      handleMainMenuClose();
    }
  };

  const isActive = (sections) => sections.includes(activeSection);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 'none',
          background: 'linear-gradient(to right,#90c4ff, #0d2a95)', 
          paddingLeft: { md: '0', xs: 'none' }, 
          paddingRight: { md: '10%', xs: 'none' },
          marginLeft: '0', 
          marginRight: '10%',
          marginTop: '1%',
          overflowX: "hidden",
          width: { md: '80%', xs: '100%' }, 
          borderRadius: '50px', 
        }}
      >
        <Toolbar sx={{ 
          justifyContent: { md: 'flex-start', xs: 'center' },
          backgroundColor: 'transparent', 
          borderRadius: '50px',
        }}>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#FFFFFF', 
                borderRadius: '50px', 
                padding: '5px 15px',
                margin: '5px 5px 5px 0', 
              }}
            >
              <Box
                component="img"
                src={kayanlogo}
                alt="Kayan Healthcare Logo"
                sx={{ 
                  width: { xs: '80px', sm: '130px' }, 
                  height: { xs: '40px', sm: '50px' }, 
                  filter: 'grayscale(50%)',
                  cursor: 'pointer',
                  ml: 0, // Ensure no left margin for the logo itself
                  maxWidth: "100%",
                }}
              />
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 0.5, justifyContent: 'space-around' }}>
            <Button 
              onClick={() => scrollToSection('home')} 
              sx={{
                color: "#fff",
                fontSize: activeSection === 'home' ? '17px' : '15px',
                fontWeight: activeSection === 'home' ? 'bold' : 'normal',
                transform: activeSection === 'home' ? 'scale(1.2)' : 'scale(1)',
                transition: 'all 0.3s',
                textTransform: 'capitalize', 
                fontFamily: 'Montserrat',
                position: 'relative',
                '&:hover': {
                  color: 'black',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '2px',
                    bottom: '-2px',
                    left: 0,
                    backgroundColor: 'black',
                    transform: 'scaleX(1)',
                    transformOrigin: 'bottom right',
                    transition: 'transform 0.3s ease-out',
                  }
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '2px',
                  bottom: '-2px',
                  left: 0,
                  backgroundColor: '#1565C0',
                  transform: 'scaleX(0)',
                  transformOrigin: 'bottom right',
                  transition: 'transform 0.3s ease-out',
                }
              }}>
              Home
            </Button>

            <Button 
              onClick={() => scrollToSection('benefits')} 
              sx={{
                color: "#fff",
                fontSize: activeSection === 'benefits' ? '17px' : '15px',
                fontWeight: activeSection === 'benefits' ? 'bold' : 'normal',
                transform: activeSection === 'benefits' ? 'scale(1.2)' : 'scale(1)',
                transition: 'all 0.3s',
                textTransform: 'capitalize', 
                fontFamily: 'Montserrat',
                position: 'relative',
                '&:hover': {
                  color: 'black',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '2px',
                    bottom: '-2px',
                    left: 0,
                    backgroundColor: 'black',
                    transform: 'scaleX(1)',
                    transformOrigin: 'bottom right',
                    transition: 'transform 0.3s ease-out',
                  }
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '2px',
                  bottom: '-2px',
                  left: 0,
                  backgroundColor: '#1565C0',
                  transform: 'scaleX(0)',
                  transformOrigin: 'bottom right',
                  transition: 'transform 0.3s ease-out',
                }
              }}>
              Benefits
            </Button>

            {/* Solutions Button with Dropdown on Click */}
            <Button
              onClick={handleSolutionMenuOpen}
              sx={{
                color: "#fff",
                fontSize: isActive(['solution', 'our-technology']) ? '17px' : '15px',
                fontWeight: isActive(['solution', 'our-technology']) ? 'bold' : 'normal',
                transform: isActive(['solution', 'our-technology']) ? 'scale(1.2)' : 'scale(1)',
                transition: 'all 0.3s',
                textTransform: 'capitalize',
                fontFamily: 'Montserrat',
                position: 'relative',
                '&:hover': {
                  color: 'black',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '2px',
                    bottom: '-2px',
                    left: 0,
                    backgroundColor: 'black',
                    transform: 'scaleX(1)',
                    transformOrigin: 'bottom right',
                    transition: 'transform 0.3s ease-out',
                  }
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '2px',
                  bottom: '-2px',
                  left: 0,
                  backgroundColor: '#1565C0',
                  transform: 'scaleX(0)',
                  transformOrigin: 'bottom right',
                  transition: 'transform 0.3s ease-out',
                }
              }}
            >
              Solutions
            </Button>
            <Menu
              anchorEl={anchorElSolution}
              open={Boolean(anchorElSolution)}
              onClose={handleSolutionMenuClose}
              PaperProps={{
                sx: {
                  backgroundColor: 'rgba(32, 145, 249, 0.2)',
                  color: 'white',
                  mt: 1,
                  '& .MuiMenuItem-root': {
                    fontFamily: 'Montserrat',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(21, 101, 192, 0.8)',
                      textDecoration: 'underline',
                    }
                  }
                }
              }}
            >
              <MenuItem onClick={() => scrollToSection('solution')}>Our Solutions</MenuItem>
              <MenuItem onClick={() => scrollToSection('our-technology')}>Our Technology</MenuItem>
            </Menu>

            {/* Company Button with Dropdown on Click */}
            <Button
              onClick={handleCompanyMenuOpen}
              sx={{
                color: "#fff",
                fontSize: isActive(['how-it-works', 'our-benefits', 'our-story', 'our-experts', 'our-clients', 'our-feeds', 'about']) ? '17px' : '15px',
                fontWeight: isActive(['how-it-works', 'our-benefits', 'our-story', 'our-experts', 'our-clients', 'our-feeds', 'about']) ? 'bold' : 'normal',
                transform: isActive(['how-it-works', 'our-benefits', 'our-story', 'our-experts', 'our-clients', 'our-feeds', 'about']) ? 'scale(1.2)' : 'scale(1)',
                transition: 'all 0.3s',
                textTransform: 'capitalize',
                fontFamily: 'Montserrat',
                position: 'relative',
                '&:hover': {
                  color: 'black',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '2px',
                    bottom: '-2px',
                    left: 0,
                    backgroundColor: 'black',
                    transform: 'scaleX(1)',
                    transformOrigin: 'bottom right',
                    transition: 'transform 0.3s ease-out',
                  }
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '2px',
                  bottom: '-2px',
                  left: 0,
                  backgroundColor: '#1565C0',
                  transform: 'scaleX(0)',
                  transformOrigin: 'bottom right',
                  transition: 'transform 0.3s ease-out',
                }
              }}
            >
              Company
            </Button>
            <Menu
              anchorEl={anchorElCompany}
              open={Boolean(anchorElCompany)}
              onClose={handleCompanyMenuClose}
              PaperProps={{
                sx: {
                  backgroundColor: 'rgba(32, 145, 249, 0.2)',
                  color: 'white',
                  mt: 1,
                  '& .MuiMenuItem-root': {
                    fontFamily: 'Montserrat',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(21, 101, 192, 0.8)',
                      textDecoration: 'underline',
                    }
                  }
                }
              }}
            >
              <MenuItem onClick={() => scrollToSection('how-it-works')}>How It Works</MenuItem>
              <MenuItem onClick={() => scrollToSection('our-story')}>Our Story</MenuItem>
              <MenuItem onClick={() => scrollToSection('about')}>About Us</MenuItem>
              <MenuItem onClick={() => scrollToSection('our-experts')}>Our Experts</MenuItem>
              <MenuItem onClick={() => scrollToSection('our-clients')}>Our Clients</MenuItem>
              <MenuItem onClick={() => scrollToSection('our-benefits')}>Our Benefits</MenuItem>
              <MenuItem onClick={() => scrollToSection('our-feeds')}>Our Feeds</MenuItem>
            </Menu>
          </Box>
          <IconButton
            sx={{ display: { xs: 'block', sm: 'none' }, color: scrolled ? 'black' : '#eaeaea', ml: 'auto' }}
            onClick={handleMainMenuOpen}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu 
        anchorEl={anchorElMain} 
        open={isMenuOpen} 
        onClose={handleMainMenuClose}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(32, 145, 249, 0.9)',
            color: 'white',
            '& .MuiMenuItem-root': {
              fontFamily: 'Montserrat',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(21, 101, 192, 0.8)',
                textDecoration: 'underline',
              }
            }
          }
        }}
      >
        <MenuItem onClick={() => scrollToSection('home')}>Home</MenuItem>
        <MenuItem onClick={() => scrollToSection('benefits')}>Benefits</MenuItem>
        <MenuItem onClick={() => scrollToSection('how-it-works')}>How It Works</MenuItem>
        <MenuItem onClick={() => scrollToSection('solution')}>Solutions</MenuItem>
        <MenuItem onClick={() => scrollToSection('our-technology')}>Our Technology</MenuItem>
        <MenuItem onClick={() => scrollToSection('our-story')}>Our Story</MenuItem>
        <MenuItem onClick={() => scrollToSection('about')}>About Us</MenuItem>
        <MenuItem onClick={() => scrollToSection('our-experts')}>Our Experts</MenuItem>
        <MenuItem onClick={() => scrollToSection('our-clients')}>Our Clients</MenuItem>
        <MenuItem onClick={() => scrollToSection('our-feeds')}>Our Feeds</MenuItem>
      </Menu>
      <Box
        onClick={() => scrollToSection('contactUs')}
        sx={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          backgroundColor: '#1565C0',
          borderRadius: '50%',
          width: '58px',
          height: '58px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          zIndex: 1000,
          '&:hover': {
            backgroundColor: '#0d47a1',
            transform: 'scale(1.1)',
            transition: 'all 0.3s ease',
          },
        }}
      >
        <PhoneIcon sx={{ color: 'white', fontSize: '30px' }} />
      </Box>
    </>
  );
};

export default Navbar;