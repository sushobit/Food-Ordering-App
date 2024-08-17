import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Grid, Typography, Paper, Box, IconButton, Select, MenuItem, InputLabel, FormControl, Tooltip, InputAdornment } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CategoryOutlined from '@mui/icons-material/CategoryOutlined';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as ChartTooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [foods, setFoods] = useState([]);
  const [foodData, setFoodData] = useState({ name: '', description: '', price: '', category: '' });
  const [editing, setEditing] = useState(null); // Track which item is being edited
  const [salesData, setSalesData] = useState([]);

  // Dummy sales data
  const dummySalesData = [
    { date: '2024-08-01', totalSales: 1200 },
    { date: '2024-08-02', totalSales: 900 },
    { date: '2024-08-03', totalSales: 1500 },
    { date: '2024-08-04', totalSales: 2000 },
    { date: '2024-08-05', totalSales: 1700 },
  ];

  const dummyCategorySalesData = [
    { category: 'Appetizer', totalSales: 3500 },
    { category: 'Main Course', totalSales: 5000 },
    { category: 'Dessert', totalSales: 2000 },
    { category: 'Beverage', totalSales: 1500 },
  ];

  useEffect(() => {
    if (isAuthenticated) {
      // Fetch food items (mocked)
      axios.get('https://food-orderingapp-backend.onrender.com/api/foods')
        .then(response => setFoods(response.data))
        .catch(error => console.error(error));

      // Set dummy sales data
      setSalesData(dummySalesData);
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    if (username === 'user' && password === 'pass') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleChange = (e) => {
    setFoodData({ ...foodData, [e.target.name]: e.target.value });
  };

  const handleAddFood = () => {
    if (editing) {
      axios.put(`https://food-orderingapp-backend.onrender.com/api/foods/${editing._id}`, foodData)
        .then(response => {
          setFoods(foods.map(food => food._id === editing._id ? response.data : food));
          setFoodData({ name: '', description: '', price: '', category: '' });
          setEditing(null);
        })
        .catch(error => console.error(error));
    } else {
      axios.post('https://food-orderingapp-backend.onrender.com/api/foods', foodData)
        .then(response => {
          setFoods([...foods, response.data]);
          setFoodData({ name: '', description: '', price: '', category: '' });
        })
        .catch(error => console.error(error));
    }
  };

  const handleEditClick = (food) => {
    setFoodData({ name: food.name, description: food.description, price: food.price, category: food.category });
    setEditing(food);
  };

  const handleDeleteClick = (id) => {
    axios.delete(`https://food-orderingapp-backend.onrender.com/api/foods/${id}`)
      .then(() => {
        setFoods(foods.filter(food => food._id !== id));
      })
      .catch(error => console.error(error));
  };

  return (
    <div style={{ background: 'linear-gradient(90deg, #F3E5AB, #A2C2E3)', minHeight: '100vh', paddingTop: '180px' }}>
      {!isAuthenticated ? (
        <Paper sx={{ padding: 3, marginTop: 5, textAlign: 'center', backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '15px',
          padding: '30px',
          margin: '80px',
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)', }}>
          <Typography variant="h5" gutterBottom>Admin Login</Typography>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
            sx={{ backgroundColor: '#ffffff', borderRadius: 1 }}
          />
          <p>USERNAME is 'user'</p>
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            sx={{ backgroundColor: '#ffffff', borderRadius: 1 }}
          />
          <p>PASSWORD is 'pass'</p>
          <Button variant="contained" color="primary" onClick={handleLogin} sx={{ marginTop: 2 }}>
            Login
          </Button>
        </Paper>
      ) : (
        <Box sx={{ padding: 3 }}>
          <Typography variant="h4" sx={{ marginBottom: 3, textAlign: 'center' }}>Admin Dashboard</Typography>

          {/* Analytics and Sales Charts */}
          <Box sx={{ marginBottom: 3 }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>Sales Analytics</Typography>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <ChartTooltip />
                <Legend />
                <Line type="monotone" dataKey="totalSales" stroke="#1d1d1fb9" strokeWidth={6} /> {/* Increased line width */}
              </LineChart>
            </ResponsiveContainer>

            <Typography variant="h6" sx={{ marginTop: 3, marginBottom: 2 }}>Sales by Category</Typography>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={dummyCategorySalesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <ChartTooltip />
                <Legend />
                <Bar dataKey="totalSales" fill="#1d1d1fb9" />
              </BarChart>
            </ResponsiveContainer>
          </Box>


          <Paper sx={{ padding: 3, marginBottom: 3, boxShadow: 3, backgroundColor: '#ffffffcc', backdropFilter: 'blur(10px)' }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>{editing ? 'Edit Food Item' : 'Add New Food Item'}</Typography>
            <TextField
              name="name"
              label="Name"
              value={foodData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="description"
              label="Description"
              value={foodData.description}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="price"
              label="Price"
              type="number"
              value={foodData.price}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                value={foodData.category}
                onChange={handleChange}
                label="Category"
                IconComponent={(props) => (
                  <InputAdornment position="end">
                    <CategoryOutlined sx={{ color: 'primary.main' }} />
                  </InputAdornment>
                )}
                sx={{
                  '& .MuiSelect-select': {
                    padding: 1.5,
                    fontSize: '1rem',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'primary.main',
                    transition: 'border-color 0.3s ease',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'primary.dark',
                  },
                }}
              >
                <MenuItem value="Appetizer">Appetizer</MenuItem>
                <MenuItem value="Main Course">Main Course</MenuItem>
                <MenuItem value="Dessert">Dessert</MenuItem>
                <MenuItem value="Beverage">Beverage</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="primary" onClick={handleAddFood} sx={{ marginTop: 2 }}>
              {editing ? 'Update Food' : 'Add Food'}
            </Button>
          </Paper>

          <Grid container spacing={3}>
            {foods.map(food => (
              <Grid item xs={12} sm={6} md={4} key={food._id}>
                <Paper sx={{ padding: 2, boxShadow: 2, position: 'relative', backgroundColor: '#1d1d1fb9', color: '#ffffff',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.03)'},
                 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{food.name}</Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>{food.description}</Typography>
                  <Typography variant="h6" sx={{ mb: 1, color: '#FFAB00',
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)',
                    letterSpacing: '0.05em', }}>₹{food.price}</Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Tooltip title="Edit">
                      <IconButton onClick={() => handleEditClick(food)} sx={{ color: 'white' }}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton onClick={() => handleDeleteClick(food._id)} color="error">
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default AdminPage;
