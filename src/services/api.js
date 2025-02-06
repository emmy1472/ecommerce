// services/api.js
import axios from 'axios';

export const getProducts = async () => {
  try {
    const response = await axios.get("https://bb18-197-253-32-226.ngrok-free.app/api/products/products/");
    //console.log("API Response:", response.data); // Debugging log
    return response.data; // Axios directly returns the data from the response
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
