
import React, { useState, useEffect } from 'react';
import { Box, Typography,IconButton, Gridو, useMediaQuery,Button } from '@mui/material';
import  solution from '../../img/solution4.png';
import Sama from '../../img/Sama.png';
import Bayan from '../../img/Bayan.png';
import KareemBenefits from '../../img/KareemBenefits.png'
import AmaanIntegration from '../../img//AmaanIntegration.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Solution from '../../img/solution.png';
const ProviderSolutions = () => {
  const [selectedProvider, setSelectedProvider] = useState('');
  const [descriptionIndex, setDescriptionIndex] = useState(0); 
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const providers = [
    {
      src: AmaanIntegration,
      alt: 'Amaan Integration',
      descriptions: [
        'Amaan Integration introduces a cloud-based gateway seamlessly connected to the Post Office. Additionally, it offers a portal connection, enabling users to utilize the system independently for testing, validation, and account management purposes',
        
      ],
    },
    {
      src: Bayan,
      alt: 'Bayan',
      descriptions: [
         'Bayan Clinical Rule Engine (CRE) is a provider solution that relies on a massive database of 35 million+ combinations to provide valuable feedback that helps deliver clean claims that adhere to medical and coding guidelines.' ,
         
      ],
    },
    {
      src: KareemBenefits,
      alt: 'Kareem Benefits',
      descriptions: [
        'Kareem Benefits is a benefit tool that uses a massive database of benefit rule combinations to help create a clean claim that adheres to the benefit rules as per the contractual agreement between the provider and payer.',
        
      ],
    },
    {
      src: Sama,
      alt: 'Sama',
      descriptions: [
        'Sama is a multi-level technical business intelligence tool that provides logical references to claims based on various clinical and technical parameters. On top of that, SAMA provides a fully functional RCM solution that helps automate every step of the process.',
        
      ],
    },
   

  ];
  

  return (
    <div id="provider-solutions">
      <Box
       sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        position: 'relative',
        background: 'linear-gradient(to right bottom, #2f2f2f5c, #FFFFFF)',
        flexDirection: 'column',
       }}
       >
          <Box
        sx={{
          width: '100%',
          height: isSmallScreen ? '60vh' : '40vh',
          // backgroundImage: `url(${solution})`,
          backgroundSize: 'contain', 
          // backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: isSmallScreen ? '2%' : '5%', 
          position: 'relative',
          // flexDirection: 'column',
        }}
      >
      
          <Box
            className="card-animation"
            sx={{
              width: '44%',
              // right: '50%',
              // left:'15%',
              position:' absolute',
            }}
          >
            <Typography
              sx={{
                color: '#464646',
              textAlign: 'center',
                // textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)',
                marginTop: '35px',
                fontSize: isSmallScreen ? '1.4rem' : '1.9rem',
                fontWeight: '700', 
                // marginTop: '10px',
                fontFamily: 'Orbitron, sans-serif',
              }}
            >
            Tailored Innovative Solutions Simplify the Future
            </Typography> 
            <Typography
    sx={{
      color: '#464646',
      textAlign: 'center',
      // textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)',
      marginTop: '20px',
      fontSize: isSmallScreen ? '1.4rem' : '0.7rem',
      // textAlign: 'center', 
      marginBottom: '20px', 
      fontWeight: '700', 
      fontFamily: 'Orbitron, sans-serif',
      '&::after': {
                content: '""',
                display: 'block',
                width: '20%',
                 margin:'auto',
                whiteSpace: 'pre-line',
                borderBottom: '2px solid #464646',
                // padding: '1%',
              },
    }}
  >
    Our Provider Solutions
  </Typography>

            </Box>
        </Box>
      



      <Box>
  <Box
    className="card-animation"
    sx={{
      // height: '50hv',
      display: isSmallScreen ? 'grid' : 'flex',
      justifyContent: 'center',
      // backgroundColor: '#4fbb4f4d',

      alignItems: isSmallScreen ? 'none' : 'center',
      flexDirection: isSmallScreen ? 'none' : 'row',
      gridTemplateColumns: isSmallScreen ? 'repeat(2, 1fr)' : 'none',
      gap: isSmallScreen ? 'none' : '80px',
      marginTop: isSmallScreen ? '-50px' : '-65px',
      position: isSmallScreen ? 'relative' : 'static',
      zIndex: 2,
      // overflow:'hidden',
      padding: '2.5%',
    }}
  >
    
    {providers.map((provider, index) => (
      <Box
        className="card-animation"
        key={index}
        sx={{
          width: '100%',
          // height:'25%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          position: 'relative',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          // backgroundColor: '#4CAF50',
          borderRadius: '10px',
         
        }}
      >
        <Box
          sx={{
            width: isSmallScreen ? '90px' : '125px',
            height: isSmallScreen ? '90px' : '125px',
            backgroundColor: '#1976d2',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'absolute',
            top: '-30px',
            zIndex: 2,
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
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
          {index === 2 && (
            <Typography
              variant="h6"
              sx={{
                position: 'absolute',
                color: '#61778c',
                fontSize: '1.4rem',
                fontWeight: 'bold',
                textShadow: '1px 3px 2px #b5c4d3',
                textAlign: 'center',
                width: '100%',
                fontFamily: 'Orbitron, sans-serif',
              }}
            >
              Kareem Benefits
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            width: '100%',
            height:'340px',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            padding: '20px',
            marginTop: '50px',
            textAlign: 'center',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5)',
            },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'black',
              marginTop: '30%',
              fontSize: '0.7rem',
              textAlign: 'justify',
            }}
          >
            {provider.descriptions}
          </Typography>
          <Button
            sx={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: { xs: '15px 25px', sm: '5px 10px' },
              fontSize: { xs: '0.8rem', sm: '0.6rem' },
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              marginTop: '25%',
              '&:hover': {
                transform: 'scale(1.05)',
                backgroundColor: '#979a9c',
              },
              textTransform: 'capitalize',
            }}
          >
            go to solution
          </Button>
        </Box>
      </Box>
    ))}
  </Box>
</Box>
      </Box>
    </div>
  );
};


export default ProviderSolutions;
