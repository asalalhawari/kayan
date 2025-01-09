// import React, { useState,useEffect } from "react";
// import { Box, Typography, Button, IconButton,useMediaQuery, styled,useTheme, Card, CardContent,Container,Stack,  Dialog, DialogTitle, DialogContent,} from '@mui/material';
// import { motion,  useAnimation } from "framer-motion";
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// const cardsData = [
//   {
//     title: " Who We Are",
//     description: "Kayan Healthcare Technologies is a leading e-healthcare consulting and technology firm dedicated to enhancing healthcare delivery across the Gulf Cooperation Council (GCC) region. Our current solutions are available in UAE, KSA, and Oman. Our primary focus is to empower healthcare providers and payers with advanced, data-driven solutions for claims management that improve efficiency, enhance accuracy, and promote connectivity across the healthcare system. In response to the rapid technological advancements and evolving regulatory mandates in the healthcare sector, we have designed a suite of dynamic solutions that are tailored to meet the specific needs of our clients and the new mandates. Our offerings include first-stage clinical edits and benefit edits. In addition, we offer the cutting-edge LEEN solution for payers, which supports the full automation of claims management. These solutions enable providers and payers to streamline their workflows, ensuring that every decision made is accurate, efficient, and aligned with standards in terms of coding set, medical guidelines, payers TOB, regulators, and any other relevant factors.Our approach is rooted in the belief that healthcare should be proactive, precise, and people-centered. By integrating rigorously tested algorithms and modernized systems, Kayan helps clients reduce diagnostic, treatment, and management (TOB) errors, lower operational costs, and, ultimately, enhance patient safety and satisfaction. Looking to the future, we are preparing to launch a specialized machine learning system as part of our second-phase growth. This advanced platform will support the development of sustainable, long-term health policies by leveraging predictive insights and enabling data-driven decision-making.",

//   //  backgroundColor: 'rgba(95, 137, 145, 0.8)',
//   //  backgroundImage: 'url("https://as1.ftcdn.net/v2/jpg/01/89/23/10/1000_F_189231036_m4bH1kf5F1zyqAHal0r6JT2phmHmPjf1.jpg")',

//   },
//   {
//     title: "Our Mission",
//     description: " Our mission is to advance efficiency and precision in healthcare by providing tailored, high-value solutions that elevate service quality and reduce medical errors. We empower clinics, hospitals, pharmacies, and insurance companies, to deliver safer, more reliable care by leveraging advanced technology, data-driven insights, and seamless connectivity across the healthcare continuum.",
// // backgroundColor: 'rgba(98, 144, 152, 0.93)',
// // backgroundImage: 'url("https://as1.ftcdn.net/v2/jpg/01/89/23/10/1000_F_189231036_m4bH1kf5F1zyqAHal0r6JT2phmHmPjf1.jpg")',

//   },
//   {
//     title: "Our Vision",
//     description: "Our vision is to shape a future where healthcare is both highly efficient and technologically advanced, with solutions that not only address the immediate needs of our clients but also anticipate the challenges of tomorrow, meeting the evolving needs of payers, providers, and regulatory authorities. By setting new standards in healthcare technology, we aspire to lead the way in creating a healthcare landscape that is not only more effective but also more sustainable, adaptable, and equipped to serve future generations.",
// //  backgroundColor: 'rgba(95, 137, 145, 0.5)',
// // backgroundImage: 'url("https://as1.ftcdn.net/v2/jpg/01/89/23/10/1000_F_189231036_m4bH1kf5F1zyqAHal0r6JT2phmHmPjf1.jpg")',

//   },
// ];

//   const About = () => {
//     const theme = useTheme();
//     const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
//     const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
//     const [activeCard, setActiveCard] = useState(0);
  
//     // const handlePrevCard = () => {
//     //   setActiveCard((prev) => (prev === 0 ? cardsData.length - 1 : prev - 1));
//     // };
  
//     // const handleNextCard = () => {
//     //   setActiveCard((prev) => (prev === cardsData.length - 1 ? 0 : prev + 1));
//     // };
//     const handleScroll = () => {
//       const aboutSection = document.getElementById('about');
//       if (aboutSection) {
//         const rect = aboutSection.getBoundingClientRect();
//         if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          
//           setActiveCard((prev) => (prev + 1) % cardsData.length);
//         }
//       }
//     };
  
//     useEffect(() => {
//       window.addEventListener('scroll', handleScroll);
//       return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const handlePrevCard = () => {
//       setActiveCard((prev) => (prev === 0 ? cardsData.length - 1 : prev - 1));
//     };
  
//     const handleNextCard = () => {
//       setActiveCard((prev) => (prev === cardsData.length - 1 ? 0 : prev + 1));
//     };
//     return (
     
// <div id="about">
//   <Box sx={{ width: '100%', minHeight: '100vh', overflow: 'hidden', position: 'relative' }}>
//     <Box
//       sx={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         zIndex: 1, 
//         opacity:'0.3'
//       }}
//     />
    
        
//           <Box sx={{
//         position: 'absolute',
//         top: '11%',
//         left: '6%',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         zIndex: 4,
//         width: '10%'
//       }}>
//         {/* <Typography
//           variant="subtitle1"
//           sx={{
//             color: '#302f2fb8',
//             fontSize: isSmallScreen ? '20px' : '45px',
//             fontWeight: '600',
//             // marginTop: '65px',
//             lineHeight: '5rem',
//             // fontFamily: "Montserrat"
//           }}
//         >
//           Meet{' '}
//           <span style={{
//             fontSize: isSmallScreen ? '40px' : '45px',
//             fontWeight: 'bold',
//             color: '#5a5656', 
//             display: 'inline-block',
//            textShadow: '4px 0px 4px rgba(25, 118, 210, 0.6)',

//           }}>
//             Kayan
//           </span>
//           {' '}Your Partner in Health Innovation
//         </Typography> */}
//       </Box>


//     <Box sx={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       minHeight: '100vh',
//       marginTop: '2%',
//       zIndex: 3,
//     }}>
//       <Box sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         position: 'relative',
//         width: '95%',
//         backgroundColor: '#ffffff',
//         height: '600px',
//         borderRadius: '30px',
//         zIndex: 3,
//       }}>
//         {cardsData.map((card, index) => (
//           <motion.div
           
//             // initial={{ x: 0, opacity: 0.9 }}
//             // animate={{
//             //   opacity: index === activeCard ? 1 : 0.9,
//             //    transform: index === activeCard ? 'none' : 'translateX(450px)',
//             //   // transform:  'skewX(10deg)' ,
//             // }}
            
//             key={index}
//             initial={{ opacity: 0, x: index === activeCard ? 0 : 300 }}
//             animate={{ opacity: 1, x: index === activeCard ? 0 : 450 }}
//             transition={{ duration: 0.8 }}
//             style={{
//               position: 'absolute',
//               top: `${index * 60}px`,
//               cursor: 'pointer',
//               zIndex: index === activeCard ? 4 : 3,
//             }}
//             onClick={() => setActiveCard(index)}
//           >
//             <Card
//               className="card-animation"
//               sx={{
//                 // backgroundColor: card.backgroundColor,
//                 backgroundImage: card.backgroundImage,
//                 width: isSmallScreen ? '100%' : index === activeCard ? '1200px' : '500px',
//                 height: isSmallScreen ? '600px' : index === activeCard ? '500px' : '200px',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: index === activeCard ? 'center' :'flex-start',
//                 alignItems: index === activeCard ? 'center' : 'end',
//                 paddingRight: index === activeCard ? '0px' : '15px',
//                 boxShadow: 5,
//                 borderRadius: '15px',
//                 transition: 'transform 0.3s ease',
//                 opacity: index === activeCard ? 1 : 0.8,
//                 //  transform: 'skewX(5deg)',
//               // transform: index === activeCard ? 'none' : 'translateX(450px)',


//               }}
//             >
//               <CardContent
//                className="card-animation"
//               >

//                 <Typography
                
//                   variant="h5"
//                   fontWeight="bold"
//                   gutterBottom
//                   sx={{
//                     whiteSpace: index === activeCard ? 'normal' : 'nowrap',
//                     overflow: 'hidden',
//                     textOverflow: 'ellipsis',
//                     textAlign: index === activeCard ? 'center' : 'right',
//                     fontSize: index === activeCard ? '2.4rem' : '1rem',
//                     fontFamily: "Montserr",
//                     textShadow: '-4px 0px 0px rgba(255, 255, 255,0.5)',
//                   }}
//                 >
//                   {card.title}
//                 </Typography>
//                 {index === activeCard && (
//                   <Box sx={{ maxHeight: '300px', overflowY: 'auto', paddingRight: '10px' }}>
//                     <Typography
//                       variant="body2"
//                       sx={{ mb: 2, fontSize: '0.85rem', lineHeight: '1.5rem'}}
//                     >
//                       {card.description}
//                     </Typography>
//                   </Box>
//                 )}
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </Box>
//     </Box>
    
//          {isSmallScreen && (
//             <Box
//             className="card-animation"
//               sx={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: '10px',
//                 zIndex: 10,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 transform: 'translateY(-50%)',
//               }}
//             >
//               <IconButton onClick={handlePrevCard} sx={{ backgroundColor: 'rgba(25, 118, 210, 0.5)', mb: 2, }}>
//                 <ArrowBackIcon sx={{ color: 'rgba(3,15,26,1)',fontSize:'14px' }} />
//               </IconButton>
//               <IconButton onClick={handleNextCard} sx={{ backgroundColor: 'rgba(25, 118, 210, 0.5)' }}>
//                 <ArrowForwardIcon sx={{ color: 'rgba(3,15,26,1)',fontSize:'14px' }} />
//               </IconButton>
//             </Box>
//           )}
//   </Box>
// </div>

//     );
//   };
  
// export default About;

import React from 'react';
import { Box, Typography,Card, CardContent, } from '@mui/material';
const cardsData = [
  {
    title: " Who We Are",
    description: "Kayan Healthcare Technologies is a leading e-healthcare consulting and technology firm dedicated to enhancing healthcare delivery across the Gulf Cooperation Council (GCC) region. Our current solutions are available in UAE, KSA, and Oman. Our primary focus is to empower healthcare providers and payers with advanced, data-driven solutions for claims management that improve efficiency, enhance accuracy, and promote connectivity across the healthcare system. In response to the rapid technological advancements and evolving regulatory mandates in the healthcare sector, we have designed a suite of dynamic solutions that are tailored to meet the specific needs of our clients and the new mandates. Our offerings include first-stage clinical edits and benefit edits. In addition, we offer the cutting-edge LEEN solution for payers, which supports the full automation of claims management. These solutions enable providers and payers to streamline their workflows, ensuring that every decision made is accurate, efficient, and aligned with standards in terms of coding set, medical guidelines, payers TOB, regulators, and any other relevant factors.Our approach is rooted in the belief that healthcare should be proactive, precise, and people-centered. By integrating rigorously tested algorithms and modernized systems, Kayan helps clients reduce diagnostic, treatment, and management (TOB) errors, lower operational costs, and, ultimately, enhance patient safety and satisfaction. Looking to the future, we are preparing to launch a specialized machine learning system as part of our second-phase growth. This advanced platform will support the development of sustainable, long-term health policies by leveraging predictive insights and enabling data-driven decision-making.",
backgroundColor:'white'
  },
  {
    title: "Our Mission",
    description: " Our mission is to advance efficiency and precision in healthcare by providing tailored, high-value solutions that elevate service quality and reduce medical errors. We empower clinics, hospitals, pharmacies, and insurance companies, to deliver safer, more reliable care by leveraging advanced technology, data-driven insights, and seamless connectivity across the healthcare continuum.",
    backgroundColor:'white'

  },
  {
    title: "Our Vision",
    description: "Our vision is to shape a future where healthcare is both highly efficient and technologically advanced, with solutions that not only address the immediate needs of our clients but also anticipate the challenges of tomorrow, meeting the evolving needs of payers, providers, and regulatory authorities. By setting new standards in healthcare technology, we aspire to lead the way in creating a healthcare landscape that is not only more effective but also more sustainable, adaptable, and equipped to serve future generations.",
    backgroundColor:'white'

  },
];
const About = () => {
  return (
    <div id="about">
      <Box
      sx={{
        
        overflow: 'hidden',
        width: '100%',
        height: '100vh',
        display: 'flex',
        // alignItems: 'flex-start',
        // justifyContent: 'flex-start',
        position: 'relative',
        // background: 'linear-gradient(to top right, #2F2F2F, #FFFFFF)',
        // backgroundImage:'url("https://img.freepik.com/free-photo/medical-desk-with-stethoscope-keyboard_23-2148519721.jpg?t=st=1733751564~exp=1733755164~hmac=03d3a02394c6e2b20ef66905832ee24ecdbd679dcd366a10fb0b30a16ed83d2d&w=740")',
        // backgroundSize: 'cover', 
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat'
        background: 'linear-gradient(to right bottom, #2f2f2f5c, #FFFFFF)',
        // backgroundColor:'#2f2f2f69'
        }}
    >
      <Box sx={{ 
        padding: '20px',    
        height: 'auto',
        position: 'absolute',
       left: '0px',
        zIndex:2,
        marginTop: '2%',
        marginBottom: '0.5%'
      }}>
         {/* <Typography
          variant="h1"
          sx={{
            fontSize: '3.9rem',
            color: '#4CAF50', 
            fontWeight: 'bold',
            // margin: 0,
            marginTop: '55px',
            // textAlign: 'right',
            fontFamily: 'Orbitron ,sans-serif'
          }}
        >
          
          Kayan
        </Typography> */}
         {/* <Typography
          variant="h4"
          sx={{
            fontSize: '1.2rem',
            color: '#ececec', 
            fontWeight: '300',
            marginTop: '10px',
             fontFamily: 'Orbitron ,sans-serif'
          }}
        >
          HEALTHCARE TECHNOLOGIES
        </Typography>  */}
         <Typography
    variant="h1"
    sx={{
      fontSize: '4rem',
      fontWeight: 'bold',
      marginTop: '55px',
      fontFamily: 'Orbitron, sans-serif',
      color: '#4CAF50', 
    }}
  >
    <span
      style={{
        color: '#4CAF50',
        fontWeight: 'bold',
        fontSize: 'inherit', 
      }}
    >
      Kayan
    </span>{" "}
    <span
      style={{
        fontSize: '1.1rem',
        color: 'black', 
        fontWeight: '500',
        fontFamily: 'Orbitron, sans-serif',
        letterSpacing:'1px'
      }}
    >
      HealthCare Technologies 
    </span>
  </Typography> 
        <Typography
    variant="subtitle1" 
    sx={{
      fontSize: '1.8rem', 
      color: 'black', 
      fontWeight: '400', 
      // marginTop: '10px',
      fontFamily: 'Orbitron, sans-serif',
    }}
  >
    Your Partner In Healthcare Innovation
  </Typography>
      </Box>
       <Box
      sx={{ 
        position: 'absolute',
        width: '100%', 
        height: '90%', 
        overflow: 'hidden',
        // backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        // boxShadow: '0px 10px 35px #ffffff63',
        padding: '40px',
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '9%;',
      //  marginRight: '3%'
      gap: '20px',
      }}
    >
      {cardsData.map((card, index) => (
            <Card
            
              key={index}
              sx={{
             
                backgroundColor: card.backgroundColor,
                marginBottom: '20px',
                // backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '8px',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                width: '35%',
                // height: 'auto',
                
                // height: index === 0 ? '310px' : 'auto', 
                height:'75%',
                overflowY: index === 0 ? 'auto' : 'hidden', 
               
               display: 'flex',
               flexDirection: 'column',
              //  alignItems: 'center',
              //  justifyContent: 'center',
               textAlign: 'justify', 
               padding: '20px',
               transition:' transform 0.3s ease, box-shadow 0.3s ease',
               '&:hover': {
                transform: ' scale(1.05); ',
                boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5)',
              },
              }}
            >
          <CardContent
          // sx={{ width: '100%' }}
          >
            <Typography variant="h5" component="div" 
            sx={{  textAlign:'center',
              fontFamily: 'Orbitron ,sans-serif',color:'#4CAF50',
              fontWeight: 'bold', marginBottom: '10px',
              fontSize:'1.8rem' }}>
              {card.title}
            </Typography>
            <Typography variant="body2" sx={{ fontSize:index === 0 ?'0.57rem':'0.8rem', 
             lineHeight: '1.6', 
             textAlign: 'justify', 
             hyphens: 'auto', 
             wordWrap: 'break-word',
             overflowY:'hidden'
            }}>
              {card.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
    </Box>
    </div>
    
  );
};

export default About;
