
  
// import React, { useState, useEffect } from 'react';
// import { Box, Typography,Button,IconButton, Gridو, useMediaQuery } from '@mui/material';
// import  payer from '../../img/payer.png';
// import AmaanConnector from '../../img/AmaanConnector.png';
// import Sayan from '../../img/Sayan.png';
// import Leen from '../../img/Leen.png'
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import  solution from '../../img/solution2.png';

// const PayerSolutions = () => {
//   const [selectedpayer, setSelectedpayer] = useState('');
//   const [descriptionIndex, setDescriptionIndex] = useState(0); 
//   const isSmallScreen = useMediaQuery('(max-width: 600px)');
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const payers = [
//     {
//       src: AmaanConnector,
//       alt: 'Amaan Connector',
//       descriptions: [
//         'Our SaaS model facilitates seamless integration across healthcare systems',
        
//       ],
//     },
//     {
//       src: Sayan,
//       alt: 'Sayan',
//       descriptions: [
//          'SAYAN is an advanced system that automates payer claims processing, providing reviews and feedback per medical references and coding guidelines. It incorporates around 25 million edit combinations, with ongoing additions to enhance its capabilities over time' ,
         
//       ],
//     },
    
//     {
//       src: Leen,
//       alt: 'Leen',
//       descriptions: [
//         'LEEN is a technical business intelligence tool that provides logical references to claims based on various clinical and technical parameters',
//           ],
//     },
   

//   ];
  
//   const currentpayer = payers.find((p) => p.alt === selectedpayer);

//   return (
//     <div id="payer-solutions">
    

// <Box
//          sx={{
//           width: '100%',
//           height: '100vh',
//           display: 'flex',
//           position: 'relative',
//           background: 'linear-gradient(to right bottom, #2f2f2f5c, #FFFFFF)',
//           flexDirection: 'column',
//          }}
//        >
         
     
      
//       <Box
//         sx={{
//           width: '100%',
//           height: isSmallScreen ? '60vh' : '40vh',
//           // backgroundImage: `url(${solution})`,
//           backgroundSize: 'contain', 
//           // backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           paddingLeft: isSmallScreen ? '2%' : '5%', 
//           position: 'relative',
//           // flexDirection: 'column',
//         }}
//       >
      
//           <Box
//             className="card-animation"
//             sx={{
//               width: '44%',
//               // right: '50%',
//               // left:'15%',
//               position:' absolute',
//             }}
//           >
//             <Typography
//               sx={{
//                 color: '#464646',
//               textAlign: 'center',
//                 // textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)',
//                 marginTop: '35px',
//                 fontSize: isSmallScreen ? '1.4rem' : '1.9rem',
//                 fontWeight: '700', 
//                 // marginTop: '10px',
//                 fontFamily: 'Orbitron, sans-serif',
//               }}
//             >
//             Tailored Innovative Solutions Simplify the Future
//             </Typography> 
//             <Typography
//       sx={{
//         color: '#464646',
//         textAlign: 'center',
//         // textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)',
//         marginTop: '20px',
//         fontSize: isSmallScreen ? '1.4rem' : '0.7rem',
//         // textAlign: 'center', 
//         marginBottom: '20px', 
//         fontWeight: '700', 
//         fontFamily: 'Orbitron, sans-serif',
//         '&::after': {
//                   content: '""',
//                   display: 'block',
//                   width: '20%',
//                    margin:'auto',
//                   whiteSpace: 'pre-line',
//                   borderBottom: '2px solid #464646',
//                   // padding: '1%',
//                 },
//       }}
//   >
//     Our Payer Solutions
//   </Typography>

//             </Box>
//         </Box>
       
    
//       <Box>
//   <Box
//     sx={{
//       // height: '50hv',
//       display: isSmallScreen ? 'grid' : 'flex',
//       justifyContent: 'center',
//       // backgroundColor: '#4fbb4f4d',

//       alignItems: isSmallScreen ? 'none' : 'center',
//       flexDirection: isSmallScreen ? 'none' : 'row',
//       gridTemplateColumns: isSmallScreen ? 'repeat(2, 1fr)' : 'none',
//       gap: isSmallScreen ? 'none' : '80px',
//       marginTop: isSmallScreen ? '-50px' : '-65px',
//       position: isSmallScreen ? 'relative' : 'static',
//       zIndex: 2,
//       // overflow:'hidden',
//       padding: '2.5%',
//     }}
//   >
//     {payers.map((payer, index) => (
//       <Box
//       className="card-animation"
//       key={index}
//       sx={{
//         width: '100%',
//         // height:'25%',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'flex-start',
//         position: 'relative',
//         transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//         // backgroundColor: '#4CAF50',
//         borderRadius: '10px',
       
//       }}
//       >
//         <Box
//            sx={{
//             width: isSmallScreen ? '90px' : '125px',
//             height: isSmallScreen ? '90px' : '125px',
//             backgroundColor: '#1976d2',
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             overflow: 'hidden',
//             position: 'absolute',
//             top: '-30px',
//             zIndex: 2,
//             boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
//           }}
//         >
       
//        <img
//             src={payer.src}
//             alt={payer.alt}
//             style={{
//               width: '100%',
//               height: '100%',
//               objectFit: 'cover',
//               borderRadius: '50%',
//             }}
//           />
         
//         </Box>

//         <Box
//           sx={{
//             width: '100%',
//             height:'340px',
//             backgroundColor: '#ffffff',
//             borderRadius: '8px',
//             padding: '20px',
//             marginTop: '50px',
//             textAlign: 'center',
//             boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
//             '&:hover': {
//               transform: 'scale(1.05)',
//               boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5)',
//             },
//           }}
//         >
//           <Typography
//              variant="body2"
//              sx={{
//                color: 'black',
//                marginTop: '30%',
//                fontSize: '0.7rem',
//                textAlign: 'justify',
//              }}
//           >
//             {payer.descriptions}
//           </Typography>
//           <Button
//              sx={{
//               backgroundColor: '#4CAF50',
//               color: 'white',
//               padding: { xs: '15px 25px', sm: '5px 10px' },
//               fontSize: { xs: '0.8rem', sm: '0.6rem' },
//               transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//               marginTop: '25%',
//               '&:hover': {
//                 transform: 'scale(1.05)',
//                 backgroundColor: '#979a9c',
//               },
//               textTransform: 'capitalize',
//             }}
//           >
//             go to solution
//           </Button>
//         </Box>
//       </Box>
//     ))}
//   </Box>
// </Box>

    
//       </Box>  
//     </div>
//   );


// };

// export default PayerSolutions;
