import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero-section text-center text-white py-5">
      <div className="container">
        <h1 className="hero-title">Welcome to E-Shop</h1>
        <p className="hero-subtitle lead">
          Discover the best products at unbeatable prices.
        </p>
        <Link to="/products" className="btn btn-primary btn-lg shadow-lg">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
