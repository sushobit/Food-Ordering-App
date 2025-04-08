import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography, Box, Stack, useTheme, useMediaQuery } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Loader from './Loader/Loader';

const WeekendCarousel = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [displayItems, setDisplayItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await fetch('https://food-orderingapp-backend.onrender.com/api/foods');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setFoodItems(data);
        setDisplayItems(getRandomItems(data, 9));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodItems();
  }, []);

  const getRandomItems = (items, count) => {
    const shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  if (loading) return <Loader />;
  if (error) {
    return (
      <Box sx={{ textAlign: 'center', p: 3 }}>
        <Typography variant="h6" color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 3, sm: 5 },
        background: 'linear-gradient(90deg, #FFF6E0, #FFE5B4)',
        borderRadius: '30px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
      }}
    >
      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        gutterBottom
        align="center"
        sx={{
          mb: { xs: 3, sm: 4 },
          fontWeight: 'bold',
          color: '#444'
        }}
      >
        🍽️ Today's Special Dishes
      </Typography>

      <Slider {...settings}>
        {displayItems.map(item => (
          <Box key={item._id} px={{ xs: 1, sm: 2 }}>
            <Card
              sx={{
                borderRadius: '20px',
                background: 'linear-gradient(135deg, rgba(255, 136, 0, 0.8), rgba(255, 69, 0, 0.8))',
                color: '#fff',
                height: '100%',
                mx: '10px',
                my: 2,
                p: 1,
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.03)' },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.2rem' } }}>
                  {item.name}
                </Typography>
                <Typography variant="body1" sx={{ my: 1, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                  ₹{item.price}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.95rem' } }}>
                  {item.description}
                </Typography>

                <Stack direction="row" alignItems="center" spacing={1} mt={2}>
                  <Typography
                    sx={{
                      fontSize: { xs: '1.2rem', sm: '1.4rem' },
                      color: '#FFD700',
                      fontWeight: 'bold'
                    }}
                  >
                    ★★★★☆
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9, fontSize: { xs: '0.75rem', sm: '0.9rem' } }}>
                    (220 Reviews)
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default WeekendCarousel;
