import React from 'react';
import { Link } from 'react-router-dom';
import { MENU_DATA, MENU_SOCIAL } from './constants';
import NavbarItem from './NavbarItem';
import NavbarSocial from './NavbarSocial';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxState, TypedDispatch } from '../../redux/store';
import { getTotalCartPrice, getTotalCartQty } from '../../utils';
import { deleteProductsFromCart } from '../../redux/reducers/cartReducer/actionCreator';

const Navbar = () => {
  const dispatch = useDispatch<TypedDispatch>();
  const { cart } = useSelector((state: ReduxState) => state.cart);
  return (
    <nav className="navbar" id="navbar">
      <span className="header__menu-close" id="menu-close">
        <svg className="header__bar-svg">
          <use xlinkHref="#svg-close"></use>
        </svg>
      </span>
      <div className="container">
        <ul className="navbar__list">
          {MENU_DATA?.map((item, index) => (
            <NavbarItem key={index} category={item.category} icon={item.icon} />
          ))}

          <li>
            <div className="navbar__mobile-phone">
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
            <div className="navbar__socials">
              {MENU_SOCIAL?.map((item) => (
                <NavbarSocial key={item} icon={item} />
              ))}
            </div>
            <span className="navbar__corbage">
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
                        <p style={{ color: '#fff' }}>
                          No products in the cart.
                        </p>
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
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
