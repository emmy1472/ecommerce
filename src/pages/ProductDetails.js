import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // Initialize navigate
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://a0ce-197-253-32-226.ngrok-free.app/api/products/products/${id}/`);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product details:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (!product) {
        return <div className="text-center mt-5">Product not found!</div>;
    }

    return (
        <div className="container my-5"><br></br><br></br>
            {/* Backward Arrow */}
            <div className="mb-4">
                <button 
                    onClick={() => navigate(-1)} // Navigate back
                    className="btn btn-outline-secondary"
                >
                    <i className="fa fa-arrow-left me-2"></i> back
                </button>
            </div>

            <div className="row">
                {/* Product Image */}
                <div className="col-md-6 mb-4 mb-md-0">
                    <img 
                        src={`https://355d-197-253-32-226.ngrok-free.app/api/products${product.image}`} 
                        alt={product.name} 
                        className="img-fluid rounded-lg shadow-lg hover-zoom"
                    />
                </div>

                {/* Product Details */}
                <div className="col-md-6">
                    <h1 className="display-4 font-weight-bold mb-3">{product.name}</h1>
                    <p className="lead text-muted">{product.description}</p>
                    <h4 className="text-success mb-4">
                        ₦{Number(product.price).toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })}
                    </h4>
                    
                    <div className="d-flex justify-content-between align-items-center">
                        {/* Add to Cart Button */}
                        <button 
                            onClick={() => addToCart(product)} 
                            className="btn btn-primary btn-lg shadow-md hover-shadow-lg"
                        >
                            <i className="fa fa-cart-plus me-2"></i> Add to Cart
                        </button>
                        
                        {/* Quantity Control */}
                        <div className="d-flex align-items-center">
                            <label htmlFor="quantity" className="me-2">Quantity:</label>
                            <input 
                                id="quantity"
                                type="number"
                                min="1"
                                max="10"
                                defaultValue="1"
                                className="form-control w-25"
                                size={70}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
