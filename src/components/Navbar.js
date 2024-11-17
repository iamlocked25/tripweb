import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState("");

  const handleMenuClick = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuOpen("");
  };

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          justifyContent: { xs: "space-between", lg: "space-around" },
          padding: 0,
        }}
      >
        {/* Left Side - Logo */}
        <Typography variant="h6" className="text-5xl font-bold">
          TripWeb
        </Typography>

        {/* Middle - Nav Links */}
        <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 2 }}>
          {[
            "Home",
            "Categories",
            "Destinations",
            "Blog",
            "Pages",
            "Dashboard",
            "Contact",
          ]?.map((item) => (
            <div key={item}>
              {["Categories", "Destinations", "Pages", "Dashboard"].includes(
                item
              ) ? (
                <>
                  <Button
                    className="text-5xl"
                    sx={{
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                    }}
                    onClick={(event) => handleMenuClick(event, item)}
                  >
                    {item}
                    <ArrowDropDownIcon sx={{ ml: 1 }} />
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={menuOpen === item}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Option 3</MenuItem>
                  </Menu>
                </>
              ) : (
                <Button sx={{ color: "white" }}>{item}</Button>
              )}
            </div>
          ))}
        </Box>
        {/* Right Side - Action Buttons */}
        <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "black",
              borderColor: "white",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
              padding: "12px 16px",
            }}
            className="border-2"
          >
            Become An Expert
          </Button>

          <Button
            variant="contained"
            sx={{
              color: "white",
              padding: "12px 16px",
            }}
            className="border-2"
          >
            Sign In / Register
          </Button>
        </Box>

        {/* Mobile Menu */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { lg: "none" } }}
          onClick={(event) => handleMenuClick(event, "mobile")}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={menuOpen === "mobile"}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {[
            "Home",
            "Categories",
            "Destinations",
            "Blog",
            "Pages",
            "Dashboard",
            "Contact",
          ].map((item) => (
            <MenuItem key={item} onClick={handleMenuClose}>
              {item}
            </MenuItem>
          ))}
          <MenuItem>
            <Button variant="outlined" sx={{ width: "100%" }}>
              Become An Expert
            </Button>
          </MenuItem>
          <MenuItem>
            <Button variant="contained" sx={{ width: "100%" }}>
              Sign In / Register
            </Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
