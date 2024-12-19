import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Card,
  CardContent,
  Grid2,
} from "@mui/material";

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [annualReturnRate, setAnnualReturnRate] = useState("");
  const [investmentPeriod, setInvestmentPeriod] = useState("");
  const [futureValue, setFutureValue] = useState(null);

  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(annualReturnRate) / 12 / 100; // Monthly interest rate
    const n = parseInt(investmentPeriod) * 12; // Total months

    if (P && r && n) {
      const fv = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
      setFutureValue(fv.toFixed(2));
    } else {
      setFutureValue(null);
    }
  };

  const clearFields = () => {
    setMonthlyInvestment("");
    setAnnualReturnRate("");
    setInvestmentPeriod("");
    setFutureValue(null);
  };

  return (
    <Box sx={{ minHeight: "100vh",maxWidth: 600,  md: { minWidth: 600 },margin: "auto", }}>
      <Grid2
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ marginBottom: 3 }}
      >
        <Grid2 item xs={12} sm={8} md={6}>
          <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom align="center">
                SIP Calculator
              </Typography>

              {/* Monthly Investment */}

              <TextField
                fullWidth
                label="Monthly Investment (₹)"
                margin="normal"
                type="number"
                variant="outlined"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(e.target.value)}
              />

              {/* Annual Return Rate */}

              <TextField
                fullWidth
                label="Expected Annual Return Rate (%)"
                margin="normal"
                type="number"
                variant="outlined"
                value={annualReturnRate}
                onChange={(e) => setAnnualReturnRate(e.target.value)}
              />

              {/* Investment Period */}

              <TextField
                fullWidth
                label="Investment Period (Years)"
                margin="normal"
                type="number"
                variant="outlined"
                value={investmentPeriod}
                onChange={(e) => setInvestmentPeriod(e.target.value)}
              />

              {/* Calculate Button */}
              <Box
                sx={{
                  marginTop: 3,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={calculateSIP}
                  fullWidth
                  sx={{ mr: 1 }}
                >
                  Calculate
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={clearFields}
                  fullWidth
                  sx={{ ml: 1 }}
                >
                  Clear
                </Button>
              </Box>

              {/* Display Result */}
              {futureValue && (
                <Box
                  sx={{
                    marginTop: 3,
                    textAlign: "center",
                    backgroundColor: "#f0f4ff",
                    padding: 2,
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Future Value: ₹{futureValue}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Your total investment will grow to this value at the end of
                    the specified period.
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default SIPCalculator;
