import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Grid, Card, CardContent, Typography, Button, FormControl, InputLabel, Select, MenuItem, Box, InputAdornment, Badge, Tooltip } from '@mui/material';
import { CategoryOutlined, Fastfood, Cake, Coffee } from '@mui/icons-material';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import DiningIcon from '@mui/icons-material/Dining';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const OrderOnlinePage = () => {
    const [foods, setFoods] = useState([]);
    const [filteredFoods, setFilteredFoods] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://food-orderingapp-backend.onrender.com/api/foods')
          .then(response => {
            setFoods(response.data);
            setFilteredFoods(response.data); // Set initial filtered list
          })
          .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        setItemCount(selectedItems.length);
    }, [selectedItems]);

    const handleAddToOrder = (food) => {
        const updatedItems = [...selectedItems, food];
        setSelectedItems(updatedItems);
    };

    const handleCheckout = () => {
        navigate('/cart', { state: { selectedItems } });
    };

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);

        if (category === 'All') {
            setFilteredFoods(foods);
        } else {
            setFilteredFoods(foods.filter(food => food.category === category));
        }
    };

    return (
        <div style={{ background: 'linear-gradient(90deg, #F3E5AB, #A2C2E3)', minHeight: '100vh' }}>
            <Typography variant="h4" sx={{ marginBottom: 2, textAlign: 'center', marginTop: 2, color: '#0277BD', paddingTop: 9 }}>
                <FoodBankIcon fontSize="large" /> Best Dining Chains in Your Area <FoodBankIcon fontSize="large" />
            </Typography>
            <Box sx={{ padding: 2, textAlign: 'center' }}>
                <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2, borderRadius: 2, boxShadow: 1, width: '60%' }}>
                    <InputLabel
                        sx={{
                            color: 'primary.main',
                            fontSize: '1.2rem',
                            '&.Mui-focused': {
                                color: 'primary.dark',
                            }
                        }}
                    >
                        Category
                    </InputLabel>
                    <Select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        label="Category"
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
                            '& .MuiSelect-icon': {
                                color: 'primary.main',
                            }
                        }}
                        IconComponent={(props) => (
                          <InputAdornment position="end">
                            <CategoryOutlined sx={{ color: 'primary.main' }} />
                          </InputAdornment>
                        )}
                    >
                        <MenuItem value="All">
                            <CategoryOutlined sx={{ mr: 1 }} />
                            All
                        </MenuItem>
                        <MenuItem value="Appetizer">
                            <Fastfood sx={{ mr: 1 }} />
                            Appetizer
                        </MenuItem>
                        <MenuItem value="Main Course">
                            <Fastfood sx={{ mr: 1 }} />
                            Main Course
                        </MenuItem>
                        <MenuItem value="Dessert">
                            <Cake sx={{ mr: 1 }} />
                            Dessert
                        </MenuItem>
                        <MenuItem value="Beverage">
                            <Coffee sx={{ mr: 1 }} />
                            Beverage
                        </MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Grid container spacing={4} sx={{ padding: 2 }}>
                {filteredFoods.map(food => (
                    <Grid item xs={12} sm={6} md={4} key={food._id}>
                        <Card
                            sx={{
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.03)',
                                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
                                },
                                borderRadius: '15px',
                                overflow: 'hidden',
                                color: '#ffffff',
                                backgroundColor: '#1d1d1fb9',
                                backdropFilter: 'blur(15px)',
                            }}
                        >
                            <CardContent>
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                    {food.name} <DiningIcon />
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#ffffff' }}>{food.description}</Typography>
                                <Typography variant="body2" sx={{ color: '#ffffff', textAlign: 'right', fontStyle: 'italic' }}>{food.category}</Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: '#FFAB00',
                                        fontWeight: 'bold',
                                        fontSize: '1.5rem',
                                        textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)',
                                        letterSpacing: '0.05em',
                                    }}
                                >
                                    ₹{food.price}
                                </Typography>
                                <Tooltip title="Add to Order">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => handleAddToOrder(food)}
                                        sx={{ marginTop: 1 }}
                                    >
                                        Add to Order
                                    </Button>
                                </Tooltip>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <div style={{
                position: 'fixed',
                bottom: '56px',
                right: '26px',
                zIndex: 1000,
            }}>
                <Tooltip title="Go to Checkout">
                    <Button
                        color="primary"
                        onClick={handleCheckout}
                        disabled={selectedItems.length === 0}
                        sx={{
                            position: 'relative',
                            padding: '20px',
                            fontSize: '4rem',  // Adjusted for better visual balance
                            borderRadius: '50%',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'scale(1.1)',
                                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.4)',
                            },
                        }}
                    >
                        <Badge
                            badgeContent={itemCount}
                            color="error"
                            sx={{
                                position: 'absolute',
                                top: -6,
                                right: -6,
                                fontSize: '2.5rem',
                                padding: '5px',
                                border: '2px solid white',
                                borderRadius: '50%',
                                backgroundColor: '#FFAB00',
                                color: 'white',
                            }}
                        >
                            <RestaurantMenuIcon
                                sx={{
                                    fontSize: '4rem',  // Adjusted for better visual balance
                                    color: 'white',
                                }}
                            />
                        </Badge>
                    </Button>
                </Tooltip>
            </div>
        </div>
    );
}

export default OrderOnlinePage;
