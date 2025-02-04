import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment'; 
import Success from './pages/Success';




const App = () => {
    return (
        <Router>
          <div className="d-flex flex-column min-vh-100">
            <Navbar />
              <main className="flex-grow-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/success" element={<Success />} />
                    
                    <Route path="/register" element={<Registration />} />
                </Routes>
                </main>
            
              <Footer />
          </div>
        </Router>
    );
};

export default App;
