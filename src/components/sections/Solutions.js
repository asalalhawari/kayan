
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import BusinessIcon from '@mui/icons-material/Business';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SecurityIcon from '@mui/icons-material/Security';
import SupportIcon from '@mui/icons-material/Support';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const petraSolutions = [
    {
      number: '01',
      title: 'POs Integration & Visualization',
      description: 'Enables seamless connections between healthcare providers and insurers through POs. Track the entire claims lifecycle and create insightful dashboards.',
      icon: IntegrationInstructionsIcon,
      color: '#1976d2'
    },
    {
      number: '02',
      title: 'Medical and Coding Scrubber',
      description: 'Built-in Edits and Checks that assist the user in validating the claims in compliance with medical and coding guidelines.',
      icon: SecurityIcon,
      color: '#42a5f5'
    },
    {
      number: '03',
      title: 'Custom Validations',
      description: 'An advanced layer enables the user to configure relations based on their needs and enhance claim scrubbing in compliance with TOB.',
      icon: AutoFixHighIcon,
      color: '#2196f3'
    },
    {
      number: '04',
      title: 'AI Module',
      description: 'This layer uses historical validation and AI to analyze the database, generating various scenarios and detailed insights that help users understand the behaviors of all entities and improve data-driven decision-making.',
      icon: PsychologyIcon,
      color: '#4caf50'
    },
  ];

  const qudraSolutions = [
    {
      number: '01',
      title: 'Connection Layer',
      description: 'Facilitate seamless integration across insurer systems with a robust SaaS model.',
      icon: IntegrationInstructionsIcon,
      color: '#1976d2'
    },
    {
      number: '02',
      title: 'Automation Layer',
      description: 'Automate claims processing with advanced systems, improving efficiency and accuracy.',
      icon: AutoFixHighIcon,
      color: '#42a5f5'
    },
    {
      number: '03',
      title: 'Intelligence Layer',
      description: 'Provide technical business intelligence tools for logical claim referencing and analysis.',
      icon: PsychologyIcon,
      color: '#2196f3'
    },
    {
      number: '04',
      title: 'Assistance Layer',
      description: 'Deliver ongoing support to insurers, ensuring compliance and operational excellence.',
      icon: SupportIcon,
      color: '#4caf50'
    },
  ];

  const handlePetraClick = () => {
    setSelectedSolution('PETRA');
  };

  const handleQudraClick = () => {
    setSelectedSolution('QUDRA');
  };

  useEffect(() => {
    if (selectedSolution && !['PETRA', 'QUDRA'].includes(selectedSolution)) {
      setSelectedSolution(null);
    }
  }, [selectedSolution]);

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

  return (
    <Box
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{
        width: '100%',
        minHeight: '100vh',
        background: "linear-gradient(135deg, #f8fafc 0%, #e3f2fd 50%, #f1f5f9 100%)",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: "60px 20px", md: "100px 40px" },
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
            {/* Header Section - Always Visible */}
      <Box
        component={motion.div}
        variants={itemVariants}
        sx={{
          textAlign: "center",
          mb: { xs: 6, md: 8 },
          position: "relative",
          zIndex: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 3,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          {selectedSolution ? `${selectedSolution} Solutions` : 'Multi-Modal Solutions'}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#64748b",
            fontSize: { xs: "1rem", md: "1.1rem" },
            fontWeight: 400,
            maxWidth: "800px",
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          {selectedSolution 
            ? `Comprehensive ${selectedSolution === 'PETRA' ? 'healthcare provider' : 'insurer'} solutions designed for modern healthcare management`
            : 'Mastering the full Claim Cycle from seamless transition to robust validation via our comprehensive solutions'
          }
        </Typography>
      </Box>

      {!selectedSolution ? (
        <motion.div
          key="selection"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ width: '100%', maxWidth: '1200px', minHeight: '400px' }}
        >

            {/* Solution Cards */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: { xs: 4, md: 6 },
                width: '100%',
                position: "relative",
                zIndex: 2,
              }}
            >
              {/* PETRA Card */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  onClick={handlePetraClick}
                  sx={{
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '24px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden',
                    position: 'relative',
                    '&:hover': {
                      boxShadow: '0 16px 48px rgba(0, 0, 0, 0.15)',
                      '& .solution-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                      }
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)',
                    }
                  }}
                >
                  <CardContent
                    sx={{
                      padding: { xs: '32px', md: '48px' },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    {/* Icon */}
                    <Box
                      className="solution-icon"
                      sx={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #1976d220 0%, #42a5f510 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 4,
                        border: '2px solid #1976d230',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <BusinessIcon
                        sx={{
                          fontSize: '60px',
                          color: '#1976d2',
                        }}
                      />
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        color: '#1976d2',
                        mb: 2,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                      }}
                    >
                      PETRA
                    </Typography>

                    {/* Subtitle */}
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#64748b',
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        fontWeight: 600,
                        mb: 3,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      Multi-Layered Healthcare Provider Solution
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#64748b',
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        lineHeight: 1.6,
                        mb: 4,
                      }}
                    >
                      Comprehensive healthcare provider solutions with advanced integration, validation, and AI-powered insights for optimal claims processing.
                    </Typography>

                    {/* CTA Button */}
                    <Button
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '1rem',
                        borderRadius: '50px',
                        px: 4,
                        py: 1.5,
                        textTransform: 'none',
                        boxShadow: '0 8px 25px rgba(25, 118, 210, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #1565c0 0%, #1976d2 100%)',
                          boxShadow: '0 12px 35px rgba(25, 118, 210, 0.4)',
                        },
                      }}
                    >
                      Explore PETRA
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* QUDRA Card */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  onClick={handleQudraClick}
                  sx={{
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '24px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden',
                    position: 'relative',
                    '&:hover': {
                      boxShadow: '0 16px 48px rgba(0, 0, 0, 0.15)',
                      '& .solution-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                      }
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: 'linear-gradient(90deg, #4caf50 0%, #66bb6a 100%)',
                    }
                  }}
                >
                  <CardContent
                    sx={{
                      padding: { xs: '32px', md: '48px' },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    {/* Icon */}
                    <Box
                      className="solution-icon"
                      sx={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #4caf5020 0%, #66bb6a10 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 4,
                        border: '2px solid #4caf5030',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <SecurityIcon
                        sx={{
                          fontSize: '60px',
                          color: '#4caf50',
                        }}
                      />
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        color: '#4caf50',
                        mb: 2,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                      }}
                    >
                      QUDRA
                    </Typography>

                    {/* Subtitle */}
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#64748b',
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        fontWeight: 600,
                        mb: 3,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      Multi-Layered Insurer Solution
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#64748b',
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        lineHeight: 1.6,
                        mb: 4,
                      }}
                    >
                      Advanced insurer solutions with seamless integration, automation, and intelligent support for comprehensive claims management.
                    </Typography>

                    {/* CTA Button */}
                    <Button
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        background: 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)',
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '1rem',
                        borderRadius: '50px',
                        px: 4,
                        py: 1.5,
                        textTransform: 'none',
                        boxShadow: '0 8px 25px rgba(76, 175, 80, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #388e3c 0%, #4caf50 100%)',
                          boxShadow: '0 12px 35px rgba(76, 175, 80, 0.4)',
                        },
                      }}
                    >
                      Explore QUDRA
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          </motion.div>
        ) : (
          <motion.div
            key="details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ width: '100%', maxWidth: '1400px', minHeight: '400px' }}
          >

            {/* Solutions Grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
                gap: { xs: 3, md: 4 },
                position: "relative",
                zIndex: 2,
              }}
            >
              {(selectedSolution === 'PETRA' ? petraSolutions : qudraSolutions).map((solution, index) => {
                const IconComponent = solution.icon || BusinessIcon; // Fallback icon
                return (
                  <motion.div
                    key={`${selectedSolution}-${solution.number}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        background: "rgba(255, 255, 255, 0.9)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "20px",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                        transition: "all 0.3s ease",
                        overflow: "hidden",
                        position: "relative",
                        "&:hover": {
                          boxShadow: "0 16px 48px rgba(0, 0, 0, 0.15)",
                          transform: "translateY(-8px)",
                        },
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "4px",
                          background: `linear-gradient(90deg, ${solution.color} 0%, ${solution.color}80 100%)`,
                        }
                      }}
                    >
                      <CardContent
                        sx={{
                          padding: { xs: "24px", md: "32px" },
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      >
                        {/* Icon */}
                        <Box
                          sx={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "50%",
                            background: `linear-gradient(135deg, ${solution.color}20 0%, ${solution.color}10 100%)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 3,
                            border: `2px solid ${solution.color}30`,
                          }}
                        >
                          <IconComponent
                            sx={{
                              fontSize: "40px",
                              color: solution.color,
                            }}
                          />
                        </Box>

                        {/* Step Number */}
                        <Box
                          sx={{
                            position: "absolute",
                            top: "16px",
                            right: "16px",
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            background: `linear-gradient(135deg, ${solution.color} 0%, ${solution.color}80 100%)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontSize: "14px",
                            fontWeight: 700,
                          }}
                        >
                          {solution.number}
                        </Box>

                        {/* Title */}
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            fontSize: { xs: "1.1rem", md: "1.2rem" },
                            color: "#1e293b",
                            mb: 2,
                            lineHeight: 1.3,
                          }}
                        >
                          {solution.title}
                        </Typography>

                        {/* Description */}
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#64748b",
                            fontSize: { xs: "0.9rem", md: "1rem" },
                            lineHeight: 1.6,
                            flex: 1,
                            mb: 3,
                          }}
                        >
                          {solution.description}
                        </Typography>

                        {/* CTA Button */}
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{
                            borderColor: solution.color,
                            color: solution.color,
                            fontWeight: 600,
                            fontSize: "0.8rem",
                            borderRadius: "20px",
                            px: 2,
                            py: 0.5,
                            textTransform: "none",
                            "&:hover": {
                              backgroundColor: `${solution.color}10`,
                              borderColor: solution.color,
                            },
                          }}
                        >
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </Box>

            {/* Back Button */}
            <Box
              sx={{
                textAlign: "center",
                mt: { xs: 6, md: 8 },
                position: "relative",
                zIndex: 2,
              }}
            >
              <Button
                variant="contained"
                startIcon={<ArrowBackIcon />}
                onClick={() => {
                  setSelectedSolution(null);
                }}
                sx={{
                  background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  textTransform: "none",
                  borderRadius: "50px",
                  px: 6,
                  py: 2,
                  boxShadow: "0 8px 25px rgba(25, 118, 210, 0.3)",
                  minWidth: "200px",
                  "&:hover": {
                    background: "linear-gradient(135deg, #1565c0 0%, #1976d2 100%)",
                    boxShadow: "0 12px 35px rgba(25, 118, 210, 0.4)",
                  },
                }}
              >
                Back to Solutions
              </Button>
            </Box>
          </motion.div>
        )}
      </Box>
  );
};

export default Solutions;