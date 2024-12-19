import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid2,
  Button,
  Box,
  IconButton
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import TableViewIcon from '@mui/icons-material/TableView';

const Home = () => {
  const navigate = useNavigate();

  return (
   
      <Grid2
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: 1, width: "100%", minWidth: "100%" }}
      >
        {/* Responsive Card */}

        <Card
          sx={{
            boxShadow: 3,
            width: "100%",
            minWidth: "100%",
            borderRadius: "10px",
          }}
        >
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ paddingX: 3, paddingY: 2, backgroundColor:'#a8ccf0', color:'black'}}
            onClick={() => navigate("/calculator")}
          >
            <Typography gutterBottom component="div">
            <IconButton
                color="inherit"
                edge="start"
                sx={{ mr: 2, ml:-10}}
              >
                <TableViewIcon />
              </IconButton>
              
              EMI Calculator
            </Typography>
          </Button>
        </Card>

        <Card
          sx={{
            boxShadow: 3,
            width: "100%",
            minWidth: "100%",
            borderRadius: "10px",
          }}
        >
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ paddingX: 3, paddingY: 2, backgroundColor:'#a8ccf0', color:'black'}}
            onClick={() => navigate("/sipcalculator")}
          >
            <Typography gutterBottom component="div">
            <IconButton
                color="inherit"
                edge="start"
                sx={{ mr: 2, ml:-10}}
              >
                <TableViewIcon />
              </IconButton>
              
              SIP Calculator
            </Typography>
          </Button>
        </Card>

        <Card
          sx={{
            boxShadow: 3,
            width: "100%",
            minWidth: "100%",
            borderRadius: "10px",
          }}
        >
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ paddingX: 3, paddingY: 2, backgroundColor:'#a8ccf0', color:'black'}}
            onClick={() => navigate("/tax-calculator")}
          >
            <Typography gutterBottom component="div">
            <IconButton
                color="inherit"
                edge="start"
                sx={{ mr: 2, ml:-10}}
              >
                <TableViewIcon />
              </IconButton>
              
              TAX Calculator
            </Typography>
          </Button>
        </Card>

        <Card
          sx={{
            boxShadow: 3,
            width: "100%",
            minWidth: "100%",
            borderRadius: "10px",
          }}
        >
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ paddingX: 3, paddingY: 2, backgroundColor:'#a8ccf0', color:'black'}}
            onClick={() => navigate("/rd-calculator")}
          >
            <Typography gutterBottom component="div">
            <IconButton
                color="inherit"
                edge="start"
                sx={{ mr: 2, ml:-10}}
              >
                <TableViewIcon />
              </IconButton>
              
              RD Calculator
            </Typography>
          </Button>
        </Card>

        <Card
          sx={{
            boxShadow: 3,
            width: "100%",
            minWidth: "100%",
            borderRadius: "10px",
          }}
        >
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ paddingX: 3, paddingY: 2, backgroundColor:'#a8ccf0', color:'black'}}
            onClick={() => navigate("/gstcalculator")}
          >
            <Typography gutterBottom component="div">
            <IconButton
                color="inherit"
                edge="start"
                sx={{ mr: 2, ml:-10}}
              >
                <TableViewIcon />
              </IconButton>
              
              GST Calculator
            </Typography>
          </Button>
        </Card>

        <Card
          sx={{
            boxShadow: 3,
            width: "100%",
            minWidth: "100%",
            borderRadius: "10px",
          }}
        >
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ paddingX: 3, paddingY: 2, backgroundColor:'#a8ccf0', color:'black'}}
            onClick={() => navigate("/calculator")}
          >
            <Typography gutterBottom component="div">
            <IconButton
                color="inherit"
                edge="start"
                sx={{ mr: 2, ml:-10}}
              >
                <TableViewIcon />
              </IconButton>
              
              Unit Conversion
            </Typography>
          </Button>
        </Card>
      </Grid2>

  );
};

export default Home;
