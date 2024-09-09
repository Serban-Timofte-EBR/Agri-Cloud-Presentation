// src/components/Navbar.tsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#4CAF50" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
          }}
        >
          DigIT - Agriculture Cloud
        </Typography>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Button component={RouterLink} to="/" color="inherit">
            Home
          </Button>
          <Button component={RouterLink} to="/farmers" color="inherit">
            Farmers
          </Button>
          <Button component={RouterLink} to="/partners" color="inherit">
            Partners
          </Button>
          <Button component={RouterLink} to="/corporates" color="inherit">
            Corporates
          </Button>
          <Button component={RouterLink} to="/pre-register" color="inherit">
            Pre-Register
          </Button>
          <Button component={RouterLink} to="/about" color="inherit">
            About
          </Button>
        </Box>

        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem component={RouterLink} to="/" onClick={handleMenuClose}>
              Home
            </MenuItem>
            <MenuItem
              component={RouterLink}
              to="/farmers"
              onClick={handleMenuClose}
            >
              Farmers
            </MenuItem>
            <MenuItem
              component={RouterLink}
              to="/partners"
              onClick={handleMenuClose}
            >
              Partners
            </MenuItem>
            <MenuItem
              component={RouterLink}
              to="/corporates"
              onClick={handleMenuClose}
            >
              Corporates
            </MenuItem>
            <MenuItem
              component={RouterLink}
              to="/pre-register"
              onClick={handleMenuClose}
            >
              Pre-Register
            </MenuItem>
            <MenuItem
              component={RouterLink}
              to="/about"
              onClick={handleMenuClose}
            >
              About
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
