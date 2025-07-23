import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box, Button, Card, Typography } from "@mui/material";
import { motion } from "framer-motion";
import homeBg from "../../img/home.jpg";

const Home = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{
        minHeight: { xs: "auto", sm: "100vh" },
        padding: { xs: "60px 0", sm: "80px 0", md: "100px 0" },
        background: `url(${homeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%)",
          zIndex: 1,
        }
      }}
    >
      {/* Animated background elements */}
      <Box
        component={motion.div}
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        sx={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />

      <Box
        component={motion.div}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(66,165,245,0.2) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />

              <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 3, sm: 4, lg: 8 },
            px: { xs: 2, sm: 4, lg: 6 },
            position: "relative",
            zIndex: 2,
          }}
        >
        {/* Left: Chart/Laptop */}
        <Box
          component={motion.div}
          variants={itemVariants}
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: { xs: 4, lg: 0 },
            order: { xs: 2, lg: 1 },
          }}
        >
          <Card
            component={motion.div}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
            }}
            transition={{ duration: 0.3 }}
            elevation={12}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              width: { xs: "100%", sm: "90%", lg: "100%" },
              maxWidth: "600px",
              bgcolor: "#23242a",
              p: 0,
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1,
              }
            }}
          >
           
            
            {/* Floating action button */}
            <Box
              component={motion.div}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "rgba(25,118,210,0.9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 3,
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                backdropFilter: "blur(10px)",
              }}
            >
              <PlayArrowIcon sx={{ color: "white", fontSize: "30px" }} />
            </Box>
          </Card>
        </Box>

        {/* Right: Text and Button */}
        <Box
          component={motion.div}
          variants={itemVariants}
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", lg: "flex-start" },
            textAlign: { xs: "center", lg: "left" },
            order: { xs: 1, lg: 2 },
          }}
        >
          <Typography
            component={motion.h1}
            variants={itemVariants}
            variant="h1"
            sx={{
              fontWeight: 800,
              color: "#fff",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
              mb: { xs: 2, sm: 3 },
              lineHeight: 1.1,
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              background: "linear-gradient(45deg, #fff 30%, #e3f2fd 90%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Your Reliable Partner in
            <Box component="span" sx={{ 
              display: "block", 
              background: "linear-gradient(45deg, #42a5f5 30%, #1976d2 90%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              E-Claim Solutions
            </Box>
          </Typography>
          
          <Typography
            component={motion.p}
            variants={itemVariants}
            variant="body1"
            sx={{
              color: "#e3f2fd",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              mb: { xs: 3, sm: 4 },
              maxWidth: '90%',
              lineHeight: 1.6,
              opacity: 0.9,
            }}
          >
            Transform the way you handle claims with our simplified e-claim 
            multi-layered AI-powered solutions. Get the most efficient management 
            team with proven healthcare experience.
          </Typography>

          <Box
            component={motion.div}
            variants={itemVariants}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              width: "100%",
              justifyContent: { xs: "center", lg: "flex-start" },
            }}
          >
            <Button
              component={motion.button}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                background: "linear-gradient(45deg, #fff 30%, #f5f5f5 90%)",
                color: "#1976d2",
                fontWeight: 700,
                fontSize: "1.1rem",
                borderRadius: "50px",
                px: 4,
                py: 2,
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                textTransform: "none",
                minWidth: "200px",
                "&:hover": {
                  background: "linear-gradient(45deg, #f5f5f5 30%, #e0e0e0 90%)",
                  boxShadow: "0 12px 35px rgba(0,0,0,0.2)",
                },
              }}
              onClick={() => scrollToSection("contactUs")}
            >
              Request a Demo
            </Button>

            <Button
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variant="outlined"
              sx={{
                borderColor: "rgba(255,255,255,0.3)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "1rem",
                borderRadius: "50px",
                px: 4,
                py: 2,
                textTransform: "none",
                minWidth: "200px",
                "&:hover": {
                  borderColor: "#fff",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                },
              }}
              onClick={() => scrollToSection("benefits")}
            >
              Learn More
            </Button>
          </Box>

          {/* Stats */}
          <Box
            component={motion.div}
            variants={itemVariants}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-start" },
              gap: { xs: 2, sm: 4 },
              mt: { xs: 3, sm: 4 },
              flexWrap: "wrap",
            }}
          >
            {[
              { number: "99%", label: "Accuracy Rate" },
              { number: "24/7", label: "Support" },
              { number: "50+", label: "Healthcare Partners" },
            ].map((stat, index) => (
              <Box
                key={index}
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                sx={{
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "1.5rem", sm: "2rem" },
                    color: "#42a5f5",
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "0.8rem", sm: "0.9rem" },
                    opacity: 0.8,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

