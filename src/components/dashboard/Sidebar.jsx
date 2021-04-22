import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  return (
    <React.Fragment>
      <div
        className="sidebar"
        data-color="purple"
        data-image="assets/img/sidebar-5.jpg"
      >
        <div className="sidebar-wrapper">
          <div className="logo">
            <a href="http://www.creative-tim.com" className="simple-text">
              Creative Tim
            </a>
          </div>

          <ul className="nav">
            <li className="active">
              <Link to="/dashboard">
                <i className="pe-7s-graph"></i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li>
              <Link to="/dashboard_product">
                <i className="pe-7s-user"></i>
                <p>Products and Categories</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="pe-7s-note2"></i>
                <p>Sales</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}