import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloseIcon from '@mui/icons-material/Close';

const GCCPresenceMap = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countries = {
    uae: {
      name: "United Arab Emirates",
      flag: "🇦🇪",
      capital: "Dubai",
      presence: "Headquarters in Dubai with regional offices in Abu Dhabi and Sharjah.",
      location: "Dubai, UAE"
    },
    saudi: {
      name: "Saudi Arabia",
      flag: "🇸🇦",
      capital: "Riyadh",
      presence: "Primary operations in Riyadh with branches in Jeddah and Dammam.",
      location: "Riyadh, KSA"
    },
    oman: {
      name: "Oman",
      flag: "🇴🇲",
      capital: "Muscat",
      presence: "Regional office in Muscat serving the entire Sultanate.",
      location: "Muscat, Oman"
    },
    qatar: {
      name: "Qatar",
      flag: "🇶🇦",
      capital: "Doha",
      presence: "Regional office in Doha serving Qatar and surrounding areas.",
      location: "Doha, Qatar"
    }
  };



  // Click outside to close card
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectedCountry && !event.target.closest('[data-marker]') && !event.target.closest('[data-card]')) {
        setSelectedCountry(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [selectedCountry]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      x: 20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <Box
      id="gcc-presence"
      sx={{
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          position: "relative",
          zIndex: 1,
          py: 0,
          px: 0
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Interactive Map Section */}
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                position: "relative",
                width: "95%",
                maxWidth: "1000px",
                margin: "2rem auto",
                background: "white",
                borderRadius: "15px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                overflow: "hidden",
                minHeight: "600px"
              }}
            >
              {/* Map Container */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "600px",
                  background: "transparent",
                  overflow: "hidden"
                }}
              >
                                 {/* Google Maps Embed - GCC Region */}
                 <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496349.921176313!2d47.09176025184352!3d23.745767470999114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f3572343792a573%3A0x49a4c80e4c3a6c5c!2sGulf%20Cooperation%20Council!5e0!3m2!1sen!2sus!4v1622023007225!5m2!1sen!2sus&t=m&z=6"
                   width="100%"
                   height="100%"
                   style={{ border: 0 }}
                   allowFullScreen=""
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                   title="GCC Region"
                 />

                                                  {/* Country Markers */}
                 {Object.entries(countries).map(([key, country]) => (
                   <Box
                     key={key}
                     data-marker={key}
                     onClick={() => setSelectedCountry(selectedCountry === key ? null : key)}
                     sx={{
                       position: "absolute",
                       width: "24px",
                       height: "24px",
                                               background: key === 'uae' ? "#EA4335" : key === 'qatar' ? "#4285F4" : "#4285F4",
                       borderRadius: "50%",
                       border: "2px solid white",
                       boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                       cursor: "pointer",
                       zIndex: 1000,
                       transition: "all 0.3s ease",
                       "&:hover": {
                         transform: "scale(1.2)",
                         boxShadow: "0 4px 12px rgba(0,0,0,0.5)"
                       }
                     }}
                                           style={{
                        top: key === 'uae' ? '45%' : key === 'saudi' ? '55%' : key === 'oman' ? '70%' : key === 'qatar' ? '50%' : '50%',
                        left: key === 'uae' ? '85%' : key === 'saudi' ? '60%' : key === 'oman' ? '88%' : key === 'qatar' ? '75%' : '75%'
                      }}
                   >
                     <Box
                       sx={{
                         position: "absolute",
                         top: "50%",
                         left: "50%",
                         transform: "translate(-50%, -50%)",
                         width: "6px",
                         height: "6px",
                         background: "white",
                         borderRadius: "50%"
                       }}
                     />
                   </Box>
                 ))}

                {/* Info Cards */}
                <AnimatePresence>
                  {selectedCountry && countries[selectedCountry] && (
                                         <motion.div
                       data-card="true"
                       variants={cardVariants}
                       initial="hidden"
                       animate="visible"
                       exit="exit"
                       sx={{
                         position: "absolute",
                         zIndex: 20,
                         top: "5%",
                         right: "3%",
                         width: { xs: "90%", sm: "350px" }
                       }}
                     >
                                             <Card
                         sx={{
                           background: "white",
                           borderRadius: "8px",
                           boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                           border: "1px solid #e0e0e0",
                           maxWidth: "300px"
                         }}
                       >
                         <CardContent sx={{ p: 2, position: "relative" }}>
                           <Box
                             onClick={() => setSelectedCountry(null)}
                             sx={{
                               position: "absolute",
                               top: "8px",
                               right: "8px",
                               cursor: "pointer",
                               color: "#666",
                               "&:hover": { color: "#333" },
                               transition: "color 0.2s ease"
                             }}
                           >
                             <CloseIcon sx={{ fontSize: 18 }} />
                           </Box>
                           <Typography 
                             variant="h6" 
                             sx={{ 
                               fontWeight: 700, 
                               color: "#1a1a1a",
                               mb: 1,
                               fontSize: "16px",
                               pr: 3
                             }}
                           >
                             {countries[selectedCountry].name}
                           </Typography>
                           
                                                       <Typography 
                              variant="body2" 
                              sx={{ 
                                color: "#666", 
                                mb: 2, 
                                lineHeight: 1.4,
                                fontSize: "14px"
                              }}
                            >
                              {countries[selectedCountry].presence}
                            </Typography>
                            
                            <Box sx={{ display: "flex", alignItems: "center", color: "#666" }}>
                              <LocationOnIcon sx={{ fontSize: 16, mr: 0.5 }} />
                              <Typography variant="caption" sx={{ fontSize: "12px" }}>
                                {countries[selectedCountry].location}
                              </Typography>
                            </Box>
                           
                           <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
                             <Chip
                               label="PRESENCE"
                               size="small"
                               sx={{
                                 background: "#4CAF50",
                                 color: "white",
                                 fontWeight: 600,
                                 fontSize: "10px",
                                 height: "20px"
                               }}
                             />
                             <Box
                               sx={{
                                 width: "8px",
                                 height: "8px",
                                 background: "#4CAF50",
                                 borderRadius: "50%",
                                 animation: "pulse 2s infinite"
                               }}
                             />
                           </Box>
                         </CardContent>
                       </Card>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            </Box>
          </motion.div>

          
        </motion.div>
      </Container>
    </Box>
  );
};

export default GCCPresenceMap; 