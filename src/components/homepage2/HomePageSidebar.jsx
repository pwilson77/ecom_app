import React from "react";
import { Link } from "react-router-dom";

export default function HomePageSidebar(props) {
  const server_url = "http://localhost:3000/";

  return (
    <header className="header-area clearfix">
      <div className="nav-close">
        <i className="fa fa-close" aria-hidden="true"></i>
      </div>
      <div className="logo">
        <a href="index.html">
          <img src={`${server_url}assets/img/core-img/logo.png`} alt="" />
        </a>
      </div>
      <nav className="amado-nav">
        <ul>
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/product">Product</Link>
          </li> */}
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
      {/* <div className="amado-btn-group mt-30 mb-100">
        <a href="#" className="btn amado-btn mb-15">
          %Discount%
        </a>
        <a href="#" className="btn amado-btn active">
          New this week
        </a>
      </div>
      <div className="cart-fav-search mb-100">
        <a href="cart.html" className="cart-nav">
          <img src="assets/img/core-img/cart.png" alt="" /> Cart{" "}
          <span>(0)</span>
        </a>
        <a href="#" className="fav-nav">
          <img src="assets/img/core-img/favorites.png" alt="" /> Favourite
        </a>
        <a href="#" className="search-nav">
          <img src="assets/img/core-img/search.png" alt="" /> Search
        </a>
      </div> */}
      <div className="social-info d-flex justify-content-between">
        <a href="#">
          <i className="fa fa-pinterest" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
      </div>
    </header>
  );
}
