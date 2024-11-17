import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#F7F7F7",
        color: "black",
        mt: 8,
        pt: 4,
        pb: 4,
        px: 2,
      }}
    >
      <Box
        sx={{
          px: 4,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 4,
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="body2">Toll Free Customer Care</Typography>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            +1 (123) 456 7890
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Company
          </Typography>
          <Stack spacing={1}>
            <Link href="#" color="inherit" underline="hover">
              About Us
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Careers
            </Link>
          </Stack>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Support
          </Typography>
          <Stack spacing={1}>
            <Link href="#" color="inherit" underline="hover">
              Contact
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Legal Notice
            </Link>
          </Stack>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Other Services
          </Typography>
          <Stack spacing={1}>
            <Link href="#" color="inherit" underline="hover">
              Car Hire
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Activity Finder
            </Link>
          </Stack>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Mobile
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Box
              component="img"
              src="https://imgs.search.brave.com/TJ_bTHOC_S-oVGKq6WJ_7DFJZ2UV9mF8hmojeqnyhUw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXBwbGUuY29tL3Yv/YXBwLXN0b3JlL2Iv/aW1hZ2VzL292ZXJ2/aWV3L2ljb25fYXBw/c3RvcmVfX2V2MHo3/NzB6eXhveV9sYXJn/ZV8yeC5wbmc"
              alt="App Store"
              sx={{
                width: { xs: 30, sm: 36 },
                height: "auto",
                borderRadius: 1,
              }}
            />
            <Box
              component="img"
              src="https://imgs.search.brave.com/5VVMszZPXfxA_aliLbVFEzJDMF8P-QYzN1nMaynI76c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly95b3Vo/YWRtZWF0Z2FyZGVu/aW5nLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOS8wOC9H/b29nbGUtUGxheS1C/dXR0b24ud2VicA"
              alt="Play Store"
              sx={{
                width: { xs: 80, sm: 120 },
                height: "auto",
                borderRadius: 1,
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Social Media Section */}
      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Link href="https://www.facebook.com" target="_blank" color="inherit">
          <FacebookIcon />
        </Link>
        <Link href="https://www.twitter.com" target="_blank" color="inherit">
          <TwitterIcon />
        </Link>
        <Link href="https://www.instagram.com" target="_blank" color="inherit">
          <InstagramIcon />
        </Link>
        <Link href="https://www.linkedin.com" target="_blank" color="inherit">
          <LinkedInIcon />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
