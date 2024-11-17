import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Container,
  Typography,
  Button,
  Box,
  Divider,
  Checkbox,
  FormControlLabel,
  Slider,
  TextField,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import ProductList from "../components/ProductList";

const Home = () => {
  // const [products, setProducts] = useState([]);

  // const getProducts = () => {
  //   fetch("https://dummyjson.com/recipes?limit=3&skip=3")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data?.recipes);
  //     })
  //     .catch((error) => console.error("Error fetching recipes:", error));
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <Box style={{ backgroundColor: "#F7F7F7" }}>
      <Navbar />
      <Container className="mt-8">
        <Typography variant="h4" className="text-center mb-4">
          Tours in London
        </Typography>

        <Box
          className="shadow-lg bg-white rounded-md "
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ margin: "0 auto", maxWidth: "1200px", mt: 4, mb: 4, p: 3 }}
        >
          {/* Location Input */}
          <Box sx={{ width: "45%", display: "flex" }}>
            <LocationOnOutlinedIcon
              style={{ marginRight: "8px", color: "#9ca3af" }}
            />
            <Box>
              <Typography variant="subtitle2">Location</Typography>
              <Typography variant="body2" color="textSecondary">
                Where are you going?
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: "1px",
              height: "40px",
              bgcolor: "gray",
              mx: 2,
            }}
          />

          {/* Check-in/Check-out Date */}
          <Box sx={{ width: "32%", display: "flex" }}>
            <EventAvailableOutlinedIcon
              style={{ marginRight: "8px", color: "#9ca3af" }}
            />
            <Box>
              <Typography variant="subtitle2">Check-in - Check-out</Typography>
              <Typography variant="body2" color="textSecondary">
                October 15 - November 10
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: "1px",
              height: "60px",
              bgcolor: "gray",
              mx: 2,
            }}
          />

          {/* Tour Type Dropdown */}
          <Box sx={{ width: "30%", display: "flex" }}>
            <ExploreOutlinedIcon
              style={{ marginRight: "8px", color: "#9ca3af" }}
            />
            <Box>
              <Typography variant="subtitle2">Tour Type</Typography>
              <Typography variant="body2" color="textSecondary">
                2 adults - 1 child - 1 room
              </Typography>
            </Box>
          </Box>

          {/* Search Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "16%",
              minWidth: "80px",
              height: "56px",
              bgcolor: "#1E40AF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "0px",
            }}
          >
            <SearchIcon style={{ color: "white", marginRight: "4px" }} />
            Search
          </Button>
        </Box>
      </Container>
      {/* Search Filters */}
      <Box
        display="flex"
        flexDirection="row"
        gap={4}
        className="p-4 shadow-lg bg-white rounded-md "
        alignItems="center"
        sx={{ mt: 8, p: 3 }}
      >
        <Box
          display="flex"
          flexDirection="row"
          gap={4}
          sx={{ margin: "0 auto", maxWidth: "1200px", p: 4 }}
        >
          {/* Sidebar Filters */}
          <Box sx={{ width: "25%" }}>
            {/* Category Types */}
            <Typography variant="h6" className="mb-2">
              Category Types
            </Typography>
            {[
              "Tours",
              "Attractions",
              "Day Trips",
              "Outdoor Activities",
              "Concerts & Shows",
            ].map((category, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox color="primary" />}
                label={category}
              />
            ))}

            <Divider sx={{ my: 2 }} />

            {/* Price Range */}
            <Typography variant="h6" className="mb-2">
              Price
            </Typography>
            <Slider
              defaultValue={50}
              aria-labelledby="price-range"
              valueLabelDisplay="auto"
              min={0}
              max={500}
            />

            <Divider sx={{ my: 2 }} />

            {/* Duration */}
            <Typography variant="h6" className="mb-2">
              Duration
            </Typography>
            {["Up to 1 hour", "1 to 4 hours", "4 hours to 1 day"].map(
              (duration, index) => (
                <FormControlLabel
                  key={index}
                  control={<Checkbox color="primary" />}
                  label={duration}
                />
              )
            )}

            <Divider sx={{ my: 2 }} />

            {/* Languages */}
            <Typography variant="h6" className="mb-2">
              Languages
            </Typography>
            {["English", "Spanish", "French", "Turkish"].map(
              (language, index) => (
                <FormControlLabel
                  key={index}
                  control={<Checkbox color="primary" />}
                  label={language}
                />
              )
            )}
          </Box>

          {/* Tour List */}
          <Box sx={{ width: "75%" }}>
            <Box
              mb={6}
              mx={2}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography>
                <strong>300 restaurants </strong>in Europe
              </Typography>
              <IconButton
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f5faff",
                  color: "#1976d2",
                  padding: "8px 12px",
                  borderRadius: "16px",
                }}
              >
                <ArrowUpwardIcon fontSize="small" color="black" />
                <ArrowDownwardIcon fontSize="small" />
                <Typography
                  style={{
                    marginLeft: "6px",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  Sort
                </Typography>
              </IconButton>
            </Box>
            <ProductList />
          </Box>
        </Box>
      </Box>
      {/* </Container> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, sm: 6, md: 18 },
          py: { xs: 2, sm: 4 },
          backgroundColor: "#172554",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            textAlign: { xs: "center", sm: "left" },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Box
            component="img"
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRzullgZH8PHLWJEE835e1qRTsHqi5wILDdIG5rlDeHIIKeXNIZ"
            alt="Travel Journey"
            sx={{
              width: { xs: 80, sm: 100, md: 150 },
              height: "auto",
              borderRadius: 1,
              mb: { xs: 2, sm: 0 },
            }}
          />
          <Box sx={{ ml: { xs: 0, sm: 2 }, mt: { xs: 2, sm: 0 } }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "white",
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              }}
            >
              Your Travel Journey Starts Here
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "white",
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              Sign up and we’ll send the best deals to you
            </Typography>
          </Box>
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: { xs: "center", sm: "flex-end" },
            width: { xs: "100%", sm: "auto" },
            gap: 2,
          }}
        >
          <TextField
            placeholder="Your Email"
            variant="outlined"
            sx={{
              backgroundColor: "white",
              borderRadius: "4px",
              input: {
                padding: "12px 14px",
                color: "#1E3A8A",
              },
              "& .MuiOutlinedInput-root": {
                border: "2px solid #E5E7EB",
                "&:hover": {
                  border: "2px solid #2563EB",
                },
                "&.Mui-focused": {
                  border: "2px solid #2563EB",
                },
              },
              width: { xs: "100%", sm: "300px" },
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{
              color: "white",
              padding: "12px 16px",
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
