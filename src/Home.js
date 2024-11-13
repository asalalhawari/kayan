import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Container, useMediaQuery, Stack, useTheme, Dialog, DialogTitle, DialogContent, Button, capitalize } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import kayanLogo from './img/kayanLogo.png'; 



const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContent = () => {
    const contentSection = document.getElementById('services-content');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  const feeds = [
    {
      title: 'Payer Solutions',
      description: 'Our solutions help payers in quickly identifying errors in claims and settling them.',
      image: 'https://www.kayan-healthcare.com/static/media/service1.8c40564f.webp',
    },
    {
      title: 'Provider Solutions',
      description: 'Our software provides top of the line improved clinical edit checks, removes vague codes, and comes with claim management features.',
      image: 'https://www.kayan-healthcare.com/static/media/service2.bf61dbe1.webp',
    },
    {
      title: 'Machine Learning Solutions',
      description: 'Our software uses machine learning techniques to show predictions and statistics to doctors, vendors, and payers to reach optimal decisions.',
      image: 'https://www.kayan-healthcare.com/static/media/service3.32698236.webp',
    },
  ];


  const [currentFeedIndex, setCurrentFeedIndex] = useState(0);
  const [isDialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeedIndex((prevIndex) => (prevIndex + 1) % feeds.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [feeds.length]);

  const handleReadMore = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);

   const handleDotClick = (index) => {
    setCurrentFeedIndex(index);
  };

  return (
    <>

         <Box
         sx={{
          height: '100vh',
          backgroundImage: 'url("https://www.kayan-healthcare.com/static/media/services.2e20b4e4.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'left',
          textAlign: 'center',
          width: '100%',
          overflowX:'hidden',
          // padding: '20px',
              // opacity: '0.99',
              
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '40px',
            left: '26px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
            // backgroundColor: 'rgb(0,0,0.5)',
          }}
        >
         
          <Box
            component="img"
            src={kayanLogo}
            alt="Kayan Healthcare Logo"
            sx={{
              width: isSmallScreen ? '120px' : '160px',
              height: isSmallScreen ? '120px' : '100px',
              // borderRadius: '10%',
              filter: 'grayscale(50%)',
              transition: 'opacity 0.3s ease-in-out, transform 0.3s',
              
              boxShadow: '2px 2px 10px 18px rgba(255, 255, 255, 4.5)',
              border: '0px solid rgba(255, 255, 255, 4.5)',
            }}
            
   
          />

          <Typography
            variant="subtitle1"
            sx={{
              color: '#5c836deb',
              marginTop: '30px',
              fontWeight: '500',
              fontSize: { xs: '14px', md: '20px' },
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
            }}
          >
            Shape the Future...
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            maxWidth: {xs:'100',md:'700px'},
            padding: isSmallScreen ? '8px' : '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Typography
            variant={isSmallScreen ? 'h6' : 'h4'}
            gutterBottom
            sx={{ 
              fontSize:isSmallScreen ? '15px' :'20px',
              marginTop: '200px',
              color: '#3d614ce3', 
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
              fontWeight: 'bold',
              textAlign: 'left',
             }}
          >
            LEADERS IN HEALTHCARE SERVICES
          </Typography>
          <Typography
            variant={isSmallScreen ? 'h6' : 'h5'}
            sx={{ color: '#55677bb5', 
              fontSize:isSmallScreen ? '11px' :'15px',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',textAlign: 'left', }}
          >
            We provide a comprehensive suite of modular software systems tailored
            to meet the healthcare requirements for the Healthcare and Insurance sector.
          </Typography>
          {/* <IconButton onClick={scrollToContent} sx={{ color: '#55677bb5' }}>
            <KeyboardArrowDownIcon sx={{ fontSize: { xs: '30px', md: '40px' } }} />
          </IconButton> */}
       
        </Box>
        
      </Box>
      <Container id="feeds-section" sx={{   
              marginTop: '30px',
              // marginBottom: '0px', 
              width:{xs:'100%', md:'100%'} ,
              // boxShadow: '3px 4px 10px rgba(0, 0, 0, 1)',
              //  padding:'15px',
              }}>
        {/* <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: 'center',
            color: '#3d614ce3',
            fontSize: { xs: '20px', md: '40px' },
            marginTop: '10px',
            fontWeight: 'bold',
            fontFamily: 'ui-serif',
            textShadow:'5px 3px 15px rgba(0, 0, 0, 0.5)',  
            boxShadow: '3px 4px 10px rgba(0, 0, 0, 0.6)',
            // borderRadius: '45%',
          }}
        >
         Feeds
        </Typography> */}

       
        <Box
        sx={{
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row', 
          alignItems: 'center',
          gap: 2,
          justifyContent: isSmallScreen ? 'center' : 'flex-start', 
        }}
        >
          <Box sx={{ 
            width: isSmallScreen ? '80%' : '55%',
            height: isSmallScreen ? '160px': '200px', 
            backgroundColor: 'rgba(255, 255, 255, 0.5)', 
            borderRadius: '10px',
            textAlign: 'left', 
          }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: '500', 
                mb: 2, 
                fontSize: '12px',
                padding: '20px',
                fontWeight: '600',
                marginBottom: '10px',
              }}
            >
              {feeds[currentFeedIndex].title}
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ fontSize: '9px', padding: '4px' }}
            >
              {feeds[currentFeedIndex].description}...
              <Button onClick={handleReadMore} sx={{ fontSize: '10px', textTransform: 'lowercase' }}>
                Read more...
              </Button>
            </Typography>
          </Box>

          <Box
            component="img"
            src={feeds[currentFeedIndex].image}
            alt={feeds[currentFeedIndex].title}
            sx={{
             
              width: isSmallScreen ? '80%' : '40%',
              height: isSmallScreen ? '160px': '190px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
            
            }}
          />
        </Box>

    <Stack direction="row" spacing={1} sx={{ marginTop: 2 ,justifyContent: 'center',}}>
          {feeds.map((feed, index) => (
            <Box
              key={index}
              onClick={() => handleDotClick(index)}
              sx={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                backgroundColor: currentFeedIndex === index ? 'primary.main' : 'grey.400',
                cursor: 'pointer',
                
              }}
            />
          ))}
        </Stack>
          <Dialog open={isDialogOpen} onClose={handleCloseDialog} fullWidth maxWidth="md">
            <DialogTitle>{feeds[currentFeedIndex].description}</DialogTitle>
            <DialogContent
            // sx={{
            // fontSize:'15px'
            // }}
            >
              <Typography variant="body1">{feeds[currentFeedIndex].fullArticle}</Typography>
            </DialogContent>
          </Dialog>
      </Container>
    
    </>
  );
};

export default Home; 


