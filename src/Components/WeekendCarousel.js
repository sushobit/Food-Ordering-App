// src/components/WeekendCarousel.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography, Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Loader from './Loader/Loader';

const WeekendCarousel = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [displayItems, setDisplayItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await fetch('https://food-orderingapp-backend.onrender.com/api/foods');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFoodItems(data);
        // Get a random subset of items after data is fetched
        setDisplayItems(getRandomItems(data, 5)); // Example: Get 5 random items
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodItems();
  }, []);

  // Function to get a random subset of items
  const getRandomItems = (items, count) => {
    const shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', padding: '20px' }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: '20px', background: 'linear-gradient(90deg, #F3E5AB, #A2C2E3)', borderRadius: '30px' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ marginBottom: '20px', color: '#0277BD' }}>
        Today's Special 
      </Typography>
      <Slider {...settings}>
        {displayItems.map(item => (
          <Card key={item._id} sx={{ maxWidth: '100%', margin: '0 auto', borderRadius: '30px', backgroundColor: '#1d1d1fb9', backdropFilter: 'blur(15px)' }}>
            <CardContent>
              <Typography variant="h6" component="div" sx={{ color: '#ffffff' }}>
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color: '#ffffff' }}>
                ₹{item.price}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px', color: '#ffffff' }}>
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default WeekendCarousel;
