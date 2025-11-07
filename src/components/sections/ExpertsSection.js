"use client"

import { useState } from "react"
import { Box, Modal, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

const experts = [
  {
    name: "Islam Hijawi",
    role: "CEO",
    image: "/islam.png",
    description: `Extensive experience in health provider-payer solutions within the Gulf market, gained through collaborations with various leading organizations. Demonstrates strong leadership skills and a proven track record in driving network associations and fostering strategic partnerships. As CEO, committed to advancing healthcare innovation and delivering effective solutions that enhance operational efficiency.`,
  },
  {
    name: "Diana Dyab",
    role: "CTO",
    image: "/diana.jpg",
    description: `IT Manager | Software Engineer | Digital Innovator. Currently serving as the IT Manager at Kayan Healthcare. Committed to driving innovation, delivering effective digital solutions, and building inclusive, high-performing teams. Expertise spans full-stack development, project management, and system optimization.`,
  },
  {
    name: "Kawther Ghanem",
    role: "COO",
    image: "/kawther.jpg",
    description: `An Economics major with 7 years of experience in business management, bringing expertise in strategic planning and operational efficiency. Adept at driving growth and implementing innovative solutions to achieve company objectives and enhance overall performance.`,
  },
  {
    name: "Dr. Randa Hanna",
    role: "CMO",
    image: "/randa.jpg",
    description: `A pharmacist with over 10 years of experience and a certified AAPC medical coder. Expertise in managing insurance operations and leading medical teams, focused on optimizing health claim processes. Committed to delivering efficient solutions for health claim scrubbing to enhance healthcare services.`,
  },
]

const ExpertsSection = () => {
  const [openExpert, setOpenExpert] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <Box
      data-aos="fade-up"
      data-aos-duration="1000"
      className="bg-gradient-to-r from-[#020817] via-[#041E2F] to-[#000000]"
      id="our-experts"
      sx={{
        width: "100%",
        px: { xs: 2, md: 4 },
        py: { xs: 8, md: 12 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* العنوان والوصف */}
      <Box sx={{ textAlign: "center", mb: { xs: 5, md: 6 }, maxWidth: "1000px", zIndex: 2, mt: { xs: 8, md: 12 } }}>
        <Box
          component="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2.25rem", sm: "3rem", md: "3.5rem" },
            color: "#ffffff",
            mb: 2.5,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Our Senior Management Team
        </Box>

        <Box
          component="p"
          sx={{
            fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
            color: "#ffffff",
            fontWeight: 700,
            opacity: 0.95,
            lineHeight: 1.6,
            maxWidth: "850px",
            mx: "auto",
          }}
        >
          Meet the exceptional leaders driving innovation and excellence in healthcare technology
        </Box>
      </Box>

      {/* شبكة الكاردات */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
          gap: { xs: 3, md: 3, lg: 4 },
          maxWidth: "1600px",
          width: "100%",
          zIndex: 2,
        }}
      >
        {experts.map((expert, index) => (
          <Box
            key={index}
            onClick={() => setOpenExpert(expert)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            sx={{
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
              borderRadius: "20px",
              overflow: "hidden",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              backdropFilter: "blur(20px)",
              border: "2px solid rgba(255, 255, 255, 0.1)",
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              position: "relative",
              height: "auto", // يترك الحجم يتناسب مع المحتوى مثل كارد دكتورة رند
              marginTop: index % 2 === 1 ? { xs: 0, md: 6 } : 0,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "2px solid rgba(59, 130, 246, 0.5)",
                boxShadow: "0 25px 70px rgba(0, 0, 0, 0.6), 0 0 50px rgba(59, 130, 246, 0.3)",
                transform: "translateY(-10px) scale(1.02)",
              },
            }}
          >
            {/* صورة الكارد */}
            <Box
              sx={{
                position: "relative",
                height: { xs: "240px", md: "220px" },
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <Box
                component="img"
                src={expert.image}
                alt={expert.name}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain", // مثل كارد دكتورة رند
                  objectPosition: "center",
                  transition: "transform 0.5s ease",
                  transform: hoveredIndex === index ? "scale(1.08)" : "scale(1)",
                  padding: { xs: 2, md: 2 },
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 100%)",
                  pointerEvents: "none",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "60px",
                  height: "60px",
                  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.3), transparent)",
                  borderBottomLeftRadius: "100%",
                }}
              />
            </Box>

            {/* نص الكارد */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                p: { xs: 3, md: 3 },
                position: "relative",
                flex: 1,
                overflow: "hidden",
              }}
            >
              <Box
                component="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.3rem", md: "1.4rem" },
                  color: "#ffffff",
                  mb: 1.5,
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                }}
              >
                {expert.name}
              </Box>

              <Box
                sx={{
                  display: "inline-flex",
                  alignSelf: "flex-start",
                  px: 2,
                  py: 0.6,
                  mb: 2,
                  borderRadius: "30px",
                  background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  boxShadow: "0 4px 20px rgba(59, 130, 246, 0.4)",
                }}
              >
                {expert.role}
              </Box>

              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  alignSelf: "flex-start",
                  px: 2.5,
                  py: 1.2,
                  borderRadius: "50px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "2px solid rgba(255, 255, 255, 0.15)",
                  color: "#ffffff",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                  mt: "auto",
                  "&:hover": {
                    backgroundColor: "rgba(59, 130, 246, 0.25)",
                    border: "2px solid rgba(59, 130, 246, 0.6)",
                    transform: "translateX(6px)",
                  },
                }}
              >
                <span>View Profile</span>
                <Box
                  component="span"
                  sx={{
                    fontSize: "1.1rem",
                    transition: "transform 0.3s ease",
                    transform: hoveredIndex === index ? "translateX(4px)" : "translateX(0)",
                  }}
                >
                  →
                </Box>
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  top: { xs: 10, md: 12 },
                  right: { xs: 10, md: 12 },
                  fontSize: { xs: "2.5rem", md: "3rem" },
                  fontWeight: 900,
                  color: "rgba(59, 130, 246, 0.12)",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* مودال عرض الملف الشخصي */}
      <Modal open={!!openExpert} onClose={() => setOpenExpert(null)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: "85%", md: 700 },
            maxHeight: "90vh",
            overflowY: "auto",
            background: "linear-gradient(135deg, rgba(2, 8, 23, 0.98), rgba(4, 30, 47, 0.98))",
            backdropFilter: "blur(20px)",
            border: "2px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "24px",
            boxShadow: "0 25px 70px rgba(0, 0, 0, 0.8), 0 0 50px rgba(59, 130, 246, 0.3)",
            p: { xs: 3, md: 5 },
            outline: "none",
          }}
        >
          <IconButton
            onClick={() => setOpenExpert(null)}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              bgcolor: "rgba(255, 255, 255, 0.1)",
              color: "#ffffff",
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
            }}
          >
            <CloseIcon />
          </IconButton>

          {openExpert && (
            <>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 3, p: 2 }}>
                <Box
                  component="img"
                  src={openExpert.image}
                  alt={openExpert.name}
                  sx={{
                    width: "220px",
                    height: "220px",
                    objectFit: "contain",
                    border: "4px solid transparent",
                    background:
                      "linear-gradient(rgba(2, 8, 23, 1), rgba(2, 8, 23, 1)) padding-box, linear-gradient(135deg, #3b82f6, #06b6d4) border-box",
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)",
                    borderRadius: "20px",
                    padding: "20px",
                  }}
                />
              </Box>

              <Box component="h3" sx={{ fontWeight: 800, fontSize: "2rem", textAlign: "center", mb: 2, color: "#ffffff" }}>
                {openExpert.name}
              </Box>

              <Box
                sx={{
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "#ffffff",
                  mb: 3,
                  display: "inline-block",
                  width: "100%",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    px: 3,
                    py: 1,
                    borderRadius: "30px",
                    background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    boxShadow: "0 4px 20px rgba(59, 130, 246, 0.4)",
                  }}
                >
                  {openExpert.role}
                </Box>
              </Box>

              <Box
                component="p"
                sx={{
                  color: "rgba(255, 255, 255, 0.85)",
                  lineHeight: 1.8,
                  fontSize: "1.05rem",
                  textAlign: "justify",
                }}
              >
                {openExpert.description}
              </Box>
            </>
          )}
        </Box>
      </Modal>

      {/* تأثيرات الخلفية */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.15), transparent)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />
    </Box>
  )
}

export default ExpertsSection
