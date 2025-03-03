// import React from 'react';
// import { Box, Typography,Card, CardContent, } from '@mui/material';
// import WaveBackground from "./components/WaveBackground";

// const cardsData = [
//   {
//     title: " Who We Are",
//     description: "Kayan Healthcare Technologies is a leading e-healthcare consulting and technology firm dedicated to enhancing healthcare delivery across the Gulf Cooperation Council (GCC) region. Our current solutions are available in UAE, KSA, and Oman. Our primary focus is to empower healthcare providers and payers with advanced, data-driven solutions for claims management that improve efficiency, enhance accuracy, and promote connectivity across the healthcare system. In response to the rapid technological advancements and evolving regulatory mandates in the healthcare sector, we have designed a suite of dynamic solutions that are tailored to meet the specific needs of our clients and the new mandates. Our offerings include first-stage clinical edits and benefit edits. In addition, we offer the cutting-edge LEEN solution for payers, which supports the full automation of claims management. These solutions enable providers and payers to streamline their workflows, ensuring that every decision made is accurate, efficient, and aligned with standards in terms of coding set, medical guidelines, payers TOB, regulators, and any other relevant factors.Our approach is rooted in the belief that healthcare should be proactive, precise, and people-centered. By integrating rigorously tested algorithms and modernized systems, Kayan helps clients reduce diagnostic, treatment, and management (TOB) errors, lower operational costs, and, ultimately, enhance patient safety and satisfaction. Looking to the future, we are preparing to launch a specialized machine learning system as part of our second-phase growth. This advanced platform will support the development of sustainable, long-term health policies by leveraging predictive insights and enabling data-driven decision-making.",
// backgroundColor:'white'
//   },
//   {
//     title: "Our Mission",
//     description: " Our mission is to advance efficiency and precision in healthcare by providing tailored, high-value solutions that elevate service quality and reduce medical errors. We empower clinics, hospitals, pharmacies, and insurance companies, to deliver safer, more reliable care by leveraging advanced technology, data-driven insights, and seamless connectivity across the healthcare continuum.",
//     backgroundColor:'white'

//   },
//   {
//     title: "Our Vision",
//     description: "Our vision is to shape a future where healthcare is both highly efficient and technologically advanced, with solutions that not only address the immediate needs of our clients but also anticipate the challenges of tomorrow, meeting the evolving needs of payers, providers, and regulatory authorities. By setting new standards in healthcare technology, we aspire to lead the way in creating a healthcare landscape that is not only more effective but also more sustainable, adaptable, and equipped to serve future generations.",
//     backgroundColor:'white'

//   },
// ];
// const About = () => {
//   return (
//     <div id="about">
      
//        <WaveBackground />
//       <Box
//       sx={{
        
//         overflow: 'hidden',
//         width: '100%',
//         height: '100vh',
//         display: 'flex',
//         // alignItems: 'flex-start',
//         // justifyContent: 'flex-start',
//         position: 'relative',
//         // background: 'linear-gradient(to top right, #2F2F2F, #FFFFFF)',
//         // backgroundImage:'url("https://img.freepik.com/free-photo/medical-desk-with-stethoscope-keyboard_23-2148519721.jpg?t=st=1733751564~exp=1733755164~hmac=03d3a02394c6e2b20ef66905832ee24ecdbd679dcd366a10fb0b30a16ed83d2d&w=740")',
//         // backgroundSize: 'cover', 
//         // backgroundPosition: 'center',
//         // backgroundRepeat: 'no-repeat'
//         background: 'linear-gradient(to right bottom, #2f2f2f5c, #FFFFFF)',
//         // backgroundColor:'#2f2f2f69'
//         position: "relative",
//         }}
//     >
//       <Box sx={{ 
//         padding: '20px',    
//         height: 'auto',
//         position: 'absolute',
//        left: '0px',
//         zIndex:2,
//         marginTop: '2%',
//         marginBottom: '0.5%'
//       }}>
//          {/* <Typography
//           variant="h1"
//           sx={{
//             fontSize: '3.9rem',
//             color: '#4CAF50', 
//             fontWeight: 'bold',
//             // margin: 0,
//             marginTop: '55px',
//             // textAlign: 'right',
//             fontFamily: 'Orbitron ,sans-serif'
//           }}
//         >
          
//           Kayan
//         </Typography> */}
//          {/* <Typography
//           variant="h4"
//           sx={{
//             fontSize: '1.2rem',
//             color: '#ececec', 
//             fontWeight: '300',
//             marginTop: '10px',
//              fontFamily: 'Orbitron ,sans-serif'
//           }}
//         >
//           HEALTHCARE TECHNOLOGIES
//         </Typography>  */}
//          <Typography
//     variant="h1"
//     sx={{
//       fontSize: '4rem',
//       fontWeight: 'bold',
//       marginTop: '55px',
//       fontFamily: 'Orbitron, sans-serif',
//       color: '#4CAF50', 
//     }}
//   >
//     <span
//       style={{
//         color: '#4CAF50',
//         fontWeight: 'bold',
//         fontSize: 'inherit', 
//       }}
//     >
//       Kayan
//     </span>{" "}
//     <span
//       style={{
//         fontSize: '1.1rem',
//         color: 'black', 
//         fontWeight: '500',
//         fontFamily: 'Orbitron, sans-serif',
//         letterSpacing:'1px'
//       }}
//     >
//       HealthCare Technologies 
//     </span>
//   </Typography> 
//         <Typography
//     variant="subtitle1" 
//     sx={{
//       fontSize: '1.8rem', 
//       color: 'black', 
//       fontWeight: '400', 
//       // marginTop: '10px',
//       fontFamily: 'Orbitron, sans-serif',
//     }}
//   >
//     Your Partner In Healthcare Innovation
//   </Typography>
//       </Box>
//        <Box
//       sx={{ 
//         position: 'absolute',
//         width: '100%', 
//         height: '90%', 
//         overflow: 'hidden',
//         // backgroundColor: '#f5f5f5',
//         borderRadius: '10px',
//         // boxShadow: '0px 10px 35px #ffffff63',
//         padding: '40px',
//         display:'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         flexDirection: 'row',
//         marginTop: '9%;',
//       //  marginRight: '3%'
//       gap: '20px',
//       }}
//     >
//       {cardsData.map((card, index) => (
//             <Card
            
//               key={index}
//               sx={{
             
//                 backgroundColor: card.backgroundColor,
//                 marginBottom: '20px',
//                 // backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                 borderRadius: '8px',
//                 boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
//                 width: '35%',
//                 // height: 'auto',
                
//                 // height: index === 0 ? '310px' : 'auto', 
//                 height:'75%',
//                 overflowY: index === 0 ? 'auto' : 'hidden', 
               
//                display: 'flex',
//                flexDirection: 'column',
//               //  alignItems: 'center',
//               //  justifyContent: 'center',
//                textAlign: 'justify', 
//                padding: '20px',
//                transition:' transform 0.3s ease, box-shadow 0.3s ease',
//                '&:hover': {
//                 transform: ' scale(1.05); ',
//                 boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5)',
//               },
//               }}
//             >
//           <CardContent
//           // sx={{ width: '100%' }}
//           >
//             <Typography variant="h5" component="div" 
//             sx={{  textAlign:'center',
//               fontFamily: 'Orbitron ,sans-serif',color:'#4CAF50',
//               fontWeight: 'bold', marginBottom: '10px',
//               fontSize:'1.8rem' }}>
//               {card.title}
//             </Typography>
//             <Typography variant="body2" sx={{ fontSize:index === 0 ?'0.57rem':'0.8rem', 
//              lineHeight: '1.6', 
//              textAlign: 'justify', 
//              hyphens: 'auto', 
//              wordWrap: 'break-word',
//              overflowY:'hidden'
//             }}>
//               {card.description}
//             </Typography>
//           </CardContent>
//         </Card>
//       ))}
//     </Box>
//     </Box>

//     </div>
    
//   );
// };

// export default About;

import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import screen from "../../img/screen1.jpeg";
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; 

const cardsData = [
  {
    title: "Creative Design",
    description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. "

  },
  {
    title: "Easy to Use",
    description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. "
  },
  {
    title: "Best User Experience",
    description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. "
  }
];

const WhyKayan = () => {
  return (
    <div id="whykayan">
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          backgroundColor: "#FFFFFF", 
        }}
      >

        <Box
          sx={{
            position: "absolute",
            top: "-1px",
            left: 0,
            width: "100%",
            height: "210px", 
            overflow: "hidden",
          }}
        >
            <svg
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "20px", 
              // opacity: "0.5", 
            }}
          >
            <path
              fill="#D8D8D8"
              d="M0,224L80,202.7C160,181,320,139,480,149.3C640,160,800,224,960,245.3C1120,267,1280,245,1360,234.7L1440,224V0H0Z"
            />
          </svg>

          <svg
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            <defs>
              <linearGradient id="waveGradient" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(24, 93, 179)" />
                <stop offset="100%" stopColor="rgb(87, 174, 255)" />
              </linearGradient>
            </defs>
            <path
              fill="url(#waveGradient)"
              d="M0,224L80,202.7C160,181,320,139,480,149.3C640,160,800,224,960,245.3C1120,267,1280,245,1360,234.7L1440,224V0H0Z"
            />
          </svg>

        
        </Box>


        <Box
          sx={{
            width: '100%',
            textAlign: 'center',
            marginTop: "170px", 
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: '700',
              color:"#458FF6",
              fontFamily: 'monospace'
            }}
          >
            Why Kayan
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: '0.9rem',
              color: 'black',
              // fontFamily: 'monospace',
              marginTop: '10px',
              lineHeight: '1.4',
              maxWidth: '50%',
              marginX: 'auto' 
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. 
            <br /> ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. 

          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px',
            width: '100%',
          }}
        >
          
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column", 
            }}
          >
        <img
            src={screen}
            alt="Screen"
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "390px",
              borderRadius: "10px",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          />
           <Box
              sx={{
                width: "95%", 
                maxWidth: "630px",
                height: "10px", 
                backgroundColor: "#D8D8D8", 
                borderRadius: "2px", 
              }}
            />
          </Box>

          <Box sx={{ width: '40%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {cardsData.map((card, index) => (
              <Card
                key={index}
                sx={{
                  backgroundColor: 'white',
                  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  padding: '10px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
                  }
                }}
              >

                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <CheckCircleIcon sx={{ color: "#458FF6", fontSize: "20px" }} />
                    <Typography
                      variant="h5"
                      sx={{
                        color: ' #232233',
                        fontWeight: "700",
                        fontFamily: "monospace",
                        fontSize: '1.1rem',
                        textTransform: "uppercase", 
                        letterSpacing: "-1px",
                      }}
                    >
                      {card.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ fontSize: '0.8rem', lineHeight: '1.3' }}>
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

        </Box>

      </Box>
    </div>
  );
};

export default WhyKayan;
