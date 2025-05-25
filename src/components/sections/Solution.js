// import React, { useState, useEffect } from 'react';
// import { Box, Typography, Button, useMediaQuery, useTheme, Container, Grid, Dialog, DialogContent } from '@mui/material';
// import { Button as ButtonUI } from "./components/ui/button";
// import { Card, CardContent } from '@mui/material';
// import KSA_Nphies from './img/KSA_Nphies.png';
// import Oman_Capital_Market from './img/Oman_Capital_Market.png';
// import UAE_Dep_OF_Health from './img/UAE_Dep_OF_Health.png'



// // import React, { useState, useEffect } from 'react';
// // import { Box, Typography, Button, useMediaQuery, useTheme, Container, Grid, Card, CardContent } from '@mui/material';
// import { motion } from 'framer-motion';

// const Solution = () => {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const position = window.pageYOffset;
//       setScrollPosition(position);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const isVisible = (elementPosition) => scrollPosition >= elementPosition - 300;

//   const handleNavigate = (type) => {
//     const elementId = type === 'payer' ? 'PayerSolutions' : 'ProviderSolutions';
//     const element = document.getElementById(elementId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div id="solution">
//       <Box sx={{ width: '100%', minHeight: '100vh', overflow: 'hidden', position: 'relative' }}>
       
//         <Box
//           sx={{
//             position: 'absolute',
//             top: isSmallScreen ? '71px' : '90px',
//             left: '26px',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             borderRadius: '35px',
//             boxShadow: '5px 5px 10px 4px rgb(25 118 210 / 36%)',
//             width: isSmallScreen ? '260px' : '320px',
//             height: isSmallScreen ? '55px' : '75px',
//             zIndex: 3,
//             padding: '10px',
//             backgroundColor:'#eaeaea', 
//           }}
//         >
//           <Typography
//             variant="subtitle1"
//             sx={{
//               color: '#444141',
//               fontSize: isSmallScreen ? '24px' : '36px',
//               fontWeight: '600',
//               textShadow: '0 0 8px #42a5f5, 0 0 15px #42a5f5',
//               fontFamily: "Montserr",
//             }}
//           >
//             Where are you
//           </Typography>
//         </Box>

//         <Container 
//          className={` card-animation text-animation`}
//         sx={{ maxWidth: '100%', marginTop: { xs: '5%', md: '15%' }, zIndex: 4 }}>
//           <Grid container spacing={4} justifyContent="center" alignItems="stretch"
//           sx={{
//             backgroundImage:'url("https://as1.ftcdn.net/v2/jpg/01/89/23/10/1000_F_189231036_m4bH1kf5F1zyqAHal0r6JT2phmHmPjf1.jpg")',
//             backgroundColor: '#20323d57', 
//             backgroundBlendMode: 'overlay',
//             padding:'70px',
//             // zIndex: 4, 
//             borderRadius : '15px',
//             boxShadow:'5px 9px 30px rgba(0,0,0,0.5)',
//           }}
// >
          
//             <Grid
//             className="card-animation"
//             item xs={12} sm={6} md={4}
//             sx={{
//               boxShadow: '10px 10px 10px #eaeaea',
//               padding: '10px'
//             }}>
//               <Card
//                className="card-animation"
            
//                 sx={{
//                   opacity: isVisible(100) ? 1 : 0,
//                   transform: isVisible(100) ? 'none' : 'translateY(50px)',
//                   transition: 'all 0.8s ease-in-out',
//                   backgroundColor: '#eaeaea',
//                   height: { xs: '300px', sm: '400px', md: '250px' },
//                   borderRadius: '35px',
                  
//                   transition: 'transform 0.3s, box-shadow 0.3s',
//                   '&:hover': {
//                      transform: 'scale(1.05)',
//                      boxShadow: 6,}
//                 }}
//               >
//                 <CardContent>
//                   <img src={Oman_Capital_Market} alt="Oman Capital Market" style={{ width: '100%', borderRadius: '20px' }} />
                
//                 </CardContent>
//               </Card>
//               <Typography variant="h6" sx={{ textAlign: 'center', marginTop: '10px',
//                   textShadow: '0 0 8px #42a5f5, 0 0 15px #42a5f5',fontFamily: "Montserr",
              
//                }}>
//                     Oman Capital Market
//                   </Typography>
//                   <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
//                     <Button variant="contained" sx={{ margin: '0 5px', 
//                       '&:hover': {
//                         transform: 'translateY(-5px)',
//                         backgroundColor: '#42a5f5',
//                         color: 'white'
//                       },
//                         backgroundColor:'#eaeaea', 
//                         borderRadius: '24px',
//                         color: '#1976d2',
//                         fontFamily: "Montserr",
//                         boxShadow:'3px 2px 0px rgba(0,0,0,0.3)'
//                       }}
//                        onClick={() => handleNavigate('payer')}
//                        >
//                       Payer
//                     </Button>
//                     <Button variant="contained" sx={{ margin: '0 5px', 
//                       // '&:hover': {
//                       //   transform: 'scale(1.05)',
//                       //   boxShadow: 3,} ,
//                       '&:hover': {
//                         transform: 'translateY(-5px)',
//                         backgroundColor: '#42a5f5',
//                         color: 'white'
//                       },
//                         backgroundColor:'#eaeaea', 
//                         borderRadius: '24px',
//                         color: '#1976d2',
//                         fontFamily: "Montserr",
//                         boxShadow:'3px 2px 0px rgba(0,0,0,0.3)'
//                       }}
                      
//                       onClick={() => handleNavigate('provider')}>
//                       Provider
//                     </Button>
//                     </Box>
//             </Grid>
           
//             <Grid
//             className="card-animation"
//              item xs={12} sm={6} md={4}
//              sx={{
//               boxShadow: '10px 10px 10px #eaeaea',
//               padding: '10px'
//             }}
//             >
//               <Card
//                className="card-animation"
//                 sx={{
//                   opacity: isVisible(100) ? 1 : 0,
//                   transform: isVisible(100) ? 'none' : 'translateY(50px)',
//                   transition: 'all 0.8s ease-in-out',
//                   backgroundColor: '#eaeaea',
//                   height: { xs: '300px', sm: '400px', md: '250px' },
//                   borderRadius: '35px',
//                   boxShadow: 3,
//                   transition: 'transform 0.3s, box-shadow 0.3s',
//                   '&:hover': {
//                      transform: 'scale(1.05)',
//                      boxShadow: 6,}
//                 }}
//               >
//                 <CardContent>
//                   <img src={KSA_Nphies} alt="KSA Nphies" style={{ width: '100%', borderRadius: '20px' }} />
//                 </CardContent>
//               </Card>
//               <Typography variant="h6" 
//               sx={{ textAlign: 'center', marginTop: '10px',
//                 textShadow: '0 0 8px #42a5f5, 0 0 15px #42a5f5',fontFamily: "Montserr",

//                }}>
//                     KSA Nphies
//                   </Typography>
//                   <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
//                   <Button variant="contained" sx={{ margin: '0 5px', 
//                         '&:hover': {
//                         transform: 'translateY(-5px)',
//                         backgroundColor: '#42a5f5',
//                         color: 'white'
//                       },
//                         backgroundColor:'#eaeaea', 
//                         borderRadius: '24px',
//                         color: '#1976d2',
//                         fontFamily: "Montserr",
//                         boxShadow:'3px 2px 0px rgba(0,0,0,0.3)'
//                       }}
//                        onClick={() => handleNavigate('payer')}
//                        >
//                       Payer
//                     </Button>
//                     <Button variant="contained" sx={{ margin: '0 5px', 
//                         '&:hover': {
//                           transform: 'translateY(-5px)',
//                           backgroundColor: '#42a5f5',
//                           color: 'white'
//                         },
//                         backgroundColor:'#eaeaea', 
//                         borderRadius: '24px',
//                         color: '#1976d2',
//                         fontFamily: "Montserr",
//                         boxShadow:'3px 2px 0px rgba(0,0,0,0.3)'
//                       }}
                      
//                       onClick={() => handleNavigate('provider')}>
//                       Provider
//                     </Button>
//                   </Box>
//             </Grid>

//             <Grid 
//             className="card-animation"
//             item xs={12} sm={6} md={4}
//              sx={{
//               boxShadow: '10px 10px 10px #eaeaea',
//               padding: '10px'
//             }}
//             >
//               <Card
//                className="card-animation"
//                 sx={{
//                   opacity: isVisible(100) ? 1 : 0,
//                   transform: isVisible(100) ? 'none' : 'translateY(50px)',
//                   transition: 'all 0.8s ease-in-out',
//                   backgroundColor:'#eaeaea',
//                   height:{ xs: '300px', sm: '400px', md: '250px' },
//                   borderRadius: '35px',
//                   boxShadow: 3,
//                   transition: 'transform 0.3s, box-shadow 0.3s',
//                   '&:hover': {
//                      transform: 'scale(1.05)',
//                      boxShadow: 6,}
//                 }}
//               >
//                 <CardContent>
//                   <img src={UAE_Dep_OF_Health} alt="UAE Dept of Health" style={{ width: '100%', borderRadius: '20px' }} />
//                 </CardContent>
//               </Card>
//               <Typography variant="h6" sx={{ textAlign: 'center', marginTop: '10px',
//                  fontFamily: "Montserr", textShadow: '0 0 8px #42a5f5, 0 0 15px #42a5f5'
                
//                }}>
//                     UAE Department of Health
//                   </Typography>
//                   <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
//                   <Button variant="contained" sx={{ margin: '0 5px', 
//                         '&:hover': {
//                           transform: 'translateY(-5px)',
//                           backgroundColor: '#42a5f5',
//                           color: 'white'
//                         },
//                         backgroundColor:'#eaeaea', 
//                         borderRadius: '24px',
//                         color: '#1976d2',
//                         fontFamily: "Montserr",
//                         boxShadow:'3px 2px 0px rgba(0,0,0,0.3)'
//                       }}
//                       onClick={() => handleNavigate('payer')}>
//                       Payer
//                     </Button>
//                     <Button variant="contained" sx={{ margin: '0 5px', 
//                        '&:hover': {
//                         transform: 'translateY(-5px)',
//                         backgroundColor: '#42a5f5',
//                         color: 'white'
//                       },
//                         backgroundColor:'#eaeaea', 
//                         borderRadius: '24px',
//                         color: '#1976d2',
//                         fontFamily: "Montserr",
//                         boxShadow:'3px 2px 0px rgba(0,0,0,0.3)'
//                       }}
//                       onClick={() => handleNavigate('provider')}>
//                       Provider
//                     </Button>
//                   </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//     </div>
//   );
// };

// export default Solution;

