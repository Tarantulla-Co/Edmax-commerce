import React from "react";
// import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../components/UI/Footer";
// import api from "../../public/api/api";
export default function Home() {
  // const [data, setData] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const token = localStorage.getItem("token");

  //     // Check if token exists
  //     if (!token) {
  //       Swal.fire({
  //         toast: true,
  //         title: "Authentication Required",
  //         text: "Please login to access this page",
  //         icon: "warning",
  //         timer: 3000,
  //         showConfirmButton: false,
  //       });
  //       // setLoader(false);
  //       return;
  //     }

  //     const res = await api.get("/me", {
  //       headers: {
  //         Accept: "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setData(`${res.data.user.name} `);
  //     console.log("Api Res:", res.data.user);
  //     if (res.data.code === 200) {
  //       Swal.fire({
  //         // toast: true,
  //         title: "User",
  //         text: `Welcome ${res.data.user.name} To Edmax` ,
  //         icon: "success",
  //         timer: 2000,
  //         showConfirmButton: false,
  //       });
  //     } else {
  //       Swal.fire({
  //         toast: true,
  //         title: "Error",
  //         text: "Try Again",
  //         icon: "error",
  //         timer: 2000,
  //       });
  //     }
  //   } catch (err) {
  //     console.log("Error:", JSON.stringify(err, null, 2));

  //     // Handle specific error cases
  //     if (err.response?.status === 401) {
  //       Swal.fire({
  //         toast: true,
  //         title: "Session Expired",
  //         text: "Please login again",
  //         icon: "error",
  //         timer: 3000,
  //         showConfirmButton: false,
  //       });
  //       // Clear invalid token
  //       localStorage.removeItem("token");
  //     } else {
  //       Swal.fire({
  //         toast: true,
  //         title: "Error",
  //         text: "Failed to fetch user data",
  //         icon: "error",
  //         timer: 3000,
  //         showConfirmButton: false,
  //       });
  //     }
  //   } finally {
  //     // setLoader(false);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <>
      <section id="hero" className="hero section">
        <div className="hero-container">
          <div className="hero-content">
            <div
              className="content-wrapper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h1 className="hero-title">Discover Amazing Products</h1>
              <p className="hero-description">
                Explore our curated collection of premium items designed to
                enhance your lifestyle. From fashion to tech, find everything
                you need with exclusive deals and fast shipping.
              </p>
              <div
                className="hero-actions"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Link to={"/product"} className="btn-primary">
                  Shop Now
                </Link>
                <a href="#categories" className="btn-secondary">
                  Browse Categories
                </a>
              </div>
              <div
                className="features-list"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="feature-item">
                  <i className="bi bi-truck"></i>
                  <span>Free Shipping</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-award"></i>
                  <span>Quality Guarantee</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-headset"></i>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visuals">
            <div
              className="product-showcase"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="product-card featured">
                <img
                  src="src/assets/images/products/image-1.jpeg"
                  alt="Featured Product"
                  className="img-fluid"
                />
                <div className="product-badge">Best Seller</div>
                <div className="product-info">
                  <h4>Premium Wireless Headphones</h4>
                  <div className="price">
                    <span className="sale-price">$299</span>
                    <span className="original-price">$399</span>
                  </div>
                </div>
              </div>

              <div className="product-grid">
                <div
                  className="product-mini"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <img
                    src="src/assets/images/products/image-2.jpeg"
                    alt="Product"
                    className="img-fluid"
                  />
                  <span className="mini-price">$89</span>
                </div>
                <div
                  className="product-mini"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                >
                  <img
                    src="src/assets/images/products/image-5.jpeg"
                    alt="Product"
                    className="img-fluid"
                  />
                  <span className="mini-price">$149</span>
                </div>
              </div>
            </div>

            <div className="floating-elements">
              <div
                className="floating-icon cart"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <i className="bi bi-cart3"></i>
                <span className="notification-dot">3</span>
              </div>
              <div
                className="floating-icon wishlist"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <i className="bi bi-heart"></i>
              </div>
              <div
                className="floating-icon search"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <i className="bi bi-search"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="promo-cards" className="promo-cards section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div
                className="category-featured"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="category-image">
                  <img
                    src="src/assets/images/products/image-6.jpeg"
                    alt="Women's Collection"
                    className="img-fluid"
                  />
                </div>
                <div className="category-content">
                  <span className="category-tag">Trending Now</span>
                  <h2>New Summer Collection</h2>
                  <p>
                    Discover our latest arrivals designed for the modern
                    lifestyle. Elegant, comfortable, and sustainable fashion for
                    every occasion.
                  </p>
                  <a href="#" className="btn-shop">
                    Explore Collection <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row gy-4">
                <div className="col-xl-6">
                  <div
                    className="category-card cat-men"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="category-image">
                      <img
                        src="src/assets/images/products/image-8.jpeg"
                        alt="Men's Fashion"
                        className="img-fluid"
                      />
                    </div>
                    <div className="category-content">
                      <h4>Men's Wear</h4>
                      <p>242 products</p>
                      <a href="#" className="card-link">
                        Shop Now <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div
                    className="category-card cat-kids"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="category-image">
                      <img
                        src="src/assets/images/products/image-19.jpeg"
                        alt="Kid's Fashion"
                        className="img-fluid"
                      />
                    </div>
                    <div className="category-content">
                      <h4>Kid's Fashion</h4>
                      <p>185 products</p>
                      <a href="#" className="card-link">
                        Shop Now <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div
                    className="category-card cat-cosmetics"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <div className="category-image">
                      <img
                        src="src/assets/images/products/imqge-9.jpeg"
                        alt="Cosmetics"
                        className="img-fluid"
                      />
                    </div>
                    <div className="category-content">
                      <h4>Beauty Products</h4>
                      <p>127 products</p>
                      <a href="#" className="card-link">
                        Shop Now <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div
                    className="category-card cat-accessories"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <div className="category-image">
                      <img
                        src="src/assets/images/products/image-7.jpeg"
                        alt="Accessories"
                        className="img-fluid"
                      />
                    </div>
                    <div className="category-content">
                      <h4>Accessories</h4>
                      <p>308 products</p>
                      <a href="#" className="card-link">
                        Shop Now <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
