import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Tooltip } from '@mui/material';

import backgroundImage from '../HeroSection/foodImage.jpg'

const services = [
  {
    title: 'Best Quality Food',
    description: 'Sed ut perspiciatis unde omnis este natus sit voluptatem',
    icon: <LocalDiningIcon fontSize="large" color="warning" />,
  },
  {
    title: 'Money Back Guarantee',
    description: 'Sed ut perspiciatis unde omnis este natus sit voluptatem',
    icon: <MonetizationOnIcon fontSize="large" color="warning" />,
  },
  {
    title: 'Fast Food Delivery',
    description: 'Sed ut perspiciatis unde omnis este natus sit voluptatem',
    icon: <DeliveryDiningIcon fontSize="large" color="warning" />,
  },
  {
    title: '100% Natural Food',
    description: 'Sed ut perspiciatis unde omnis este natus sit voluptatem',
    icon: <RestaurantIcon fontSize="large" color="warning" />,
  },
];

const HeroSection03 = () => {
  return (
    <section
       className="hero-section"
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" color="error" fontWeight="bold">
              POPULAR MENU
            </Typography>
            <Typography variant="h3" color="white" fontWeight="bold" sx={{ my: 2 }}>
              WE OFFER QUALITY SERVICE THAT CUSTOMERS NEEDS
            </Typography>
            <Typography variant="body1" color="white" sx={{ mb: 3 }}>
              Welcome too restaurant, where culinary excellence meets warm hospitality in every dish we serve. 
              Nestled in the heart of City Name our eatery invites you on a journey
            </Typography>
                      <a href='/contactus'>
                          <Tooltip title="know more"><button className="hero-button"> Learn More Us <ArrowForwardIcon sx={{ ml: 1, fontSize: '1.3rem' }} /></button></Tooltip>
                      </a>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
              <Avatar src="https://avatars.githubusercontent.com/u/120631631?v=4" sx={{ mr: 2 }} />
              <Typography variant="subtitle1" fontWeight="bold" color="white">
                SUSHOBHIT DHARA
              </Typography>
              <Typography variant="body2" sx={{ ml: 1 }}  color="white">
                / CEO & Founder
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 4, mt: 4, color: "white" }}>
              <Typography variant="h5" fontWeight="bold">54K+</Typography>
              <Typography variant="h5" fontWeight="bold">356+</Typography>
              <Typography variant="h5" fontWeight="bold">853+</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {services.map((service, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Paper elevation={3} sx={{ p: 3, borderRadius: '16px', textAlign: 'center' }}>
                    <Box sx={{ mb: 2 }}>{service.icon}</Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HeroSection03;
