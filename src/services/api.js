import axios from 'axios';

const API_URL = 'https://1307-197-253-32-226.ngrok-free.app/api'; // Replace with your backend URL

export const getProducts = async () => {
    const response = await axios.get(`${API_URL}/products/products`);
    return response.data;
};

