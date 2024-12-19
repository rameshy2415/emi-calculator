import React from "react";
import { Box, Grid2 ,  Typography, Link, IconButton} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
     
      sx={{
        backgroundColor: "#1976d2",
        color: "#ffffff",
        padding: { xs: 2, sm: 4 },
        marginTop: "auto",
        zIndex: 2000,
        mt: "auto",
        py:2, 
        position:'sticky',
      }}
    >
      <Grid2 container spacing={4} justifyContent="center">
        {/* About Section */}
        {/* <Grid2 item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2">
            We provide easy-to-use tools for financial planning, including EMI calculations and loan schedules. Empower your decisions with confidence.
          </Typography>
        </Grid2> */}

        {/* Quick Links Section */}
        {/* <Grid2 item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Box>
            <Link
              href="/"
              color="inherit"
              underline="hover"
              sx={{ display: "block", mb: 1 }}
            >
              Home
            </Link>
          </Box>
        </Grid2> */}

        {/* Contact Section */}
        <Grid2 item xs={12} sm={4}>
          {/* <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2">Email: rameshy2415@gmail.com</Typography>
          <Typography variant="body2">Phone: +91-8270078469</Typography>
          <Typography variant="body2">Address:Sector 9 Airoli, Navi Mumbai</Typography> */}

          <Box sx={{ mt:1, mb: -3}}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            {/* Social Media Icons */}
            <Box>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                color="inherit"
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                color="inherit"
              >
                <Twitter />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                color="inherit"
              >
                <Instagram />
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                color="inherit"
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>
        </Grid2>
      </Grid2>

      {/* Copyright Section */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          marginTop: 4,
          paddingTop: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} EMI Calculator App. All rights
          reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
