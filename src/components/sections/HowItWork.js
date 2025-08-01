import AccountTreeIcon from "@mui/icons-material/AccountTree";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import MedicationIcon from "@mui/icons-material/Medication";
import PsychologyIcon from "@mui/icons-material/Psychology";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

const steps = [
  { 
    id: 1, 
    title: "Post Office Claims Transaction", 
    description: "Seamless connectivity and structured data exchange between healthcare providers and insurers comply with regulator mandates.",
    icon: AccountTreeIcon,
    color: "#1976d2"
  },
  { 
    id: 2, 
    title: "Tracking & Dashboard", 
    description: "Track, monitor, and visualize the entire claim lifecycle with real-time insights and analytics.",
    icon: DashboardIcon,
    color: "#42a5f5"
  },
  { 
    id: 3, 
    title: "Medical & Coding Scrubber", 
    description: "Detect medical and coding denials swiftly for accurate claim validation and compliance.",
    icon: MedicalServicesIcon,
    color: "#2196f3"
  },
  { 
    id: 4, 
    title: "Control Claim Validation", 
    description: "Configure relations and optimize your claim validation process to meet specific requirements while maintaining compliance.",
    icon: VerifiedIcon,
    color: "#4caf50"
  },
  { 
    id: 5, 
    title: "Pharmaceutical Claims Management", 
    description: "Leverage our Built-In Pharmaceutical Edits and Checks Suite to streamline your workflow and reduce denials in medication-related claims.",
    icon: MedicationIcon,
    color: "#ff9800"
  },
  { 
    id: 6, 
    title: "AI Module", 
    description: "Better understand behaviours of all entities and improve data-driven decision-making with trend insights.",
    icon: PsychologyIcon,
    color: "#9c27b0"
  },
];

const HowItWork = () => {

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
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #e3f2fd 50%, #f1f5f9 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
      {/* Header Section */}
      <Box
        component={motion.div}
        variants={itemVariants}
        sx={{
          textAlign: "center",
          mb: { xs: 4, md: 8 },
          maxWidth: "800px",
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
            mb: 2,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          Multi-Layer Claim Cycle Solutions
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#64748b",
            fontSize: { xs: "1rem", md: "1.1rem" },
            fontWeight: 400,
            maxWidth: "600px",
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Streamline your healthcare claims processing with our comprehensive suite of intelligent solutions
        </Typography>
      </Box>

      {/* Steps Grid */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1400px",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
          gap: { xs: 3, md: 4 },
          position: "relative",
          zIndex: 2,
        }}
      >
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <motion.div
              key={step.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
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
                    background: `linear-gradient(90deg, ${step.color} 0%, ${step.color}80 100%)`,
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
                      background: `linear-gradient(135deg, ${step.color}20 0%, ${step.color}10 100%)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                      border: `2px solid ${step.color}30`,
                    }}
                  >
                    <IconComponent
                      sx={{
                        fontSize: "40px",
                        color: step.color,
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
                      background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}80 100%)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "14px",
                      fontWeight: 700,
                    }}
                  >
                    {step.id}
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
                    {step.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#64748b",
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      lineHeight: 1.6,
                      flex: 1,
                    }}
                  >
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </Box>

      {/* Bottom CTA */}
      <Box
        component={motion.div}
        variants={itemVariants}
        sx={{
          textAlign: "center",
          mt: { xs: 6, md: 8 },
          position: "relative",
          zIndex: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#64748b",
            fontSize: { xs: "1rem", md: "1.1rem" },
            fontWeight: 500,
            mb: 2,
          }}
        >
          Ready to transform your claims processing?
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#94a3b8",
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
        >
          Experience the future of healthcare claims management
        </Typography>
      </Box>
    </Box>
  );
};

export default HowItWork;