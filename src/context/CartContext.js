import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    // Function to remove item from cart
    const removeFromCart = (id) => {
        const itemIndex = cart.findIndex((item) => item.id === id);
        
        if (itemIndex !== -1) {
            const newCart = [...cart]; // Copy the cart
            newCart.splice(itemIndex, 1); // Remove only one instance
            setCart(newCart); // Update state
        };
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
