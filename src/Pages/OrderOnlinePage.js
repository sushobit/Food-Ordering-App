import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Grid, Card, CardContent, Paper, Typography, Button, FormControl, InputLabel, Select, MenuItem, Box, InputAdornment, Badge, Tooltip, CircularProgress } from '@mui/material';
import { CategoryOutlined, Fastfood, Cake, Coffee } from '@mui/icons-material';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import DiningIcon from '@mui/icons-material/Dining';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Loader from '../Components/Loader/Loader';
import HeroSection03 from '../Components/HeroSection03/HeroSection03';

const OrderOnlinePage = () => {
    const [foods, setFoods] = useState([]);
    const [filteredFoods, setFilteredFoods] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://food-orderingapp-backend.onrender.com/api/foods')
            .then(response => {
                setFoods(response.data);
                setFilteredFoods(response.data);
                setLoading(false); // Data fetched, stop loading
            })
            .catch(error => {
                console.error(error);
                setLoading(false); // Stop loading even if there's an error
            });
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

    if (loading) {
        return <Loader />; // Display the loader while fetching data
    }

    const testimonials = [
        { name: 'Rahul', feedback: "The chefs are top-notch! I tried Raj’s butter chicken twist – divine!" },
        { name: 'Vikram', feedback: "Chef Emma’s healthy meals helped me love greens again!" },
        { name: 'Shreya', feedback: "Authentic, fresh, and full of love – that's what I taste in every dish!" },
    ];

    return (
        <div style={{ background: 'linear-gradient(90deg, #F3E5AB, #FBA518)', minHeight: '100vh' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bolder', marginBottom: 2, textAlign: 'center', marginTop: 2, color: '#BF360C', paddingTop: 9 }}>
                <FoodBankIcon fontSize="large" color='#BF360C' /> Best Dining Chains in Your Area <FoodBankIcon fontSize="large" />
            </Typography>
            <Box sx={{ padding: 2, textAlign: 'center', color: '#FBA518', }}>
                <FormControl
                    variant="outlined"
                    fullWidth
                    sx={{
                        marginBottom: 2,
                        borderRadius: 2,
                        boxShadow: 1,
                        width: '60%',
                        '& .MuiOutlinedInput-root': {
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#FBA518', // Hover effect for border
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#FBA518', // Focused border color
                            },
                        },
                    }}
                >
                    <InputLabel
                        sx={{
                            color: '#5A5A5A', // Label color (yellow)
                            fontSize: '1.6rem',
                            '&.Mui-focused': {
                                color: '#5A5A5A', // Focused label color (yellow)
                            },
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
                                borderColor: '#000000', // Default border color (yellow)
                                transition: 'border-color 0.3s ease', // Transition effect
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#000000', // Hover border color (yellow)
                            },
                            '& .MuiSelect-icon': {
                                color: '#000000', // Icon color (yellow)
                            },
                        }}
                        IconComponent={(props) => (
                            <InputAdornment position="end">
                                <CategoryOutlined sx={{ color: '#000000' }} />
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
                                    boxShadow: '0px 50px 80px rgba(0, 0, 0, 0.53)', // More prominent shadow on hover
                                },
                                borderRadius: '15px',
                                overflow: 'hidden',
                                color: '#ffffff',
                                background: 'linear-gradient(135deg, rgba(229, 32, 32, 0.8), rgba(255, 103, 0, 0.8))', // Gradient background
                                backdropFilter: 'blur(10px)',
                                WebkitBackdropFilter: 'blur(10px)', // Vendor prefix for Safari and WebKit browsers
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
                                        color: '#ffffff',
                                        fontWeight: 'bolder',
                                        fontSize: '1.5rem',
                                        textShadow: '1px 1px 4px rgba(0, 0, 0, 0.76)',
                                        letterSpacing: '0.05em',

                                    }}
                                >
                                    ₹{food.price}
                                </Typography>
                                <Tooltip title="Add to Order">
                                    <Button
                                        variant="contained"
                                        onClick={() => handleAddToOrder(food)}
                                        sx={{
                                            marginTop: 1,
                                            backgroundColor: '#A89C29',  // Setting the button's background color
                                            '&:hover': {
                                                backgroundColor: '#8B7D2B', 
                                                filter: 'drop-shadow(10px 10px 20px #f97316)'
                                            },
                                        }}
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
                            badgeContent={
                                <span style={{
                                    fontSize: '2.5rem',  // Increased size for the count
                                    fontWeight: '900',
                                    color: 'white',
                                    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)',
                                    animation: 'pulseGlow 2s infinite, colorShift 4s infinite',
                                }}>
                                    {itemCount}
                                </span>
                            }
                            sx={{
                                position: 'absolute',
                                top: -26,
                                right: -6,
                                fontSize: '2.5rem',
                                padding: '5px',
                                border: '8px solid white',
                                borderRadius: '50%',
                                boxShadow: '0px 50px 80px rgba(0, 0, 0, 0.53)',
                                background: 'linear-gradient(135deg, rgba(229, 32, 32, 0.8), rgba(255, 103, 0, 0.8))',
                                filter: 'drop-shadow(1px 1px 20px rgb(36, 35, 34))',
                                color: 'white',
                                '@keyframes pulse': {
                                    '0%': { transform: 'scale(1)' },
                                    '50%': { transform: 'scale(1.2)' }, // Slight zoom effect
                                    '100%': { transform: 'scale(1)' },
                                },
                                '@keyframes colorShift': {
                                    '0%': { color: '#FFFFFF' },
                                    '50%': { color: '#FFD700' },  // Golden color shift
                                    '100%': { color: '#FF4500' }, // Fiery orange color shift
                                },
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

            {/* Testimonials */}
            <Box sx={{ mt: 8, p: 9 }}>
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

            <HeroSection03 />
        </div>
    );
}

export default OrderOnlinePage;
