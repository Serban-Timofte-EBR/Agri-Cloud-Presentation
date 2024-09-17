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
  Container,
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
    <AppBar
      position="sticky"
      elevation={2}
      sx={{
        background:
          "linear-gradient(135deg, rgba(34, 85, 34, 0.9), rgba(17, 50, 17, 0.9))",
        backdropFilter: "blur(6px)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        padding: { xs: "8px 0", md: "12px 0" },
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              fontSize: "1.5rem",
              letterSpacing: ".10rem",
              "&:hover": {
                color: "#FFEB3B",
              },
              transition: "color 0.3s ease",
            }}
          >
            DigIT - Agriculture Cloud
          </Typography>

          {/* Desktop Menu */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {["Home", "Farmers", "Public Partners", "Contact"].map(
              (item, index) => (
                <Button
                  key={index}
                  component={RouterLink}
                  to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                  sx={{
                    color: "white",
                    mx: 1.5,
                    px: 2,
                    py: 1,
                    borderRadius: "20px",
                    fontWeight: "500",
                    position: "relative",
                    "&:hover": {
                      color: "#FFEB3B",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      transition: "all 0.3s ease",
                      "&::after": {
                        width: "100%",
                      },
                    },
                    "&::after": {
                      content: "''",
                      position: "absolute",
                      left: 0,
                      bottom: 0,
                      height: "2px",
                      width: "0%",
                      backgroundColor: "#FFEB3B",
                      transition: "width 0.3s",
                    },
                  }}
                >
                  {item}
                </Button>
              )
            )}
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
              sx={{ color: "#FFEB3B" }} // Mobile menu icon color
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{
                mt: "45px",
                "& .MuiPaper-root": {
                  backgroundColor: "#224522", // Background for the mobile menu
                  color: "white",
                },
              }}
            >
              {["Home", "Farmers", "Public Partners", "Contact"].map(
                (item, index) => (
                  <MenuItem
                    key={index}
                    component={RouterLink}
                    to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    onClick={handleMenuClose}
                    sx={{
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        color: "#FFEB3B",
                      },
                    }}
                  >
                    {item}
                  </MenuItem>
                )
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
