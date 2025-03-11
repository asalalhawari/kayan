import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, useMediaQuery, Popover } from '@mui/material';
import AmaanConnector from '../../img/AmaanConnector.png';
import Sayan from '../../img/Sayan.png';
import Leen from '../../img/Leen.png';
import Sama from '../../img/Sama.png';
import Bayan from '../../img/Bayan.png';
import KareemBenefits from '../../img/KareemBenefits.png';
import AmaanIntegration from '../../img/AmaanIntegration.png';

const Solutions = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverContent, setPopoverContent] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (event, content) => {
    setAnchorEl(event.currentTarget);
    setPopoverContent(content);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const payers = [
    {
      title: 'Amaan Connector',
      src: AmaanConnector,
      alt: 'Amaan Connector',
      descriptions: [
        'Our SaaS model facilitates seamless integration across healthcare systems',
      ],
    },
    {
      title: 'Sayan',
      src: Sayan,
      alt: 'Sayan',
      descriptions: [
        'SAYAN is an advanced system that automates payer claims processing, providing reviews and feedback per medical references and coding guidelines. It incorporates around 25 million edit combinations, with ongoing additions to enhance its capabilities over time',
      ],
    },
    {
      title: 'Leen',
      src: Leen,
      alt: 'Leen',
      descriptions: [
        'LEEN is a technical business intelligence tool that provides logical references to claims based on various clinical and technical parameters',
      ],
    },
  ];

  const providers = [
    {
      title: 'Amaan Integration',
      src: AmaanIntegration,
      alt: 'Amaan Integration',
      descriptions: [
        'Amaan Integration introduces a cloud-based gateway seamlessly connected to the Post Office. Additionally, it offers a portal connection, enabling users to utilize the system independently for testing, validation, and account management purposes',
      ],
    },
    {
      title: 'Bayan',
      src: Bayan,
      alt: 'Bayan',
      descriptions: [
        'Bayan Clinical Rule Engine (CRE) is a provider solution that relies on a massive database of 35 million+ combinations to provide valuable feedback that helps deliver clean claims that adhere to medical and coding guidelines.',
      ],
    },
    {
      title: 'Kareem Benefits',
      src: KareemBenefits,
      alt: 'Kareem Benefits',
      descriptions: [
        'Kareem Benefits is a benefit tool that uses a massive database of benefit rule combinations to help create a clean claim that adheres to the benefit rules as per the contractual agreement between the provider and payer.',
      ],
    },
    {
      title: 'Sama',
      src: Sama,
      alt: 'Sama',
      descriptions: [
        'Sama is a multi-level technical business intelligence tool that provides logical references to claims based on various clinical and technical parameters. On top of that, SAMA provides a fully functional RCM solution that helps automate every step of the process.',
      ],
    },
  ];

  return (
    <Box
      id="solution"
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isSmallScreen ? '5%' : '2%',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          marginTop: isSmallScreen ? '40px' : '85px',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: '700',
            color: '#458FF6',
            fontFamily: 'monospace',
            fontSize: isSmallScreen ? '1.5rem' : '2rem',
          }}
        >
          OUR SOLUTIONS
        </Typography>
        <Typography
          sx={{
            fontSize: isSmallScreen ? '0.6rem' : '0.7rem',
            color: 'black',
            marginTop: '10px',
            lineHeight: '1.4',
            maxWidth: isSmallScreen ? '90%' : '40%',
            marginX: 'auto',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
        </Typography>
      </Box>

      <Grid container spacing={isSmallScreen ? 2 : 3} sx={{ width: '100%', padding: isSmallScreen ? '5%' : '0 7%', marginBottom: '40px' }}>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              color: '#233876',
              fontSize: isSmallScreen ? '0.8rem' : '0.9rem',
              fontWeight: '700',
              fontFamily: 'Josefin Sans',
              textAlign: 'center',
              marginTop: '15px',
            }}
          >
            Provider Solutions
          </Typography>
          <Grid container spacing={isSmallScreen ? 2 : 3}>
            {providers.map((provider, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box
                  sx={{
                    height: isSmallScreen ? 'auto' : '190px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    justifyContent: 'flex-start',
                    position: 'relative',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    borderRadius: '10px',
                  }}
                >
                  <Box
                    sx={{
                      width: isSmallScreen ? '50px' : '60px',
                      height: isSmallScreen ? '50px' : '60px',
                      backgroundColor: '#1976d2',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'left',
                      justifyContent: 'left',
                      overflow: 'hidden',
                      position: 'absolute',
                      top: isSmallScreen ? '10px' : '20px',
                      left: '5px',
                      zIndex: 2,
                      cursor: 'pointer',
                    }}
                  >
                    <img
                      src={provider.src}
                      alt={provider.alt}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%',
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#464343',
                      marginLeft: isSmallScreen ? '70px' : '80px',
                      marginTop: isSmallScreen ? '40px' : '50px',
                      fontSize: isSmallScreen ? '0.8rem' : '0.9rem',
                      fontWeight: '700',
                      fontFamily: 'Josefin Sans',
                    }}
                  >
                    {provider.title}
                  </Typography>
                  <Box
                    sx={{
                      width: '100%',
                      height: isSmallScreen ? 'auto' : '275px',
                      backgroundColor: '#ffffff',
                      borderRadius: '8px',
                      padding: isSmallScreen ? '15px' : '25px',
                      marginTop: '10px',
                      textAlign: 'center',
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#646464',
                        fontSize: isSmallScreen ? '0.5rem' : '0.6rem',
                        textAlign: 'justify',
                      }}
                    >
                      {provider.descriptions[0].split(' ').slice(0, 25).join(' ')}
                      {provider.descriptions[0].split(' ').length > 25 && (
                        <span
                          style={{ color: '#1976d2', cursor: 'pointer' }}
                          onClick={(event) => handleClick(event, provider.descriptions)}
                        >
                          ... Read More
                        </span>
                      )}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              color: '#233876',
              fontSize: isSmallScreen ? '0.8rem' : '1rem',
              fontWeight: '700',
              fontFamily: 'Josefin Sans',
              textAlign: 'center',
              marginTop: '20px',
              letterSpacing: '2%',
            }}
          >
            Payer Solutions
          </Typography>
          <Grid container spacing={isSmallScreen ? 2 : 3} sx={{ marginBottom: '20px' }}>
            {payers.map((payer, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box
                  sx={{
                    height: isSmallScreen ? 'auto' : '190px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    justifyContent: 'flex-start',
                    position: 'relative',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    borderRadius: '10px',
                  }}
                >
                  <Box
                    sx={{
                      width: isSmallScreen ? '50px' : '60px',
                      height: isSmallScreen ? '50px' : '60px',
                      backgroundColor: '#1976d2',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'left',
                      justifyContent: 'left',
                      overflow: 'hidden',
                      position: 'absolute',
                      top: isSmallScreen ? '10px' : '20px',
                      left: '5px',
                      zIndex: 2,
                      cursor: 'pointer',
                    }}
                  >
                    <img
                      src={payer.src}
                      alt={payer.alt}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%',
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#464343',
                      marginLeft: isSmallScreen ? '70px' : '80px',
                      marginTop: isSmallScreen ? '40px' : '50px',
                      fontSize: isSmallScreen ? '0.8rem' : '0.9rem',
                      fontWeight: '700',
                      fontFamily: 'Josefin Sans',
                    }}
                  >
                    {payer.title}
                  </Typography>
                  <Box
                    sx={{
                      width: '100%',
                      height: isSmallScreen ? 'auto' : '275px',
                      backgroundColor: '#ffffff',
                      borderRadius: '8px',
                      padding: isSmallScreen ? '15px' : '25px',
                      marginTop: '10px',
                      textAlign: 'center',
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#646464',
                        fontSize: isSmallScreen ? '0.5rem' : '0.6rem',
                        textAlign: 'justify',
                      }}
                    >
                      {payer.descriptions[0].split(' ').slice(0, 25).join(' ')}
                      {payer.descriptions[0].split(' ').length > 25 && (
                        <span
                          style={{ color: '#1976d2', cursor: 'pointer' }}
                          onClick={(event) => handleClick(event, payer.descriptions)}
                        >
                          ... Read More
                        </span>
                      )}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        sx={{
          '& .MuiPopover-paper': {
            borderRadius: '8px',
            padding: '16px',
            maxWidth: '300px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          },
        }}
      >
        <Typography sx={{ p: 2, fontSize: '0.8rem', color: '#333' }}>
          {popoverContent}
        </Typography>
      </Popover>
    </Box>
  );
};

export default Solutions;