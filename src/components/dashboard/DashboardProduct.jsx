import React from "react";
import Product from "./Product";
import Sidebar from "./Sidebar";

export default function DashboardProduct(props) {
    return(
        <div className="wrapper">
                <Sidebar />
                <Product />
            </div>
    )
}