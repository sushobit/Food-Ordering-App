import React from 'react';
import {
  Container, Typography, Card, CardContent, Box, Grid, Avatar, Divider, Chip, Paper
} from '@mui/material';
import { motion } from 'framer-motion';

const chefs = [
  {
    id: 1,
    name: 'Chef Mohit Patil',
    image: 'https://t3.ftcdn.net/jpg/00/61/88/88/360_F_61888864_eZJJkbI8KVTB68zrCYgt3S53QrDLTNcx.jpg',
    bio: 'Specializes in Italian cuisine with a passion for authentic pasta dishes and handcrafted sauces.',
    tip: 'Always use fresh herbs to elevate any Italian dish!'
  },
  {
    id: 2,
    name: 'Chef Raj Singh',
    image: 'https://thumbs.dreamstime.com/b/south-indian-chef-standing-his-hands-clasped-smiling-portrait-36256089.jpg',
    bio: 'Expert in Indian fusion recipes, blending traditional spices with modern twists.',
    tip: 'Roast your spices to unlock their true flavors.'
  },
  {
    id: 3,
    name: 'Chef Nitiya Johnson',
    image: 'https://media.istockphoto.com/id/1311030976/photo/portrait-of-a-young-women-chef-holding-wooden-spoon-and-spatula-standing-isolated-over-white.jpg?s=612x612&w=0&k=20&c=ZwrQBgDEKF9SDrLrvIx6i2RBUz0OoL6UBJeNtoJLx8Y=',
    bio: 'Focuses on healthy, organic meals that are both flavorful and nutritious.',
    tip: 'Balance is key – mix veggies with grains for a fulfilling meal.'
  },
];

const testimonials = [
  { name: 'Rahul', feedback: "The chefs are top-notch! I tried Raj’s butter chicken twist – divine!" },
  { name: 'Vikram', feedback: "Chef Emma’s healthy meals helped me love greens again!" },
  { name: 'Shreya', feedback: "Authentic, fresh, and full of love – that's what I taste in every dish!" },
];

const popularDishes = [
  "Butter Chicken",
  "Hara Bhara Kabab",
  "Spicy Tamarind Kachori",
];

const Blog = () => {
  return (
    <Box sx={{ background: 'linear-gradient(90deg, #F3E5AB, #FBA518)', minHeight: '100vh', py: 5, marginTop:'70px' }}>
      <Container>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#D84315' }}>
              Welcome to Chef’s Corner 👨‍🍳
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 2, color: '#5F5F5F' }}>
              Dive into culinary secrets, meet our chefs, and taste creativity!
            </Typography>
          </Box>
        </motion.div>

        {/* Chefs Grid */}
        <Grid container spacing={4}>
          {chefs.map((chef) => (
            <Grid item xs={12} sm={6} md={4} key={chef.id}>
              <motion.div whileHover={{ scale: 1.03 }}>
                <Card
                  sx={{
                    borderRadius: '20px',
                    boxShadow: 3,
                    background: 'linear-gradient(to bottom, #FFFAF0, #FFF3E0)'
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                    <Avatar
                      src={chef.image}
                      alt={chef.name}
                      sx={{ width: 100, height: 100, border: '4px solid #FB8C00' }}
                    />
                  </Box>
                  <CardContent>
                    <Typography variant="h6" align="center" sx={{ color: '#FB8C00', fontWeight: 'bold' }}>
                      {chef.name}
                    </Typography>
                    <Typography variant="body2" align="center" sx={{ mt: 1, color: '#555' }}>
                      {chef.bio}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="body2" align="center" fontStyle="italic" sx={{ color: '#8D6E63' }}>
                      📝 Tip: {chef.tip}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Popular Dishes */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#E65100', textAlign: 'center' }}>
            🍝 Popular Dishes This Month
          </Typography>
          <Grid container spacing={2} justifyContent="center" mt={2}>
            {popularDishes.map((dish, i) => (
              <Chip
                key={i}
                label={dish}
                sx={{ m: 1, backgroundColor: '#FFE0B2', color: '#6D4C41', fontWeight: 'bold' }}
              />
            ))}
          </Grid>
        </Box>

        {/* Testimonials */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#BF360C', textAlign: 'center' }}>
            ❤️ What Our Foodies Say
          </Typography>
          <Grid container spacing={3} mt={3}>
            {testimonials.map((t, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Paper elevation={6} sx={{ p: 3, backgroundColor: '#FFF3E0', borderRadius: '16px' }}>
                  <Typography variant="body1" sx={{ color: '#4E342E', mb: 2 }}>
                    “{t.feedback}”
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: '#D84315', fontWeight: 'bold' }}>
                    — {t.name}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
