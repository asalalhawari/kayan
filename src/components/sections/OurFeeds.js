import React, { useState } from "react";
import { Box, Typography, Button, useMediaQuery, Card, CardContent, CardMedia, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { motion } from 'framer-motion';
import article from "../../img/article.jpg";

const feeds = [
  {
    title: "Payer Solutions",
    description:
      "Our solutions help payers in quickly identifying errors in claims and settling them. Our software streamlines the process and ensures faster claim resolutions.",
    image: "https://www.kayan-healthcare.com/static/media/service1.8c40564f.webp",
  },
  {
    title: "Provider Solutions",
    description:
      "Our software provides top-of-the-line improved clinical edit checks, removes vague codes, and comes with claim management features to support providers in their day-to-day operations.",
    image: "https://www.kayan-healthcare.com/static/media/service2.bf61dbe1.webp",
  },
  {
    title: "Machine Learning Solutions",
    description:
      "Our software uses machine learning techniques to show predictions and statistics to doctors, vendors, and payers to reach optimal decisions. It adapts to new data and helps improve healthcare outcomes.",
    image: "https://www.kayan-healthcare.com/static/media/service3.32698236.webp",
  },
  {
    title: "Advanced Analytics",
    description:
      "Leverage advanced analytics to gain deeper insights into healthcare trends, optimize operations, and enhance patient outcomes with data-driven decisions.",
    image: "https://www.kayan-healthcare.com/static/media/service3.32698236.webp",
  },
  {
    title: "Kayan Healthcare Technologies and the Future of E-Prescriptions and Pharmaceutical Benefit Edits",
    description:
      "In today's rapidly evolving healthcare landscape, the integration of e-prescription systems and pharmaceutical benefits is more crucial than ever. This seamless connection streamlines the medication management process. Effective drug claim scrubbing plays a pivotal role in ensuring accuracy and compliance, reducing errors, and optimizing reimbursement. By prioritizing pharmaceutical scrubbers, we can foster a more efficient healthcare ecosystem. In this regard, Kayan Healthcare Technologies is developing a comprehensive and outstanding suite of checks and edits to automate prescription verifications against formularies and guidelines. and establishing a strong Rule Management Scrubber to automate the full process and ensure compliance with the ongoing rapid technologies and endless expectations of the industry.",
    image: article,
  },
];

const OurFeeds = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:1024px)');
  const [selectedFeed, setSelectedFeed] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;
  const totalPages = Math.ceil(feeds.length / cardsPerPage);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getShortText = (text) => {
    const words = text.split(' ');
    return words.length > 25 ? words.slice(0, 20).join(' ') + '...' : text;
  };

  const handleReadMore = (feed) => {
    setSelectedFeed(feed);
  };

  const handleBack = () => {
    setSelectedFeed(null);
  };

  const nextCards = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevCards = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
  };

  const goToPage = (index) => {
    setCurrentIndex(index);
  };

  const visibleFeeds = feeds.slice(
    currentIndex * cardsPerPage,
    (currentIndex + 1) * cardsPerPage
  );

  return (
    <div id="our-feeds">
      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        sx={{
          width: "100%",
          background: "linear-gradient(135deg, #f8fafc 0%, #e3f2fd 50%, #f1f5f9 100%)",
          padding: isSmallScreen ? "20px 10px" : "40px 20px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\"><path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(25,118,210,0.05)\" stroke-width=\"0.5\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grid)\"/></svg>')",
            opacity: 0.5,
          }
        }}
      >
        {selectedFeed ? (
          
          <Box
            component={motion.div}
            variants={itemVariants}
            sx={{
              width: "100%",
              maxWidth: "1500px",
              marginTop: "1%",
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "24px", 
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)", 
              padding: isSmallScreen ? "20px" : "30px", 
              overflowX:"hidden",
              position: "relative",
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: isSmallScreen ? "column" : "row",
                alignItems: "center",
                gap: isSmallScreen ? "1rem" : "2rem",
              }}
            >
              {/* Image Section */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={selectedFeed.image}
                  alt={selectedFeed.title}
                  style={{
                    width: isSmallScreen ? "100%" : "500px",
                    height: isSmallScreen ? "auto" : "400px",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                    objectFit: "cover",
                  }}
                />
              </Box>

              {/* Text Section */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: isSmallScreen ? "center" : "flex-start",
                  padding: isSmallScreen ? "10px" : "20px",
                  textAlign: isSmallScreen ? "center" : "left",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: isSmallScreen ? "1.5rem" : "2rem",
                    fontWeight: "800",
                    fontFamily: "Montserrat",
                    background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "20px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  {selectedFeed.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: isSmallScreen ? "0.9rem" : "1.1rem",
                    color: "#333333",
                    fontFamily: "Montserrat",
                    lineHeight: "1.6",
                  }}
                >
                  {selectedFeed.description}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    marginTop: "20px",
                    fontSize: isSmallScreen ? "0.8rem" : "0.9rem",
                    fontWeight: "600",
                    background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
                    color: "#FFFFFF",
                    padding: "12px 24px",
                    textTransform: "none",
                    borderRadius: "50px",
                    boxShadow: "0 8px 25px rgba(25, 118, 210, 0.3)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #1565c0 0%, #1976d2 100%)",
                      boxShadow: "0 12px 35px rgba(25, 118, 210, 0.4)",
                    },
                  }}
                  onClick={handleBack}
                >
                  Back
                </Button>
              </Box>
            </Box>
          </Box>
        ) : (
          // Cards View with Carousel
          <Box
            component={motion.div}
            variants={itemVariants}
            sx={{
              width: "100%",
              maxWidth: "1500px",
              position: "relative",
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: isSmallScreen ? "column" : "row",
                gap: { xs: 3, md: 4 },
                marginTop: isSmallScreen ? "60px" : "90px",
                justifyContent: "center",
                alignItems: "stretch",
                flexWrap: "wrap",
                padding: { xs: "0 20px", md: "0 80px" },
                maxWidth: "100%",
              }}
            >
              {visibleFeeds.map((feed, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: isSmallScreen ? "100%" : isMediumScreen ? "calc(50% - 16px)" : "300px",
                    maxWidth: isSmallScreen ? "100%" : isMediumScreen ? "none" : "300px",
                    minWidth: isSmallScreen ? "100%" : isMediumScreen ? "260px" : "300px",
                    flex: isSmallScreen ? "none" : isMediumScreen ? "1" : "none",
                  }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      background: "rgba(255, 255, 255, 0.9)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "24px",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.3s ease",
                      position: "relative",
                      "&:hover": {
                        boxShadow: "0 16px 48px rgba(0, 0, 0, 0.15)",
                        "& .feed-image": {
                          transform: "scale(1.05)",
                        }
                      },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: "linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)",
                        zIndex: 1,
                      }
                    }}
                  >
                  <CardMedia
                    component="img"
                    height={isSmallScreen ? "180" : "200"}
                    image={feed.image}
                    alt={feed.title}
                    className="feed-image"
                    sx={{ 
                      objectFit: "cover", 
                      flexShrink: 0,
                      minHeight: isSmallScreen ? "180px" : "200px",
                      maxHeight: isSmallScreen ? "180px" : "200px",
                      width: "100%",
                      transition: "transform 0.3s ease"
                    }}
                  />
                  <CardContent
                    sx={{
                      padding: isSmallScreen ? "15px" : "20px",
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: isSmallScreen ? "1rem" : "1.2rem",
                          fontWeight: "700",
                          fontFamily: "Montserrat",
                          color: "#1e293b",
                          marginBottom: "10px",
                          lineHeight: "1.3",
                        }}
                      >
                        {feed.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: isSmallScreen ? "0.8rem" : "0.9rem",
                          color: "#64748b",
                          fontFamily: "Montserrat",
                          marginBottom: "15px",
                          lineHeight: "1.5",
                        }}
                      >
                        {getShortText(feed.description)}
                        <span
                          style={{
                            color: "#64748b",
                            fontFamily: "Montserrat",
                          }}
                        >
                          ...
                        </span>
                        <span
                          onClick={() => handleReadMore(feed)}
                          style={{
                            color: "#1976d2",
                            fontWeight: "bold",
                            cursor: "pointer",
                            marginLeft: "5px",
                            textDecoration: "none",
                            fontFamily: "Montserrat",
                          }}
                        >
                          read more
                        </span>
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
                </motion.div>
              ))}
            </Box>

            {/* Navigation Arrows */}
            {feeds.length > cardsPerPage && (
              <>
                <IconButton
                  onClick={prevCards}
                  size="large"
                  aria-label="Previous cards"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: isSmallScreen ? "5px" : isMediumScreen ? "-40px" : "-50px",
                    transform: "translateY(-50%)",
                    color: "#1976d2",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 1)",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    },
                    zIndex: 3,
                  }}
                >
                  <KeyboardArrowLeftIcon fontSize={isSmallScreen ? "medium" : "large"} />
                </IconButton>
                <IconButton
                  onClick={nextCards}
                  size="large"
                  aria-label="Next cards"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    right: isSmallScreen ? "5px" : isMediumScreen ? "-40px" : "-50px",
                    transform: "translateY(-50%)",
                    color: "#1976d2",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 1)",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                    },
                    zIndex: 3,
                  }}
                >
                  <KeyboardArrowRightIcon fontSize={isSmallScreen ? "medium" : "large"} />
                </IconButton>

                {/* Navigation Dots */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "-40px",
                    left: 0,
                    right: 0, // Changed to center the dots
                    display: "flex",
                    justifyContent: "center",
                    pointerEvents: "none",
                  }}
                >
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <Box
                      key={index}
                      onClick={() => goToPage(index)}
                      sx={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor:
                          index === currentIndex
                            ? "#2091F9"
                            : "rgba(32, 145, 249, 0.5)",
                        margin: "0 5px",
                        cursor: "pointer",
                        pointerEvents: "auto",
                      }}
                    />
                  ))}
                </Box>
              </>
            )}
          </Box>
        )}
      </Box>
    </div>
  );
};

export default OurFeeds;