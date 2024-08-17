import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';

const Home = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/foods')
      .then(response => setFoods(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {foods.map(food => (
          <Grid item xs={12} sm={6} md={4} key={food._id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{food.name}</Typography>
                <Typography variant="body2">{food.description}</Typography>
                <Typography variant="h6">${food.price}</Typography>
                <Button variant="contained" color="primary">Order Now</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
