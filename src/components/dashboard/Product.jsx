import React from "react";
import Navbar from "./Navbar";

export default function Product(props) {
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
                  <form>
                    {/* <div className="row">
                                    <div className="col-md-5">
                                        <div className="form-group">
                                            <label>Company (disabled)</label>
                                            <input type="text" className="form-control" disabled placeholder="Company" value="Creative Code Inc." />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label>Username</label>
                                            <input type="text" className="form-control" placeholder="Username" value="michael23" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input type="email" className="form-control" placeholder="Email"/>
                                        </div>
                                    </div>
                                </div> */}

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
                    {/* 
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>About Me</label>
                                            <textarea rows="5" className="form-control" placeholder="Here can be your description" value="Mike">Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</textarea>
                                        </div>
                                    </div>
                                </div> */}

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
                <div className="row">
                  <div className="form-group col-md-12">
                    <label>Category Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Product Description"
                      name="categoryName"
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
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-info btn-fill pull-right"
                >
                  Add Category
                </button>
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
