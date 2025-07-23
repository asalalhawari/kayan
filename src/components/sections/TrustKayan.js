import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Link,
  Typography,
  useMediaQuery
} from "@mui/material";
import { motion } from "framer-motion";

const TrustSection = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const trustData = [
    {
      value: "ISO",
      description: "ISO-27001 enterprise-grade security compliant",
      icon: "🔒"
    },
    {
      value: "#1",
      description: "Visual Collaboration Platform on G2",
      icon: "🏆"
    },
    {
      value: "99%",
      description: "of the Fortune 100 are customers",
      icon: "💼"
    },
    {
      value: "1,000+",
      description: "community- and expert-built templates",
      icon: "📋"
    },
    {
      value: "45M+",
      description: "users around the world",
      icon: "🌍"
    },
    {
      value: "100+",
      description: "integrations with technology partners",
      icon: "🔗"
    }
  ];

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
    hidden: { opacity: 0, y: 20 },
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
      id="trust-kayan"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"50\" cy=\"50\" r=\"1\" fill=\"white\" opacity=\"0.1\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>')",
          opacity: 0.3
        }
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          py: { xs: 8, md: 12 },
          px: { xs: 2, md: 4 }
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <motion.div variants={itemVariants}>
              <Typography
                variant={isSmallScreen ? "h4" : "h3"}
                sx={{
                  fontWeight: 800,
                  color: "white",
                  lineHeight: 1.2,
                  mb: 2,
                  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                  background: "linear-gradient(45deg, #ffffff, #f0f0f0)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                Why companies large <br />
                and small trust Kayan
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link
                href="#contact-us"
                underline="none"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  color: "white",
                  fontWeight: 600,
                  fontSize: "16px",
                  textDecoration: "none",
                  padding: "12px 24px",
                  borderRadius: "50px",
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(255,255,255,0.25)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.2)"
                  }
                }}
              >
                Contact Sales to request a demo →
              </Link>
            </motion.div>
          </Box>

          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            {trustData.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: "100%",
                      background: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: "20px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                        background: "rgba(255,255,255,0.15)"
                      }
                    }}
                  >
                    <CardContent
                      sx={{
                        textAlign: "center",
                        p: { xs: 3, md: 4 },
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                      }}
                    >
                      <Typography
                        variant="h2"
                        sx={{
                          fontSize: { xs: "2.5rem", md: "3rem" },
                          fontWeight: 900,
                          color: "white",
                          mb: 1,
                          textShadow: "0 2px 4px rgba(0,0,0,0.3)"
                        }}
                      >
                        {item.icon} {item.value}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "14px", md: "16px" },
                          color: "rgba(255,255,255,0.9)",
                          lineHeight: 1.5,
                          fontWeight: 500
                        }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TrustSection;
