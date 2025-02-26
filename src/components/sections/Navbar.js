
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

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [anchorElSolution, setAnchorElSolution] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const [anchorElMain, setAnchorElMain] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorElCompany, setAnchorElCompany] = useState(null);

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
  const handleMenuClose = () => {
    setAnchorElSolution(null);
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
    const sections = ['home', 'whykayan', 'provider-solutions', 'payer-solutions', 'ContactUs', 'demo', 'how-it-works', 'our-benefits', 'our-story', 'our-experts', 'our-clients'];
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
    }
  };

  const isActive = (sections) => sections.includes(activeSection);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 'none',
          backgroundColor: scrolled ? 'white' : 'rgba(108,143,153,0)',
          paddingLeft: { md: '3%', xs: 'none' },
          paddingTop: scrolled ? '1%' : '2%'
        }}
      >
        <Toolbar sx={{ justifyContent: { md: 'space-around', xs: 'flex-end' } }}>
          
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src={kayanlogo}
              alt="Kayan Healthcare Logo"
              sx={{ 
                width: { xs: '80px', sm: '162px' }, 
                height: { xs: '40px', sm: '78px' }, 
                filter: 'grayscale(50%)',
                cursor: 'pointer',
                ml: { xs: 0 }
              }}
            />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 0.5, justifyContent: 'space-around' }}>
            <Button 
              onClick={() => scrollToSection('home')} 
              sx={{
                color: scrolled ? 'black' : 'white',
                fontSize: activeSection === 'home' ? '18px' : '16px',
                fontWeight: activeSection === 'home' ? 'bold' : 'normal',
                transform: activeSection === 'home' ? 'scale(1.2)' : 'scale(1)',
                transition: 'all 0.3s',
                textTransform: 'capitalize'
              }}>
              Home
            </Button>

            <Button 
              onClick={() => scrollToSection('whykayan')} 
              sx={{
                color: scrolled ? 'black' : 'white',
                fontSize: activeSection === 'whykayan' ? '18px' : '16px',
                fontWeight: activeSection === 'whykayan' ? 'bold' : 'normal',
                transform: activeSection === 'whykayan' ? 'scale(1.2)' : 'scale(1)',
                transition: 'all 0.3s',
                textTransform: 'capitalize'
              }}>
              Why Kayan
            </Button>

            <Button 
              onClick={handleSolutionMenuOpen} 
              sx={{
                color: scrolled ? 'black' : 'white',
                fontSize: isActive(['provider-solutions', 'payer-solutions']) ? '18px' : '16px',
                fontWeight: isActive(['provider-solutions', 'payer-solutions']) ? 'bold' : 'normal',
                transform: isActive(['provider-solutions', 'payer-solutions']) ? 'scale(1.2)' : 'scale(1)',
                transition: 'all 0.3s',
                textTransform: 'capitalize'
              }}>
              Our Solutions <ArrowDropDownIcon />
            </Button>

            <Menu anchorEl={anchorElSolution} open={Boolean(anchorElSolution)} onClose={handleSolutionMenuClose}>
            <MenuItem
                onClick={() => scrollToSection('provider-solutions')}
                sx={{
                  fontSize: isActive(['provider-solutions']) ?  '16px' : '20px',
                  fontWeight: isActive(['provider-solutions']) ? 'bold' : 'normal',
                  transform: isActive(['provider-solutions']) ? 'scale(1.1)' : 'scale(1)',
                  textShadow: isActive(['provider-solutions']) ? '0 0 8px #00bfff, 0 0 16px #00bfff' : 'none',
                  transition: 'all 0.3s',
                  '&:hover': {
                    backgroundColor: '#1565c0', 
                  },
                }}
              >
                Provider Solutions
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection('payer-solutions')}
                sx={{
                  fontSize: isActive(['payer-solutions']) ?  '16px' : '20px',
                  fontWeight: isActive(['payer-solutions']) ? 'bold' : 'normal',
                  transform: isActive(['payer-solutions']) ? 'scale(1.1)' : 'scale(1)',
                  // textShadow: isActive(['payer-solutions']) ? '0 0 8px #00bfff, 0 0 16px #00bfff' : 'none',
                  transition: 'all 0.3s',
                  '&:hover': {
                    backgroundColor: '#1565c0', 
                  },
                }}
              >
                Payer Solutions
              </MenuItem>
            </Menu>

            <Button onClick={handleCompanyMenuOpen} 
            sx={{ 
              textTransform: 'capitalize', 
              color: scrolled ?'black':'#FFFFFF',
                textTransform: 'capitalize',
                fontSize: isActive(['how-it-works', 'our-benefits','our-story','our-experts','our-clients']) ? '16px' : '20px',
                fontWeight: isActive(['how-it-works', 'our-benefits','our-story','our-experts','our-clients']) ? 'bold' : 'normal',
                transform: isActive(['how-it-works', 'our-benefits','our-story','our-experts','our-clients']) ? 'scale(1.2)' : 'scale(1)',
                transition: 'all 0.3s',
              }}> 
              Company <ArrowDropDownIcon />
               </Button>

            <Menu anchorEl={anchorElCompany} open={Boolean(anchorElCompany)} onClose={handleMenuClose}>
              <MenuItem onClick={() => scrollToSection('how-it-works')}>How It Works</MenuItem>
              <MenuItem onClick={() => scrollToSection('our-benefits')}>Our Benefits</MenuItem>
              <MenuItem onClick={() => scrollToSection('our-story')}>Our Story</MenuItem>
              <MenuItem onClick={() => scrollToSection('our-experts')}>Our Experts</MenuItem>
              <MenuItem onClick={() => scrollToSection('our-clients')}>Our Clients</MenuItem>
            </Menu>
            <Button 
              onClick={() => scrollToSection('contactUs')} 
              sx={{
                color: scrolled ? 'black' : 'white',
                fontSize: activeSection === 'ContactUs' ? '18px' : '16px',
                fontWeight: activeSection === 'ContactUs' ? 'bold' : 'normal',
                transform: activeSection === 'ContactUs' ? 'scale(1.2)' : 'scale(1)',
                transition: 'all 0.3s',
                textTransform: 'capitalize'
              }}>
              Contact Us
            </Button>

            <Button 
              variant="contained"
              onClick={() => scrollToSection('demo')} 
              sx={{
                color: "#2091F9",
                backgroundColor: "#FFFFFF",
                fontSize: activeSection === 'demo' ? '18px' : '16px',
                fontWeight: activeSection === 'demo' ? 'bold' : 'normal',
                transform: activeSection === 'demo' ? 'scale(1.2)' : 'scale(1)',
                transition: 'all 0.3s',
                textTransform: 'capitalize',
                "&:hover": {
                  backgroundColor: "rgba(214,222,231,0.5)"
                }
              }}>
              Request a Demo
            </Button>
          </Box>
          <IconButton
            sx={{ display: { xs: 'block', sm: 'none' }, color: scrolled ? 'black' : '#eaeaea', ml: 'auto' }}
            onClick={handleMainMenuOpen}
          >
            <MenuIcon />
          </IconButton>


        </Toolbar>
      </AppBar>
      <Menu anchorEl={anchorElMain} open={isMenuOpen} onClose={handleMainMenuClose}>
        <MenuItem onClick={() => scrollToSection('home')}>Home</MenuItem>
        <MenuItem onClick={() => scrollToSection('whykayan')}>Why Kayan</MenuItem>
        <MenuItem onClick={() => scrollToSection('how-it-works')}>How It Works</MenuItem>
        <MenuItem onClick={() => scrollToSection('our-benefits')}>Our Benefits</MenuItem>
        <MenuItem onClick={() => scrollToSection('our-story')}>Our Story</MenuItem>
        <MenuItem onClick={() => scrollToSection('our-experts')}>Our Experts</MenuItem>
        <MenuItem onClick={() => scrollToSection('our-clients')}>Our Clients</MenuItem>
        <MenuItem onClick={() => scrollToSection('provider-solutions')}>Provider Solutions</MenuItem>
        <MenuItem onClick={() => scrollToSection('payer-solutions')}>Payer Solutions</MenuItem>
        <MenuItem onClick={() => scrollToSection('demo')}>Request a Demo</MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;
