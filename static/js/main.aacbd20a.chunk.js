(this["webpackJsonpecom-app"]=this["webpackJsonpecom-app"]||[]).push([[0],{41:function(e,c,t){},42:function(e,c,t){},68:function(e,c,t){"use strict";t.r(c);var s=t(12),a=t(1),r=t.n(a),i=t(15),n=t.n(i),l=t(3),j=(t(41),t(42),t(4)),d=t(0);function b(e){return Object(d.jsx)("nav",{className:"navbar navbar-default navbar-fixed",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsxs)("div",{className:"navbar-header",children:[Object(d.jsxs)("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":"#navigation-example-2",children:[Object(d.jsx)("span",{className:"sr-only",children:"Toggle navigation"}),Object(d.jsx)("span",{className:"icon-bar"}),Object(d.jsx)("span",{className:"icon-bar"}),Object(d.jsx)("span",{className:"icon-bar"})]}),Object(d.jsx)("a",{className:"navbar-brand",href:"#",children:"User"})]}),Object(d.jsx)("div",{className:"collapse navbar-collapse",children:Object(d.jsxs)("ul",{className:"nav navbar-nav navbar-right",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"",children:Object(d.jsx)("p",{children:"Account"})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("p",{children:"Log out"})})}),Object(d.jsx)("li",{className:"separator hidden-lg hidden-md"})]})})]})})}function o(e){return Object(d.jsx)(r.a.Fragment,{children:Object(d.jsx)("div",{className:"sidebar","data-color":"purple","data-image":"assets/img/sidebar-5.jpg",children:Object(d.jsxs)("div",{className:"sidebar-wrapper",children:[Object(d.jsx)("div",{className:"logo",children:Object(d.jsx)("a",{href:"http://www.creative-tim.com",className:"simple-text",children:"EOS User"})}),Object(d.jsxs)("ul",{className:"nav",children:[Object(d.jsx)("li",{className:"active",children:Object(d.jsxs)(l.b,{to:"/dashboard",children:[Object(d.jsx)("i",{className:"pe-7s-user"}),Object(d.jsx)("p",{children:"Dashboard"})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)(l.b,{to:"/dashboard_sales",children:[Object(d.jsx)("i",{className:"pe-7s-note2"}),Object(d.jsx)("p",{children:"Purchases"})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)(l.b,{to:"/",children:[Object(d.jsx)("i",{className:"pe-7s-note2"}),Object(d.jsx)("p",{children:"Back To Home"})]})})]})]})})})}var h=t(2);function O(e){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsx)("nav",{className:"pull-left",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"/cart",children:"Cart"})})]})})})})}function x(e){var c=Object(a.useState)(""),t=Object(h.a)(c,2),s=t[0],r=t[1],i=Object(a.useState)(""),n=Object(h.a)(i,2),l=n[0],j=n[1],o=Object(a.useState)(""),x=Object(h.a)(o,2),m=x[0],u=x[1],p=Object(a.useState)(""),v=Object(h.a)(p,2),N=v[0],f=v[1],g=Object(a.useState)(""),y=Object(h.a)(g,2),w=(y[0],y[1],Object(a.useState)("")),S=Object(h.a)(w,2),C=S[0],k=S[1],_=Object(a.useState)(""),I=Object(h.a)(_,2),F=(I[0],I[1],Object(a.useState)(!1)),P=Object(h.a)(F,2),q=P[0],D=P[1];return Object(a.useEffect)((function(){q||(!function(){var e=JSON.parse(localStorage.getItem("user_details"));r(e.firstName),j(e.lastName),u(e.setOtherNames),f(e.email),k(e.contactNo)}(),D(!0))})),Object(d.jsxs)("div",{className:"main-panel",children:[Object(d.jsx)(b,{}),Object(d.jsx)("div",{className:"content",children:Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-8",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"header",children:Object(d.jsx)("h4",{className:"title",children:"Edit User Details"})}),Object(d.jsx)("div",{className:"content",children:Object(d.jsxs)("form",{children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"First Name"}),Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"First Name",name:"productName",defaultValue:s,onChange:function(e){return r(e.target.value)}})]})}),Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Last Name"}),Object(d.jsx)("input",{type:"number",className:"form-control",placeholder:"Last Name",name:"price",defaultValue:l,onChange:function(e){return j(e.target.value)}})]})})]}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-md-12",children:Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Other Names"}),Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"Other Names",name:"description",defaultValue:m,onChange:function(e){return u(e.target.value)}})]})})}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Email"}),Object(d.jsx)("input",{type:"email",className:"form-control",placeholder:"Product Stock",name:"stock",defaultValue:N,onChange:function(e){return f(e.target.value)}})]})}),Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Contact Number"}),Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"Product Stock",name:"stock",defaultValue:C,onChange:function(e){return k(e.target.value)}})]})})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-info btn-fill pull-right",children:"Edit Details"}),Object(d.jsx)("div",{className:"clearfix"})]})})]})}),Object(d.jsx)("div",{className:"col-md-4 card"})]})})}),Object(d.jsx)(O,{})]})}function m(e){return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)(o,{}),Object(d.jsx)(x,{})]})}function u(e){return Object(d.jsx)(r.a.Fragment,{children:Object(d.jsx)("footer",{className:"footer_area clearfix",style:{marginTop:"0px"},children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row align-items-center",children:[Object(d.jsx)("div",{className:"col-12 col-lg-4",children:Object(d.jsx)("div",{className:"single_widget_area",children:Object(d.jsx)("div",{className:"footer-logo mr-50",children:Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("img",{src:"".concat("https://pwilson77.github.io/ecom_app/","assets/img/logo-transparent.png"),alt:""})})})})}),Object(d.jsx)("div",{className:"col-12 col-lg-8",children:Object(d.jsx)("div",{className:"single_widget_area",children:Object(d.jsx)("div",{className:"footer_menu",children:Object(d.jsx)("nav",{className:"navbar navbar-expand-lg justify-content-end",children:Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"footerNavContent",children:Object(d.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsx)(l.b,{className:"nav-link",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{className:"nav-link",to:"/cart",children:"Cart"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{className:"nav-link",to:"/login",children:"Product"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{className:"nav-link",to:"/register",children:"Register"})})]})})})})})})]})})})})}var p=t(16),v=t.n(p);function N(e){var c=Object(a.useState)(!1),t=Object(h.a)(c,2),s=t[0],i=t[1],n=Object(a.useState)(!1),j=Object(h.a)(n,2),b=j[0],o=j[1];return Object(a.useEffect)((function(){if(!s){var e=localStorage.getItem("loggedIn");console.log("true"===e),"true"===e&&o(!0),i(!0)}})),Object(d.jsxs)("header",{className:"header-area clearfix",children:[Object(d.jsx)("div",{className:"nav-close",children:Object(d.jsx)("i",{className:"fa fa-close","aria-hidden":"true"})}),Object(d.jsx)("div",{className:"logo",children:Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("img",{src:"".concat("https://pwilson77.github.io/ecom_app/","assets/img/logo-transparent.png"),alt:""})})}),Object(d.jsx)("nav",{className:"amado-nav",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{className:"active",children:Object(d.jsx)(l.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"/cart",children:"Cart"})}),b?Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"/dashboard",children:"Dashboard"})}):Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"/login",children:"Login"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"/register",children:"Register"})})]})]})}),Object(d.jsxs)("div",{className:"social-info d-flex justify-content-between",children:[Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("i",{className:"fa fa-pinterest","aria-hidden":"true"})}),Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("i",{className:"fa fa-instagram","aria-hidden":"true"})}),Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("i",{className:"fa fa-facebook","aria-hidden":"true"})}),Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("i",{className:"fa fa-twitter","aria-hidden":"true"})})]})]})}var f=t(13),g=t.n(f);function y(e){var c=Object(a.useState)([]),t=Object(h.a)(c,2),s=t[0],r=t[1],i=Object(a.useState)(!1),n=Object(h.a)(i,2),j=n[0],b=n[1];Object(a.useEffect)((function(){j||(o(),b(!0))}));var o=function(){g.a.get("".concat("https://eos-adinkrah-enterprise-api.herokuapp.com/","product")).then((function(e){r(e.data.message),O()})).catch((function(e){return console.log(e)}))},O=function(){v()(window);var e=v()(".amado-pro-catagory"),c=".single-products-catagory";console.log(v.a.fn.imagesLoaded),v.a.fn.imagesLoaded&&e.imagesLoaded((function(){e.isotope({itemSelector:c,percentPosition:!0,masonry:{columnWidth:c}})})),console.log("first two")};return Object(d.jsxs)("div",{className:"main-content-wrapper d-flex clearfix",children:[Object(d.jsxs)("div",{className:"mobile-nav",children:[Object(d.jsx)("div",{className:"amado-navbar-brand",children:Object(d.jsx)("a",{href:"index.html",children:Object(d.jsx)("img",{src:"img/core-img/logo.png",alt:""})})}),Object(d.jsxs)("div",{className:"amado-navbar-toggler",children:[Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]})]}),Object(d.jsx)(N,{}),Object(d.jsx)("div",{className:"products-catagories-area clearfix",children:Object(d.jsx)("div",{className:"amado-pro-catagory clearfix d-flex wrap",children:s.map((function(e){return Object(d.jsx)("div",{className:"single-products-catagory clearfix",children:Object(d.jsxs)(l.b,{to:"/products/".concat(e.id),children:[Object(d.jsx)("img",{src:e.productImage,alt:""}),Object(d.jsxs)("div",{className:"hover-content",children:[Object(d.jsx)("div",{className:"line"}),Object(d.jsx)("p",{children:"From $".concat(e.price)}),Object(d.jsx)("h4",{children:e.productName})]})]})})}))})})]})}function w(e){return Object(d.jsx)("section",{className:"newsletter-area section-padding-100-0",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row align-items-center",children:[Object(d.jsx)("div",{className:"col-12 col-lg-6 col-xl-7",children:Object(d.jsxs)("div",{className:"newsletter-text mb-100",children:[Object(d.jsxs)("h2",{children:["Subscribe for a ",Object(d.jsx)("span",{children:"25% Discount"})]}),Object(d.jsx)("p",{children:"Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit amet mi vulputate consectetur. Donec auctor interdum purus, ac finibus massa bibendum nec."})]})}),Object(d.jsx)("div",{className:"col-12 col-lg-6 col-xl-5",children:Object(d.jsx)("div",{className:"newsletter-form mb-100",children:Object(d.jsxs)("form",{action:"#",method:"post",children:[Object(d.jsx)("input",{type:"email",name:"email",className:"nl-email",placeholder:"Your E-mail"}),Object(d.jsx)("input",{type:"submit",value:"Subscribe"})]})})})]})})})}function S(e){return Object(d.jsxs)("div",{className:"search-wrapper section-padding-100",children:[Object(d.jsx)("div",{className:"search-close",children:Object(d.jsx)("i",{className:"fa fa-close","aria-hidden":"true"})}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)("div",{className:"search-content",children:Object(d.jsxs)("form",{action:"#",method:"get",children:[Object(d.jsx)("input",{type:"search",name:"search",id:"search",placeholder:"Type your keyword..."}),Object(d.jsx)("button",{type:"submit",children:Object(d.jsx)("img",{src:"assets/img/core-img/search.png",alt:""})})]})})})})})]})}function C(e){return Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)(S,{}),Object(d.jsx)(y,{}),Object(d.jsx)(w,{}),Object(d.jsx)(u,{})]})}var k=t(23),_=t.n(k),I=t(34),F=t(14),P=t(35);function q(e){var c=Object(a.useState)(0),t=Object(h.a)(c,2),r=t[0],i=t[1],n=Object(a.useState)(!1),j=Object(h.a)(n,2),b=j[0],o=j[1],O=Object(a.useState)({}),x=Object(h.a)(O,2),m=x[0],u=x[1];Object(a.useEffect)((function(){b||function(){var e=Object(F.d)().reduce((function(e,c){return e+c.price*c.quantity}),0),c=JSON.parse(localStorage.getItem("user_details"));u(c),i(e),o(!0)}()}));var p=function(){var e=Object(I.a)(_.a.mark((function e(){var c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=JSON.parse(localStorage.getItem("user_details")),Object(F.d)().map((function(e){var t={userID:c.id,productID:e.id,quantity:e.quantity};g.a.post("".concat("https://eos-adinkrah-enterprise-api.herokuapp.com/","orders/create"),t).then((function(e){console.log(e.data),alert(e.data.message)})).catch((function(e){alert(e.data)}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v={email:m.email,amount:100*parseInt(r),currency:"GHS",metadata:{name:m.firstName,phone:m.lastName},publicKey:"pk_test_7e9aa74526402bc6c81165bb99449e296a1b157c",text:"Pay Now",onSuccess:function(){p(),alert("Thanks for doing business with us! Come back soon!!")},onClose:function(){return alert("Wait! You need this oil, don't go!!!!")}};return Object(d.jsxs)("div",{className:"main-content-wrapper d-flex clearfix",children:[Object(d.jsxs)("div",{className:"mobile-nav",children:[Object(d.jsx)("div",{className:"amado-navbar-brand",children:Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("img",{src:"assets/img/core-img/logo.png",alt:""})})}),Object(d.jsxs)("div",{className:"amado-navbar-toggler",children:[Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]})]}),Object(d.jsx)(N,{}),Object(d.jsx)("div",{className:"cart-table-area section-padding-100",children:Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-12 col-lg-8",children:[Object(d.jsx)("div",{className:"cart-title mt-50",children:Object(d.jsx)("h2",{children:"Shopping Cart"})}),Object(d.jsx)("div",{className:"cart-table clearfix",children:Object(d.jsxs)("table",{className:"table table-responsive",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{}),Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Price"}),Object(d.jsx)("th",{children:"Quantity"})]})}),Object(d.jsx)("tbody",{children:Object(F.d)().map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"cart_product_img",children:Object(d.jsx)(l.b,{to:"/",children:Object(d.jsx)("img",{src:e.image,alt:"Product"})})}),Object(d.jsx)("td",{className:"cart_product_desc",children:Object(d.jsx)("h5",{children:e.name})}),Object(d.jsx)("td",{className:"price",children:Object(d.jsx)("span",{children:"$".concat(e.price)})}),Object(d.jsx)("td",{className:"qty",children:Object(d.jsx)("div",{className:"qty-btn d-flex",children:Object(d.jsx)("p",{children:e.quantity})})})]})}))})]})})]}),Object(d.jsx)("div",{className:"col-12 col-lg-4",children:Object(d.jsxs)("div",{className:"cart-summary",children:[Object(d.jsx)("h5",{children:"Cart Total"}),Object(d.jsxs)("ul",{className:"summary-table",children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:"subtotal:"})," ",Object(d.jsxs)("span",{children:["$",r]})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:"delivery:"})," ",Object(d.jsx)("span",{children:"Free"})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:"total:"})," ",Object(d.jsxs)("span",{children:["$",r]})]})]}),Object(d.jsx)("div",{className:"cart-btn mt-100",children:Object(d.jsx)(P.a,Object(s.a)(Object(s.a)({},v),{},{className:"btn amado-btn w-100"}))})]})})]})})})]})}function D(e){return Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)(S,{}),Object(d.jsx)(q,{}),Object(d.jsx)(w,{}),Object(d.jsx)(u,{})]})}function T(e){var c=Object(a.useState)({}),t=Object(h.a)(c,2),s=t[0],r=t[1],i=Object(a.useState)(!1),n=Object(h.a)(i,2),j=n[0],b=n[1],o=Object(a.useState)(1),O=Object(h.a)(o,2),x=O[0],m=O[1];Object(a.useEffect)((function(){j||(u(),setTimeout(p,5e3),b(!0))}));var u=function(){g.a.get("".concat("https://eos-adinkrah-enterprise-api.herokuapp.com/","product/").concat(e.productId)).then((function(e){r(e.data.message),console.log("Fetched data")})).catch((function(e){return console.log(e.data)}))},p=function(){var e=v()(".amado-pro-catagory"),c=".single-products-catagory";console.log("test"),v.a.fn.imagesLoaded&&e.imagesLoaded((function(){e.isotope({itemSelector:c,percentPosition:!0,masonry:{columnWidth:c}})}))};return Object(d.jsxs)("div",{className:"main-content-wrapper d-flex clearfix",children:[Object(d.jsxs)("div",{className:"mobile-nav",children:[Object(d.jsx)("div",{className:"amado-navbar-brand",children:Object(d.jsx)("a",{href:"index.html",children:Object(d.jsx)("img",{src:"assets/img/core-img/logo.png",alt:""})})}),Object(d.jsxs)("div",{className:"amado-navbar-toggler",children:[Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]})]}),Object(d.jsx)(N,{}),Object(d.jsx)("div",{className:"single-product-area section-padding-100 clearfix",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)("nav",{"aria-label":"breadcrumb",children:Object(d.jsxs)("ol",{className:"breadcrumb mt-50",children:[Object(d.jsx)("li",{className:"breadcrumb-item",children:Object(d.jsx)(l.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"breadcrumb-item",children:Object(d.jsx)("a",{href:"#",children:s.productName})})]})})})}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-12 col-lg-7",children:Object(d.jsx)("div",{className:"single_product_thumb",children:Object(d.jsxs)("div",{id:"product_details_slider",className:"carousel slide","data-ride":"carousel",children:[Object(d.jsx)("ol",{className:"carousel-indicators"}),Object(d.jsx)("div",{className:"carousel-inner",children:Object(d.jsx)("div",{className:"carousel-item active carousel-con",children:Object(d.jsx)("a",{className:"gallery_img",href:"#",children:Object(d.jsx)("img",{className:"d-block w-100 carousel-img",src:s.productImage,alt:"First slide"})})})})]})})}),Object(d.jsx)("div",{className:"col-12 col-lg-5",children:Object(d.jsxs)("div",{className:"single_product_desc",children:[Object(d.jsxs)("div",{className:"product-meta-data",children:[Object(d.jsx)("div",{className:"line"}),Object(d.jsx)("p",{className:"product-price",children:"$".concat(s.price)}),Object(d.jsx)("a",{href:"product-details.html",children:Object(d.jsxs)("h6",{children:[s.productName,"/"]})}),Object(d.jsxs)("div",{className:"ratings-review mb-15 d-flex align-items-center justify-content-between",children:[Object(d.jsxs)("div",{className:"ratings",children:[Object(d.jsx)("i",{className:"fa fa-star","aria-hidden":"true"}),Object(d.jsx)("i",{className:"fa fa-star","aria-hidden":"true"}),Object(d.jsx)("i",{className:"fa fa-star","aria-hidden":"true"}),Object(d.jsx)("i",{className:"fa fa-star","aria-hidden":"true"}),Object(d.jsx)("i",{className:"fa fa-star","aria-hidden":"true"})]}),Object(d.jsx)("div",{className:"review",children:Object(d.jsx)("a",{href:"#",children:"Write A Review"})})]}),Object(d.jsxs)("p",{className:"avaibility",children:[Object(d.jsx)("i",{className:"fa fa-circle"})," In Stock"]})]}),Object(d.jsx)("div",{className:"short_overview my-5",children:Object(d.jsx)("p",{children:s.description})}),Object(d.jsxs)("form",{className:"cart clearfix",onSubmit:function(e){if(e.preventDefault(),Object(F.b)(s.id)){var c=Object(F.c)(s.id);Object(F.e)(s.id,"quantity",parseInt(c.quantity)+parseInt(x))}else Object(F.a)({id:s.id,name:s.productName,price:parseInt(s.price),image:s.productImage},parseInt(x))},children:[Object(d.jsx)("div",{className:"cart-btn d-flex mb-50",children:Object(d.jsx)("div",{className:"quantity",children:Object(d.jsxs)("p",{children:["Qty",Object(d.jsx)("input",{type:"number",className:"qty-text",id:"qty",step:"1",min:"1",max:"300",name:"quantity",onChange:function(e){return m(e.target.value)}})]})})}),Object(d.jsx)("button",{type:"submit",name:"addtocart",value:"5",className:"btn amado-btn",children:"Add to cart"})]})]})})]})]})})]})}function $(e){return Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)(S,{}),Object(d.jsx)(T,{productId:e.productId}),Object(d.jsx)(w,{}),Object(d.jsx)(u,{})]})}function E(e){return Object(d.jsx)(r.a.Fragment,{children:Object(d.jsxs)("div",{class:"main-panel",children:[Object(d.jsx)(b,{}),Object(d.jsx)("div",{class:"content",children:Object(d.jsx)("div",{class:"container-fluid",children:Object(d.jsxs)("div",{class:"row",children:[Object(d.jsx)("div",{class:"col-md-12",children:Object(d.jsxs)("div",{class:"card",children:[Object(d.jsxs)("div",{class:"header",children:[Object(d.jsx)("h4",{class:"title",children:"Striped Table with Hover"}),Object(d.jsx)("p",{class:"category",children:"Here is a subtitle for this table"})]}),Object(d.jsx)("div",{class:"content table-responsive table-full-width",children:Object(d.jsxs)("table",{class:"table table-hover table-striped",children:[Object(d.jsxs)("thead",{children:[Object(d.jsx)("th",{children:"ID"}),Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Salary"}),Object(d.jsx)("th",{children:"Country"}),Object(d.jsx)("th",{children:"City"})]}),Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"1"}),Object(d.jsx)("td",{children:"Dakota Rice"}),Object(d.jsx)("td",{children:"$36,738"}),Object(d.jsx)("td",{children:"Niger"}),Object(d.jsx)("td",{children:"Oud-Turnhout"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"2"}),Object(d.jsx)("td",{children:"Minerva Hooper"}),Object(d.jsx)("td",{children:"$23,789"}),Object(d.jsx)("td",{children:"Cura\xe7ao"}),Object(d.jsx)("td",{children:"Sinaai-Waas"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"3"}),Object(d.jsx)("td",{children:"Sage Rodriguez"}),Object(d.jsx)("td",{children:"$56,142"}),Object(d.jsx)("td",{children:"Netherlands"}),Object(d.jsx)("td",{children:"Baileux"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"4"}),Object(d.jsx)("td",{children:"Philip Chaney"}),Object(d.jsx)("td",{children:"$38,735"}),Object(d.jsx)("td",{children:"Korea, South"}),Object(d.jsx)("td",{children:"Overland Park"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"5"}),Object(d.jsx)("td",{children:"Doris Greene"}),Object(d.jsx)("td",{children:"$63,542"}),Object(d.jsx)("td",{children:"Malawi"}),Object(d.jsx)("td",{children:"Feldkirchen in K\xe4rnten"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"6"}),Object(d.jsx)("td",{children:"Mason Porter"}),Object(d.jsx)("td",{children:"$78,615"}),Object(d.jsx)("td",{children:"Chile"}),Object(d.jsx)("td",{children:"Gloucester"})]})]})]})})]})}),Object(d.jsx)("div",{class:"col-md-12",children:Object(d.jsxs)("div",{class:"card card-plain",children:[Object(d.jsxs)("div",{class:"header",children:[Object(d.jsx)("h4",{class:"title",children:"Table on Plain Background"}),Object(d.jsx)("p",{class:"category",children:"Here is a subtitle for this table"})]}),Object(d.jsx)("div",{class:"content table-responsive table-full-width",children:Object(d.jsxs)("table",{class:"table table-hover",children:[Object(d.jsxs)("thead",{children:[Object(d.jsx)("th",{children:"ID"}),Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Salary"}),Object(d.jsx)("th",{children:"Country"}),Object(d.jsx)("th",{children:"City"})]}),Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"1"}),Object(d.jsx)("td",{children:"Dakota Rice"}),Object(d.jsx)("td",{children:"$36,738"}),Object(d.jsx)("td",{children:"Niger"}),Object(d.jsx)("td",{children:"Oud-Turnhout"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"2"}),Object(d.jsx)("td",{children:"Minerva Hooper"}),Object(d.jsx)("td",{children:"$23,789"}),Object(d.jsx)("td",{children:"Cura\xe7ao"}),Object(d.jsx)("td",{children:"Sinaai-Waas"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"3"}),Object(d.jsx)("td",{children:"Sage Rodriguez"}),Object(d.jsx)("td",{children:"$56,142"}),Object(d.jsx)("td",{children:"Netherlands"}),Object(d.jsx)("td",{children:"Baileux"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"4"}),Object(d.jsx)("td",{children:"Philip Chaney"}),Object(d.jsx)("td",{children:"$38,735"}),Object(d.jsx)("td",{children:"Korea, South"}),Object(d.jsx)("td",{children:"Overland Park"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"5"}),Object(d.jsx)("td",{children:"Doris Greene"}),Object(d.jsx)("td",{children:"$63,542"}),Object(d.jsx)("td",{children:"Malawi"}),Object(d.jsx)("td",{children:"Feldkirchen in K\xe4rnten"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"6"}),Object(d.jsx)("td",{children:"Mason Porter"}),Object(d.jsx)("td",{children:"$78,615"}),Object(d.jsx)("td",{children:"Chile"}),Object(d.jsx)("td",{children:"Gloucester"})]})]})]})})]})})]})})}),Object(d.jsx)("footer",{class:"footer",children:Object(d.jsxs)("div",{class:"container-fluid",children:[Object(d.jsx)("nav",{class:"pull-left",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Company"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Portfolio"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Blog"})})]})}),Object(d.jsxs)("p",{class:"copyright pull-right",children:["\xa9 ",Object(d.jsx)("script",{children:"document.write(new Date().getFullYear())"})," ",Object(d.jsx)("a",{href:"http://www.creative-tim.com",children:"Creative Tim"}),", made with love for a better web"]})]})})]})})}var L=function(e){return Object(d.jsx)(r.a.Fragment,{children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)(o,{}),Object(d.jsx)(E,{})]})})},H=t(17);function R(e){var c=Object(a.useState)(""),t=Object(h.a)(c,2),s=t[0],r=t[1],i=Object(a.useState)(""),n=Object(h.a)(i,2),l=n[0],j=n[1],b=Object(H.d)(),o=function(){var c={email:s,password:l};g.a.post("".concat("https://eos-adinkrah-enterprise-api.herokuapp.com/","auth/login"),c).then((function(c){console.log(c.data),localStorage.setItem("user_details",JSON.stringify(c.data.message)),localStorage.setItem("loggedIn",!0),b.show("Login Successful"),e.history.push("/")})).catch((function(e){return console.log(e)}))};return Object(d.jsxs)("div",{className:"main-content-wrapper d-flex clearfix",children:[Object(d.jsxs)("div",{className:"mobile-nav",children:[Object(d.jsx)("div",{className:"amado-navbar-brand",children:Object(d.jsx)("a",{href:"index.html",children:Object(d.jsx)("img",{src:"assets/img/core-img/logo.png",alt:""})})}),Object(d.jsxs)("div",{className:"amado-navbar-toggler",children:[Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]})]}),Object(d.jsx)(N,{}),Object(d.jsx)("div",{className:"cart-table-area section-padding-100",children:Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-12 col-lg-8",children:Object(d.jsxs)("div",{className:"checkout_details_area mt-50 clearfix",children:[Object(d.jsx)("div",{className:"cart-title",children:Object(d.jsx)("h2",{children:"Login"})}),Object(d.jsxs)("form",{onSubmit:o,children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-md-8 mb-3",children:Object(d.jsx)("input",{type:"email",className:"form-control",id:"first_name",placeholder:"Email",required:!0,onChange:function(e){return r(e.target.value)}})})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-md-8 mb-3",children:Object(d.jsx)("input",{type:"password",className:"form-control",id:"last_name",placeholder:"Password",required:!0,onChange:function(e){return j(e.target.value)}})})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"cart-btn mt-10 ml-3",children:Object(d.jsx)("a",{href:"#",className:"btn amado-btn w-100",onClick:o,children:"Login"})})})]})]})}),Object(d.jsx)("div",{className:"col-12 col-lg-4"})]})})})]})}function B(e){return Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)(S,{}),Object(d.jsx)(R,{history:e.history}),Object(d.jsx)(w,{}),Object(d.jsx)(u,{})]})}function M(e){var c=Object(a.useState)(""),t=Object(h.a)(c,2),s=t[0],r=t[1],i=Object(a.useState)(""),n=Object(h.a)(i,2),l=n[0],j=n[1],b=Object(a.useState)(""),o=Object(h.a)(b,2),O=o[0],x=o[1],m=Object(a.useState)(""),u=Object(h.a)(m,2),p=u[0],v=u[1],f=Object(a.useState)(""),y=Object(h.a)(f,2),w=y[0],S=y[1],C=Object(a.useState)(""),k=Object(h.a)(C,2),_=k[0],I=k[1],F=function(e){e.preventDefault();var c={firstName:s,lastName:l,otherNames:O,email:p,password:w,contactNo:_,userType:1};g.a.post("".concat("https://eos-adinkrah-enterprise-api.herokuapp.com/","users/create"),c).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)}))};return Object(d.jsxs)("div",{className:"main-content-wrapper d-flex clearfix",children:[Object(d.jsxs)("div",{className:"mobile-nav",children:[Object(d.jsx)("div",{className:"amado-navbar-brand",children:Object(d.jsx)("a",{href:"index.html",children:Object(d.jsx)("img",{src:"assets/img/core-img/logo.png",alt:""})})}),Object(d.jsxs)("div",{className:"amado-navbar-toggler",children:[Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]})]}),Object(d.jsx)(N,{}),Object(d.jsx)("div",{className:"cart-table-area section-padding-100",children:Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-12 col-lg-8",children:Object(d.jsxs)("div",{className:"checkout_details_area mt-50 clearfix",children:[Object(d.jsx)("div",{className:"cart-title",children:Object(d.jsx)("h2",{children:"Register"})}),Object(d.jsx)("form",{onSubmit:F,children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-6 mb-3",children:Object(d.jsx)("input",{type:"text",className:"form-control",id:"first_name",placeholder:"First Name",onChange:function(e){return r(e.target.value)},required:!0})}),Object(d.jsx)("div",{className:"col-md-6 mb-3",children:Object(d.jsx)("input",{type:"text",className:"form-control",id:"last_name",ff:!0,placeholder:"Last Name",required:!0,onChange:function(e){return j(e.target.value)}})}),Object(d.jsx)("div",{className:"col-md-6 mb-3",children:Object(d.jsx)("input",{type:"text",className:"form-control",id:"first_name",placeholder:"Other Names",required:!0,onChange:function(e){return x(e.target.value)}})}),Object(d.jsx)("div",{className:"col-md-6 mb-3",children:Object(d.jsx)("input",{type:"email",className:"form-control",placeholder:"Email",required:!0,onChange:function(e){return v(e.target.value)}})}),Object(d.jsx)("div",{className:"col-md-6 mb-3",children:Object(d.jsx)("input",{type:"password",className:"form-control",placeholder:"password",required:!0,onChange:function(e){return S(e.target.value)}})}),Object(d.jsx)("div",{className:"col-md-6 mb-3",children:Object(d.jsx)("input",{type:"text",className:"form-control",id:"last_name",placeholder:"Contact Number",required:!0,onChange:function(e){return I(e.target.value)}})}),Object(d.jsx)("div",{className:"cart-btn mt-10 ml-3",children:Object(d.jsx)("a",{href:"#",className:"btn amado-btn w-100",onClick:F,children:"Register"})})]})})]})}),Object(d.jsx)("div",{className:"col-12 col-lg-4"})]})})})]})}function J(e){return Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)(S,{}),Object(d.jsx)(M,{}),Object(d.jsx)(w,{}),Object(d.jsx)(u,{})]})}var W=function(){return Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{exact:!0,path:"/",component:C}),Object(d.jsx)(j.a,{exact:!0,path:"/dashboard",component:m}),Object(d.jsx)(j.a,{exact:!0,path:"/dashboard_sales",component:L}),Object(d.jsx)(j.a,{path:"/products/:slug",render:function(e){var c=e.match;return Object(d.jsx)($,{productId:parseInt(c.params.slug)})}}),Object(d.jsx)(j.a,{exact:!0,path:"/cart",component:D}),Object(d.jsx)(j.a,{exact:!0,path:"/login",component:B}),Object(d.jsx)(j.a,{exact:!0,path:"/register",component:J})]})},G=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,71)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,r=c.getLCP,i=c.getTTFB;t(e),s(e),a(e),r(e),i(e)}))},K=t(36),V={position:H.b.TOP_CENTER,timeout:5e3,offset:"30px",transition:H.c.SCALE};n.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(l.a,{basename:"/ecom_app",children:Object(d.jsx)(H.a,Object(s.a)(Object(s.a)({template:K.a},V),{},{children:Object(d.jsx)(W,{})}))})}),document.getElementById("root")),G()}},[[68,1,2]]]);
//# sourceMappingURL=main.aacbd20a.chunk.js.map