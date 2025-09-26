"use client"

import { useState } from "react"
import { Typography, Box, Modal, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import VisibilityIcon from "@mui/icons-material/Visibility"
import islam from "../../img/Islam.png"
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
    name: "Diana Dyab",
    role: "CTO",
    description:
      "IT Manager | Software Engineer | Digital Innovator. Currently serving as the IT Manager at Kayan Healthcare. Committed to driving innovation, delivering effective digital solutions, and building inclusive, high-performing teams. Expertise spans full-stack development, project management, and system optimization.",
    image: diana,
  },
  {
    name: "Kawther Ghanem",
    role: "COO",
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
]

const ExpertsSection = () => {
  const [openExpert, setOpenExpert] = useState(null)

  return (
    <Box
      id="our-experts"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        py: 6,
        px: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* العنوان */}
      <Box sx={{ maxWidth: "1200px", textAlign: "center", mb: 15 }}>
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
            color: "#1f2937",
            maxWidth: "700px",
            fontSize: "1rem",
            lineHeight: 1.5,
            mx: "auto",
          }}
        >
          Meet the exceptional leaders driving innovation and excellence in healthcare technology
        </Typography>
      </Box>

      {/* الصور */}
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "30px" }}>
        {experts.map((expert, index) => (
          <Box
            key={index}
            sx={{
              cursor: "pointer",
              position: "relative",
              transition: "transform 0.3s",
             
              "&:hover": { transform: "scale(1.05)" },
            }}
            onClick={() => setOpenExpert(expert)}
          >
            <Box
              sx={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid #e5e7eb",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                position: "relative",
                "&:hover .overlay": { opacity: 1 },
              }}
            >
              <img
                src={expert.image || "/placeholder.svg"}
                alt={expert.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "center",
                  transition: "transform 0.3s",
                }}
              />

              {/* overlay مع أيقونة العين */}
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0,0,0,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transition: "opacity 0.3s",
                }}
              >
                <VisibilityIcon sx={{ fontSize: 40, color: "white" }} />
              </Box>
            </Box>

            {/* الاسم */}
            <Typography
              sx={{
                mt: 2,
                fontWeight: 600,
                color: "#1f2937",
                textAlign: "center",
                fontSize: "1.1rem",
              }}
            >
              {expert.name}
            </Typography>

            {/* البوزيشن تحت الاسم */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 0.5 }}>
              <Box
                sx={{
                  textAlign: "center",
                  mt: 3,
                  color: "#3b82f6",
                  fontWeight: 800,
                  fontSize: "1rem",
                }}
              >
                {expert.role}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* المودال */}
      <Modal open={!!openExpert} onClose={() => setOpenExpert(null)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", md: 600 },
            bgcolor: "background.paper",
            borderRadius: 3,
            boxShadow: 24,
            p: 4,
            outline: "none",
          }}
        >
          <IconButton onClick={() => setOpenExpert(null)} sx={{ position: "absolute", top: 10, right: 10 }}>
            <CloseIcon />
          </IconButton>
          {openExpert && (
            <>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <img
                  src={openExpert.image || "/placeholder.svg"}
                  alt={openExpert.name}
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, textAlign: "center", mb: 1 }}>
                {openExpert.name}
              </Typography>
              <Typography variant="body1" sx={{ color: "#6b7280", lineHeight: 1.6, fontSize: "0.95rem" }}>
                {openExpert.description}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  )
}

export default ExpertsSection
