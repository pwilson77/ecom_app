import React from "react";

export default function ProductMainContent(props) {
  return (
    <div className="main-content-wrapper d-flex clearfix">
      <div className="mobile-nav">
        <div className="amado-navbar-brand">
          <a href="index.html">
            <img src="img/core-img/logo.png" alt="" />
          </a>
        </div>
        <div className="amado-navbar-toggler">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <header className="header-area clearfix">
        <div className="nav-close">
          <i className="fa fa-close" aria-hidden="true"></i>
        </div>
        <div className="logo">
          <a href="index.html">
            <img src="img/core-img/logo.png" alt="" />
          </a>
        </div>
        <nav className="amado-nav">
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="shop.html">Shop</a>
            </li>
            <li className="active">
              <a href="product-details.html">Product</a>
            </li>
            <li>
              <a href="cart.html">Cart</a>
            </li>
            <li>
              <a href="checkout.html">Checkout</a>
            </li>
          </ul>
        </nav>
        <div className="amado-btn-group mt-30 mb-100">
          <a href="#" className="btn amado-btn mb-15">
            %Discount%
          </a>
          <a href="#" className="btn amado-btn active">
            New this week
          </a>
        </div>
        <div className="cart-fav-search mb-100">
          <a href="cart.html" className="cart-nav">
            <img src="img/core-img/cart.png" alt="" /> Cart <span>(0)</span>
          </a>
          <a href="#" className="fav-nav">
            <img src="img/core-img/favorites.png" alt="" /> Favourite
          </a>
          <a href="#" className="search-nav">
            <img src="img/core-img/search.png" alt="" /> Search
          </a>
        </div>
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
      <div className="single-product-area section-padding-100 clearfix">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mt-50">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Furniture</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Chairs</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    white modern chair
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-lg-7">
              <div className="single_product_thumb">
                <div
                  id="product_details_slider"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      className="active"
                      data-target="#product_details_slider"
                      data-slide-to="0"
                      style="background-image: url(img/product-img/pro-big-1.jpg);"
                    ></li>
                    <li
                      data-target="#product_details_slider"
                      data-slide-to="1"
                      style="background-image: url(img/product-img/pro-big-2.jpg);"
                    ></li>
                    <li
                      data-target="#product_details_slider"
                      data-slide-to="2"
                      style="background-image: url(img/product-img/pro-big-3.jpg);"
                    ></li>
                    <li
                      data-target="#product_details_slider"
                      data-slide-to="3"
                      style="background-image: url(img/product-img/pro-big-4.jpg);"
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <a
                        className="gallery_img"
                        href="img/product-img/pro-big-1.jpg"
                      >
                        <img
                          className="d-block w-100"
                          src="img/product-img/pro-big-1.jpg"
                          alt="First slide"
                        />
                      </a>
                    </div>
                    <div className="carousel-item">
                      <a
                        className="gallery_img"
                        href="img/product-img/pro-big-2.jpg"
                      >
                        <img
                          className="d-block w-100"
                          src="img/product-img/pro-big-2.jpg"
                          alt="Second slide"
                        />
                      </a>
                    </div>
                    <div className="carousel-item">
                      <a
                        className="gallery_img"
                        href="img/product-img/pro-big-3.jpg"
                      >
                        <img
                          className="d-block w-100"
                          src="img/product-img/pro-big-3.jpg"
                          alt="Third slide"
                        />
                      </a>
                    </div>
                    <div className="carousel-item">
                      <a
                        className="gallery_img"
                        href="img/product-img/pro-big-4.jpg"
                      >
                        <img
                          className="d-block w-100"
                          src="img/product-img/pro-big-4.jpg"
                          alt="Fourth slide"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5">
              <div className="single_product_desc">
                <div className="product-meta-data">
                  <div className="line"></div>
                  <p className="product-price">$180</p>
                  <a href="product-details.html">
                    <h6>White Modern Chair</h6>
                  </a>
                  <div className="ratings-review mb-15 d-flex align-items-center justify-content-between">
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="review">
                      <a href="#">Write A Review</a>
                    </div>
                  </div>
                  <p className="avaibility">
                    <i className="fa fa-circle"></i> In Stock
                  </p>
                </div>

                <div className="short_overview my-5">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid quae eveniet culpa officia quidem mollitia impedit
                    iste asperiores nisi reprehenderit consequatur, autem,
                    nostrum pariatur enim?
                  </p>
                </div>

                <form className="cart clearfix" method="post">
                  <div className="cart-btn d-flex mb-50">
                    <p>Qty</p>
                    <div className="quantity">
                      <span
                        className="qty-minus"
                        onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"
                      >
                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                      </span>
                      <input
                        type="number"
                        className="qty-text"
                        id="qty"
                        step="1"
                        min="1"
                        max="300"
                        name="quantity"
                        value="1"
                      />
                      <span
                        className="qty-plus"
                        onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"
                      >
                        <i className="fa fa-caret-up" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    name="addtocart"
                    value="5"
                    className="btn amado-btn"
                  >
                    Add to cart
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
