import React, { useEffect, useMemo, useState } from 'react'
import api from '../api/api';
import PaystackButton from '../components/UI/PaystackButton';

function Cart() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const apiBase = import.meta.env.VITE_API_URL || "http://localhost:8000/api";
  const fileBase = apiBase.replace(/\/api\/?$/, "");

  const fetchCart = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await api.get('/cart')
      const data = Array.isArray(res.data?.data) ? res.data.data : (Array.isArray(res.data) ? res.data : [])
      setItems(data)
    } catch (e) {
      console.error('Failed to load cart', e)
      setError('Failed to load cart')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCart()
  }, [])

  const removeItem = async (cartId) => {
    try {
      await api.delete(`/cart/${cartId}`)
      setItems((prev) => prev.filter((i) => (i.id ?? i.cart_id) !== cartId))
    } catch (e) {
      console.error('Failed to remove item', e)
    }
  }

  const subtotal = useMemo(() => {
    return items.reduce((sum, it) => {
      const quantity = Number(it.quantity ?? it.qty ?? 1)
      const price = Number(it.price ?? it.product?.price ?? it.product_price ?? 0)
      return sum + price * quantity
    }, 0)
  }, [items])

  return (
    <>
    <section id="cart" className="cart section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row">
          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
            <div className="cart-items">
              <div className="cart-header d-none d-lg-block">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <h5>Product</h5>
                  </div>
                  <div className="col-lg-2 text-center">
                    <h5>Price</h5>
                  </div>
                  <div className="col-lg-2 text-center">
                    <h5>Quantity</h5>
                  </div>
                  <div className="col-lg-2 text-center">
                    <h5>Total</h5>
                  </div>
                </div>
              </div>

              {loading && (
                <div className="py-5 text-center">Loading cart...</div>
              )}
              {error && !loading && (
                <div className="py-5 text-center" style={{ color: 'red' }}>{error}</div>
              )}

              {!loading && !error && items.length === 0 && (
                <div className="py-5 text-center">Your cart is empty.</div>
              )}

              {!loading && !error && items.map((it) => {
                const cartId = it.id ?? it.cart_id ?? it._id
                const product = it.product ?? {}
                const name = product.name ?? it.name ?? 'Product'
                const image = product.image ?? it.image
                const price = Number(it.price ?? product.price ?? it.product_price ?? 0)
                const quantity = Number(it.quantity ?? it.qty ?? 1)
                const imageSrc = image
                  ? (String(image).startsWith('http') ? image : `${fileBase}/storage/${image}`)
                  : 'assets/img/product/product-1.webp'

                return (
                  <div key={cartId} className="cart-item">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-12 mt-3 mt-lg-0 mb-lg-0 mb-3">
                    <div className="product-info d-flex align-items-center">
                      <div className="product-image">
                            <img src={imageSrc} alt={name} className="img-fluid" loading="lazy"/>
                      </div>
                      <div className="product-details">
                            <h6 className="product-title">{name}</h6>
                            <button className="remove-item" type="button" onClick={() => removeItem(cartId)}>
                          <i className="bi bi-trash"></i> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-12 mt-3 mt-lg-0 text-center">
                    <div className="price-tag">
                          <span className="current-price">GH₵{price.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="col-lg-2 col-12 mt-3 mt-lg-0 text-center">
                    <div className="quantity-selector">
                          <input type="number" className="quantity-input" value={quantity} min="1" readOnly />
                    </div>
                  </div>
                  <div className="col-lg-2 col-12 mt-3 mt-lg-0 text-center">
                    <div className="item-total">
                          <span>GH₵{(price * quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}

              <div className="cart-actions">
                <div className="row">
                  <div className="col-lg-6 mb-3 mb-lg-0">
                    <div className="coupon-form">
                    </div>
                  </div>
                  <div className="col-lg-6 text-md-end">
                    {/* Placeholder for clear cart if needed */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
            <div className="cart-summary">
              <h4 className="summary-title">Order Summary</h4>

              <div className="summary-item">
                <span className="summary-label">Subtotal</span>
                <span className="summary-value">GH₵{subtotal.toFixed(2)}</span>
              </div>

              <div className="summary-total">
                <span className="summary-label">Total</span>
                <span className="summary-value">GH₵{subtotal.toFixed(2)}</span>
              </div>

              <div className="checkout-button">
                <PaystackButton amount={subtotal} currency="GHS" />
              </div>

              <div className="continue-shopping">
                <a href="#" className="btn btn-link w-100">
                  <i className="bi bi-arrow-left"></i> Continue Shopping
                </a>
              </div>

              <div className="payment-methods">
                <p className="payment-title">We Accept</p>
                <div className="payment-icons">
                  <i className="bi bi-credit-card"></i>
                  <i className="bi bi-bank"></i>
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

export default Cart;
