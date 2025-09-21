import React from 'react'

function Product() {
  return (
    <>
    <section id="best-sellers" className="best-sellers section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Edmax Store </h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row g-5">

          <div className="col-lg-3 col-md-6">
            <div className="product-item">
              <div className="product-image">
                <div className="product-badge">Limited</div>
                <img src="src/assets/images/products/imqge-9.jpeg" alt="Product Image" className="img-fluid" loading="lazy"/>
                <div className="product-actions">
                  <button className="action-btn wishlist-btn">
                    <i className="bi bi-heart"></i>
                  </button>
                  <button className="action-btn compare-btn">
                    <i className="bi bi-arrow-left-right"></i>
                  </button>
                  <button className="action-btn quickview-btn">
                    <i className="bi bi-zoom-in"></i>
                  </button>
                </div>
                <button className="cart-btn">ADD TO CART</button>
              </div>
              <div className="product-info">
                <div className="product-category">Premium Collection</div>
                <h4 className="product-name"><a href="product-details.html">Mauris blandit aliquet elit</a></h4>
                <div className="product-rating">
                  <div className="stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                  </div>
                  <span className="rating-count">(24)</span>
                </div>
                <div className="product-price">$189.00</div>
                <div className="color-swatches">
                  <span className="swatch active" style={{backgroundColor: '#2563eb'}}></span>
                  <span className="swatch" style={{ backgroundColor: '#059669'}}></span>
                  <span className="swatch" style={{ backgroundColor: '#dc2626'}}></span>
                </div>
              </div>
            </div>
          </div>
          

        
          <div className="col-lg-3 col-md-6">
            <div className="product-item">
              <div className="product-image">
                <div className="product-badge sale-badge">25% Off</div>
                <img src="src/assets/images/products/image-1.jpeg" alt="Product Image" className="img-fluid" loading="lazy"/>
                <div className="product-actions">
                  <button className="action-btn wishlist-btn">
                    <i className="bi bi-heart"></i>
                  </button>
                  <button className="action-btn compare-btn">
                    <i className="bi bi-arrow-left-right"></i>
                  </button>
                  <button className="action-btn quickview-btn">
                    <i className="bi bi-zoom-in"></i>
                  </button>
                </div>
                <button className="cart-btn">Add to Cart</button>
              </div>
              <div className="product-info">
                <div className="product-category">Best Sellers</div>
                <h4 className="product-name"><a href="product-details.html">Sed do eiusmod tempor incididunt</a></h4>
                <div className="product-rating">
                  <div className="stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                  <span className="rating-count">(38)</span>
                </div>
                <div className="product-price">
                  <span className="old-price">$240.00</span>
                  <span className="current-price">$180.00</span>
                </div>
                <div className="color-swatches">
                  <span className="swatch active" style={{ backgroundColor: '#1f2937'}}></span>
                  <span className="swatch" style={{ backgroundColor: '#f59e0b'}}></span>
                  <span className="swatch" style={{ backgroundColor: '#8b5cf6'}}></span>
                </div>
              </div>
            </div>
          </div>

          
          <div className="col-lg-3 col-md-6">
            <div className="product-item">
              <div className="product-image">
                <img src="src/assets/images/products/image-2.jpeg" alt="Product Image" className="img-fluid" loading="lazy"/>
                <div className="product-actions">
                  <button className="action-btn wishlist-btn">
                    <i className="bi bi-heart"></i>
                  </button>
                  <button className="action-btn compare-btn">
                    <i className="bi bi-arrow-left-right"></i>
                  </button>
                  <button className="action-btn quickview-btn">
                    <i className="bi bi-zoom-in"></i>
                  </button>
                </div>
                <button className="cart-btn">Add to Cart</button>
              </div>
              <div className="product-info">
                <div className="product-category">New Arrivals</div>
                <h4 className="product-name"><a href="product-details.html">Lorem ipsum dolor sit amet consectetur</a></h4>
                <div className="product-rating">
                  <div className="stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                  <span className="rating-count">(12)</span>
                </div>
                <div className="product-price">$95.00</div>
                <div className="color-swatches">
                  <span className="swatch active" style={{ backgroundColor: '#ef4444'}}></span>
                  <span className="swatch" style={{ backgroundColor: '#06b6d4'}}></span>
                  <span className="swatch" style={{ backgroundColor: '#10b981'}}></span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <div className="product-item">
              <div className="product-image">
                <div className="product-badge trending-badge">Trending</div>
                <img src="src/assets/images/products/image-7.jpeg" alt="Product Image" className="img-fluid" loading="lazy"/>
                <div className="product-actions">
                  <button className="action-btn wishlist-btn active">
                    <i className="bi bi-heart-fill"></i>
                  </button>
                  <button className="action-btn compare-btn">
                    <i className="bi bi-arrow-left-right"></i>
                  </button>
                  <button className="action-btn quickview-btn">
                    <i className="bi bi-zoom-in"></i>
                  </button>
                </div>
                <button className="cart-btn">Add to Cart</button>
              </div>
              <div className="product-info">
                <div className="product-category">Designer Series</div>
                <h4 className="product-name"><a href="product-details.html">Ut enim ad minim veniam quis</a></h4>
                <div className="product-rating">
                  <div className="stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <span className="rating-count">(56)</span>
                </div>
                <div className="product-price">$165.00</div>
                <div className="color-swatches">
                  <span className="swatch" style={{ backgroundColor: '#64748b'}}></span>
                  <span className="swatch active" style={{ backgroundColor: '#7c3aed'}}></span>
                  <span className="swatch" style={{ backgroundColor: '#f59e0b'}}></span>
                </div>
              </div>
            </div>
          </div>

             <div className="col-lg-3 col-md-6">
            <div className="product-item">
              <div className="product-image">
                <div className="product-badge sale-badge">25% Off</div>
                <img src="src/assets/images/products/image-1.jpeg" alt="Product Image" className="img-fluid" loading="lazy"/>
                <div className="product-actions">
                  <button className="action-btn wishlist-btn">
                    <i className="bi bi-heart"></i>
                  </button>
                  <button className="action-btn compare-btn">
                    <i className="bi bi-arrow-left-right"></i>
                  </button>
                  <button className="action-btn quickview-btn">
                    <i className="bi bi-zoom-in"></i>
                  </button>
                </div>
                <button className="cart-btn">Add to Cart</button>
              </div>
              <div className="product-info">
                <div className="product-category">Best Sellers</div>
                <h4 className="product-name"><a href="product-details.html">Sed do eiusmod tempor incididunt</a></h4>
                <div className="product-rating">
                  <div className="stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                  <span className="rating-count">(38)</span>
                </div>
                <div className="product-price">
                  <span className="old-price">$240.00</span>
                  <span className="current-price">$180.00</span>
                </div>
                <div className="color-swatches">
                  <span className="swatch active" style={{ backgroundColor: '#1f2937'}}></span>
                  <span className="swatch" style={{ backgroundColor: '#f59e0b'}}></span>
                  <span className="swatch" style={{ backgroundColor: '#8b5cf6'}}></span>
                </div>
              </div>
            </div>
          </div>

          
          <div className="col-lg-3 col-md-6">
            <div className="product-item">
              <div className="product-image">
                <img src="src/assets/images/products/image-2.jpeg" alt="Product Image" className="img-fluid" loading="lazy"/>
                <div className="product-actions">
                  <button className="action-btn wishlist-btn">
                    <i className="bi bi-heart"></i>
                  </button>
                  <button className="action-btn compare-btn">
                    <i className="bi bi-arrow-left-right"></i>
                  </button>
                  <button className="action-btn quickview-btn">
                    <i className="bi bi-zoom-in"></i>
                  </button>
                </div>
                <button className="cart-btn">Add to Cart</button>
              </div>
              <div className="product-info">
                <div className="product-category">New Arrivals</div>
                <h4 className="product-name"><a href="product-details.html">Lorem ipsum dolor sit amet consectetur</a></h4>
                <div className="product-rating">
                  <div className="stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                  <span className="rating-count">(12)</span>
                </div>
                <div className="product-price">$95.00</div>
                <div className="color-swatches">
                  <span className="swatch active" style={{ backgroundColor: '#ef4444'}}></span>
                  <span className="swatch" style={{ backgroundColor: '#06b6d4'}}></span>
                  <span className="swatch" style={{ backgroundColor: '#10b981'}}></span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <div className="product-item">
              <div className="product-image">
                <div className="product-badge trending-badge">Trending</div>
                <img src="src/assets/images/products/image-6.jpeg" alt="Product Image" className="img-fluid" loading="lazy"/>
                <div className="product-actions">
                  <button className="action-btn wishlist-btn active">
                    <i className="bi bi-heart-fill"></i>
                  </button>
                  <button className="action-btn compare-btn">
                    <i className="bi bi-arrow-left-right"></i>
                  </button>
                  <button className="action-btn quickview-btn">
                    <i className="bi bi-zoom-in"></i>
                  </button>
                </div>
                <button className="cart-btn">Add to Cart</button>
              </div>
              <div className="product-info">
                <div className="product-category">Designer Series</div>
                <h4 className="product-name"><a href="product-details.html">Ut enim ad minim veniam quis</a></h4>
                <div className="product-rating">
                  <div className="stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <span className="rating-count">(56)</span>
                </div>
                <div className="product-price">$165.00</div>
                <div className="color-swatches">
                  <span className="swatch" style={{ backgroundColor: '#64748b'}}></span>
                  <span className="swatch active" style={{ backgroundColor: '#7c3aed'}}></span>
                  <span className="swatch" style={{ backgroundColor: '#f59e0b'}}></span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
    </>
  )
}

export default Product;
