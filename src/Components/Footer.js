// src/components/Footer.js
import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#1d1d1fda', color: '#FFFFFF', padding: '20px 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" style={{color:'white'}}>456 Spice Street, Gourmet Nagar, Mumbai, Maharashtra – 440084</Typography>
            <Typography variant="body2" style={{color:'white'}}>Phone: +91 988899998</Typography>
            <Typography variant="body2" style={{color:'white'}}>Email: foodorder@gmail.com</Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/orderonline" color="inherit" underline="none" sx={{ display: 'block', marginBottom: '10px' }}>
              Order Online
            </Link>
            <Link href="/cart" color="inherit" underline="none" sx={{ display: 'block', marginBottom: '10px' }}>
            Cart
            </Link>
            <Link href="/admin" color="inherit" underline="none" sx={{ display: 'block', marginBottom: '10px' }}>
            Admin Login
            </Link>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton href="https://facebook.com" target="_blank" sx={{ color: '#FFFFFF' }}>
                <FacebookIcon />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" sx={{ color: '#FFFFFF' }}>
                <TwitterIcon />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" sx={{ color: '#FFFFFF' }}>
                <InstagramIcon />
              </IconButton>
              <IconButton href="https://linkedin.com" target="_blank" sx={{ color: '#FFFFFF' }}>
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box textAlign="center" mt={5}>
          <Typography variant="body2" style={{color:'white'}}>&copy; 2024 HungryHub. All rights reserved.</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
