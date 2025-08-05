import React from "react";
import { Card, useMediaQuery, CardContent, Typography, Grid, Box } from "@mui/material";
import islam from "../../img/Islam.png";
import kareem from "../../img/Kareem.jpg";
import kawther from "../../img/kawther.jpg";
import randa from "../../img/randa.jpg";
import diana from "../../img/diana.jpg";

const experts = [
  {
    name: "Islam Hijawi",
    role: "CEO",
    description: [
      "Extensive experience in health provider-payer solutions within the Gulf market, gained through collaborations with various leading organizations. Demonstrates strong leadership skills and a proven track record in driving network associations and fostering strategic partnerships. As CEO, committed to advancing healthcare innovation and delivering effective solutions that enhance operational efficiency.",
    ],
    image: islam,
  },
  {
    name: "Kareem Khaleel",
    role: "CTO",
    description: [
      "Experienced computer systems engineer with more than ten years of experience in software engineering and AI. Demonstrates strong management capabilities in leading IT teams in startup environments to deliver state-of-the-art solutions. Specializing in healthcare technologies, he is dedicated to delivering innovative healthcare solutions with new AI algorithms while pursuing a PhD in artificial intelligence at UCD, Ireland.",
    ],
    image: kareem,
  },
  {
    name: "Kawther Ghanem",
    role: "BOM",
    description: [
      "An Economics major with 7 years of experience in business management, bringing expertise in strategic planning and operational efficiency. Adept at driving growth and implementing innovative solutions to achieve company objectives and enhance overall performance.",
    ],
    image: kawther,
  },
  {
    name: "Dr. Randa Hanna",
    role: "CMO",
    description: [
      "A pharmacist with over 10 years of experience and a certified AAPC medical coder. Expertise in managing insurance operations and leading medical teams, focused on optimizing health claim processes. Committed to delivering efficient solutions for health claim scrubbing to enhance healthcare services.",
    ],
    image: randa,
  },
  {
    name: "Diana Dyab",
    role: "IT Manager",
    description: [
      "IT Manager | Software Engineer | Digital Innovator Within my experience in software engineering and IT leadership, I currently serve as the IT Manager at Kayan Healthcare. As a woman leader in technology, I am committed to driving innovation, delivering effective digital solutions, and building inclusive, high-performing teams. My expertise spans full-stack development, project management, and system optimization — all aimed at enhancing service delivery and supporting the organization’s growth. I believe in the power of technology to transform healthcare and in fostering a collaborative environment where talent thrives and ideas turn into impact.",
    ],
    image: diana,
  },
];

const ExpertCard = ({ expert }) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ width: "100%", textAlign: "center", justifyContent:"center", display:"flex" }}>
        <Card
          sx={{
          width: "100%",
          maxWidth: isSmallScreen ? "100%" : "400px",
          height: "auto", // Changed to auto to accommodate all content
          backgroundColor: "#FFFFFF",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-5px)",
          },
        }}
      >
        <CardContent sx={{ padding: "20px" }}>
          <Box
            component="img"
            src={expert.image}
            alt={expert.name}
            sx={{
              width:  isSmallScreen ? "50%" :"83%",
              height: isSmallScreen ? "230px" : "285px",
              borderRadius: "10px 10px 0 0",
              objectFit: "cover",
              marginBottom: "5px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              fontFamily: "Inter",
              fontWeight: "400",
              color: "#000000",
              fontSize: isSmallScreen ? "1rem" : "1.2rem",
              marginBottom: "3px",
              textAlign: "center",
            }}
          >
            {expert.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Inter",
              fontWeight: "500",
              fontSize: isSmallScreen ? "0.8rem" : "1rem",
              color: "#363333",
              marginBottom: "7px",
              textAlign: "center",
            }}
          >
            {expert.role}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#363333",
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: isSmallScreen ? "0.6rem" : "0.7rem",
              lineHeight: "1.6",
              textAlign: "left",
              wordWrap: "break-word", // Ensures long words wrap
              overflowWrap: "break-word", // Modern browsers
              whiteSpace: "normal", // Allows text to wrap naturally
            }}
          >
            {expert.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

const ExpertsSection = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Box
      id="our-experts"
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: isSmallScreen ? "300px" : "400px",
          backgroundColor: "rgba(116,172,277,0.5)",
          padding: isSmallScreen ? "10px 0" : "30px 0", 
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start", 
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontFamily: "Inter",
            fontWeight: "600",
            color: "#458FF6",
            marginTop: isSmallScreen ? "20px" : "50px", 
          }}
        >
          Our Senior Management Team
        </Typography>
      </Box>

      <Grid
        container
        spacing={isSmallScreen ? 3 : 12/5}
        justifyContent="center"
        sx={{
          width: "100%",
          maxWidth: "1500px",
          padding: isSmallScreen ? "0 10px" : "0 5px",
          marginTop: isSmallScreen ? "-200px" : "-250px", 
          zIndex: 2,
        }}
      >
        {experts.map((expert, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={12/5}
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ExpertCard expert={expert} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExpertsSection;
