

import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [anchorElMain, setAnchorElMain] = useState(null);
  const [anchorElSolution, setAnchorElSolution] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleMenuClick = (path) => {
    navigate(path);
    handleMainMenuClose();
    handleSolutionMenuClose();
  };

  const isActive = (paths) => paths.includes(location.pathname);

  return (
    <>
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled ? 'white' : 'transparent',
        transition: 'background-color 0.3s',
        // boxShadow: 'none',
        paddingLeft: {md:'43%',xs: 'none'},
        paddingRight: {md:'15%',xs: 'none'},
        paddingTop: scrolled ?'0%':'2%',
        boxShadow: scrolled ? '0px 4px 10px rgba(0, 191, 255, 0.5)' : 'none', 
      }}
    >
      <Toolbar sx={{ 
        justifyContent: { md:' space-between', xs:'flex-end'}
        }}>
        
        <IconButton
          sx={{ display: { xs: 'block', sm: 'none' }, color: scrolled ? 'black' : '#eaeaea' }}
          onClick={handleMainMenuOpen}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1, justifyContent:' space-between'}}>
          <Button
            component={Link}
            to="/"
            sx={{
              color: scrolled ? 'black' : 'white',
              fontSize: isActive(['/']) ? '1.2rem' : '1rem',
              fontWeight: isActive(['/']) ? 'bold' : 'normal',
              transform: isActive(['/']) ? 'scale(1.1)' : 'scale(1)',
              transition: 'all 0.3s',
              fontSize: '20px',
              textTransform: 'capitalize',
              textShadow: isActive(['/']) ? '0 0 8px #00bfff, 0 0 16px #00bfff' : 'none',
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/about"
            sx={{
              color: scrolled ? 'black' : 'white',
              textTransform: 'capitalize',
              fontSize: isActive(['/about']) ? '1.2rem' : '1rem',
              fontWeight: isActive(['/about']) ? 'bold' : 'normal',
              transform: isActive(['/about']) ? 'scale(1.1)' : 'scale(1)',
              transition: 'all 0.3s',
              fontSize: '20px',
              textShadow: isActive(['/about']) ? '0 0 8px #00bfff, 0 0 16px #00bfff' : 'none',
            }}
          >
            About
          </Button>
          <Button
            onClick={handleSolutionMenuOpen}
            sx={{
              color: scrolled ? 'black' : 'white',
              textTransform: 'capitalize',
              fontSize: isActive(['/provider-solutions', '/payer-solutions']) ? '1.2rem' : '1rem',
              fontWeight: isActive(['/provider-solutions', '/payer-solutions']) ? 'bold' : 'normal',
              transform: isActive(['/provider-solutions', '/payer-solutions']) ? 'scale(1.1)' : 'scale(1)',
              textShadow: isActive(['/provider-solutions', '/payer-solutions']) ? '0 0 8px #00bfff, 0 0 16px #00bfff' : 'none',
              transition: 'all 0.3s',
              fontSize: '20px',
            }}
          >
            Solution
          </Button>

          <Menu
            anchorEl={anchorElSolution}
            open={Boolean(anchorElSolution)}
            onClose={handleSolutionMenuClose}
          >
            <MenuItem onClick={() => handleMenuClick('/provider-solutions')}>
              Provider Solutions
            </MenuItem>
            <MenuItem onClick={() => handleMenuClick('/payer-solutions')}>
              Payer Solutions
            </MenuItem>
          </Menu>

          <Button
            component={Link}
            to="/demo"
            sx={{
             
              color: scrolled ? 'black' : 'white',
              fontSize: isActive(['/demo']) ? '1.2rem' : '1rem',
              fontWeight: isActive(['/demo']) ? 'bold' : 'normal',
              transform: isActive(['/demo']) ? 'scale(1.1)' : 'scale(1)',
              transition: 'all 0.3s',
              textTransform: 'capitalize',
              fontSize: '20px',
              textShadow: isActive(['/demo']) ? '0 0 8px #00bfff, 0 0 16px #00bfff' : 'none',
            }}
          >
            Demo
          </Button>

        </Box>

        <Menu anchorEl={anchorElMain} open={isMenuOpen} onClose={handleMainMenuClose}>
          <MenuItem onClick={() => handleMenuClick('/')}>Home</MenuItem>
          <MenuItem onClick={() => handleMenuClick('/about')}>About</MenuItem>
          <MenuItem onClick={() => handleMenuClick('/provider-solutions')}>Provider Solutions</MenuItem>
          <MenuItem onClick={() => handleMenuClick('/payer-solutions')}>Payer Solutions</MenuItem>
          <MenuItem onClick={() => handleMenuClick('/demo')}> Demo</MenuItem>
        </Menu>
        
      </Toolbar>
    </AppBar>
    <Button
        variant="contained"
        sx={{
          position: 'fixed',
          bottom: { xs: 110, sm: 130 },  
          right: { xs: '30px', sm: '40px' },   
          backgroundColor: '#1565c0',
          color: 'white',
          borderRadius: '0px',
          padding: { xs: '8px 16px', sm: '10px 20px' },
          boxShadow: '2px 2px 10px 7px  #1565c0', 
           border: '0px solid #1565c0',
          zIndex: 1000,
          fontSize: { xs: '0.8rem', sm: '1rem' },  
          transition: 'all 0.3s',
          '&:hover': {
            backgroundColor: '#979a9c',
            boxShadow: '2px 2px 10px 7px  #979a9c', 
            border: '0px solid #979a9c',
          },
        }}
        onClick={() => navigate('/contactUs')}
      >
     <PhoneIcon />
   </Button>
   </>
  );
};

export default Navbar;
