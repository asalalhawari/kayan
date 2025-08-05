import SavingsIcon from '@mui/icons-material/Savings';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportIcon from '@mui/icons-material/Support';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const cardsData = [
  {
    id: "01",
    title: "Effortless Integration",
    description: "Experience seamless and accessible integration that streamlines workflows",
    icon: SpeedIcon,
    color: "#1976d2"
  },
  {
    id: "02",
    title: "Innovation & Customization",
    description: "Innovative AI solutions that meet demands and strictly adhere to the GCC healthcare regulations. ",
    icon: TrendingUpIcon,
    color: "#4caf50"
  },
  {
    id: "03",
    title: "Comprehensive Medical Database",
    description: "Gain access to a vast, robust medical database for enhanced decision-making",
    icon: SecurityIcon,
    color: "#ff9800"
  },
  {
    id: "04",
    title: "Future-Ready Agility",
    description: "Benefit from continuous updates and adaptability to stay ahead in a dynamic environment.",
    icon: TrendingUpIcon,
    color: "#9c27b0"
  },
  {
    id: "05",
    title: "Client Advocacy",
    description: "Strong client relationships and industry reputation",
    icon: SupportIcon,
    color: "#f44336"
  },
  {
    id: "06",
    title: "Cost-effectiveness",
    description: "Achieve seamless claims validation without breaking the Bank",
    icon: SavingsIcon,
    color: "#00bcd4"
  },
];

const Benefits = () => {

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id="benefits">
      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        sx={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          backgroundColor: "#ffffff",
          background: "linear-gradient(135deg, #f8fafc 0%, #e3f2fd 100%)",
          overflow: "hidden",
        }}
      >
        {/* Background decorative elements */}
        <Box
          component={motion.div}
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          sx={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(25,118,210,0.05) 0%, transparent 70%)",
            zIndex: 1,
          }}
        />

        <Box
          component={motion.div}
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          sx={{
            position: "absolute",
            bottom: "20%",
            left: "10%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(76,175,80,0.05) 0%, transparent 70%)",
            zIndex: 1,
          }}
        />

        {/* Heading and Description */}
        <Box
          component={motion.div}
          variants={itemVariants}
          sx={{
            width: '100%',
            textAlign: 'center',
            marginTop: { xs: "120px", md: "140px" },
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
            px: { xs: 2, md: 4 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: '700',
              color: "#1976d2",
              fontFamily: 'Montserrat',
              textTransform: 'uppercase',
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
              mb: 2,
              letterSpacing: "1px",
              background: "#ffffff",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Revolutionize E-Claims With KAYAN 
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              color: '#666',
              marginTop: 2,
              lineHeight: '1.6',
              maxWidth: { xs: '90%', sm: '70%', md: '60%' },
              marginX: 'auto',
              opacity: 0.8,
            }}
          >
            We empower healthcare stakeholders by removing the administrative bottleneck 
            via our cutting-edge solutions.
          </Typography>
        </Box>

        {/* Main Content: Cards Grid */}
        <Box
          component={motion.div}
          variants={itemVariants}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: { xs: '20px', md: '40px 60px' },
            width: '100%',
            position: "relative",
            zIndex: 2,
          }}
        >
          <Grid
            container
            spacing={3}
            sx={{
              width: '100%',
              maxWidth: '1500px',
              justifyContent: 'center',
            }}
          >
            {cardsData.map((card) => {
              const IconComponent = card.icon;
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={card.id}
                  component={motion.div}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      width: '100%',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                      backgroundColor: '#ffffff',
                      borderRadius: "20px",
                      transition: "all 0.3s ease",
                      border: `1px solid rgba(25,118,210,0.1)`,
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: `linear-gradient(90deg, ${card.color} 0%, ${card.color}80 100%)`,
                      },
                      "&:hover": {
                        boxShadow: "0 16px 48px rgba(0,0,0,0.15)",
                        transform: "translateY(-8px)",
                        "& .card-icon": {
                          transform: "scale(1.1) rotate(5deg)",
                          color: card.color,
                        }
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ 
                        display: "flex", 
                        alignItems: "center", 
                        gap: "12px",
                        mb: 2,
                      }}>
                        <Box
                          className="card-icon"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "50px",
                            height: "50px",
                            borderRadius: "12px",
                            backgroundColor: `${card.color}15`,
                            color: card.color,
                            transition: "all 0.3s ease",
                          }}
                        >
                          <IconComponent sx={{ fontSize: "24px" }} />
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            color: '#232233',
                            fontWeight: "700",
                            fontFamily: "Montserrat",
                            fontSize: { xs: '1rem', sm: '1.1rem' },
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {card.title}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: { xs: '0.85rem', sm: '0.9rem' },
                          lineHeight: '1.6',
                          fontWeight: "400",
                          fontFamily: "Inter",
                          color: '#666',
                          opacity: 0.9,
                        }}
                      >
                        {card.description}
                      </Typography>
                      
                      {/* Progress indicator */}
                      <Box sx={{ 
                        display: "flex", 
                        alignItems: "center", 
                        mt: 2,
                        gap: 1,
                      }}>
                          
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Bottom CTA Section */}
        <Box
          component={motion.div}
          variants={itemVariants}
          sx={{
            textAlign: "center",
            py: 6,
            px: { xs: 2, md: 4 },
            position: "relative",
            zIndex: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: "#1976d2",
              mb: 2,
              fontSize: { xs: "1.3rem", sm: "1.5rem" },
            }}
          >
            Ready to Transform Your Healthcare Operations?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              mb: 3,
              maxWidth: "800px",
              marginX: "auto",
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            Join hundreds of healthcare providers who trust KAYAN for their e-claim solutions
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Benefits;
        
       