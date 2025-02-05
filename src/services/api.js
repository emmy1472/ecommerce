import axios from 'axios';

const API_URL = 'https://a0ce-197-253-32-226.ngrok-free.app/api'; // Replace with your backend URL

export const getProducts = async () => {
    const response = await axios.get(`https://a0ce-197-253-32-226.ngrok-free.app/api/products/products`);
    return response.data;
};

