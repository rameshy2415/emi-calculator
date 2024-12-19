import React from "react";
import {
  Grid2,
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper 
} from "@mui/material";

const AmortizationDetails = ({ schedule }) => {
  return (
    <Grid2 item xs={12} sm={8} md={6}>
      <Card sx={{ maxHeight: 400, overflowY: "auto", overflowX: "hidden" }}>
        <CardContent sx={{ maxWidth: 600 }}>
          <Typography variant="h6" align="center" gutterBottom>
            Amortization Schedule
          </Typography>
          <TableContainer component={Paper}>
            <Table
            sx={{
                width: "100%", // Table adjusts to container width
                minWidth: "100%", // Prevent shrinking below container size
                wordWrap: "break-word", // Wrap text in cells
              }}>
              <TableHead>
                <TableRow>
                  <TableCell>Month</TableCell>
                  <TableCell>EMI (₹)</TableCell>
                  <TableCell>Principal (₹)</TableCell>
                  <TableCell>Interest (₹)</TableCell>
                  <TableCell>Balance (₹)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {schedule.map((row, index) => (
                  <TableRow key={row.month} sx={{
                    backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff", // Alternate row colors
                  }}>
                    <TableCell>{row.month}</TableCell>
                    <TableCell>{row.emi}</TableCell>
                    <TableCell>{row.principal}</TableCell>
                    <TableCell>{row.interest}</TableCell>
                    <TableCell>{row.balance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Grid2>
  );
};

export default AmortizationDetails;
