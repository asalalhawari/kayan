import React from "react";
import { Box } from "@mui/material";

const WaveBackground = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100px", 
        overflow: "hidden",
      }}
    >
      <svg
        viewBox="0 0 1440 200"
        style={{
          position: "absolute",
          top: 0, 
          left: 0,
          width: "100%",
          height: "auto",
        }}
      >
        <path
          fill="#2091F9"
          fillOpacity="1"
          d="M0,160L48,150C96,140,192,120,288,110C384,100,480,120,576,130C672,140,768,130,864,110C960,90,1056,60,1152,70C1248,80,1344,110,1392,125L1440,140V200H0Z"
        ></path>

        <path
          fill="rgb(121, 128, 134)"
          fillOpacity="1"
          d="M0,140L48,135C96,130,192,110,288,100C384,90,480,110,576,115C672,120,768,100,864,90C960,80,1056,85,1152,100C1248,115,1344,130,1392,135L1440,140V200H0Z"
        ></path>
      </svg>
    </Box>
  );
};

export default WaveBackground;
