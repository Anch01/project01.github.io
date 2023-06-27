import React from "react";
import { Link } from "react-router-dom";
import { dataArray } from "./Jsondata";
import "./Home.css";

const Home = () => {
  return (
    <div className="card-container">
      <div>
        <span>Furns</span>
      </div>

      <div className="menu">
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Home furniture</h4>
        <h4>Office Furniture</h4>
        <h4>Hospital furniture</h4>
        <h4>Contact</h4>
      </div>

      <div className="featured-product">
        <h3>New Products</h3>
        <h2>Flexible Chair</h2>
        <img src="https://www.shutterstock.com/image-photo/side-view-new-soft-enjoyable-260nw-1126630127.jpg" alt="Flexible Chair" />
        <p>Description of the flexible chair</p>
        <button>Shop Now</button>
      </div>

      <div className="product-info">
        <center>
          <h3>Our Products</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
          <div>
            <p>eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div>
            <ul>
              <li>New Arrival</li>
              <li>Featured</li>
              <li>On sale</li>
              <li>Trending</li>
            </ul>
          </div>
        </center>
      </div>

      <div className="card-wrapper">
        {dataArray.map((product, index) => (
          <div className="card" key={product.id}>
            <Link to={`/details/${index}`}>
              <img src={product.image} alt={product.name} />
              <br />
              <p>{product.name}</p>
              <br />
            </Link>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
