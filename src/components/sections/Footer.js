import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
  Twitter,
  YouTube
} from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  MenuItem,
  Select,
  Typography
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import kayanlogo from '../../img/kayanlogo55.png';

const Footer = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

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
      { name: "Careers", action: () => {} },
    ],
    services: [
      { name: "E-Claim Solutions", action: () => scrollToSection("solution") },
      { name: "Healthcare Technology", action: () => scrollToSection("our-technology") },
      { name: "Provider Solutions", action: () => scrollToSection("provider-solutions") },
      { name: "Payer Solutions", action: () => scrollToSection("payer-solutions") },
    ],
    resources: [
      { name: "Documentation", action: () => {} },
      { name: "API Reference", action: () => {} },
      { name: "Support Center", action: () => scrollToSection("contactUs") },
      { name: "Blog", action: () => {} },
    ],
    contact: [
      { name: "info@kayanhealthcare.com", icon: Email, action: () => {} },
      { name: "+970 59 123 4567", icon: Phone, action: () => {} },
      { name: "Ramallah, Palestine", icon: LocationOn, action: () => {} },
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
              Transforming healthcare through innovative e-claim solutions. 
              We empower healthcare providers with cutting-edge technology 
              to streamline operations and improve patient care.
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
              {[
                { icon: Facebook, color: '#1877f2', href: '#' },
                { icon: Twitter, color: '#1da1f2', href: '#' },
                { icon: LinkedIn, color: '#0077b5', href: '#' },
                { icon: Instagram, color: '#e4405f', href: '#' },
                { icon: YouTube, color: '#ff0000', href: '#' },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  component={motion.button}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: social.color,
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <social.icon />
                </IconButton>
              ))}
            </Box>
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
            © 2024 Kayan Healthcare. All rights reserved.
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(255,255,255,0.7)',
                fontSize: { xs: '0.8rem', md: '0.9rem' }
              }}
            >
              Language:
            </Typography>
            <Select 
              value={i18n.language} 
              onChange={changeLanguage} 
              size="small"
              sx={{
                color: 'white',
                '& .MuiSelect-icon': {
                  color: 'rgba(255,255,255,0.7)',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255,255,255,0.3)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255,255,255,0.5)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#90caf9',
                },
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '8px',
                minWidth: 120,
              }}
            >
              <MenuItem value="en" sx={{ fontSize: '0.9rem' }}>English - En</MenuItem>
              <MenuItem value="ar" sx={{ fontSize: '0.9rem' }}>العربية - Ar</MenuItem>
            </Select>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
