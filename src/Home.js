import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./components/ui/carousel";

const feeds = [
  {
    title: "LEADERS IN HEALTHCARE SERVICES",
    description:
      "We provide a comprehensive suite of modular software systems tailored to meet the healthcare requirements for the Healthcare and Insurance sector.",
    image:
      "https://www.kayan-healthcare.com/static/media/services.2e20b4e4.jpg",
  },
  {
    title: "Payer Solutions",
    description:
      "Our solutions help payers in quickly identifying errors in claims and settling them. Our software streamlines the process and ensures faster claim resolutions.",
    image:
      "https://www.kayan-healthcare.com/static/media/service1.8c40564f.webp",
  },
  {
    title: "Provider Solutions",
    description:
      "Our software provides top-of-the-line improved clinical edit checks, removes vague codes, and comes with claim management features to support providers in their day-to-day operations.",
    image:
      "https://www.kayan-healthcare.com/static/media/service2.bf61dbe1.webp",
  },
  {
    title: "Machine Learning Solutions",
    description:
      "Our software uses machine learning techniques to show predictions and statistics to doctors, vendors, and payers to reach optimal decisions. It adapts to new data and helps improve healthcare outcomes.",
    image:
      "https://www.kayan-healthcare.com/static/media/service3.32698236.webp",
  },
];

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [currentFeedIndex, setCurrentFeedIndex] = useState(0);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedFeed, setSelectedFeed] = useState(null);

  const nextFeed = () => {
    setCurrentFeedIndex((prevIndex) => (prevIndex + 1) % feeds.length);
  };

  const prevFeed = () => {
    setCurrentFeedIndex((prevIndex) =>
      prevIndex === 0 ? feeds.length - 1 : prevIndex - 1
    );
  };

  const handleReadMore = (feed) => {
    setSelectedFeed(feed);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedFeed(null);
  };

  return (
    <>
      <div className="h-screen relative" id="home">
        <Carousel className="h-full w-full">
          <CarouselContent>
            {feeds.map((feed, index) => (
              <CarouselItem
                key={index}
                className={index === currentFeedIndex ? "block" : "hidden"}
              >
                <div className="relative h-screen w-full">
                  <img
                    src={feed.image}
                    alt={feed.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />

                  <div
                    className={`relative z-10 h-full flex flex-col items-center justify-center text-white p-4 ${
                      isSmallScreen ? "px-2" : "px-6"
                    }`}
                  >
                    <h2
                      className={`font-bold mb-4 ${
                        isSmallScreen
                          ? "text-2xl"
                          : isMediumScreen
                          ? "text-4xl"
                          : "text-6xl"
                      }`}
                    >
                      {feed.title}
                    </h2>
                    <p
                      className={`max-w-2xl text-center ${
                        isSmallScreen ? "text-base" : "text-lg md:text-2xl"
                      }`}
                    >
                      {feed.description}
                    </p>

                    {index !== 0 && (
                      <Button
                        variant="outlined"
                        onClick={() => handleReadMore(feed)}
                        sx={{
                          color: "white",
                          borderColor: "white",
                          marginTop: 2,
                          fontSize: "0.75rem",
                          padding: "4px 8px",
                        }}
                      >
                        Read More
                      </Button>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div
            className="absolute transform -translate-y-1/2"
            style={{
              top: isSmallScreen ? "65%":"50%",
              left: isSmallScreen ? "5px" : "20px",
            }}
          >
            <IconButton
              onClick={prevFeed}
              size="large"
              aria-label="Previous feed"
              sx={{ color: "#fff" }}
            >
              <KeyboardArrowLeftIcon fontSize="large" />
            </IconButton>
          </div>
          <div
            className="absolute transform -translate-y-1/2"
            style={{
              top: isSmallScreen ? "65%":"50%",
              right: isSmallScreen ? "5px" : "20px",
            }}
          >
            <IconButton
              onClick={nextFeed}
              size="large"
              aria-label="Next feed"
              sx={{ color: "#fff" }}
            >
              <KeyboardArrowRightIcon fontSize="large" />
            </IconButton>
          </div>
        </Carousel>
      </div>

      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>{selectedFeed?.title}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">{selectedFeed?.description}</Typography>
        </DialogContent>
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <Button onClick={handleCloseDialog} variant="outlined">
            Close
          </Button>
        </Box>
      </Dialog>
    </>
  );
};

export default Home;
