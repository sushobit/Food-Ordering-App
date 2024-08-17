
import axios from 'axios';

const API_URL = 'https://food-orderingapp-backend.onrender.com/api';

export const getFoods = () => axios.get(`${API_URL}/foods`);
export const addFood = (foodData) => axios.post(`${API_URL}/foods`, foodData);
export const updateFood = (id, foodData) => axios.put(`${API_URL}/foods/${id}`, foodData);
export const deleteFood = (id) => axios.delete(`${API_URL}/foods/${id}`);
