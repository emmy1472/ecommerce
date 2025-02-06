import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import "../styles/Products.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        console.log("API Response:", data); // Debugging log

        // Ensure we store an array in 'products'
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([]); // If response is invalid, set an empty array
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container my-5">
      <br /><br />
      <h1 className="text-center mb-4">Explore Our Products</h1>

      {/* Show Loading State */}
      {loading && <p className="text-center">Loading products...</p>}

      {/* Show Error Message if API Fails */}
      {error && <p className="text-center text-danger">{error}</p>}

      {/* Display Products or "No Products Available" */}
      {!loading && !error && (
        <div className="row">
          {products.length > 0 ? (
            products.map((product) => (
              <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
                <div className="card product-card h-100 shadow-sm">
                  <img
                    src={`https://f1ec-197-253-32-226.ngrok-free.app${product.image}`} // Full image URL
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
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-primary mt-auto"
                    >
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
      )}
    </div>
  );
};

export default Products;
