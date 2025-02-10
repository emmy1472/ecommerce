import React, { useState, useEffect } from "react";
import productsData from "../data/products"; // Import local product data
import "../styles/Products.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData); // Load products from local file
  }, []);

  return (
    <div className="container my-5">
      <br />
      <br />
      <h1 className="text-center mb-4">Explore Our Products</h1>

      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
              <div className="card product-card h-100 shadow-sm">
                <img
                  src={product.image} // Use local image path
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-success">
                    ₦{Number(product.price).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  <Link to={`/products/${product.id}`} className="btn btn-primary mt-auto">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
