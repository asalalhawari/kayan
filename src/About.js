import React, { useState, useEffect } from 'react';
import { Box, Typography, useMediaQuery, useTheme, Container, Stack} from '@mui/material';
import kayanLogo from './img/kayanLogo.png';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./components/ui/dialog";
import { Button as ButtonUI } from "./components/ui/button";
import { Card, CardContent } from '@mui/material';

const About = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [showMoreDialog, setShowMoreDialog] = useState({ open: false, content: '' });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenDialog = (content) => {
    setShowMoreDialog({ open: true, content });
  };

  const handleCloseDialog = () => {
    setShowMoreDialog({ open: false, content: '' });
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isVisible = (elementPosition) => {
    return scrollPosition >= elementPosition - 300;
  };

  return (
    <div id="about">
      <Box sx={{ width: '100%', minHeight: '100vh', overflow: 'hidden', position: 'relative' }}>
        <Box
          sx={{
            height: '100vh',
            backgroundImage: 'url("https://www.kayan-healthcare.com/static/media/services.2e20b4e4.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            position: 'relative'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '40px',
              left: '26px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: '#ffffff7d',
                fontSize: isSmallScreen ? '24px' : isMediumScreen ? '36px' : '50px',
                fontWeight: '600',
                marginTop: '20px',
                textShadow: '10px 5px 8px rgba(68, 102, 110, 0.8)'
              }}
            >
              ABOUT US
            </Typography>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              zIndex: 1
            }}
          />

          <Container
            className="card-animation"
            sx={{
              position: 'relative',
              zIndex: 2,
              maxWidth: { xs: '80%', md: '90%' },
              marginLeft: { xs: '8%', md: '8%' },
              // paddingRight: { xs: '5px', md: '0' },
              marginTop: { xs: '15px', md: '20px' },
            }}
          >
            <Stack spacing={4}
            direction="column"
            sx={{
              desplay:'flex',
              flexDirection: isSmallScreen ?"colomn":'revert-layer'
            }}
            >
              <Card
              className="card-animation"
               sx={{
                opacity: isVisible(100) ? 1 : 0,
                transform: isVisible(100) ? 'none' : 'translateY(50px)',
                transition: 'all 0.8s ease-in-out',
                backgroundColor: 'rgba(255, 255, 255, 0.39)',
                height: { xs: '200px', sm: '300px', md: '450px' },
                boxShadow: 3,
                borderRadius: '65px',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.2)', 
                  boxShadow: 6, 
                },
              }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    mb={2}
                    sx={{ fontSize: { xs: '12px', sm: '20px' } }}
                  >
                    Who We Are
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '9px', sm: '15px' } }}>
                     Kayan Healthcare Technologies is a leading e-healthcare consulting and technology firm dedicated to enhancing healthcare delivery across the UAE and the GCC region. Our primary focus is to empower healthcare providers and payers with advanced... 
                  </Typography>
                   <ButtonUI
                    variant="text"
                    onClick={() => handleOpenDialog("Who We Are, Kayan Healthcare Technologies is a leading e-healthcare consulting and technology firm dedicated to enhancing healthcare delivery across the UAE and the Gulf Cooperation Council (GCC) region. Our primary focus is to empower healthcare providers and payers with advanced, data-driven solutions that improve efficiency, enhance accuracy, and promote connectivity across the healthcare system. In response to the rapid technological advancements and evolving regulatory mandates in the healthcare sector, we have designed a suite of dynamic solutions that are tailored to meet the specific needs of our clients. Our offerings include first-stage clinical edits, benefit edits, and an advanced Diagnosis-Related Group (DRG) calculator, all of which are aimed at optimizing healthcare processes, improving service quality, and reducing medical errors. These solutions enable providers and payers to streamline their workflows, ensuring that every decision made is accurate, efficient, and aligned with industry standards. Our approach is rooted in the belief that healthcare should be proactive, precise, and people-centered. By integrating rigorously tested algorithms and modernized systems, we help our clients reduce diagnostic and treatment errors, lower operational costs, and, ultimately, enhance patient safety and satisfaction. Looking to the future, we are preparing to launch a specialized machine learning system as part of our second-phase growth. This advanced platform will support the development of sustainable, long-term health policies by leveraging predictive insights and enabling data-driven decision-making.")}
                    sx={{ 
                      fontSize: '9px', 
                      padding: '0px', 
                      // textTransform: 'none', 
                      color: '#007BFF', 
                      '&:hover': {
                            backgroundColor: 'transparent', 
                          },                    
                   }} 
                  >
                    Read More...
                  </ButtonUI> 
                </CardContent>
              </Card>

              <Card
              className="card-animation"
              sx={{
                width: isSmallScreen ? '90%' : isMediumScreen ? '45%' : '30%', 
                opacity: isVisible(100) ? 1 : 0,
                transform: isVisible(100) ? 'none' : 'translateY(50px)',
                transition: 'all 0.8s ease-in-out',
                backgroundColor: 'rgba(255, 255, 255, 0.39)',
                boxShadow: 3,
                height: { xs: '200px', sm: '300px', md: '450px' },
                borderRadius: '65px',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.2)', 
                  boxShadow: 6,
                
                },
              }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    mb={2}
                    sx={{ fontSize: { xs: '12px', sm: '20px' } }}
                  >
                    Our Mission
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '9px', sm: '15px' } }}>
                    Our mission is to advance efficiency and precision in healthcare by providing tailored, high-value solutions.
                  </Typography>
                  <ButtonUI
                    variant="text"
                    onClick={() => handleOpenDialog("Our Mission, Our mission is to advance efficiency and precision in healthcare by providing tailored, high-value solutions that elevate service quality and reduce medical errors. We empower clinics, hospitals, insurance companies, etc., to deliver safer, more reliable care by leveraging advanced technology, data-driven insights, and seamless connectivity across the healthcare continuum.")}
                    sx={{ 
                      fontSize: '9px', 
                      padding: '0px', 
                      // textTransform: 'none', 
                      color: '#ffffff7d', 
                      '&:hover': {
                         backgroundColor: 'transparent', 
                        },                    
                   }}                 
                     >
                    Read More...
                  </ButtonUI>
                </CardContent>
              </Card>

              <Card
              className="card-animation"
               sx={{
                opacity: isVisible(100) ? 1 : 0,
                transform: isVisible(100) ? 'none' : 'translateY(50px)',
                transition: 'all 0.8s ease-in-out',
                backgroundColor: 'rgba(255, 255, 255, 0.39)',
                height: { xs: '200px', sm: '300px', md: '450px' },
                boxShadow: 3,
                borderRadius: '65px',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.2)', 
                  boxShadow: 6, 
                },
              }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    mb={2}
                    sx={{ fontSize: { xs: '12px', sm: '20px' } }}
                  >
                    Our Vision
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '9px', sm: '15px' } }}>
                    Our vision is to shape a future where healthcare is both highly efficient and technologically advanced.
                  </Typography>
                  <ButtonUI
                    variant="text"
                    onClick={() => handleOpenDialog(" Our Vision, Our vision is to shape a future where healthcare is both highly efficient and technologically advanced, with solutions that not only address the immediate needs of our clients but also anticipate the challenges of tomorrow, meeting the evolving needs of payers, providers, and regulatory authorities. By setting new standards in healthcare technology, we aspire to lead the way in creating a healthcare landscape that is not only more effective but also more sustainable, adaptable, and equipped to serve future generations.")}
                    sx={{ 
                      fontSize: '9px', 
                      padding: '0px', 
                      // textTransform: 'none', 
                      color: '#007BFF', 
                      '&:hover': {
                            backgroundColor: 'transparent', 
                          },                    
                   }}                   >
                    Read More...
                  </ButtonUI>
                </CardContent>
              </Card>
            </Stack>

            <Dialog
              open={showMoreDialog.open}
              onClose={handleCloseDialog}
              maxWidth="70%"
              fullWidth
              sx={{ 
                maxHeight: '80vh',
                overflow: 'auto',
                backgroundColor: 'rgba(255, 255, 255, 0.85)', 
                boxShadow: 6, 
                borderRadius: '20px', 
                backdropFilter: 'blur(10px)', 
                border: '1px solid rgba(0, 0, 0, 0.1)', 
              }}
            >
              <DialogContent
                sx={{
                  padding: '20px', 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
              <Typography
                sx={{
                  fontSize: '16px',
                  color: '#555',
                  textAlign: 'justify',
                }}
              >
                {showMoreDialog.content} 
              </Typography>
              <DialogFooter>
                <ButtonUI
                  onClick={handleCloseDialog}
                  sx={{
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    fontSize: '14px',
                    padding: '10px 20px',
                    borderRadius: '10px',
                    '&:hover': {
                      backgroundColor: '#0056b3',
                    },
                  }}
                >
                  Close
                </ButtonUI>
              </DialogFooter> 
            </DialogContent>
          </Dialog>

          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default About;

