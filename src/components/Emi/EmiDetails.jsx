import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import {
  Grid2,
  Typography,
  Card,
  CardContent,
  Paper,
  Box,
  TextField,
  Button,
  Divider,
  Stack,
  Chip,
} from "@mui/material";
const EmiDetails = ({schedule}) => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5" }}>
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
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom align="center">
              EMI Details
            </Typography>

            {schedule.map((row) => (
              <Card
                variant="outlined"
                sx={{ marginBottom: 3, backgroundColor: "#e9f3fd" }}
                key={row.month}
              >
                <CardContent>
                  <Box sx={{ p: 0.5 }}>
                    <Stack
                      direction="row"
                      sx={{
                        justifyContent: "space-between",
                        
                      }}
                    >
                      <Typography gutterBottom component="div" sx={{textAlign:'left'}}>
                        Instl. No
                        <Typography variant="body2" color="primary">
                          {row.month}
                        </Typography>
                      </Typography>
                      <Typography gutterBottom component="div" sx={{textAlign:'left'}}>
                        Due Date
                        <Typography variant="body2" color="primary">
                          {row.date}
                        </Typography>
                      </Typography>
                      <Typography gutterBottom component="div" sx={{textAlign:'left'}}>
                        EMI
                        <Typography variant="body2" color="primary">
                          {row.emi}
                        </Typography>
                      </Typography>
                    </Stack>
                  </Box>
                  <Divider sx={{ mt: 1, mb: 1 }} />
                  <Box sx={{ p: 0.5 }}>
                    <Stack
                      direction="row"
                      sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography gutterBottom component="div" sx={{textAlign:'left'}}>
                        Principal
                        <Typography variant="body2" color="primary">
                          {row.principal}
                        </Typography>
                      </Typography>
                      <Typography gutterBottom component="div" sx={{textAlign:'left'}}>
                        Interest
                        <Typography variant="body2" color="primary">
                          {row.interest}
                        </Typography>
                      </Typography>
                      <Typography gutterBottom component="div" sx={{textAlign:'left'}}>
                        O/S Balance
                        <Typography variant="body2" color="primary">
                          {row.balance}
                        </Typography>
                      </Typography>
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            ))}

            {/* <Button
                fullWidth
                variant="contained"
                color="primary"
               
                sx={{ marginTop: 2 }}
              >
               GO BACK
              </Button> */}
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
    </Box>
  );
};

export default EmiDetails;
