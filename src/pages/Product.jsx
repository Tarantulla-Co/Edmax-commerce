import React, { useEffect, useState } from "react";
import api from "../api/api";
import { useCart } from "../contexts/CartContext";
import Swal from "sweetalert2";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { addToCart } = useCart();

  const apiBase = import.meta.env.VITE_API_URL || "http://localhost:8000/api";
  const fileBase = apiBase.replace(/\/api\/?$/, "");

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await api.get("/product");
        setProducts(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Failed to load products", err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const addCart = async (productId, quantity = 1, productName = 'Product') => {
    try {
      const success = await addToCart(productId, quantity);
      if (success) {
        // Show success notification
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Added to Cart!',
          text: `${productName} has been added to your cart`,
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true
        });
      } else {
        // Show error notification
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'error',
          title: 'Failed to Add',
          text: 'Could not add item to cart. Please try again.',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true
        });
      }
    } catch (err) {
      console.log('Error adding to cart:', err);
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong. Please try again.',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
      });
    }
  }

  return (
    <>
      <section id="best-sellers" className="best-sellers section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Edmax Store </h2>
          {/* <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> */}
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-5">
            {loading && (
              <div className="col-12 d-flex justify-content-center">
                <p className="text-center spinner-border text-dark"></p>
              </div>
            )}
            {error && !loading && (
              <div className="col-12 d-flex justify-content-center">
                <p style={{ color: "red" }}>{error}</p>
              </div>
            )}
            {!loading &&
              !error &&
              products.map((p) => {
                const id = p.id || p._id || p.sku || p.name;
                const imageSrc = p.image
                  ? String(p.image).startsWith("http")
                    ? p.image
                    : `${fileBase}/storage/${p.image}`
                  : p.imageUrl ||
                    p.thumbnail ||
                    "src/assets/images/products/image-2.jpeg";
                const name = p.name || p.title || "Untitled";
                const price = p.price ?? p.amount ?? p.cost;
                const description = p.description;
                return (
                  <div key={id} className="col-lg-3 col-md-6">
                    <div className="product-item">
                      <div className="product-image">
                        <img
                          src={imageSrc}
                          alt={name}
                          className="img-fluid"
                          loading="lazy"
                        />
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
                        <button
                          className="cart-btn"
                          onClick={() => addCart(id, 1, name)}
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="product-info">
                        <div className="product-category">New</div>
                        <h4 className="product-name">
                          <a href="#" className="font-weight-bold">{name}</a>
                          <p className="fs-15 text-truncate text-muted" style={{ maxWidth: '700px' }}>
                            {description}
                            </p>
                        </h4>
                        <div className="product-price text-danger font-weight-bold">
                          {typeof price === "number"
                            ? `GH₵${price.toFixed(2)}`
                            : price
                            ? `$${price}`
                            : "$0.00"}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
