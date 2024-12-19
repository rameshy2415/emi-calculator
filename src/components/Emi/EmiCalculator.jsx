import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid2,
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material"; // Import the new component
import EmiDetails from "./EmiDetails";

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [showAmoDetails, setShowAmoDetails] = useState(false);
  const navigate = useNavigate();

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 12 / 100;
    const tenure = parseFloat(loanTenure);

    if (principal && rate && tenure) {
      const emi =
        (principal * rate * Math.pow(1 + rate, tenure)) /
        (Math.pow(1 + rate, tenure) - 1);

      const totalPayment = emi * tenure;
      const totalInterest = totalPayment - principal;

      setEmi(emi.toFixed(2));
      setTotalInterest(totalInterest.toFixed(2));
      setTotalPayment(totalPayment.toFixed(2));

      generateAmortizationSchedule(principal, rate, tenure, emi);
      setShowDetails(true);
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  const showGridDetails = () => {
    setShowDetails((prev) => !prev);
    setShowAmoDetails((prev) => !prev);
  };

  const generateAmortizationSchedule = (principal, rate, tenure, emi) => {
    const schedule = [];
    let balance = principal;
    let emiDate = new Date(); // Start from the current date

    const formatDate = (date) => {
      return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(date);
    };

    for (let i = 1; i <= tenure; i++) {
      const interestPayment = balance * rate;
      const principalPayment = emi - interestPayment;
      balance -= principalPayment;

      schedule.push({
        month: i,
        date: formatDate(emiDate), // Add the EMI date
        emi: emi.toFixed(2),
        principal: principalPayment.toFixed(2),
        interest: interestPayment.toFixed(2),
        balance: balance > 0 ? balance.toFixed(2) : "0.00",
      });
      emiDate.setMonth(emiDate.getMonth() + 1);
      if (balance <= 0) break;
    }

    setAmortizationSchedule(schedule);
  };

  return (
    <Box sx={{ minHeight: "100vh", maxWidth: 600,  md: { minWidth: 600 },margin: "auto", }}>
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
                EMI Calculator
              </Typography>
              <TextField
                fullWidth
                margin="normal"
                label="Loan Amount (₹)"
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Annual Interest Rate (%)"
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Loan Tenure (months)"
                type="number"
                value={loanTenure}
                onChange={(e) => setLoanTenure(e.target.value)}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={calculateEMI}
                sx={{ marginTop: 2 }}
              >
                Calculate EMI
              </Button>
              {emi !== null && (
                <Box sx={{ marginTop: 3 }}>
                  <Typography variant="h6" color="success.main">
                    Monthly EMI: ₹{emi}
                  </Typography>
                  <Typography>
                    Total Interest Payable: ₹{totalInterest}
                  </Typography>
                  <Typography>
                    Total Payment (Principal + Interest): ₹{totalPayment}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={showGridDetails}
                    sx={{ marginTop: 2 }}
                  >
                    {!showDetails
                      ? "Hide Amortization Schedule"
                      : "Show Amortization Schedule"}
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>

      {/* SHOW EMi Details */}
      <Grid2
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ marginBottom: 3 }}
      >
        <Grid2
          item
          xs={12}
          sm={8}
          md={6}
          sx={{
            width: "100%",
            minWidth: "100%",
          }}
        >
          {showAmoDetails && <EmiDetails schedule={amortizationSchedule} />}
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default EmiCalculator;
