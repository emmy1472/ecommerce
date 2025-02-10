import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../data/products";
import "../styles/ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  // Find product by ID
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center mt-5">Product not found!</div>;
  }

  return (
    <div className="container my-5">
      <button onClick={() => navigate(-1)} className="btn btn-outline-secondary">
        <i className="fa fa-arrow-left me-2"></i> Back
      </button>

      <div className="row mt-4">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid rounded shadow-lg" />
        </div>

        <div className="col-md-6">
          <h1 className="display-4">{product.name}</h1>
          <p className="lead">{product.description}</p>
          <h4 className="text-success">
            ₦{Number(product.price).toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h4>

          <button onClick={() => addToCart(product)} className="btn btn-primary btn-lg">
            <i className="fa fa-cart-plus me-2"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
