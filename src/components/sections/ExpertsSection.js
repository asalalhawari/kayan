"use client"

import { useState } from "react"
import { Typography, Box, Modal, IconButton, Tooltip } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

import islam from "../../img/Islam.png" 
import kawther from "../../img/kawther.jpg"
import randa from "../../img/randa.jpg"
import diana from "../../img/diana.jpg"

const COLOR_DARK = '#414042'
const COLOR_LIGHT = '#ffffff'
const CARD_GRADIENT = 'linear-gradient(135deg, #1e40af, #059669)'

const experts = [
  {
    name: "Islam Hijawi",
    role: "CEO",
    image: islam,
    description: `Extensive experience in health provider-payer solutions within the Gulf market, gained through collaborations with various leading organizations. Demonstrates strong leadership skills and a proven track record in driving network associations and fostering strategic partnerships. As CEO, committed to advancing healthcare innovation and delivering effective solutions that enhance operational efficiency.`,
  },
  {
    name: "Diana Dyab",
    role: "CTO",
    image: diana,
    description: `IT Manager | Software Engineer | Digital Innovator. Currently serving as the IT Manager at Kayan Healthcare. Committed to driving innovation, delivering effective digital solutions, and building inclusive, high-performing teams. Expertise spans full-stack development, project management, and system optimization.`,
  },
  {
    name: "Kawther Ghanem",
    role: "COO",
    image: kawther,
    description: `An Economics major with 7 years of experience in business management, bringing expertise in strategic planning and operational efficiency. Adept at driving growth and implementing innovative solutions to achieve company objectives and enhance overall performance.`,
  },
  {
    name: "Dr. Randa Hanna",
    role: "CMO",
    image: randa,
    description: `A pharmacist with over 10 years of experience and a certified AAPC medical coder. Expertise in managing insurance operations and leading medical teams, focused on optimizing health claim processes. Committed to delivering efficient solutions for health claim scrubbing to enhance healthcare services.`,
  },
]

const ExpertsSection = () => {
  const [openExpert, setOpenExpert] = useState(null)

  return (
    <Box
      id="our-experts"
      sx={{
        width: "100%",
        backgroundColor: COLOR_LIGHT,
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: '120px',
        paddingBottom: 8,
        borderTop: "2px solid rgba(4, 12, 49, 0.1)", // ← الخط الخفيف الفاصل
      }}
    >
      {/* --- العنوان --- */}
      <Box sx={{ textAlign: "center", mb: 4, maxWidth: '800px' }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2.5rem", md: "3rem" },
            background: CARD_GRADIENT,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 1,
          }}
        >
          Our Senior Management Team
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            fontSize: { xs: "1.1rem", md: "1.3rem" },
            color: COLOR_DARK,
            opacity: 0.8,
            mt: 2,
          }}
        >
          Meet the exceptional leaders driving innovation and excellence in healthcare technology
        </Typography>
      </Box>

      {/* --- الكروت --- */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr 1fr",
          },
          gap: "20px",
          maxWidth: "1200px",
          width: "100%",
          mt: -2,
        }}
      >
        {experts.map((expert, index) => (
          <Tooltip key={index} title="Click to view more" arrow>
            <Box
              onClick={() => setOpenExpert(expert)}
              sx={{
                position: "relative",
                height: "400px",
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: "20px",
                backgroundColor: COLOR_LIGHT,
                boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0px 15px 25px -5px rgba(0,0,0,0.3)",
                },
              }}
            >
              {/* صورة الشخص */}
              <Box
                component="img"
                src={expert.image}
                alt={expert.name}
                sx={{
                  position: "absolute",
                  top: 0, 
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100%",
                  zIndex: 1,
                  ...(expert.name === "Diana Dyab" && {
                    height: "90%",
                    objectFit: "contain",
                  }),
                  ...(expert.name === "Kawther Ghanem" && {
                    height: "80%",
                    objectFit: "contain",
                  }),
                  ...(expert.name !== "Diana Dyab" && expert.name !== "Kawther Ghanem" && {
                    height: "100%",
                    objectFit: "cover",
                  }),
                }}
              />

              {/* الجزء السفلي للكارد (الاسم + المنصب) */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "25%",
                  background: CARD_GRADIENT,
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  px: 3,
                }}
              >
                <Typography sx={{ fontWeight: 700, fontSize: "1.3rem", color: COLOR_LIGHT }}>
                  {expert.name}
                </Typography>
                <Typography sx={{ fontSize: "1rem", opacity: 0.9, color: COLOR_LIGHT }}>
                  {expert.role}
                </Typography>
              </Box>
            </Box>
          </Tooltip>
        ))}
      </Box>

      {/* --- Modal --- */}
      <Modal open={!!openExpert} onClose={() => setOpenExpert(null)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", md: 600 },
            bgcolor: COLOR_LIGHT,
            borderRadius: 3,
            boxShadow: 24,
            p: 4,
            outline: "none",
          }}
        >
          <IconButton onClick={() => setOpenExpert(null)} sx={{ position: "absolute", top: 10, right: 10, color: COLOR_DARK }}>
            <CloseIcon />
          </IconButton>

          {openExpert && (
            <>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <img
                  src={openExpert.image}
                  alt={openExpert.name}
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid #1e40af",
                  }}
                />
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 700, textAlign: "center", mb: 1, color: COLOR_DARK }}>
                {openExpert.name}
              </Typography>

              <Typography variant="subtitle1" sx={{ textAlign: "center", fontWeight: 500, color: "#059669", mb: 2 }}>
                {openExpert.role}
              </Typography>

              <Typography variant="body1" sx={{ color: COLOR_DARK, opacity: 0.8, lineHeight: 1.6, fontSize: "0.95rem" }}>
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
