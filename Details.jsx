import React, { useState } from "react";
import "./Details.css";
import { dataArray } from "./Jsondata";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { FaHeart, FaBalanceScale } from "react-icons/fa";

const Details = () => {
  const { id } = useParams();
  const product = dataArray[id];
  const [count, setCount] = useState(0);
  const [whishlist, setWishlist] = useState(true);
  const [compare, setCompare] = useState(true);
  const [activeSection, setActiveSection] = useState("description");

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleAddToCart = () => {
    alert("Item is added to cart");
  };

  const handleAddToWishlist = () => {
    setWishlist(!whishlist);
  };

  const handleAddToCompare = () => {
    setCompare(!compare);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="details-container">
      <div className="details-content">
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Home furniture</h4>
        <h4>Office Furniture</h4>
        <h4>Hospital furniture</h4>
        <h4>Contact</h4>
      </div>
      <div className="product-details">
        <center>
          <h2>{product.name}</h2>
          <h3>Home/Product/{product.name}</h3>
        </center>
      </div>
      <br />
      <div className="details">
        <div>
          <img
            src="https://images.unsplash.com/photo-1491926626787-62db157af940?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt={product.name}
          />
        </div>
        <div className="details-item">
          <h4>Availability: 9 in stock</h4>
          <h3>{product.name}</h3>
          <h3>{product.price}</h3>
          <p>{product.para}</p>
          <br />
          <label>Color</label>
          <select>
            <option value="gray">gray</option>
            <option value="green">green</option>
            <option value="Chocklate">chocolate</option>
            <option value="blue">blue</option>
          </select>
          <label>Material</label>
          <select>
            <option value="Wood">wood</option>
            <option value="Metal">metal</option>
            <option value="Leather">leather</option>
          </select>
          <label>Size</label>
          <select>
            <option value="Double">Double</option>
            <option value="Semi Double">Semi double</option>
            <option value="single">single</option>
          </select>
          <div className="d-flex align-items-center">
            <Button variant="primary" size="md" onClick={handleIncrement}>
              +
            </Button>
            <h3 className="mx-3">{count}</h3>
            <Button variant="danger" size="md" onClick={handleDecrement}>
              -
            </Button>{" "}
            <Button variant="warning" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            {whishlist ? (
              <Button variant="warning" onClick={handleAddToWishlist}>
                <FaHeart /> Add to Wishlist
              </Button>
            ) : (
              <Button variant="warning" onClick={handleAddToWishlist}>
                <FaHeart /> Remove from wishlist
              </Button>
            )}
            {compare ? (
              <Button variant="info" onClick={handleAddToCompare}>
                <FaBalanceScale /> Add to Compare
              </Button>
            ) : (
              <Button variant="info" onClick={handleAddToCompare}>
                <FaBalanceScale /> Remove from compare
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="details-section">
        <div className="details-section-heading">
          <h3
            className={activeSection === "description" ? "active" : ""}
            onClick={() => handleSectionChange("description")}
          >
            Description
          </h3>
          <h3
            className={activeSection === "additional-info" ? "active" : ""}
            onClick={() => handleSectionChange("additional-info")}
          >
            Additional Info
          </h3>
          <h3
            className={activeSection === "reviews" ? "active" : ""}
            onClick={() => handleSectionChange("reviews")}
          >
            Reviews
          </h3>
        </div>
        {activeSection === "description" && (
          <div className="description-box">
            <p>{product.description}</p>
          </div>
        )}
        {activeSection === "additional-info" && (
          <div className="additional-info">
            <p>
              Color: {product.color}, Material: {product.material}
            </p>
          </div>
        )}
        {activeSection === "reviews" && (
          <div className="reviews">
            <p>Customer reviews will be displayed here.</p>
          </div>
        )}
      </div>
      <br />
      <br />
      <div className="related-topics">
        <h3>Related Products</h3>
        <div className="product-box">
          {dataArray.map((ele) => (
            <div className="product-item" key={ele.id}>
              <img src={ele.image} alt={ele.name} />
              <h4>{ele.name}</h4>
              <h5>{ele.price}</h5>
            </div>
          ))}
        </div>
      </div>
      <footer>
        <div class="footer-container">
          <h3>About us</h3>
          <p>
            Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm
            tempor incididunt ut labor et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud.
          </p>
        </div>
        <div>
          <h3>Information</h3>
          <ul>
            <li>About Us</li>
            <li>Manufacturers</li>
            <li>Tracking Order</li>
            <li>Privacy & Policy</li>
            <li>Terms and Condition</li>
          </ul>
        </div>
        <div>
          <h3>My Account</h3>
          <ul>
            <li>Login</li>
            <li>My Cart</li>
            <li>Wishlist</li>
            <li>Compare</li>
            <li>My Account</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Details;
