import {
  Email,
  LocationOn,
  Phone
} from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  Typography
} from "@mui/material";
import { motion } from "framer-motion";
import kayanlogo from '../../img/kayanlogo55.png';

const Footer = () => {

  const navigateToHome = () => {
    window.location.href = "/"; 
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = {
    company: [
      { name: "About Us", action: () => scrollToSection("about") },
      { name: "Our Story", action: () => scrollToSection("our-story") },
      { name: "Our Team", action: () => scrollToSection("our-experts") },
    ],
    services: [
      { name: "E-Claim Solutions", action: () => scrollToSection("solution") },
    ],
    resources: [
      { name: "Support Center", action: () => scrollToSection("contactUs") },
    ],
    contact: [
      // { name: "ihijawi@kayan-healthcare.com", icon: Email, action: () => {} },
      // { name: "+971 56 120 7460", icon: Phone, action: () => {} },
      { name: "Realogics Star Estate YZ Building, 3rd Floor, Algouz 3, Dubai,UAE", icon: LocationOn, action: () => {} },
    ]
  };

  return (
    <Box 
      component={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      sx={{ 
        backgroundColor: "#1a237e",
        background: "linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%)",
        color: "white",
        pt: 6,
        pb: 3,
        overflowX: "hidden",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
        }
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Box
                component="img"
                src={kayanlogo}
                alt="Kayan Healthcare Logo"
                onClick={navigateToHome} 
                sx={{ 
                  width: { xs: '120px', sm: '150px' }, 
                  height: { xs: '60px', sm: '75px' }, 
                  filter: 'brightness(0) invert(1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    filter: 'brightness(0) invert(1) drop-shadow(0 0 10px rgba(255,255,255,0.3))',
                  }
                }}
              />
            </Box>
            
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 2, 
                lineHeight: 1.6,
                opacity: 0.9,
                fontSize: { xs: '0.9rem', md: '1rem' }
              }}
            >
              Partner with Kayan Healthcare technologies to streamline operations, enhance compliance, and drive efficiency through AI powered automation.
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2,
                fontWeight: 500,
                color: '#90caf9',
                fontSize: { xs: '0.9rem', md: '1rem' },
                fontStyle: 'italic',
                textAlign: 'center'
              }}
            >
              Deep Belief, Strong Commitment, Firmly Work
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              <Grid item xs={6} sm={3}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600, 
                    mb: 2,
                    color: '#90caf9',
                    fontSize: { xs: '1rem', md: '1.1rem' }
                  }}
                >
                  Company
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {footerLinks.company.map((link, index) => (
                    <Link
                      key={index}
                      component="button"
                      onClick={link.action}
                      sx={{
                        color: 'rgba(255,255,255,0.8)',
                        textDecoration: 'none',
                        textAlign: 'left',
                        fontSize: { xs: '0.8rem', md: '0.9rem' },
                        '&:hover': {
                          color: '#90caf9',
                          textDecoration: 'underline',
                        },
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={6} sm={3}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600, 
                    mb: 2,
                    color: '#90caf9',
                    fontSize: { xs: '1rem', md: '1.1rem' }
                  }}
                >
                  Services
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {footerLinks.services.map((link, index) => (
                    <Link
                      key={index}
                      component="button"
                      onClick={link.action}
                      sx={{
                        color: 'rgba(255,255,255,0.8)',
                        textDecoration: 'none',
                        textAlign: 'left',
                        fontSize: { xs: '0.8rem', md: '0.9rem' },
                        '&:hover': {
                          color: '#90caf9',
                          textDecoration: 'underline',
                        },
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={6} sm={3}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600, 
                    mb: 2,
                    color: '#90caf9',
                    fontSize: { xs: '1rem', md: '1.1rem' }
                  }}
                >
                  Resources
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {footerLinks.resources.map((link, index) => (
                    <Link
                      key={index}
                      component="button"
                      onClick={link.action}
                      sx={{
                        color: 'rgba(255,255,255,0.8)',
                        textDecoration: 'none',
                        textAlign: 'left',
                        fontSize: { xs: '0.8rem', md: '0.9rem' },
                        '&:hover': {
                          color: '#90caf9',
                          textDecoration: 'underline',
                        },
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={6} sm={3}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600, 
                    mb: 2,
                    color: '#90caf9',
                    fontSize: { xs: '1rem', md: '1.1rem' }
                  }}
                >
                  Contact
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {footerLinks.contact.map((contact, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: { xs: '0.8rem', md: '0.9rem' },
                      }}
                    >
                      <contact.icon sx={{ fontSize: '1rem', color: '#90caf9' }} />
                      <Typography
                        component="span"
                        sx={{
                          fontSize: 'inherit',
                          '&:hover': {
                            color: '#90caf9',
                          },
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {contact.name}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: 2,
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255,255,255,0.7)',
              textAlign: { xs: 'center', md: 'left' },
              fontSize: { xs: '0.8rem', md: '0.9rem' }
            }}
          >
            © 2025 Kayan Healthcare. All rights reserved.
          </Typography>

        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
