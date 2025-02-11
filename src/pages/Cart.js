import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Cart.css";

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate();

    // Calculate total price
    const calculateTotal = () =>
        cart.reduce((total, item) => total + Number(item.price), 0);

    return (
        <div className="container my-5">
            <br /><br />
            {/* Back Button */}
            <div className="mb-4">
                <button
                    onClick={() => navigate(-1)}
                    className="btn btn-outline-secondary"
                >
                    <i className="fa fa-arrow-left me-2"></i> Back
                </button>
            </div>

            <h1 className="text-center mb-4">Shopping Cart</h1>

            {/* If cart is empty */}
            {cart.length === 0 ? (
                <div className="alert alert-info text-center">
                    Your cart is empty.{" "}
                    <Link to="/" className="btn btn-primary">
                        Go shopping
                    </Link>
                </div>
            ) : (
                <div className="cart-table-container">
                    {/* Responsive table */}
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="cart-item-image"
                                                    onError={(e) => {
                                                        e.target.src = "/images/default.jpg";
                                                    }}
                                                />
                                                <span className="ms-2">{item.name}</span>
                                            </div>
                                        </td>
                                        <td>
                                            ₦
                                            {Number(item.price).toLocaleString("en-US", {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            })}
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => removeFromCart(item.id)} // 🔥 Ensure `id` matches
                                                className="btn btn-danger btn-sm"
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Total & Checkout */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
                        <h4 className="text-success mb-3 mb-md-0">
                            Total: ₦
                            {calculateTotal().toLocaleString("en-US", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            })}
                        </h4>
                        <Link to="/checkout" className="btn btn-success btn-lg">
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
