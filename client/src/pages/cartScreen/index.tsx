import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../redux/store';
import CartTable from '../../components/commons/cartTable';
import { getTotalCartPrice } from '../../utils';
import emptyImg from '../../images/emptyCart.png';

const ProductsCart = () => {
  const { cart } = useSelector((state: ReduxState) => state.cart);

  return (
    <div className="products">
      <div className="container">
        <h1 className="products__title">Cart</h1>
        <div className="products__inner">
          {!cart?.length ? (
            <div className="products__empty-cart">
              <img src={emptyImg} alt="empty" />
              <h5>Your cart is currently empty</h5>
              <button className="card__btn card__btn--range">
                <span>
                  <Link to="/shop">Return to Shop</Link>
                </span>
              </button>
            </div>
          ) : (
            <div className="products__content-cart">
              <table className="products__cart-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th className="products__cart-text-price">Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((el: any, ind) => (
                    <CartTable cartItem={el} key={ind} />
                  ))}
                </tbody>
              </table>
              <div className="products__cart-coupon">
                <div className="products__cart-total">
                  <span>SUBTOTAL</span>
                  <span>${getTotalCartPrice(cart)}</span>
                </div>
                <div className="products__cart-total">
                  <span>SUBTOTAL</span>
                  <span>${getTotalCartPrice(cart)}</span>
                </div>
                <div className="products__coupon-btn">
                  <button className="card__btn card__btn--range">
                    <span>
                      <Link to="/cart">Checkout</Link>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;
