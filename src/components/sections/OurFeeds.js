import React, { useState } from "react";
import { Box, Typography, Button, useMediaQuery, Card, CardContent, CardMedia, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

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
];

const OurFeeds = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [selectedFeed, setSelectedFeed] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = isSmallScreen ? 1 : 3;
  const totalPages = Math.ceil(feeds.length / cardsPerPage);

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
        sx={{
          width: "100%",
          backgroundColor: "#FFFFFF",
          padding: isSmallScreen ? "20px 10px" : "40px 20px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {selectedFeed ? (
          
          <Box
            sx={{
              width: "100%",
              maxWidth: "1200px",
              marginTop: "10%",
              backgroundColor: "rgba(25,118,210,0.04)", 
              borderRadius: "10px", 
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)", 
              padding: isSmallScreen ? "20px" : "30px", 
              overflowX:"hidden"
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
                    fontWeight: "700",
                    fontFamily: "Montserrat",
                    color: "#2091F9",
                    marginBottom: "20px",
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
                    fontWeight: "bold",
                    backgroundColor: "#2091F9",
                    color: "#FFFFFF",
                    padding: "10px 20px",
                    textTransform: "capitalize",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "#1565C0",
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
            sx={{
              width: "100%",
              maxWidth: "1200px",
              position: "relative",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: isSmallScreen ? "column" : "row",
                gap: "20px",
                justifyContent: "center",
                alignItems: isSmallScreen ? "center" : "stretch",
                marginTop: "90px",
              }}
            >
              {visibleFeeds.map((feed, index) => (
                <Card
                  key={index}
                  sx={{
                    width: isSmallScreen ? "100%" : "360px",
                    maxWidth: "360px",
                    height: "510px",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={feed.image}
                    alt={feed.title}
                    sx={{ objectFit: "cover", flexShrink: 0 }}
                  />
                  <CardContent
                    sx={{
                      padding: "20px",
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
                          fontSize: "1.2rem",
                          fontWeight: "700",
                          fontFamily: "Montserrat",
                          color: "#2091F9",
                          marginBottom: "10px",
                        }}
                      >
                        {feed.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "0.9rem",
                          color: "#333333",
                          fontFamily: "Montserrat",
                          marginBottom: "15px",
                          lineHeight: "1.5",
                        }}
                      >
                        {getShortText(feed.description)}
                        <span
                          style={{
                            color: "#333333",
                            fontFamily: "Montserrat",
                          }}
                        >
                          ...
                        </span>
                        <span
                          onClick={() => handleReadMore(feed)}
                          style={{
                            color: "#2091F9",
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
                    left: isSmallScreen ? "5px" : "-30px",
                    transform: "translateY(-50%)",
                    color: "#2091F9",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 1)",
                    },
                  }}
                >
                  <KeyboardArrowLeftIcon fontSize="large" />
                </IconButton>
                <IconButton
                  onClick={nextCards}
                  size="large"
                  aria-label="Next cards"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    right: isSmallScreen ? "5px" : "-30px",
                    transform: "translateY(-50%)",
                    color: "#2091F9",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 1)",
                    },
                  }}
                >
                  <KeyboardArrowRightIcon fontSize="large" />
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