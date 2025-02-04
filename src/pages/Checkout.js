import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Checkout.css'

const Checkout = () => {
    const { cart } = useContext(CartContext);
    const [shippingDetails, setShippingDetails] = useState({
        fullName: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
    });
    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setShippingDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/payment', { state: { shippingDetails, cart } });
    };

    // Calculate total
    const calculateTotal = () => {
        return cart.reduce((sum, item) => sum + Number(item.price || 0), 0).toLocaleString('en-US', {
            minimumFractionDigits: 2,
        });
    };

    return (
        <div className="container my-5"><br></br><br></br>
            <h1 className="text-center mb-4">Checkout</h1>
            <div className="row">
                {/* Shipping Form */}
                <div className="col-md-6">
                    <h4 className="mb-4">Shipping Details</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="fullName"
                                value={shippingDetails.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                name="address"
                                value={shippingDetails.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">City</label>
                            <input
                                type="text"
                                className="form-control"
                                name="city"
                                value={shippingDetails.city}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Postal Code</label>
                            <input
                                type="text"
                                className="form-control"
                                name="postalCode"
                                value={shippingDetails.postalCode}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Country</label>
                            <input
                                type="text"
                                className="form-control"
                                name="country"
                                value={shippingDetails.country}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mt-3">
                            Proceed to Payment
                        </button>
                    </form>
                </div>

                {/* Order Summary */}
                <div className="col-md-6">
                    <h4 className="mb-4">Order Summary</h4>
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <ul className="list-group">
                            {cart.map((item, index) => (
                                <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                    <span>{item.name}</span>
                                    <span>
                                        ₦
                                        {Number(item.price || 0).toLocaleString('en-US', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}
                                    </span>
                                </li>
                            ))}
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <strong>Total</strong>
                                <strong>₦{calculateTotal()}</strong>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Checkout;
