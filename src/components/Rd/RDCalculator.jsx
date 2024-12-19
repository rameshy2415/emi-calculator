import React, { useState } from "react";
import { Box, TextField, Typography, Button, Card, CardContent, Grid, Alert } from "@mui/material";
import Wrapper from "../UI/Wrapper";

const RDCalculator = () => {
  const [formData, setFormData] = useState({
    monthlyDeposit: "",
    tenure: "",
    interestRate: "",
  });

  const [errors, setErrors] = useState({});
  const [maturityAmount, setMaturityAmount] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!formData.monthlyDeposit.trim()) {
      newErrors.monthlyDeposit = "Monthly deposit is required.";
    } else if (isNaN(formData.monthlyDeposit) || formData.monthlyDeposit <= 0) {
      newErrors.monthlyDeposit = "Enter a valid monthly deposit amount.";
    }

    if (!formData.tenure.trim()) {
      newErrors.tenure = "Tenure is required.";
    } else if (isNaN(formData.tenure) || formData.tenure <= 0) {
      newErrors.tenure = "Enter a valid tenure in months.";
    }

    if (!formData.interestRate.trim()) {
      newErrors.interestRate = "Interest rate is required.";
    } else if (isNaN(formData.interestRate) || formData.interestRate <= 0 || formData.interestRate > 100) {
      newErrors.interestRate = "Enter a valid interest rate.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateMaturityAmount = () => {
    const P = parseFloat(formData.monthlyDeposit);
    const n = parseInt(formData.tenure);
    const r = parseFloat(formData.interestRate) / 100 / 12;

    const maturity = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    return maturity.toFixed(2);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccessMessage("");
    setMaturityAmount(null);

    if (validateForm()) {
      const maturity = calculateMaturityAmount();
      setMaturityAmount(maturity);
      setSuccessMessage("Maturity amount calculated successfully!");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Wrapper>
      <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom align="center">
            Recurring Deposit (RD) Calculator
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Enter your details below to calculate the maturity amount.
          </Typography>

          {successMessage && <Alert severity="success" sx={{ mt: 2 }}>{successMessage}</Alert>}
          {maturityAmount && (
            <Alert severity="info" sx={{ mt: 2 }}>
              Your maturity amount will be ₹{maturityAmount}
            </Alert>
          )}

          <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Monthly Deposit (₹)"
                  variant="outlined"
                  name="monthlyDeposit"
                  value={formData.monthlyDeposit}
                  onChange={handleChange}
                  error={!!errors.monthlyDeposit}
                  helperText={errors.monthlyDeposit}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Tenure (Months)"
                  variant="outlined"
                  name="tenure"
                  value={formData.tenure}
                  onChange={handleChange}
                  error={!!errors.tenure}
                  helperText={errors.tenure}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Interest Rate (% per annum)"
                  variant="outlined"
                  name="interestRate"
                  value={formData.interestRate}
                  onChange={handleChange}
                  error={!!errors.interestRate}
                  helperText={errors.interestRate}
                  required
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, width: "100%" }}>
              Calculate Maturity Amount
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Wrapper>
  );
};

export default RDCalculator;
