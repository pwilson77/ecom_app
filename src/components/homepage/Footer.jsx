import React from  "react";

function Footer(props) {
    return (
        <footer>
	<div class="tt-footer-col tt-color-scheme-01">
		<div class="container">
			<div class="row">
				<div class="col-md-3 col-lg-3 col-xl-3">
					<div class="tt-mobile-collapse">
						<h4 class="tt-collapse-title">
							CATEGORIES
						</h4>
						<div class="tt-collapse-content">
							<ul class="tt-list">
								<li><a href="listing-collection.html">Women</a></li>
								<li><a href="listing-collection.html">Men</a></li>
								<li><a href="listing-collection.html">Accessories</a></li>
								<li><a href="listing-collection.html">Shoes</a></li>
								<li><a href="listing-collection.html">New Arrivals</a></li>
								<li><a href="listing-collection.html">Clearence</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-3 col-lg-3 col-xl-3">
					<div class="tt-mobile-collapse">
						<h4 class="tt-collapse-title">
							MY ACCOUNT
						</h4>
						<div class="tt-collapse-content">
							<ul class="tt-list">
								<li><a href="account_order.html">Orders</a></li>
								<li><a href="page404.html">Compare</a></li>
								<li><a href="page404.html">Wishlist</a></li>
								<li><a href="login.html">Log In</a></li>
								<li><a href="create-account.html">Register</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-6 col-xl-6">
					<div class="tt-newsletter">
						<div class="tt-mobile-collapse">
							<h4 class="tt-collapse-title">
								NEWSLETTER SIGNUP
							</h4>
							<div class="tt-collapse-content">
								<p>
									Sign up for our e-mail and be the first who know our special offers! Furthermore, we will give a 15% discount on the next order after you sign up.
								</p>
								<form id="newsletterform" class="form-inline form-default" method="post" novalidate="novalidate" action="#">
									<div class="form-group">
										<input type="text" name="email" class="form-control" placeholder="Enter your e-mail" />
										<button type="submit" class="btn">JOIN US</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<ul class="tt-social-icon">
						<li><a class="icon-g-64" target="_blank" href="http://www.facebook.com/"></a></li>
						<li><a class="icon-h-58" target="_blank" href="http://www.twitter.com/"></a></li>
						<li><a class="icon-g-66" target="_blank" href="http://www.google.com/"></a></li>
						<li><a class="icon-g-67" target="_blank" href="http://www.instagram.com/"></a></li>
						<li><a class="icon-g-70" target="_blank" href="#"></a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="tt-footer-custom">
		<div class="container">
			<div class="tt-row">
				<div class="tt-col-left">
					<div class="tt-col-item tt-logo-col">
						<a class="tt-logo tt-logo-alignment" href="index.html"><img src="images/custom/logo.png" alt=""/></a>
					</div>
					<div class="tt-col-item">
						<div class="tt-box-copyright">
							&copy; E.O.S 2021. All Rights Reserved
						</div>
					</div>
				</div>
				<div class="tt-col-right">
					<div class="tt-col-item">
						<ul class="tt-payment-list">
							<li><a href="page404.html"><span class="icon-Stripe"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span>
			                </span></a></li>
							<li><a href="page404.html"> <span class="icon-paypal-2">
			                <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span>
			                </span></a></li>
							<li><a href="page404.html"><span class="icon-visa">
			                <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span>
			                </span></a></li>
							<li><a href="page404.html"><span class="icon-mastercard">
			                <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span>
			                </span></a></li>
							<li><a href="page404.html"><span class="icon-discover">
			                <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span>
			                </span></a></li>
							<li><a href="page404.html"><span class="icon-american-express">
			                <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span>
			                </span></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
    );
}

export default Footer;