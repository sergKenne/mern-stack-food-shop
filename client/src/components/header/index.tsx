import React, { useState, FC } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/header-logo.svg';
import Navbar from '../navbar';
import SpreadSvg from '../home/spreadSvg';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxState, TypedDispatch } from '../../redux/store';
import { getTotalCartPrice, getTotalCartQty } from '../../utils';
import { deleteProductsFromCart } from '../../redux/reducers/cartReducer/actionCreator';

const Header:FC = () => {

  const dispatch = useDispatch<TypedDispatch>();
  const { cart } = useSelector((state: ReduxState) => state.cart);
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);

  return (
    <>
      <SpreadSvg />
      <header className="header">
        <div className=" header__top">
          <div className="container header__top-inner">
            <div className="header__phone">
              <svg className="header__phone-svg">
                <use xlinkHref="#svg-phone"></use>
              </svg>
              <span className="header__phone-number">+8 (800) 319-2121</span>
            </div>
            <a href="tel:+880031221210" className="header__phone-call">
              {' '}
              Call me back
            </a>
          </div>
        </div>
        <div className="header__middle">
          <div className="container header__middle-inner">
            <span className="header__menu-bar" id="menu-bar" onClick={() => setToggleSidebar(true)}>
              <svg className="header__bar-svg">
                <use xlinkHref="#svg-menu"></use>
              </svg>
            </span>
            <div className="header__socials">
              <a href="#" className="header__socials-link">
                <svg className="header__socials-svg">
                  <use xlinkHref="#svg-facebook"></use>
                </svg>
              </a>
              <a href="#" className="header__socials-link">
                <svg className="header__socials-svg">
                  <use xlinkHref="#svg-instagram"></use>
                </svg>
              </a>
              <a href="#" className="header__socials-link">
                <svg className="header__socials-svg">
                  <use xlinkHref="#svg-twitter"></use>
                </svg>
              </a>
            </div>
            <Link to="/" className="header__logo">
              <img className="header__logo-img" src={logo} alt="logo" />
            </Link>
            <div className="header__icons">
              <span>
                <svg className="header__right-svg">
                  <use xlinkHref="#svg-search"></use>
                </svg>
              </span>
              <span>
                <svg className="header__right-svg header__right-svg--wishlist">
                  <use xlinkHref="#svg-wishlist"></use>
                </svg>
              </span>
              <div className="header__cart">
                <Link to="/cart">
                  <svg className="header__right-svg header__right-svg--cart">
                    <use xlinkHref="#svg-cart"></use>
                  </svg>
                  <span className="header__cart-counter">
                    {getTotalCartQty(cart)}
                  </span>
                  <span className="header__total-price">
                    ${getTotalCartPrice(cart)}
                  </span>
                </Link>
                <div className="header__cart-list">
                  <div className="products__filter-content products__filter-content--cart">
                    <div className="product__filter-cart">
                      {!cart?.length ? (
                        <p>No products in the cart.</p>
                      ) : (
                        <>
                          {cart?.map((prod: any) => (
                            <div className="card card--corbage" key={prod.id}>
                              <span
                                className="card__delete-icon"
                                onClick={() =>
                                  dispatch(deleteProductsFromCart(prod))
                                }
                              >
                                ×
                              </span>
                              <div className="card__header card__header--corbage">
                                <img
                                  src={prod.img}
                                  alt=""
                                  className="card__img"
                                />
                              </div>
                              <div className="card__body">
                                <h5 className="card__title card__title--corbage">
                                  {prod.name}
                                </h5>
                                <p className="card__description">
                                  <span>{prod.qty}</span> × $
                                  <span>{prod.price}</span>
                                </p>
                              </div>
                            </div>
                          ))}
                          <div className="products__filter-subtotal">
                            <p className="card__description card__description--subtotal">
                              <span>Subtotal:</span>
                              <span className="card__filter-price">
                                ${getTotalCartPrice(cart)}
                              </span>
                            </p>
                          </div>
                          <div className="products__filter-btn">
                            <button className="card__btn card__btn--range">
                              <span>
                                <Link to="/cart">View Cart</Link>
                              </span>
                            </button>
                            <button className="card__btn card__btn--filter">
                              <span>Checkout</span>
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Navbar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>
    </>
  );
};

export default Header;
