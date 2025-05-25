import React from "react";
import { Grid, Typography, Select, MenuItem, Box, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import kayanlogo from '../../img/kayanlogo55.png'; 

const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  const navigateToHome = () => {
    window.location.href = "/"; 
  };
  return (
    <Box sx={{ backgroundColor: "#f8f9fa", p:4, mt: 3,overflowX:"hidden" }}>
      <Grid container spacing={3} justifyContent="space-between" alignItems="center">
        <Grid item xs={12} md={3}>
        <Box
              component="img"
              src={kayanlogo}
              alt="Kayan Healthcare Logo"
              onClick={navigateToHome} 
              sx={{ 
                width: { xs: '80px', sm: '100px' }, 
                height: { xs: '40px', sm: '50px' }, 
                filter: 'grayscale(50%)',
                cursor: 'pointer',
                ml: { xs: 0 }
              }}
            />
          <Typography variant="body2" color="textSecondary">
            {t("company")}
          </Typography>
          <Typography variant="caption" display="block" color="textSecondary" sx={{ mt: 1 }}>
            © Kayan Theme 2020
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} container spacing={3}>
          <Grid item xs={4}>
            <Typography variant="subtitle1" color="primary" fontWeight="bold">
              {t("company")}
            </Typography>
            <Typography variant="body2">Donec dignissim</Typography>
            <Typography variant="body2">Curabitur egestas</Typography>
            <Typography variant="body2">Nam posuere</Typography>
            <Typography variant="body2">Aenean facilisis</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1" color="primary" fontWeight="bold">
              {t("services")}
            </Typography>
            <Typography variant="body2">Cras convallis</Typography>
            <Typography variant="body2">Vestibulum faucibus</Typography>
            <Typography variant="body2">Quisque lacinia purus</Typography>
            <Typography variant="body2">Aliquam nec ex</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1" color="primary" fontWeight="bold">
              {t("resources")}
            </Typography>
            <Typography variant="body2">Suspendisse porttitor</Typography>
            <Typography variant="body2">Nam posuere</Typography>
            <Typography variant="body2">Curabitur egestas</Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} md={3} textAlign={{ xs: "center", md: "right" }}>
          <Box>
            <IconButton color="primary">
              <Facebook />
            </IconButton>
            <IconButton color="primary">
              <Twitter />
            </IconButton>
            <IconButton color="primary">
              <LinkedIn />
            </IconButton>
          </Box>
          <Select value={i18n.language} onChange={changeLanguage} size="small" sx={{ mt: 2 }}>
            <MenuItem value="en">English - En</MenuItem>
            <MenuItem value="ar">العربية - Ar</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
