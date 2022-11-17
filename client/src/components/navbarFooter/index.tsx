import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../redux/store';
import { getTotalCartQty } from '../../utils';

const NavbarFooter = () => {
  const { cart } = useSelector((state: ReduxState) => state.cart);
  return (
    <div className="navFooter">
      <ul className="navFooter__list">
        <li className="navFooter__item">
          <Link to="/">
            <svg className="navFooter__home-svg">
              <use xlinkHref="#svg-home"></use>
            </svg>
          </Link>
          <span className="navFooter__text">Home</span>
        </li>
        <li className="navFooter__item">
          <Link to="#">
            <svg className="navFooter__home-svg">
              <use xlinkHref="#svg-user"></use>
            </svg>
          </Link>
          <span className="navFooter__text">Login</span>
        </li>
        <li className="navFooter__item">
          <Link to="/cart">
            <svg className="navFooter__home-svg">
              <use xlinkHref="#svg-cart"></use>
            </svg>
            <span className="header__cart-counter header__cart-counter--footer">
              {getTotalCartQty(cart)}
            </span>
          </Link>
          <span className="navFooter__text">Cart</span>
        </li>
      </ul>
    </div>
  );
};

export default NavbarFooter;
