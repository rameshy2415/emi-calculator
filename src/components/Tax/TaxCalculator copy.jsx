import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  RadioGroup,
  Radio,
  Grid2,
  Divider,
} from "@mui/material";

const TaxCalculator = () => {
  const [annualIncome, setAnnualIncome] = useState("");
  const [taxRegime, setTaxRegime] = useState("new"); // Default: New Regime
  const [declarations, setDeclarations] = useState({
    section80C: "",
    standardDeduction: 50000, // Fixed value for salaried individuals
    nps: "",
    mediclaim: "",
    homeLoanInterest: "",
    section80TTA: "",
  });
  const [taxPayable, setTaxPayable] = useState(null);

  const calculateTax = () => {
    const income = parseFloat(annualIncome);
    if (!income || income < 0) {
      setTaxPayable("Invalid income entered.");
      return;
    }

    // Extract declaration values
    const section80C = Math.min(
      parseFloat(declarations.section80C) || 0,
      150000
    );
    const standardDeduction = parseFloat(declarations.standardDeduction) || 0;
    const nps = Math.min(parseFloat(declarations.nps) || 0, 50000);
    const mediclaim = parseFloat(declarations.mediclaim) || 0;
    const homeLoanInterest = Math.min(
      parseFloat(declarations.homeLoanInterest) || 0,
      200000
    );
    const section80TTA = Math.min(
      parseFloat(declarations.section80TTA) || 0,
      10000
    );

    let taxableIncome = income;

    // Adjust taxable income in Old Regime
    if (taxRegime === "old") {
      taxableIncome -=
        section80C +
        standardDeduction +
        nps +
        mediclaim +
        homeLoanInterest +
        section80TTA;
      taxableIncome = Math.max(0, taxableIncome); // Taxable income can't be negative
    }

    let tax = 0;

    if (taxRegime === "old") {
      // Old Tax Regime
      if (taxableIncome > 250000 && taxableIncome <= 500000)
        tax = (taxableIncome - 250000) * 0.05;
      else if (taxableIncome > 500000 && taxableIncome <= 1000000)
        tax = 12500 + (taxableIncome - 500000) * 0.2;
      else if (taxableIncome > 1000000)
        tax = 112500 + (taxableIncome - 1000000) * 0.3;
    } else {
      // New Tax Regime
      if (taxableIncome > 300000 && taxableIncome <= 600000)
        tax = (taxableIncome - 300000) * 0.05;
      else if (taxableIncome > 600000 && taxableIncome <= 900000)
        tax = 15000 + (taxableIncome - 600000) * 0.1;
      else if (taxableIncome > 900000 && taxableIncome <= 1200000)
        tax = 45000 + (taxableIncome - 900000) * 0.15;
      else if (taxableIncome > 1200000 && taxableIncome <= 1500000)
        tax = 90000 + (taxableIncome - 1200000) * 0.2;
      else if (taxableIncome > 1500000)
        tax = 150000 + (taxableIncome - 1500000) * 0.3;

      // Apply Section 87A rebate for New Regime if income <= 7,00,000
      if (taxableIncome <= 700000) tax = 0;
    }

    setTaxPayable(tax.toFixed(2));
  };

  const resetCalculator = () => {
    setAnnualIncome("");
    setDeclarations({
      section80C: "",
      standardDeduction: 50000,
      nps: "",
      mediclaim: "",
      homeLoanInterest: "",
      section80TTA: "",
    });
    setTaxPayable(null);
    setTaxRegime("new");
  };

  const handleDeclarationChange = (field, value) => {
    setDeclarations((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        md: { minWidth: 600 },
        margin: "auto",
      }}
    >
      <Grid2
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ marginBottom: 3 }}
      >
        {/* <Grid2 item xs={12} sm={8} md={6}> */}
        <Card sx={{ borderRadius: 4, boxShadow: 3, minWidth:'100%', }}>
          <CardContent>
            <Typography variant="h5" gutterBottom align="center">
              Tax Calculator (India)
            </Typography>
            <Divider sx={{ mt: 0 }} />
            {/* Tax Regime Selection */}

            <Typography variant="h6" gutterBottom>
              Choose Tax Regime
            </Typography>
            <RadioGroup
              row
              value={taxRegime}
              onChange={(e) => setTaxRegime(e.target.value)}
            >
              <FormControlLabel
                value="new"
                control={<Radio />}
                label="New Regime"
              />
              <FormControlLabel
                value="old"
                control={<Radio />}
                label="Old Regime"
              />
            </RadioGroup>

            {/* Annual Income Input */}
            <Grid2 size={{xs:12, sm:8, md:12}} >
              <TextField
                fullWidth
                label="Annual Income (₹)"
                margin="normal"
                type="number"
                variant="outlined"
                value={annualIncome}
                onChange={(e) => setAnnualIncome(e.target.value)}
              />
            </Grid2>
            {/* Tax Declaration Fields */}

            {taxRegime === "old" && (
              <>
                <Grid2 item xs={12} sm={8} md={6}>
                  <TextField
                    fullWidth
                    label="Investments under 80C (₹)"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    value={declarations.section80C}
                    onChange={(e) =>
                      handleDeclarationChange("section80C", e.target.value)
                    }
                    helperText="Maximum ₹1,50,000"
                  />
                </Grid2>
                <TextField
                  fullWidth
                  label="NPS Contribution 80CCD(1B) (₹)"
                  margin="normal"
                  type="number"
                  variant="outlined"
                  value={declarations.nps}
                  onChange={(e) =>
                    handleDeclarationChange("nps", e.target.value)
                  }
                  helperText="Maximum ₹50,000"
                />

                <TextField
                  fullWidth
                  label="Mediclaim under 80D (₹)"
                  margin="normal"
                  type="number"
                  variant="outlined"
                  value={declarations.mediclaim}
                  onChange={(e) =>
                    handleDeclarationChange("mediclaim", e.target.value)
                  }
                />

                <Grid2 item xs={12}>
                  <TextField
                    fullWidth
                    label="Home Loan Interest (₹)"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    value={declarations.homeLoanInterest}
                    onChange={(e) =>
                      handleDeclarationChange(
                        "homeLoanInterest",
                        e.target.value
                      )
                    }
                    helperText="Maximum ₹2,00,000"
                  />
                </Grid2>

                <TextField
                  fullWidth
                  label="Savings Account Interest (₹)"
                  margin="normal"
                  type="number"
                  variant="outlined"
                  value={declarations.section80TTA}
                  onChange={(e) =>
                    handleDeclarationChange("section80TTA", e.target.value)
                  }
                  helperText="Deduction up to ₹10,000 under Section 80TTA"
                />
              </>
            )}

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
                color="primary"
                onClick={calculateTax}
                fullWidth
                sx={{ mr: 1 }}
              >
                Calculate
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={resetCalculator}
                fullWidth
                sx={{ ml: 1 }}
              >
                Reset
              </Button>
            </Box>

            {/* Display Result */}
            {taxPayable !== null && (
              <Box
                sx={{
                  marginTop: 3,
                  backgroundColor: "#f0f4ff",
                  padding: 2,
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" gutterBottom align="center">
                  Tax Payable: ₹{taxPayable}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  align="center"
                >
                  Based on the {taxRegime === "new" ? "New" : "Old"} Tax Regime.
                </Typography>
              </Box>
            )}
          </CardContent>
        </Card>
        {/* </Grid2> */}
      </Grid2>
    </Box>
  );
};

export default TaxCalculator;
