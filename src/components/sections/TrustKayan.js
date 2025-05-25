import React from "react";
import { Box, Grid, Typography, Container, Link, useMediaQuery } from "@mui/material";

const TrustSection = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Container
      id="trust-kayan"
      maxWidth="lg"
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: isSmallScreen ? "5%" : "2%",overflowX:"hidden"
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        {/* العنوان الرئيسي مقسم لسطرين */}
        <Typography
          variant={isSmallScreen ? "h5" : "h4"}
          sx={{ fontWeight: "bold", color: "#000", lineHeight: 1.3 }}
        >
          Why companies large <br />
          and small trust kayan
        </Typography>

        <Link
          href="#"
          underline="hover"
          sx={{
            display: "block",
            mt: 1,
            color: "#050038",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Contact Sales to request a demo.
        </Link>

        {/* Grid Container */}
        <Grid container spacing={4} sx={{ mt: 4 }} justifyContent="center">
          {/* First Row */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>ISO</Typography>
            <Typography sx={{ fontSize: "14px" }}>
              ISO-27001 enterprise-grade security compliant
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>#1</Typography>
            <Typography sx={{ fontSize: "14px" }}>
              Visual Collaboration Platform on G2
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>99%</Typography>
            <Typography sx={{ fontSize: "14px" }}>
              of the Fortune 100 are customers
            </Typography>
          </Grid>

          {/* زيادة المسافة بين الصفوف */}
          <Grid item xs={12} sx={{ mt: 3 }} />

          {/* Second Row */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>1,000+</Typography>
            <Typography sx={{ fontSize: "14px" }}>
              community- and expert-built templates
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>45M+</Typography>
            <Typography sx={{ fontSize: "14px" }}>
              users around the world
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>100+</Typography>
            <Typography sx={{ fontSize: "14px" }}>
              integrations with technology partners
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default TrustSection;
