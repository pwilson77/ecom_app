import React, { useState } from "react";
import HomePageSidebar from "../homepage2/HomePageSidebar";

export default function LoginMain(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
              <div className="checkout_details_area mt-50 clearfix">
                <div className="cart-title">
                  <h2>Login</h2>
                </div>

                <form action="#" method="post">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="first_name"
                        value=""
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="last_name"
                        value=""
                        placeholder="Password"
                        required
                      />
                    </div>
                    <div className="cart-btn mt-10">
                      <a href="#" className="btn amado-btn w-100">
                        Login
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 col-lg-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
