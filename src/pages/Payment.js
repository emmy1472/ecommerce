import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PaystackButton } from 'react-paystack';

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { shippingDetails, cart } = location.state || {};

    if (!shippingDetails || !cart) {
        navigate('/checkout');
        return null;
    }

    const calculateTotal = () => {
        return cart.reduce((sum, item) => sum + Number(item.price || 0), 0);
    };

    const totalAmount = calculateTotal(); // Total amount in base currency
    const publicKey = 'your-paystack-public-key'; // Replace with your Paystack public key
    const email = shippingDetails.email; // Email collected during checkout

    const handleSuccess = (response) => {
        console.log(response); // Log the response for debugging
        alert('Payment successful!');
        navigate('/success'); // Redirect to success page
    };

    const handleClose = () => {
        alert('Payment process was canceled.');
    };

    const componentProps = {
        email,
        amount: totalAmount * 100, // Paystack requires the amount in kobo (or subunits of currency)
        publicKey,
        text: `Pay ₦${totalAmount.toLocaleString()}`,
        onSuccess: handleSuccess,
        onClose: handleClose,
    };

    return (
        <div className="container my-5"><br></br><br></br>
            <h1>Payment</h1>
            <div className="row">
                <div className="col-md-6">
                    <h4>Order Summary</h4>
                    <ul className="list-group">
                        {cart.map((item, index) => (
                            <li
                                className="list-group-item d-flex justify-content-between align-items-center"
                                key={index}
                            >
                                <span>{item.name}</span>
                                <span>
                                    ₦
                                    {Number(item.price || 0).toLocaleString('en-NG', {
                                        minimumFractionDigits: 2,
                                    })}
                                </span>
                            </li>
                        ))}
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <strong>Total</strong>
                            <strong>
                                ₦
                                {totalAmount.toLocaleString('en-NG', {
                                    minimumFractionDigits: 2,
                                })}
                            </strong>
                        </li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h4>Payment Details</h4>
                    <PaystackButton className="btn btn-primary w-100" {...componentProps} />
                </div>
            </div>
        </div>
    );
};

export default Payment;
