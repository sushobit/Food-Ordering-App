import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import HeroSection from '../Components/HeroSection/HeroSection';
import OrderOnlinePage from './OrderOnlinePage';
import WeekendCarousel from '../Components/WeekendCarousel';


const UserPage = () => {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemCount, setItemCount] = useState(selectedItems.length);
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

  React.useEffect(() => {
    setItemCount(selectedItems.length);
  }, [selectedItems]);

  return (
    <div style={{ background: 'linear-gradient(90deg, #F3E5AB, #A2C2E3)', minHeight: '100vh' }}>
      <HeroSection />
      <WeekendCarousel />
      <OrderOnlinePage />
    </div>
  );
};

export default UserPage;
