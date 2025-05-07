
import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, useMediaQuery, Button } from '@mui/material';
import Solution from './Solution';

const Solutions = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:900px)');
  const [selectedSolution, setSelectedSolution] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const petraSolutions = [
    {
      number: '01',
      title: 'POs Integration & Visualization',
      description: 'Enables seamless connections between healthcare providers and insurers through POs. Track the entire claims lifecycle and create insightful dashboards.',
    },
    {
      number: '02',
      title: 'Medical and Coding Scrubber',
      description: 'Built-in Edits and Checks that assist the user in validating the claims in compliance with medical and coding guidelines.',
    },
    {
      number: '03',
      title: 'Custom Validations',
      description: 'An advanced layer enables the user to configure relations based on their needs and enhance claim scrubbing in compliance with TOB.',
    },
    {
      number: '04',
      title: 'AI Module',
      description: 'This layer uses historical validation and AI to analyze the database, generating various scenarios and detailed insights that help users understand the behaviors of all entities and improve data-driven decision-making.',
    },
  ];

  const qudraSolutions = [
    {
      number: '01',
      title: 'Connection Layer',
      description: 'Facilitate seamless integration across insurer systems with a robust SaaS model.',
    },
    {
      number: '02',
      title: 'Automation Layer',
      description: 'Automate claims processing with advanced systems, improving efficiency and accuracy.',
    },
    {
      number: '03',
      title: 'Intelligence Layer',
      description: 'Provide technical business intelligence tools for logical claim referencing and analysis.',
    },
    {
      number: '04',
      title: 'Assistance Layer',
      description: 'Deliver ongoing support to insurers, ensuring compliance and operational excellence.',
    },
  ];

  const handlePetraClick = () => {
    setSelectedSolution('PETRA');
  };

  const handleQudraClick = () => {
    setSelectedSolution('QUDRA');
  };

  const handleBackClick = () => {
    setSelectedSolution(null);
  };

  return (
    <Container
      id="solution"
      maxWidth="lg"
      sx={{
        width: '100%',
        minHeight: isSmallScreen ? 'auto' : isMediumScreen ? '80vh' : '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isSmallScreen ? '5%' : isMediumScreen ? '3%' : '2%',
        overflowX: 'hidden',
      }}
    >
      {!selectedSolution ? (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            marginTop: isSmallScreen ? '30px' : isMediumScreen ? '30px' : '85px',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: '700',
              color: '#458FF6',
              fontFamily: 'Josefin Sans',
              textTransform: 'uppercase',
              fontSize: isSmallScreen ? '0.9rem' : isMediumScreen ? '0.9rem' : '1.5rem',
              marginBottom: isSmallScreen ? '30px' : isMediumScreen ? '50px' : '70px',
              lineHeight: isSmallScreen ? 1.3 : 1.5,
              textAlign: isSmallScreen ? "left" : "center",
            }}
          >
            Mastering the full Claim Cycle from seamless transition to robust validation via our Multi-Modal Solutions
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: isSmallScreen ? 'column' : 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              gap: isSmallScreen ? '40px' : isMediumScreen ? '30px' : '40px',
            }}
          >
            {/* PETRA Section */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: isSmallScreen ? '8px' : isMediumScreen ? '15px' : '20px',
              }}
            >
              <Box
                sx={{
                  width: isSmallScreen ? '80px' : isMediumScreen ? '150px' : '250px',
                  height: isSmallScreen ? '80px' : isMediumScreen ? '120px' : '200px',
                  border: '9px solid #458FF6',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
                onClick={handlePetraClick}
              >
                <Typography
                  sx={{
                    color: '#233876',
                    fontSize: isSmallScreen ? '0.9rem' : isMediumScreen ? '1.5rem' : '2.2rem',
                    fontWeight: '700',
                    fontFamily: 'Josefin Sans',
                  }}
                >
                  PETRA
                </Typography>
              </Box>

              <Box
                sx={{
                  width: isSmallScreen ? '40px' : isMediumScreen ? '60px' : '120px',
                  height: isSmallScreen ? '40px' : isMediumScreen ? '60px' : '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34 24L14 4L9 9L24 24L9 39L14 44L34 24Z"
                    fill="#1E3A8A"
                  />
                </svg>
              </Box>

              <Typography
                sx={{
                  color: '#233876',
                  fontSize: isSmallScreen ? '0.8rem' : isMediumScreen ? '0.8rem' : '1rem',
                  fontWeight: '700',
                  fontFamily: 'Josefin Sans',
                  textAlign: 'center',
                  marginLeft: isSmallScreen ? '0' : isMediumScreen ? '-50px' : '-62px',
                  maxWidth: isSmallScreen ? '150px' : 'none',
                  lineHeight: 1.2,
                }}
              >
                MULTI-LAYERED HEALTHCARE PROVIDER SOLUTION
              </Typography>
            </Box>

            {/* QUDRA Section */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: isSmallScreen ? '8px' : isMediumScreen ? '15px' : '20px',
              }}
            >
              <Box
                sx={{
                  width: isSmallScreen ? '80px' : isMediumScreen ? '150px' : '250px',
                  height: isSmallScreen ? '80px' : isMediumScreen ? '120px' : '200px',
                  border: '9px solid #458FF6',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
                onClick={handleQudraClick}
              >
                <Typography
                  sx={{
                    color: '#233876',
                    fontSize: isSmallScreen ? '0.9rem' : isMediumScreen ? '1.5rem' : '2.2rem',
                    fontWeight: '700',
                    fontFamily: 'Josefin Sans',
                  }}
                >
                  QUDRA
                </Typography>
              </Box>

              <Box
                sx={{
                  width: isSmallScreen ? '40px' : isMediumScreen ? '60px' : '120px',
                  height: isSmallScreen ? '40px' : isMediumScreen ? '60px' : '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34 24L14 4L9 9L24 24L9 39L14 44L34 24Z"
                    fill="#1E3A8A"
                  />
                </svg>
              </Box>

              <Typography
                sx={{
                  color: '#233876',
                  fontSize: isSmallScreen ? '0.8rem' : isMediumScreen ? '0.8rem' : '1rem',
                  fontWeight: '700',
                  fontFamily: 'Josefin Sans',
                  textAlign: 'center',
                  marginLeft: isSmallScreen ? '0' : isMediumScreen ? '-20px' : '-26px',
                  maxWidth: isSmallScreen ? '150px' : 'none',
                  lineHeight: 1.2,
                }}
              >
                MULTI-LAYERED INSURER SOLUTION
              </Typography>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            marginTop: isSmallScreen ? '20px' : isMediumScreen ? '30px' : '45px',
            paddingBottom: isSmallScreen ? '20px' : isMediumScreen ? '30px' : '40px',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: '700',
              color: '#458FF6',
              fontFamily: 'Josefin Sans',
              textTransform: 'uppercase',
              fontSize: isSmallScreen ? '1.2rem' : isMediumScreen ? '1.5rem' : '2rem',
              marginBottom: isSmallScreen ? '20px' : isMediumScreen ? '30px' : '40px',
            }}
          >
            {selectedSolution} SOLUTIONS
          </Typography>

          {/* Card Container with Shadow */}
          <Box
            sx={{
              width: isSmallScreen ? '100%' : isMediumScreen ? '90%' : '100%',
              height:"500px",
              backgroundColor: '#f5f7fa',
              borderRadius: '15px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              padding: isSmallScreen ? '15px' : isMediumScreen ? '20px' : '25px',
              display: 'flex',
              flexDirection: 'row', // Display cards in a row
              gap: isSmallScreen ? '10px' : isMediumScreen ? '15px' : '20px',
              flexWrap: isSmallScreen ? 'wrap' : 'nowrap', // Wrap on small screens if needed
              justifyContent: 'center',
            }}
          >
            {(selectedSolution === 'PETRA' ? petraSolutions : qudraSolutions).map((solution, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  width: isSmallScreen ? '45%' : isMediumScreen ? '23%' : '22%', // Narrow width to fit all cards in a row
                  minHeight: isSmallScreen ? '200px' : isMediumScreen ? '220px' : '150px', // Moderate height
                  padding: isSmallScreen ? '10px' : '15px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#e3f0ff',
                    minHeight: isSmallScreen ? '220px' : isMediumScreen ? '240px' : '280px', // Increase height on hover
                    transform: 'translateY(40px)',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: isSmallScreen ? '1.5rem' : isMediumScreen ? '2rem' : '2.5rem',
                      fontWeight: '700',
                      color: '#458FF6',
                      fontFamily: 'Montserrat, sans-serif',
                      marginBottom: '8px',
                    }}
                  >
                   #{solution.number}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: '600',
                      color: '#458FF6',
                      fontSize: isSmallScreen ? '0.9rem' : isMediumScreen ? '1rem' : '1.2rem',
                      fontFamily: 'Montserrat, sans-serif',
                      marginBottom: '8px',
                    }}
                  >
                    {solution.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: isSmallScreen ? '0.7rem' : isMediumScreen ? '0.8rem' : '0.9rem',
                      color: '#666',
                      fontFamily: 'Montserrat, sans-serif',
                      lineHeight: 1.4,
                      textAlign: "left",
                      marginTop:"20px"
                    }}
                  >
                    {solution.description}
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: '#458FF6',
                      color: '#fff',
                      borderColor: '#458FF6',
                    fontWeight: '500',
                    width:"107px",
                    fontSize: isSmallScreen ? '0.6rem' : '0.7rem',
                    textTransform: 'none',
                    borderRadius: '20px',
                    padding: '4px 10px',
                    marginTop: '10px',
                    '&:hover': {
                      backgroundColor: '#fff',
                      color: '#458FF6',
                      borderColor: '#458FF6',
                    },
                  }}
                >
                  Go To Solution
                </Button>
              </Box>
            ))}
          </Box>

          <Typography
            sx={{
              color: '#1976d2',
              fontSize: isSmallScreen ? '0.7rem' : isMediumScreen ? '0.8rem' : '1rem',
              fontWeight: '700',
              fontFamily: 'Josefin Sans',
              marginTop: isSmallScreen ? '20px' : isMediumScreen ? '30px' : '40px',
              cursor: 'pointer',
            }}
            onClick={handleBackClick}
          >
            Back to Solutions
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Solutions;