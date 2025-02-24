// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   IconButton,
//   useMediaQuery,
//   useTheme,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   Button,
// } from "@mui/material";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "./components/ui/carousel";
// import solution from "./img/solution4.png"
// const feeds = [
//   {
//     title: "LEADERS IN HEALTHCARE SERVICES",
//     description:
//       "We provide a comprehensive suite of modular software systems tailored to meet the healthcare requirements for the Healthcare and Insurance sector.",
// //      image: solution,
// // backgroundColor: 'none'
// image:"https://img.freepik.com/premium-photo/doctor-holding-stethoscope_23-2147822716.jpg?w=740"
//     //  "https://www.kayan-healthcare.com/static/media/services.2e20b4e4.jpg",

//     //  backgroundColor: 'linear-gradient(to right bottom, #2F2F2F, #FFFFFF)',
//   },
//   {
//     title: "Payer Solutions",
//     description:
//       "Our solutions help payers in quickly identifying errors in claims and settling them. Our software streamlines the process and ensures faster claim resolutions.",
//     image:
//       "https://www.kayan-healthcare.com/static/media/service1.8c40564f.webp",
//       ///////////
//       backgroundColor: 'rgb(0 ,0 ,0 ,0.2)'
//   },
//   {
//     title: "Provider Solutions",
//     description:
//       "Our software provides top-of-the-line improved clinical edit checks, removes vague codes, and comes with claim management features to support providers in their day-to-day operations.",
//     image:
//       "https://www.kayan-healthcare.com/static/media/service2.bf61dbe1.webp",
//       /////
//        backgroundColor: 'rgb(0 ,0 ,0 ,0.2)'
//   },
//   {
//     title: "Machine Learning Solutions",
//     description:
//         "Our software uses machine learning techniques to show predictions and statistics to doctors, vendors, and payers to reach optimal decisions. It adapts to new data and helps improve healthcare outcomes.Our software uses machine learning techniques to show predictions and statistics to doctors, vendors, and payers to reach optimal decisions. It adapts to new data and helps improve healthcare outcomes.Our software uses machine learning techniques to show predictions and statistics to doctors, vendors, and payers to reach optimal decisions. It adapts to new data and helps improve healthcare outcomes.Our software uses machine learning techniques to show predictions and statistics to doctors, vendors, and payers to reach optimal decisions. It adapts to new data and helps improve healthcare outcomes.",
//     image:
//       "https://www.kayan-healthcare.com/static/media/service3.32698236.webp",
//       ///////
//        backgroundColor: 'rgb(0 ,0 ,0 ,0.2)'
//   },
// ];

// const Home = () => {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
//   const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
//   const [currentFeedIndex, setCurrentFeedIndex] = useState(0);
//   const [isDialogOpen, setDialogOpen] = useState(false);
//   const [selectedFeed, setSelectedFeed] = useState(null);
//   const [expandedIndex, setExpandedIndex] = useState(null);
//   const nextFeed = () => {
//     setCurrentFeedIndex((prevIndex) => (prevIndex + 1) % feeds.length);
//   };

//   const prevFeed = () => {
//     setCurrentFeedIndex((prevIndex) =>
//       prevIndex === 0 ? feeds.length - 1 : prevIndex - 1
//     );
//   };

//   // const handleReadMore = (feed) => {
//   //   setSelectedFeed(feed);
//   //   setDialogOpen(true);
//   // };
  
//   // const handleCloseDialog = () => {
//   //   setDialogOpen(false);
//   //   setSelectedFeed(null);
//   // };
   
//    const goToSlide = (index) => {
//     setCurrentFeedIndex(index);
//   };
//   const handleReadMore = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };
//   const getShortText = (text) => {
//     const words = text.split(' ');
//     return words.length > 25 ? words.slice(0, 20).join(' ') + '...' : text;
//   };

//   return (
//     <>
    
//       <style>
//         {`
//           @keyframes rotateAndFadeIn {
//             0% {
//               opacity: 0.5;
//               transform: rotate(0deg) scale(0.8);
//             }
//             100% {
//               opacity: 1;
//               transform: rotate(360deg) scale(1);
//             }
//           }
        
  
//              .text-animation {
//           animation: rotateAndFadeIn 1s ease-out forwards;
//         }
//           .content-container {
//         display: flex;
//         flex-direction: column;
//         align-items: flex-start;
//         text-align: left;
//         padding-left: 20px;
//       }

//       .title {
//        width: 63%;
//         font-size: 2.8rem; 
//         position: relative;
//         margin-bottom: 2.2rem;
//         margin-left: 2.8rem;
//         line-height: 4rem;
//       }

//       .title::after {
//         content: "";
//         width: 100%;
//         height: 2px;
//         background-color: white;
//         position: absolute;
//         left: 0;
//         bottom: -5px;
      
//       }

//       .description {
//         font-size: 1rem; 
//         margin-left: 2rem;
//       }
//         .button {
//         font-size: 0.8rem;
//         width: 16%;
//         background: #eaeaea;
//         margin-left:18rem;
//         margin-top: 1rem;
      
// }
//         }
//        `}
//       </style>
  
//       <div className="h-screen relative" id="home">
//         <Carousel className="h-full w-full">
//           <CarouselContent
//           >
//             {feeds.map((feed, index) => (
//               <CarouselItem
              
//                 key={index}
//                 className={index === currentFeedIndex ? "block" : "hidden"}
//               >
//            <div
//                   className="relative h-screen w-full content-container "
//                   style={{ 
//                     background: feed.image
//                     ?`url(${feed.image}) center/cover no-repeat`
//                     // ${index === 0 ? 'left/contain no-repeat' : 'center/cover no-repeat'}`
//                     : feed.backgroundColor,
//                    }}
//                 >
//                     {/* {feed.image && ( 
//         <img
//           src={feed.image}
//           alt={feed.title}
//           className="absolute inset-0 w-full h-full object-cover"
//           style={{
//             objectFit: 'contain', 
//             objectPosition: 'center', 
//           }}
//         />
//       )} */}
//                   {/* <img
//                     src={feed.image}
//                     alt={feed.title}
//                     className="absolute inset-0 w-full h-full object-cover"
//                   /> */}
//                   <div
//                     className="absolute inset-0 bg-black/40 "
//                     style={{ backgroundColor: feed.backgroundColor }}
//                   />
  
//                   <div
//                     className={` relative z-10 h-full flex flex-col flex-start card-animation justify-center text-white p-4 ${
//                       isSmallScreen ? "px-2" : "px-6"
//                     }`}
//                     style={{ left:'5%'
//                       //  index === 0 ?"13%":"5%" 
//                       }}
//                   >
//                     <h2
//                       className={`title font-bold card-animation text-animation mb-4 ${
//                         isSmallScreen
//                           ? "text-2xl"
//                           : isMediumScreen
//                           ? "text-4xl"
//                           : "text-6xl"
//                       }`}
//                     >
//                       {feed.title}
//                     </h2>
//                     {/* <p
//                       className={`max-w-2xl card-animation text-animation text-center ${
//                         isSmallScreen ? "text-base" : "text-lg md:text-2xl"
//                       }`}
//                     >
//                       {feed.description}
//                     </p> */}
                   
                  
//           <p
//           className={`max-w-2xl description card-animation text-animation text-center ${
//             isSmallScreen ? "text-base" : "text-lg md:text-2xl"
//           }`}
//           style={{
//             textAlign: 'justify',
//           }}
//           >
//             {expandedIndex === index ? feed.description : getShortText(feed.description)}
//           </p>
//           {index !== 0 && (
            
//           <Button 
//           className="button"
//           onClick={() => handleReadMore(index)}>
//             {expandedIndex === index ? 'Show Less' : 'Read More'}
//             </Button>
//              )}
        
  
//                      {/* {index !== 0 && (
//                       <Button
//                         variant="outlined"
//                         onClick={() => handleReadMore(feed)}
//                         sx={{
//                           color: "white",
//                           borderColor: "white",
//                           marginTop: 2,
//                           fontSize: "0.75rem",
//                           padding: "4px 8px",
//                         }}
//                       >
//                           {expanded ? 'Show Less' : 'Read More'}
//                       </Button>
//                     )} */}
                 

//                   </div>
//                 </div> 
      
    
//               </CarouselItem>
//             ))}
//           </CarouselContent>
  
          
//           <div
//             className="absolute transform -translate-y-1/2"
//             style={{
//               top: isSmallScreen ? "65%" : "50%",
//               left: isSmallScreen ? "5px" : "20px",
//             }}
//           >
//             <IconButton
//               onClick={prevFeed}
//               size="large"
//               aria-label="Previous feed"
//               sx={{ color: "#fff" }}
//             >
//               <KeyboardArrowLeftIcon fontSize="large" />
//             </IconButton>
//           </div>
//           <div
//             className="absolute transform -translate-y-1/2"
//             style={{
//               top: isSmallScreen ? "65%" : "50%",
//               right: isSmallScreen ? "5px" : "20px",
//             }}
//           >
//             <IconButton
//               onClick={nextFeed}
//               size="large"
//               aria-label="Next feed"
//               sx={{ color: "#fff" }}
//             >
//               <KeyboardArrowRightIcon fontSize="large" />
//             </IconButton>
//           </div>
  
//           <div
//             className="absolute bottom-4 left-0 right-0 flex justify-center"
//             style={{ pointerEvents: "none" }}
//           >
//             {feeds.map((_, index) => (
//               <div
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 style={{
//                   width: "10px",
//                   height: "10px",
//                   borderRadius: "50%",
//                   backgroundColor:
//                     index === currentFeedIndex
//                       ? "#fff"
//                       : "rgba(255, 255, 255, 0.5)",
//                   margin: "0 5px",
//                   cursor: "pointer",
//                   pointerEvents: "auto",
//                 }}
//               />
//             ))}
//           </div>
//         </Carousel>
//       </div>
  
//       {/* <Dialog
//         open={isDialogOpen}
//         onClose={handleCloseDialog}
//         fullWidth
//         maxWidth="md"
//       >
//         <DialogTitle>{selectedFeed?.title}</DialogTitle>
//         <DialogContent>
//           <Typography variant="body1">{selectedFeed?.description}</Typography>
//         </DialogContent>
//         <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
//           <Button onClick={handleCloseDialog} variant="outlined">
//             Close
//           </Button>
//         </Box>
//       </Dialog> */}
//     </>
//   );
  
// };

// export default Home;


import React from "react";
import { Box, Typography, Button } from "@mui/material";
import screen from "./img/screen1.jpeg";

const Home = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home">
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to left bottom, #00152E, #2091F9)",
          padding: "20px",
          gap: "2rem",
          position: "relative",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop:"10%",
            flexDirection: "column", 

          }}
        >
          <img
            src={screen}
            alt="Screen"
            style={{
              width: "100%",
              maxWidth: "550px",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          />
           <Box
              sx={{
                width: "85%", 
                maxWidth: "600px",
                height: "8px", 
                backgroundColor: "#D8D8D8", 
                borderRadius: "2px", 
              }}
            />
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              // fontFamily: "Orbitron, sans-serif",
              color: " #FFFFFF",
            }}
          >
            Your Partner in Innovation.
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              // fontFamily: "Orbitron, sans-serif",
              color: "#FFFFFF",
              marginTop: "10px",
            }}
          >
            Kayan’s AI
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.2rem",
              color: "#FFFFFF",
              marginTop: "10px",
              fontWeight: "400",
            }}
          >
            We offer you the most efficient management team with proven
            healthcare experience.
          </Typography>

          <Button
            variant="contained"
            sx={{
              marginTop: "20px",
              fontSize: "1.2rem",
              fontWeight: "bold",
              backgroundColor: "#FFFFFF",
              color: "#2091F9",
              padding: "10px 20px",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "rgba(214,222,231,0.5)",
              },
            }}
            onClick={() => scrollToSection("demo")}
          >
            Request a Demo
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Home;

  
 
  