
import React from 'react';
import { Box, Typography, Link,IconButton, Container, useMediaQuery,Stack, useTheme, Card, CardContent } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        //  position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(29,55,81,0.85)',
        color: 'white',
        padding: { xs: '10px', sm: '20px' }, 
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        overflow: 'hidden'
      }}
    >
          <Container
        sx={{
          padding: { xs: '10px', sm: '10px' }, 
          display: 'flex',
          maxWidth: '100%', 
        //   flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
      
      <Box sx={{  marginBottom: { xs: '10px', md: '0' } }}>
        <Typography variant="h6" sx={{ fontSize: { xs: '10px', sm: '13px' } }}>Main Office</Typography>
        <Typography sx={{ fontSize: { xs: '7px', sm: '12px' } }}>
          <LocationOnIcon sx={{ fontSize: { xs: '7px', sm: '25px' },padding:'5px' }} /> 
           REALOGICS STAR REAL ESTATE L.L.C Y Z BUILDING, Off 323, 3 rd floor floor, Alquoz 3 
        </Typography>
        <Typography sx={{ fontSize: { xs: '7px', sm: '12px' } }}>
          <PhoneIcon sx={{ fontSize: { xs: '10px', sm: '18px' } }}  /> +971561207460
        </Typography>
      </Box>

       <Box sx={{  marginBottom: { xs: '10px', md: '0' } }}>
       <Typography variant="h6" sx={{ fontSize: { xs: '10px', sm: '13px' } }}>Contact Number</Typography>

        <Typography sx={{ fontSize: { xs: '7px', sm: '12px' } }}>
          <PhoneIcon sx={{ fontSize: { xs: '10px', sm: '18px' } }}  /> +971561207460
        </Typography>
      </Box> 

<Box sx={{  marginBottom: { xs: '10px', md: '0' } }}>
<Typography variant="h6" sx={{ fontSize: { xs: '9px', sm: '13px' } }}>Follow Us</Typography>
        <Link 
          href="https://www.linkedin.com/company/kayan-healthcare-technologies/mycompany/"
          target="_blank" rel="noopener"
        >
          <IconButton sx={{ color:'#1565c0' }}>
            <LinkedInIcon sx={{ fontSize: { xs: '15px', sm: '27px' } }} />
          </IconButton>
        </Link>
      </Box>
      </Container>
    </Box>
  );
};

export default Footer;
