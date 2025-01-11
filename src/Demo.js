import React, { useEffect } from 'react';
import { Box, Typography, IconButton, Grid, Container}from '@mui/material';
import {Card, CardContent, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Demo = () => {

  const scrollToContent = () => {
    const contentSection = document.getElementById('demo');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="soluotion">
    <h1>Demo</h1>

  </div>

  );
};

export default Demo;
