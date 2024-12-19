import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid2,
  Card,
  CardContent,
  Alert,
} from "@mui/material";
import Wrapper from "./UI/Wrapper";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccessMessage("");
    if (validateForm()) {
      // Simulate form submission
      console.log("Form submitted:", formData);

      // Show success message
      setSuccessMessage("Your message has been sent successfully!");

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Wrapper>
      <Card sx={{ borderRadius: 4, boxShadow: 3, minWidth: "100%" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom align="center">
            Contact Us
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            We'd love to hear from you. Fill out the form below to reach out!
          </Typography>

          {successMessage && (
            <Alert
              severity="success"
              sx={{ mt: 2 }}
              onClose={() => {
                setSuccessMessage("");
              }}
            >
              {successMessage}
            </Alert>
          )}

          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ mt: 1 }}
            onSubmit={handleSubmit}
          >
            <Grid2 container spacing={2}>
              <Grid2 item size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  required
                />
              </Grid2>
              <Grid2 item size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Your Email"
                  type="email"
                  variant="outlined"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  required
                />
              </Grid2>
              <Grid2 item size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Your Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={!!errors.message}
                  helperText={errors.message}
                  required
                />
              </Grid2>
            </Grid2>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2, width: "100%" }}
            >
              Send Message
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Wrapper>
  );
};

export default Contact;
