import React, { useEffect } from "react";
import $ from "jquery";
import Masonry from "react-masonry-css";
import HomePageSidebar from "./HomePageSidebar";

export default function MainContent(props) {
  useEffect(() => {
    masonryFunc();
  });

  const masonryFunc = () => {
    var $window = $(window);

    var proCata = $(".amado-pro-catagory");
    var singleProCata = ".single-products-catagory";

    console.log($.fn.imagesLoaded);

    if ($.fn.imagesLoaded) {
      proCata.imagesLoaded(function () {
        proCata.isotope({
          itemSelector: singleProCata,
          percentPosition: true,
          masonry: {
            columnWidth: singleProCata,
          },
        });
      });
    }
    console.log("first two");
  };
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

      <HomePageSidebar />
      <div className="products-catagories-area clearfix">
        <div className="amado-pro-catagory clearfix d-flex wrap">
          {/* <Masonry>
            
          </Masonry> */}
          <div className="single-products-catagory clearfix">
            <a href="shop.html">
              <img src="assets/img/bg-img/1.jpg" alt="" />
              <div className="hover-content">
                <div className="line"></div>
                <p>From $180</p>
                <h4>Modern Chair</h4>
              </div>
            </a>
          </div>

          <div className="single-products-catagory clearfix">
            <a href="shop.html">
              <img src="assets/img/bg-img/2.jpg" alt="" />
              <div className="hover-content">
                <div className="line"></div>
                <p>From $180</p>
                <h4>Minimalistic Plant Pot</h4>
              </div>
            </a>
          </div>

          <div className="single-products-catagory clearfix">
            <a href="shop.html">
              <img src="assets/img/bg-img/3.jpg" alt="" />
              <div className="hover-content">
                <div className="line"></div>
                <p>From $180</p>
                <h4>Modern Chair</h4>
              </div>
            </a>
          </div>

          <div className="single-products-catagory clearfix">
            <a href="shop.html">
              <img src="assets/img/bg-img/4.jpg" alt="" />
              <div className="hover-content">
                <div className="line"></div>
                <p>From $180</p>
                <h4>Night Stand</h4>
              </div>
            </a>
          </div>

          <div className="single-products-catagory clearfix">
            <a href="shop.html">
              <img src="assets/img/bg-img/5.jpg" alt="" />
              <div className="hover-content">
                <div className="line"></div>
                <p>From $18</p>
                <h4>Plant Pot</h4>
              </div>
            </a>
          </div>

          <div className="single-products-catagory clearfix">
            <a href="shop.html">
              <img src="assets/img/bg-img/6.jpg" alt="" />
              <div className="hover-content">
                <div className="line"></div>
                <p>From $320</p>
                <h4>Small Table</h4>
              </div>
            </a>
          </div>

          <div className="single-products-catagory clearfix">
            <a href="shop.html">
              <img src="assets/img/bg-img/7.jpg" alt="" />
              <div className="hover-content">
                <div className="line"></div>
                <p>From $318</p>
                <h4>Metallic Chair</h4>
              </div>
            </a>
          </div>

          <div className="single-products-catagory clearfix">
            <a href="shop.html">
              <img src="assets/img/bg-img/8.jpg" alt="" />
              <div className="hover-content">
                <div className="line"></div>
                <p>From $318</p>
                <h4>Modern Rocking Chair</h4>
              </div>
            </a>
          </div>

          <div className="single-products-catagory clearfix">
            <a href="shop.html">
              <img src="img/bg-img/9.jpg" alt="" />
              <div className="hover-content">
                <div className="line"></div>
                <p>From $318</p>
                <h4>Home Deco</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
