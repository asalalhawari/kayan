
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Container,
  useMediaQuery,
  Stack,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import kayanLogo from '../img/kayanLogo.png';

// Carousel components (assuming you have the components imported)
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

// Import images directly (you can replace these with your own images if needed)
// import image1 from '../img/image1.jpg';
// import image2 from '../img/image2.jpg';
// import image3 from '../img/image3.jpg';

// Feeds data
const feeds = [
  {
    title: 'LEADERS IN HEALTHCARE SERVICES',
    description: 'We provide a comprehensive suite of modular software systems tailored to meet the healthcare requirements for the Healthcare and Insurance sector.',
    image: 'https://www.kayan-healthcare.com/static/media/services.2e20b4e4.jpg',
  },
  {
    title: 'Payer Solutions',
    description: 'Our solutions help payers in quickly identifying errors in claims and settling them.',
    image: 'https://www.kayan-healthcare.com/static/media/service1.8c40564f.webp',
  },
  {
    title: 'Provider Solutions',
    description: 'Our software provides top of the line improved clinical edit checks, removes vague codes, and comes with claim management features.',
    image: 'https://www.kayan-healthcare.com/static/media/service2.bf61dbe1.webp',
  },
  {
    title: 'Machine Learning Solutions',
    description: 'Our software uses machine learning techniques to show predictions and statistics to doctors, vendors, and payers to reach optimal decisions.',
    image: 'https://www.kayan-healthcare.com/static/media/service3.32698236.webp',
  },
];

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentFeedIndex, setCurrentFeedIndex] = useState(0);
  const [isDialogOpen, setDialogOpen] = useState(false);

  // Automatic slideshow interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeedIndex((prevIndex) => (prevIndex + 1) % feeds.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [feeds.length]);

  const handleReadMore = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);

  const handleDotClick = (index) => {
    setCurrentFeedIndex(index);
  };

  return (
    <>
      {/* Full Page Carousel */}
      <div className="h-screen relative">
        <Carousel className="h-full w-full">
          <CarouselContent>
            {feeds.map((feed, index) => (
              <CarouselItem key={index}>
                <div className="relative h-screen w-full">
                  {/* Background Image */}
                  <img
                    src={feed.image}
                    alt={feed.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-4">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                      {feed.title}
                    </h2>
                    <p className="text-xl md:text-2xl max-w-2xl text-center">
                      {feed.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows */}
          <CarouselPrevious className="left-4 bg-white/30 hover:bg-white/50" />
          <CarouselNext className="right-4 bg-white/30 hover:bg-white/50" />

          {/* Custom Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {feeds.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full ${
                  currentFeedIndex === index ? 'bg-white' : 'bg-white/50'
                } hover:bg-white`}
              />
            ))}
          </div>
        </Carousel>
      </div>

      {/* Feeds Section
      <Container
        id="feeds-section"
        sx={{
          marginTop: '30px',
          width: { xs: '100%', md: '100%' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: isSmallScreen ? 'column' : 'row',
            alignItems: 'center',
            gap: 2,
            justifyContent: isSmallScreen ? 'center' : 'flex-start',
          }}
        >
          <Box
            sx={{
              width: isSmallScreen ? '80%' : '55%',
              height: isSmallScreen ? '160px' : '200px',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '10px',
              textAlign: 'left',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: '500',
                mb: 2,
                fontSize: '12px',
                padding: '20px',
                fontWeight: '600',
                marginBottom: '10px',
              }}
            >
              {feeds[currentFeedIndex].title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: '9px', padding: '4px' }}
            >
              {feeds[currentFeedIndex].description}...
              <Button
                onClick={handleReadMore}
                sx={{ fontSize: '10px', textTransform: 'lowercase' }}
              >
                Read more...
              </Button>
            </Typography>
          </Box>

          <Box
            component="img"
            src={feeds[currentFeedIndex].image}
            alt={feeds[currentFeedIndex].title}
            sx={{
              width: isSmallScreen ? '80%' : '40%',
              height: isSmallScreen ? '160px' : '190px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
            }}
          />
        </Box>

        <Stack direction="row" spacing={1} sx={{ marginTop: 2, justifyContent: 'center' }}>
          {feeds.map((feed, index) => (
            <Box
              key={index}
              onClick={() => handleDotClick(index)}
              sx={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                backgroundColor: currentFeedIndex === index ? 'primary.main' : 'grey.400',
                cursor: 'pointer',
              }}
            />
          ))}
        </Stack>

        <Dialog open={isDialogOpen} onClose={handleCloseDialog} fullWidth maxWidth="md">
          <DialogTitle>{feeds[currentFeedIndex].title}</DialogTitle>
          <DialogContent>
            <Typography variant="body1">{feeds[currentFeedIndex].description}</Typography>
          </DialogContent>
        </Dialog>
      </Container> */}
    </>
  );
};

export default Home;
