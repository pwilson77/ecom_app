import axios from "axios";
import React, { useState } from "react";
import Navbar from "./Navbar";

export default function Product(props) {
  const server_url = "https://eos-adinkrah-enterprise-api.herokuapp.com/";
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState();
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  const addProduct = (e) => {
    e.preventDefault();
    const data = { productName, price, description, stock, category };
    axios
      .post(`${server_url}product/create`, data)
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e.data));
  };

  const addCategory = (e) => {
    e.preventDefault();
    const data = { categoryName, description: categoryDescription };
    axios
      .post(`${server_url}category/create`, data)
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e.data));
  };

  return (
    <div className="main-panel">
      <Navbar />
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="header">
                  <h4 className="title">Add Product</h4>
                </div>
                <div className="content">
                  <form onSubmit={addProduct}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Product Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Company"
                            value="Mike"
                            name="productName"
                            onChange={(e) => setProductName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Product Price</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Price"
                            name="price"
                            onChange={(e) => setPrice(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Description</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Product Description"
                            name="description"
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Stock</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Product Stock"
                            name="stock"
                            onChange={(e) => setStock(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <select
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-info btn-fill pull-right"
                    >
                      Add Product
                    </button>
                    <div className="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4 card">
              <div class="header">
                <h4 class="title">Add Category</h4>
              </div>
              <div className="content">
                <form onSubmit={addCategory}>
                  <div className="row">
                    <div className="form-group col-md-12">
                      <label>Category Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Product Description"
                        name="categoryName"
                        onChange={(e) => setCategoryName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12">
                      <label>Category Description</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Product Description"
                        name="categoryDescription"
                        onChange={(e) => setCategoryDescription(e.target.value)}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-info btn-fill pull-right"
                  >
                    Add Category
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container-fluid">
          <nav className="pull-left">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; <script>document.write(new Date().getFullYear())</script>{" "}
            <a href="http://www.creative-tim.com">Creative Tim</a>, made with
            love for a better web
          </p>
        </div>
      </footer>
    </div>
  );
}
