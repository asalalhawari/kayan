import React from "react";
import { Container, Box,Typography,useMediaQuery } from "@mui/material";
import clients_map from '../../img/clients_map.png'
const OurClient = () => {
        const isSmallScreen = useMediaQuery('(max-width:600px)');
    
  return (
    <Container  id="our-clients" maxWidth="md"
    sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isSmallScreen ? '5%' : '2%',
        overflowX:"hidden"
      }}>
       <Box
           sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'ledt',
            justifyContent: 'left',
            textAlign: 'left',
             marginTop: isSmallScreen ? '40px' : '75px',
            }}
            >
        <Typography 
         variant="h4"
         sx={{
             fontWeight: '700',
            color: '#458FF6',
            fontFamily: 'Josefin Sans',
            textTransform: 'uppercase',
            fontSize: { xs: '28px', md: '36px' },
            }}
        >
                Our Clients
            </Typography>

            </Box>
      <Box
              component="img"
              src={clients_map}
              alt="Kayan clients"
              sx={{ 
                width: { xs: '750px', sm: '1200px' }, 
                height: { xs: '250px', sm: '500px' }, 
                filter: 'grayscale(50%)',
                cursor: 'pointer',
                ml: { xs: 0 },
                marginTop:"20px"
              }}
            />
    </Container>
  );
};

export default OurClient;
