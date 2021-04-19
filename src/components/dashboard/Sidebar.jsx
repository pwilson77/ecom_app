import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  return (
    <React.Fragment>
      <div
        class="sidebar"
        data-color="purple"
        data-image="assets/img/sidebar-5.jpg"
      >
        <div class="sidebar-wrapper">
          <div class="logo">
            <a href="http://www.creative-tim.com" class="simple-text">
              Creative Tim
            </a>
          </div>

          <ul class="nav">
            <li class="active">
              <Link to="/dashboard">
                <i class="pe-7s-graph"></i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li>
              <Link to="/dashboard_product">
                <i class="pe-7s-user"></i>
                <p>Products and Categories</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i class="pe-7s-note2"></i>
                <p>Sales</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
