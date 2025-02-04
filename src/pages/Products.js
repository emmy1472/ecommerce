import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import "../styles/Products.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container my-5"><br></br><br></br>
      <h1 className="text-center mb-4">Explore Our Products</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
            <div className="card product-card h-100 shadow-sm">
              <img
                src={`6db7-197-253-32-226.ngrok-free.app/api/products${product.image}`}
                className="card-img-top"
                alt={product.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-success">
                  ₦
                  {Number(product.price).toLocaleString("en-US", {
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
        ))}
      </div>
    </div>
  );
};

export default Products;
