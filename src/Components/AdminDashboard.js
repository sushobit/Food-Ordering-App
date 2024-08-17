import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Grid, Typography } from '@mui/material';

const AdminDashboard = () => {
  const [foods, setFoods] = useState([]);
  const [foodData, setFoodData] = useState({ name: '', description: '', price: '', category: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/api/foods')
      .then(response => setFoods(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleChange = (e) => {
    setFoodData({ ...foodData, [e.target.name]: e.target.value });
  };

  const handleAddFood = () => {
    axios.post('http://localhost:5000/api/foods', foodData)
      .then(response => {
        setFoods([...foods, response.data]);
        setFoodData({ name: '', description: '', price: '', category: '' });
      })
      .catch(error => console.error(error));
  };

  return (
    <Container>
      <Typography variant="h4">Admin Dashboard</Typography>
      <TextField
        name="name"
        label="Name"
        value={foodData.name}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="description"
        label="Description"
        value={foodData.description}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="price"
        label="Price"
        type="number"
        value={foodData.price}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="category"
        label="Category"
        value={foodData.category}
        onChange={handleChange}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleAddFood}>Add Food</Button>

      <Grid container spacing={2}>
        {foods.map(food => (
          <Grid item xs={12} sm={6} md={4} key={food._id}>
            <Typography variant="h6">{food.name}</Typography>
            <Typography variant="body2">{food.description}</Typography>
            <Typography variant="h6">${food.price}</Typography>
            {/* Implement edit and delete functionality */}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AdminDashboard;
