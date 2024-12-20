//import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItemText,
  CssBaseline,
  Box,
  IconButton,
  Divider,
} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import GroupsIcon from "@mui/icons-material/Groups";
import CallIcon from "@mui/icons-material/Call";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SIPCalculator from "./components/Sip/SIPCalculator";
import GSTCalculator from "./components/Gst/GSTCalculator";
import EmiCalculator from "./components/Emi/EmiCalculator";
import TaxCalculator from "./components/Tax/TaxCalculator";
import RDCalculator from "./components/Rd/RDCalculator";
import UnitConverter from "./components/Conversion/UnitConverter";
import About from "./components/About";
import Contact from "./components/Contact";

const drawerWidth = 240;

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Toolbar />
      <Divider />
      <List>
        <Divider sx={{ mt: -1 }} />

        <ListItemButton
          component={Link}
          to="/"
          onClick={() => setMobileOpen(false)}
        >
          <ListItemIcon sx={{ mr: -2 }}>
            <HomeIcon color="primary" />
          </ListItemIcon>
          <ListItemText sx={{ color: "#1976d2" }} primary="Home" />
        </ListItemButton>

        <Divider sx={{ mt: 0 }} />
        <ListItemButton
          component={Link}
          to="/contact-us"
          onClick={() => setMobileOpen(false)}
        >
          <ListItemIcon sx={{ mr: -2 }}>
            <CallIcon color="primary" />
          </ListItemIcon>
          <ListItemText sx={{ color: "#1976d2" }} primary="Contact Us" />
        </ListItemButton>

        <Divider sx={{ mt: 0 }} />
        <ListItemButton
          component={Link}
          to="/about-us"
          onClick={() => setMobileOpen(false)}
        >
          <ListItemIcon sx={{ mr: -2 }}>
            <GroupsIcon color="primary" />
          </ListItemIcon>
          <ListItemText sx={{ color: "#1976d2" }} primary="About Us" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <div className="App">
      <Router>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "79vh",
          }}
        >
          {/* AppBar */}
          <AppBar
            position="fixed"
            sx={{
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
          >
            <Toolbar>
              {/* Hamburger Menu for Small Screens */}
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" noWrap component="div">
                UTILITY APP
              </Typography>
              {/* <IconButton
                color="inherit"
                edge="start"
                sx={{ ml: 0.5, mt: 0.5, }}
              >
                <CalculateIcon sx={{ fontSize: 30 }} />
                <CurrencyExchangeIcon />
              </IconButton> */}
            </Toolbar>
          </AppBar>

          {/* Permanent Drawer for Medium and Larger Screens */}
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", md: "block" },
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            open
          >
            {drawer}
          </Drawer>

          {/* Temporary Drawer for Small Screens */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", md: "none" },
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
          >
            {drawer}
          </Drawer>

          {/* Main Content */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              marginLeft: { md: `${drawerWidth}px` },
            }}
          >
            <Toolbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calculator" element={<EmiCalculator />} />
              <Route path="/sipcalculator" element={<SIPCalculator />} />
              <Route path="/gstcalculator" element={<GSTCalculator />} />
              <Route path="/tax-calculator" element={<TaxCalculator />} />
              <Route path="/rd-calculator" element={<RDCalculator />} />
              <Route path="/unit-conversion" element={<UnitConverter />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/about-us" element={<About />} />
            </Routes>
          </Box>
        </Box>
      </Router>
      <Footer /> {/* Footer at the bottom */}
    </div>
  );
};

export default App;
