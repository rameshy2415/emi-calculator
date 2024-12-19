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

const GSTCalculator = () => {
  const [amount, setAmount] = useState("");
  const [gstRate, setGstRate] = useState("");
  const [gstAmount, setGstAmount] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const [baseAmount, setBaseAmount] = useState(null);

  const calculateGST = () => {
    const amt = parseFloat(amount);
    const rate = parseFloat(gstRate);

    if (!isNaN(amt) && !isNaN(rate) && rate > 0) {
      const gstValue = (amt * rate) / 100; // GST Amount
      const totalValue = amt + gstValue; // Total Amount (inclusive of GST)
      const baseValue = amt / (1 + rate / 100); // Base Amount (exclusive of GST)

      setGstAmount(gstValue.toFixed(2));
      setTotalAmount(totalValue.toFixed(2));
      setBaseAmount(baseValue.toFixed(2));
    }
  };

  const clearFields = () => {
    setAmount("");
    setGstRate("");
    setGstAmount(null);
    setTotalAmount(null);
    setBaseAmount(null);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        md: { minWidth: 600 },
        margin: "auto",
      }}
    >
      <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom align="center">
            GST Calculator
          </Typography>

          <Grid2
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            {/* Amount Input */}
            <Grid2 item size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Amount (₹)"
                margin="normal"
                type="number"
                variant="outlined"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Grid2>

            {/* GST Rate Input */}
            <Grid2 item size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="GST Rate (%)"
                margin="normal"
                type="number"
                variant="outlined"
                value={gstRate}
                onChange={(e) => setGstRate(e.target.value)}
              />
            </Grid2>
          </Grid2>

          {/* Calculate and Reset Buttons */}
          <Box
            sx={{
              marginTop: 3,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="contained"
              item
              xs={12}
              color="primary"
              onClick={calculateGST}
              fullWidth
              sx={{ mr: 1 }}
            >
              Calculate
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              item
              xs={12}
              onClick={clearFields}
              fullWidth
              sx={{ ml: 1 }}
            >
              Reset
            </Button>
          </Box>

          {/* Display Result */}
          {gstAmount !== null && (
            <Box
              sx={{
                marginTop: 3,
                backgroundColor: "#f0f4ff",
                padding: 2,
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" gutterBottom align="center">
                Calculation Results
              </Typography>
              <Grid2 container spacing={2}>
                <Grid2 item xs={12} sm={6}>
                  <Typography variant="body1">
                    <strong>GST Amount:</strong> ₹{gstAmount}
                  </Typography>
                </Grid2>
                <Grid2 item xs={12} sm={6}>
                  <Typography variant="body1">
                    <strong>Total Amount:</strong> ₹{totalAmount}
                  </Typography>
                </Grid2>
                <Grid2 item xs={12}>
                  <Typography variant="body1">
                    <strong>Base Amount (Excl. GST):</strong> ₹{baseAmount}
                  </Typography>
                </Grid2>
              </Grid2>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default GSTCalculator;
