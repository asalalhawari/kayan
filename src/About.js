import React, { useEffect, useState } from 'react';
import { Box, Typography, useMediaQuery, useTheme, Container, Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import kayanLogo from './img/kayanLogo.png';

const About = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showMoreDialog, setShowMoreDialog] = useState({ open: false, content: '' });

  const handleOpenDialog = (content) => {
    setShowMoreDialog({ open: true, content });
  };

  const handleCloseDialog = () => {
    setShowMoreDialog({ open: false, content: '' });
  };

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', overflow: 'hidden', position: 'relative' }}>
      <Box sx={{ height: '100vh', backgroundImage: 'url("https://www.kayan-healthcare.com/static/media/teamCover.21d14176.webp")', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: '40px', left: '26px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box component="img" src={kayanLogo} alt="Kayan Healthcare Logo" sx={{ width: isSmallScreen ? '100px' : isMediumScreen ? '140px' : '160px', height: isSmallScreen ? '100px' : isMediumScreen ? '120px' : '160px', filter: 'grayscale(50%)', boxShadow: '2px 2px 10px 18px rgba(255, 255, 255, 4.5)', border: '0px solid rgba(255, 255, 255, 4.5)' }} />
          <Typography variant="subtitle1" sx={{ color: '#fff', fontSize: isSmallScreen ? '24px' : isMediumScreen ? '36px' : '60px', fontWeight: '600', marginTop: '20px', textShadow: '10px 5px 8px rgba(0, 0, 0, 0.8)' }}>
            ABOUT US
          </Typography>
        </Box>
        <Box sx={{ 
          position: 'absolute', top: 0, 
          left: 0, width: '100%', height: '100%',
           backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 1 }} />
     
       <Container sx={{ py: 8, position: 'relative', zIndex: 2,maxWidth: {xs:'80%' , md:'50%' } }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: isSmallScreen ? 'column' : 'row', 
          alignItems: 'flex-start', 
          justifyContent: 'space-between', 
          gap: '16px',
          marginBottom: '16px'
          }}>
          <Box sx={{ 
            flex: 1, p: 3, 
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
             borderRadius: 2,
            boxShadow: 3,
            textAlign: 'center',
            padding:'3px'
            }}>
            <Typography variant="h5" fontWeight="bold" mb={2} sx={{ fontSize: { xs: '10px', sm: '14px' } }}>Who We Are</Typography>
            <Typography sx={{ fontSize: { xs: '9px', sm: '12px' } }}>
              Kayan Healthcare Technologies is a leading e-healthcare consulting and technology firm dedicated to enhancing healthcare delivery across the UAE and the GCC region.
            </Typography>
            <Button
            sx={{ fontSize: { xs: '7px', sm: '10px' } }} 
            onClick={() => handleOpenDialog("Kayan Healthcare Technologies is a leading e-healthcare consulting and technology firm dedicated to enhancing healthcare delivery across the UAE and the Gulf Cooperation Council (GCC) region. Our primary focus is to empower healthcare providers and payers with advanced, data-driven solutions that improve efficiency, enhance accuracy, and promote connectivity across the healthcare system. In response to the rapid technological advancements and evolving regulatory mandates in the healthcare sector, we have designed a suite of dynamic solutions that are tailored to meet the specific needs of our clients. Our offerings include first-stage clinical edits, benefit edits, and an advanced Diagnosis-Related Group (DRG) calculator, all of which are aimed at optimizing healthcare processes, improving service quality, and reducing medical errors. These solutions enable providers and payers to streamline their workflows, ensuring that every decision made is accurate, efficient, and aligned with industry standards.Our approach is rooted in the belief that healthcare should be proactive, precise, and people-centered. By integrating rigorously tested algorithms and modernized systems, we help our clients reduce diagnostic and treatment errors, lower operational costs, and, ultimately, enhance patient safety and satisfaction. Looking to the future, we are preparing to launch a specialized machine learning system as part of our second-phase growth. This advanced platform will support the development of sustainable, long-term health policies by leveraging predictive insights and enabling data-driven decision-making.")}>
            Read More</Button>
          </Box>

          <Box sx={{ flex: 1, p: 3,
             backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: 2, boxShadow: 3,
               textAlign: 'center',
               padding:'3px'
               }}>
            <Typography variant="h5" fontWeight="bold" mb={2} sx={{ fontSize: { xs: '10px', sm: '14px' } }}>Our Mission</Typography>
            <Typography sx={{ fontSize: { xs: '9px', sm: '12px' } }}>
              Our mission is to advance efficiency and precision in healthcare by providing tailored, high-value solutions.
            </Typography>
            <Button 
            sx={{ fontSize: { xs: '7px', sm: '10px' } }}
            onClick={() => 
            handleOpenDialog("Our mission is to advance efficiency and precision in healthcare by providing tailored, high-value solutions that elevate service quality and reduce medical errors. We empower clinics, hospitals, insurance companies, etc., to deliver safer, more reliable care by leveraging advanced technology, data-driven insights, and seamless connectivity across the healthcare continuum.")}>
              Read More</Button>
          </Box>
        </Box>

         <Box sx={{ p: 3, backgroundColor: 'rgba(255, 255, 255, 0.8)',
           borderRadius: 2, boxShadow: 3,
            textAlign: 'center', 
            maxWidth: isSmallScreen ? '70%' : '50%',
             mx: 'auto',
             padding:'3px'
             
             }}>
          <Typography variant="h5" fontWeight="bold" mb={2} sx={{ fontSize: { xs: '10px', sm: '14px' } }}>Our Vision</Typography>
          <Typography sx={{ fontSize: { xs: '7px', sm: '10px' } }}>
            Our vision is to shape a future where healthcare is both highly efficient and technologically advanced.
          </Typography>
          <Button
          sx={{ fontSize: { xs: '9px', sm: '12px' } }}
           onClick={() => handleOpenDialog("Our vision is to shape a future where healthcare is both highly efficient and technologically advanced, with solutions that not only address the immediate needs of our clients but also anticipate the challenges of tomorrow, meeting the evolving needs of payers, providers, and regulatory authorities. By setting new standards in healthcare technology, we aspire to lead the way in creating a healthcare landscape that is not only more effective but also more sustainable, adaptable, and equipped to serve future generations.")}>
            Read More</Button>
        </Box> 
      </Container> 

       <Dialog open={showMoreDialog.open} onClose={handleCloseDialog} maxWidth="sm" fullWidth
       sx={{ maxHeight: '80vh', overflow: 'auto'}}>
        <DialogTitle>Details</DialogTitle>
        <DialogContent>
          <Typography>{showMoreDialog.content}</Typography>
          <Button onClick={handleCloseDialog} sx={{ mt: 2 }}>Close</Button>
        </DialogContent>
      </Dialog> 
    </Box>
      </Box>

  );
};

export default About;

