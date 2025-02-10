import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/Cart.css";

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate(); // Initialize navigate

    // Calculate total price
    const calculateTotal = () =>
        cart.reduce((total, item) => total + Number(item.price), 0);

    return (
        <div className="container my-5">
            <br /><br />
            {/* Back Button */}
            <div className="mb-4">
                <button
                    onClick={() => navigate(-1)} // Navigate back
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
                    <table className="table table-striped table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => {
                                console.log("Cart Item Image Path:", item.image); // Debugging log

                                return (
                                    <tr key={index}>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={item.image} // ✅ Uses correct path
                                                    alt={item.name}
                                                    className="cart-item-image"
                                                    onError={(e) => {
                                                        e.target.src = "/images/default.jpg"; // Fallback image if not found
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
                                                onClick={() => removeFromCart(item.id)}
                                                className="btn btn-danger btn-sm"
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    {/* Total & Checkout */}
                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <h4 className="text-success">
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
