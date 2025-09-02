"use client"

import { Card, CardContent, Typography, Box, useMediaQuery, useTheme } from "@mui/material"
import islam from "../../img/Islam.png"
import kareem from "../../img/Kareem.jpg"
import kawther from "../../img/kawther.jpg"
import randa from "../../img/randa.jpg"
import diana from "../../img/diana.jpg"

const experts = [
  {
    name: "Islam Hijawi",
    role: "CEO",
    description:
      "Extensive experience in health provider-payer solutions within the Gulf market, gained through collaborations with various leading organizations. Demonstrates strong leadership skills and a proven track record in driving network associations and fostering strategic partnerships. As CEO, committed to advancing healthcare innovation and delivering effective solutions that enhance operational efficiency.",
    image: islam,
  },
  {
    name: "Kareem Khaleel",
    role: "CTO",
    description:
      "Experienced computer systems engineer with more than ten years of experience in software engineering and AI. Demonstrates strong management capabilities in leading IT teams in startup environments to deliver state-of-the-art solutions. Specializing in healthcare technologies, he is dedicated to delivering innovative healthcare solutions with new AI algorithms while pursuing a PhD in artificial intelligence at UCD, Ireland.",
    image: kareem,
  },
  {
    name: "Kawther Ghanem",
    role: "BOM",
    description:
      "An Economics major with 7 years of experience in business management, bringing expertise in strategic planning and operational efficiency. Adept at driving growth and implementing innovative solutions to achieve company objectives and enhance overall performance.",
    image: kawther,
  },
  {
    name: "Dr. Randa Hanna",
    role: "CMO",
    description:
      "A pharmacist with over 10 years of experience and a certified AAPC medical coder. Expertise in managing insurance operations and leading medical teams, focused on optimizing health claim processes. Committed to delivering efficient solutions for health claim scrubbing to enhance healthcare services.",
    image: randa,
  },
  {
    name: "Diana Dyab",
    role: "IT Manager",
    description:
      "IT Manager | Software Engineer | Digital Innovator Within my experience in software engineering and IT leadership, I currently serve as the IT Manager at Kayan Healthcare. As a woman leader in technology, I am committed to driving innovation, delivering effective digital solutions, and building inclusive, high-performing teams. My expertise spans full-stack development, project management, and system optimization — all aimed at enhancing service delivery and supporting the organization's growth. I believe in the power of technology to transform healthcare and in fostering a collaborative environment where talent thrives and ideas turn into impact.",
    image: diana,
  },
]

const ExpertCard = ({ expert, reverse }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: reverse ? "row-reverse" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
        mx: "auto",
        my: 3,
        borderRadius: 3,
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
        },
        "@media (max-width: 768px)": {
          flexDirection: "column",
          textAlign: "center",
        },
      }}
    >
      {/* الصورة */}
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          display: "flex",
          justifyContent: "center",
          p: 3,
        }}
      >
        <img
          src={expert.image || "/placeholder.svg"}
          alt={expert.name}
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "5px solid #f3f4f6",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        />
      </Box>

      {/* النص */}
      <CardContent
        sx={{
          width: { xs: "100%", md: "60%" },
          p: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "#1f2937",
            mb: 1,
          }}
        >
          {expert.name}
        </Typography>
        <Box
          sx={{
            display: "inline-block",
            px: 3,
            py: 1,
            borderRadius: 20,
            backgroundColor: "#3b82f6",
            color: "white",
            fontWeight: 500,
            fontSize: "0.95rem",
            mb: 2,
          }}
        >
          {expert.role}
        </Box>
        <Typography
          variant="body1"
          sx={{
            color: "#6b7280",
            lineHeight: 1.6,
            fontSize: "0.95rem",
          }}
        >
          {expert.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

const ExpertsSection = () => {
  return (
    <Box
      id="our-experts"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        py: 6,
        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          textAlign: "center",
          mb: 5,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: 700,
            color: "#1f2937",
            mb: 2,
          }}
        >
          Our Senior Management Team
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#6b7280",
            maxWidth: "700px",
            mx: "auto",
            fontSize: "1rem",
            lineHeight: 1.5,
          }}
        >
          Meet the exceptional leaders driving innovation and excellence in healthcare technology
        </Typography>
      </Box>

      {experts.map((expert, index) => (
        <ExpertCard key={index} expert={expert} reverse={index % 2 !== 0} />
      ))}
    </Box>
  )
}

export default ExpertsSection
