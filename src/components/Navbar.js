import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingCart, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Navbar.css"; // Custom styles

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
        <div className="container d-flex justify-content-between align-items-center">
          {/* Brand (E-Shop) */}
          <Link className="navbar-brand fw-bold" to="/ecommerce">
            E-Shop
          </Link>

          {/* Desktop Navigation */}
          <div className="collapse navbar-collapse d-none d-lg-flex justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/ecommerce") ? "active text-light" : "text-white"}`} to="/">
                  <FontAwesomeIcon icon={faHome} /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/products") ? "active text-light" : "text-white"}`} to="/products">
                  <FontAwesomeIcon icon={faShoppingCart} /> Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/login") ? "active text-light" : "text-white"}`} to="/login">
                  <FontAwesomeIcon icon={faUser} /> Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section: Cart & Sidebar Toggle */}
          <div className="d-flex align-items-center">
            {/* Cart Icon (Always Visible) */}
            <Link to="/cart" className="position-relative me-3">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" className="text-white" />
              {cart.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                </span>
              )}
            </Link>

            {/* Sidebar Toggle Button */}
            <button className="navbar-toggler border-0" type="button" onClick={toggleSidebar} aria-expanded={isSidebarOpen} aria-label="Toggle navigation">
              <FontAwesomeIcon icon={faBars} className="text-white" />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>&times;</button><br></br><br></br>
        <ul className="sidebar-links">
          <li>
            <Link to="/ecommerce" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faShoppingCart} /> Products
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
