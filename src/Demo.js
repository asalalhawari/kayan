import React, { useEffect } from 'react';
import { Box, Typography, IconButton, Grid, Container}from '@mui/material';
import {Card, CardContent, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Demo = () => {

  const scrollToContent = () => {
    const contentSection = document.getElementById('demo');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
      <Box
        sx={{
          height: '100vh',
          backgroundImage:'url("https://www.kayan-healthcare.com/static/media/market.45378bad.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            color: '#bfc8d1',
            padding: { xs: '20px', md: '40px' },
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.4)',
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '28px', md: '60px' },
              fontWeight: 'bold',
              mb: 2,
              opacity: 0.7,
            }}
          >
            Demo_Request
          </Typography>
          <IconButton onClick={scrollToContent} sx={{ color: '#bfc8d1' }}>
            <KeyboardArrowDownIcon sx={{ fontSize: { xs: '36px', md: '48px' } }} />
          </IconButton>
        </Box>
      </Box>
      <Container
        id="market-research"
        sx={{
          minHeight: '100vh',
          py: '40px',
          backgroundColor: '#f5f5f5',
          scrollMarginTop: '64px',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: '500',
            mb: 4,
            fontSize: { xs: '24px', md: '32px' },
            textAlign: 'center',
          }}
        >
          Pharmaceutical Market Research
        </Typography>

        <Grid container spacing={4} alignItems="flex-start">
          {/* Left Side: Description */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '16px', md: '18px' },
                color: '#444',
                mb: 2,
              }}
            >
              Our solutions offer a deep understanding of the pharmaceutical market, providing a range of top-quality services:
            </Typography>
            <List>
              {[
                'Primary Market Research',
                'Market Access Consultancy',
                'New Product Selection',
                'Healthcare Analytics',
                'Benchmarking Reports',
                'Business Intelligence Improvement',
                'Business Performance Management',
                'Projects Management',
                'Marketing Plan Preparation',
                'Geographic Analysis for Store Locations',
              ].map((item, index) => (
                <ListItem key={index} sx={{ paddingLeft: 0 }}>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Right Side: Additional Information in a Card */}
          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: '#fff', boxShadow: 3 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 'bold', mb: 2, color: '#333' }}
                >
                  Tailored Solutions for Your Business
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '16px', color: '#555' }}>
                  We also offer customized services to fit the unique needs of our clients. Whether it's a specific project or a comprehensive market strategy, our team is ready to help.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" sx={{ fontSize: '16px', color: '#555' }}>
                  Our geographic analysis services can assist with identifying the best locations for new stores, ensuring you maximize customer engagement and operational efficiency.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* <Container
        id="market-research"
        sx={{
          minHeight: '100vh',
          py: '40px',
          backgroundColor: '#f5f5f5',
          scrollMarginTop: '64px', 
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: '500',
                mb: 2,
                fontSize: { xs: '24px', md: '32px' },
                textAlign: 'left',
              }}
            >
              Pharmaceutical market research
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '16px', md: '18px' },
                textAlign: 'left',
                color: '#444',
                padding: { xs: '0 20px', md: '0' },
              }}
            >
              Our Solutions have a deep understanding of the drug market and offers the following top quality services to their clients:

                Primary Market Research
                Market Access Consultancy
                New Product selection
                Healthcare analytics
                Benchmarking Reports
                Business Intelligence Improvement
                Business Performance Management
                Projects Management
                Marketing Plan Preparation
                Geographic Analysis for current and new store locations
                as well as any other specific services that need to be tailored specifically for our clients.
            </Typography>
          </Grid>
        </Grid>
      </Container> */}
    </Box>
  );
};

export default Demo;
