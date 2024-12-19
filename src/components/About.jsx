import React from "react";
import { Typography, Card, CardContent } from "@mui/material";
import Wrapper from "./UI/Wrapper"

const About = () => {
  return (
    <Wrapper
      sx={{
        padding: 3,
        maxWidth: 800,
        margin: "auto",
      }}
    >
      <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom align="center">
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to our application! We are dedicated to providing the best
            tools and resources to simplify your financial calculations and
            decisions. Our mission is to empower users with accurate and
            easy-to-use calculators for EMI, SIP, GST, and taxes.
          </Typography>
          <Typography variant="body1" paragraph>
            With a focus on user experience, reliability, and innovation, we
            strive to make financial management accessible to everyone.
          </Typography>
          <Typography variant="body1">
            Thank you for choosing us as your trusted financial assistant.
          </Typography>
        </CardContent>
      </Card>
    </Wrapper>
  );
};

export default About;
