import React from 'react';

const Success = () => {
    return (
        <div className="container my-5 text-center">
            <h1>Payment Successful!</h1>
            <p>Thank you for your purchase. Your order is being processed.</p>
            <a href="/" className="btn btn-primary">
                Continue Shopping
            </a>
        </div>
    );
};

export default Success;
