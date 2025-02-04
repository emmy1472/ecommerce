import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Replace with your backend URL

export const getProducts = async () => {
    const response = await axios.get(`${API_URL}/products/products`);
    return response.data;
};

