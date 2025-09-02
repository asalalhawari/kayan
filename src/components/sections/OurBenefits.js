
import React, { useState } from "react";
import { Container, Grid, useMediaQuery, Box, Typography, Card, CardContent, Popover } from "@mui/material";

const benefits = [
  { id: "01", title: "Standardization", description: "Standardize your workflows and work flows to ensure consistency and efficiency across your organization..." },
  { id: "02", title: "Reduced Costs", description: "Leverage AI-driven insights to optimize resource allocation and reduce costs while maintaining compliance quality..." },
  { id: "03", title: "More Customization", description: "More customization means the AI can be set to fit specific business needs, making operations fully efficient..." },
  { id: "04", title: "Affordable Pricing", description: "Our services are priced to help all kinds of businesses, ensuring accessibility..." },
  { id: "05", title: "Learner Satisfaction", description: "If you want your workforce to remain satisfied, leveraging AI-driven solutions can boost interaction rates..." },
  { id: "06", title: "Multimedia Materials", description: "One of the advantages of the system is the availability of multiple AI-driven materials for study and efficiency..." }
];

const OurBenefits = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverContent, setPopoverContent] = useState('');
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const handleClick = (event, content) => {
    setAnchorEl(event.currentTarget);
    setPopoverContent(content.description); // Adjusted to use description directly
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Container
      id="our-benefits"
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#fff",
        padding: isSmallScreen ? "10px" : "20px",
        overflowX:"hidden"
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          marginTop: isSmallScreen ? "60px" : "80px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: '700',
            color: '#e20c0cff',
            fontFamily: 'Josefin Sans',
            textTransform: 'uppercase',
            fontSize: isSmallScreen ? '1.5rem' : '2rem',
          }}
        >
          Our Benefits
        </Typography>
        <Typography
          sx={{
            fontSize: isSmallScreen ? '12px' : '22px',
            color: 'black',
            marginTop: '10px',
            lineHeight: '1.4',
            maxWidth: isSmallScreen ? '90%' : '40%',
            marginX: 'auto',
            fontWeight: "600"
          }}
        >
          By Joining Kayan AI Platform, One Can Avail a Lot of Benefits
        </Typography>
        <Typography
          sx={{
            fontSize: isSmallScreen ? '0.6rem' : '0.7rem',
            color: 'black',
            marginTop: '10px',
            lineHeight: '1.4',
            maxWidth: isSmallScreen ? '90%' : '40%',
            marginX: 'auto',
            marginBottom: '15px',
          }}
        >
          Install our top-rated dropshipping app in your e-commerce store and get access to US Suppliers, AliExpress, vendors, and the best.
        </Typography>
      </Box>

      <Grid
        container
        spacing={isSmallScreen ? 2 : 3}
        sx={{
          width: '100%',
          padding: isSmallScreen ? '5%' : '0 0%',
          marginTop: "12px"
        }}
      >
        {benefits.map((benefit) => (
          <Grid item xs={12} sm={6} md={4} key={benefit.id}>
            <Card sx={{ height: "100%", boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h6" color="primary" fontWeight={600}>
                  {benefit.id}
                </Typography>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {benefit.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {benefit.description.split(' ').slice(0, 15).join(' ')}
                  {benefit.description.split(' ').length > 15 && (
                    <span
                      style={{ color: '#1976d2', cursor: 'pointer' }}
                      onClick={(event) => handleClick(event, benefit)}
                    >
                      ... Read More
                    </span>
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        sx={{
          '& .MuiPopover-paper': {
            borderRadius: '8px',
            padding: '16px',
            maxWidth: '400px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          },
        }}
      >
        <Typography sx={{ p: 2, fontSize: '0.8rem', color: '#333' }}>
          {popoverContent}
        </Typography>
      </Popover>
    </Container>
  );
};

export default OurBenefits;