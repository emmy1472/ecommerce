import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../data/products"; // Import local product data
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
      <br />
      <br />
      <div className="mb-4">
        <button onClick={() => navigate(-1)} className="btn btn-outline-secondary">
          <i className="fa fa-arrow-left me-2"></i> back
        </button>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4 mb-md-0">
          <img src={product.image} alt={product.name} className="img-fluid rounded-lg shadow-lg hover-zoom" />
        </div>

        <div className="col-md-6">
          <h1 className="display-4 font-weight-bold mb-3">{product.name}</h1>
          <p className="lead text-muted">{product.description}</p>
          <h4 className="text-success mb-4">
            ₦{Number(product.price).toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h4>

          <div className="d-flex justify-content-between align-items-center">
            <button onClick={() => addToCart(product)} className="btn btn-primary btn-lg shadow-md hover-shadow-lg">
              <i className="fa fa-cart-plus me-2"></i> Add to Cart
            </button>

            <div className="d-flex align-items-center">
              <label htmlFor="quantity" className="me-2">
                Quantity:
              </label>
              <input id="quantity" type="number" min="1" max="10" defaultValue="1" className="form-control w-25" size={70} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
