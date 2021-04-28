import React, { useEffect, useState } from "react";
import HomePageSidebar from "../homepage2/HomePageSidebar";
import { list } from "cart-localstorage";
import { Link } from "react-router-dom";

export default function CartMain(props) {
  const [total, setTotal] = useState(0);
  const [checkCal, setCheckCal] = useState(false);
  const calculateCart = () => {
    let tot = list().reduce((x, y) => x + y.price * y.quantity, 0);
    setTotal(tot);
    setCheckCal(true);
  };

  useEffect(() => {
    if (!checkCal) {
      calculateCart();
    }
  });

  return (
    <div className="main-content-wrapper d-flex clearfix">
      <div className="mobile-nav">
        <div className="amado-navbar-brand">
          <a href="index.html">
            <img src="assets/img/core-img/logo.png" alt="" />
          </a>
        </div>
        <div className="amado-navbar-toggler">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <HomePageSidebar />
      <div className="cart-table-area section-padding-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="cart-title mt-50">
                <h2>Shopping Cart</h2>
              </div>

              <div className="cart-table clearfix">
                <table className="table table-responsive">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list().map((item) => (
                      <tr>
                        <td className="cart_product_img">
                          <Link to="/">
                            <img src={item.image} alt="Product" />
                          </Link>
                        </td>
                        <td className="cart_product_desc">
                          <h5>{item.name}</h5>
                        </td>
                        <td className="price">
                          <span>{`$${item.price}`}</span>
                        </td>
                        <td className="qty">
                          <div className="qty-btn d-flex">
                            <p>{item.quantity}</p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="cart-summary">
                <h5>Cart Total</h5>
                <ul className="summary-table">
                  <li>
                    <span>subtotal:</span> <span>${total}</span>
                  </li>
                  <li>
                    <span>delivery:</span> <span>Free</span>
                  </li>
                  <li>
                    <span>total:</span> <span>${total}</span>
                  </li>
                </ul>
                <div className="cart-btn mt-100">
                  <a href="cart.html" className="btn amado-btn w-100">
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
