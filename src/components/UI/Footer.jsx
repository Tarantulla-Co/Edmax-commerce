import React from 'react'
import "/public/template/NiceShop/assets/vendor/bootstrap/css/bootstrap.min.css";
import "/public/template/NiceShop/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "/public/template/NiceShop/assets/css/main.css";
function Footer() {
  const date = new Date().getFullYear();
  return (
    <>
     <footer id="footer" className="footer dark-background">
    <div className="footer-main">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <div className="footer-widget footer-about">
              <a href="index.html" className="logo">
                <span className="sitename">Edmax</span>
              </a>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nibh vehicula, facilisis magna ut, consectetur lorem. Proin eget tortor risus.</p>

              <div className="social-links mt-4">
                <h5>Connect With Us</h5>
                <div className="social-icons">
                  <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                  <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                  <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                  <a href="#" aria-label="TikTok"><i className="bi bi-tiktok"></i></a>
                  <a href="#" aria-label="Pinterest"><i className="bi bi-pinterest"></i></a>
                  <a href="#" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="footer-widget">
              <h4>Shop</h4>
              <ul className="footer-links">
                <li><a href="category.html">New Arrivals</a></li>
                <li><a href="category.html">Bestsellers</a></li>
                <li><a href="category.html">Women's Clothing</a></li>
                <li><a href="category.html">Men's Clothing</a></li>
                <li><a href="category.html">Accessories</a></li>
                <li><a href="category.html">Sale</a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="footer-widget">
              <h4>Support</h4>
              <ul className="footer-links">
                <li><a href="support.html">Help Center</a></li>
                <li><a href="account.html">Order Status</a></li>
                <li><a href="shiping-info.html">Shipping Info</a></li>
                <li><a href="return-policy.html">Returns &amp; Exchanges</a></li>
                <li><a href="#">Size Guide</a></li>
                <li><a href="contact.html">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="footer-widget">
              <h4>Contact Information</h4>
              <div className="footer-contact">
                <div className="contact-item">
                  <i className="bi bi-geo-alt"></i>
                  <span>123 Fashion Street, New York, NY 10001</span>
                </div>
                <div className="contact-item">
                  <i className="bi bi-telephone"></i>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <i className="bi bi-envelope"></i>
                  <span>hello@example.com</span>
                </div>
                <div className="contact-item">
                  <i className="bi bi-clock"></i>
                  <span>Monday-Friday: 9am-6pm<br/>Saturday: 10am-4pm Sunday: Closed</span>
                </div>
              </div>

              <div className="app-buttons mt-4">
                <a href="#" className="app-btn">
                  <i className="bi bi-apple"></i>
                  <span>App Store</span>
                </a>
                <a href="#" className="app-btn">
                  <i className="bi bi-google-play"></i>
                  <span>Google Play</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="container">
        <div className="row gy-3 align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="copyright">
              <p>©<span>{date} Copyright</span> <strong className="sitename">Edmax</strong>. All Rights Reserved.</p>
            </div>
            <div className="credits mt-1">
              {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="d-flex flex-wrap justify-content-lg-end justify-content-center align-items-center gap-4">
              <div className="payment-methods">
                <div className="payment-icons">
                  <i className="bi bi-credit-card" aria-label="Credit Card"></i>
                  <i className="bi bi-paypal" aria-label="PayPal"></i>
                  <i className="bi bi-apple" aria-label="Apple Pay"></i>
                  <i className="bi bi-google" aria-label="Google Pay"></i>
                  <i className="bi bi-shop" aria-label="Shop Pay"></i>
                  <i className="bi bi-cash" aria-label="Cash on Delivery"></i>
                </div>
              </div>

              <div className="legal-links">
                <a href="tos.html">Terms</a>
                <a href="privacy.html">Privacy</a>
                <a href="tos.html">Cookies</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer;
