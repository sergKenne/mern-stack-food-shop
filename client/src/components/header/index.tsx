import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/header-logo.svg';
import Navbar from '../navbar';
import SpreadSvg from '../home/spreadSvg';

const Header = () => {

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
            <span className="header__menu-bar" id="menu-bar">
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
              <span>
                <svg className="header__right-svg header__right-svg--cart">
                  <use xlinkHref="#svg-cart"></use>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </header>
      <Navbar />
    </>
  );
};

export default Header;
