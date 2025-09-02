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

const ExpertCard = ({ expert }) => {
  return (
    <Card
      sx={{
        height: "auto",
        minHeight: 420,
        width: "100%",
        maxWidth: 280,
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        border: "1px solid #e5e7eb",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
        },
      }}
    >
      <Box
        sx={{
          height: 140,
          backgroundColor: "#f8fafc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 2,
        }}
      >
        <img
          src={expert.image || "/placeholder.svg"}
          alt={expert.name}
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "center",
            border: "3px solid white",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
          onError={(e) => {
            e.target.src = "/placeholder.svg"
          }}
        />
      </Box>

      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          padding: 2.5,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontWeight: 600,
            color: "#1f2937",
            marginBottom: 1,
            fontSize: "1.1rem",
          }}
        >
          {expert.name}
        </Typography>

        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            px: 2.5,
            py: 0.8,
            borderRadius: 20,
            backgroundColor: "#3b82f6",
            color: "white",
            fontWeight: 500,
            fontSize: "0.85rem",
            marginBottom: 2,
            alignSelf: "center",
          }}
        >
          {expert.role}
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: "#6b7280",
            lineHeight: 1.5,
            fontSize: "0.85rem",
            textAlign: "left",
            fontWeight: 600,
          }}
        >
          {expert.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

const ConnectingArrow = ({ direction }) => (
  <Box
    sx={{
      display: { xs: "none", md: "flex" },
      alignItems: "center",
      justifyContent: "center",
      height: 60,
      width: "100%",
      position: "relative",
    }}
  >
    <svg
      width="120"
      height="40"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: direction === "left" ? "scaleX(-1)" : "none",
      }}
    >
      <path d="M10 20 Q60 5 110 20" stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="5,5" />
      <polygon points="105,15 115,20 105,25" fill="#3b82f6" />
    </svg>
  </Box>
)

const ExpertsSection = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

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
          component="h2"
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
            maxWidth: "600px",
            mx: "auto",
            lineHeight: 1.5,
            fontSize: "1rem",
          }}
        >
          Meet the exceptional leaders driving innovation and excellence in healthcare technology
        </Typography>
      </Box>

      <Box sx={{ maxWidth: "1000px", mx: "auto" }}>
        {experts.map((expert, index) => (
          <Box key={index}>
            <Box
              sx={{
                display: "flex",
                justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                mb: 1.5,
                px: { xs: 0, md: 4 },
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "45%" },
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ExpertCard expert={expert} />
              </Box>
            </Box>

            {index < experts.length - 1 && <ConnectingArrow direction={index % 2 === 0 ? "right" : "left"} />}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default ExpertsSection
