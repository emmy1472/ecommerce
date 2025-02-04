import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingCart, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Navbar.css"; // Custom styles for sidebar

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            E-Shop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleSidebar}
            aria-expanded={isSidebarOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
            <form className="d-flex me-auto" style={{ flex: 1 }}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search products..."
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/") ? "active text-light" : "text-white"}`}
                  to="/"
                >
                  <FontAwesomeIcon icon={faHome} /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/products") ? "active text-light" : "text-white"}`}
                  to="/products"
                >
                  <FontAwesomeIcon icon={faShoppingCart} /> Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/cart") ? "active text-light" : "text-white"}`}
                  to="/cart"
                >
                  <FontAwesomeIcon icon={faShoppingCart} /> Cart ({cart.length})
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/login") ? "active text-light" : "text-white"}`}
                  to="/login"
                >
                  <FontAwesomeIcon icon={faUser} /> Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button><br></br><br></br>
        <ul className="sidebar-links">
          <li>
            <Link to="/" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faShoppingCart} /> Products
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faShoppingCart} /> Cart ({cart.length})
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faUser} /> Login
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
