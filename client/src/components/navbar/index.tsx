import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar" id="navbar">
      <span className="header__menu-close" id="menu-close">
        <svg className="header__bar-svg">
          <use xlinkHref="#svg-close"></use>
        </svg>
      </span>
      <div className="container">
        <ul className="navbar__list">
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <svg className="navbar__link-icon">
                <use xlinkHref="#svg-icon-2"></use>
              </svg>
              <span className="navbar__link-text">Pizza</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <svg className="navbar__link-icon">
                <use xlinkHref="#svg-icon-9"></use>
              </svg>
              <span className="navbar__link-text">Burgers</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <svg className="navbar__link-icon">
                <use xlinkHref="#svg-icon-12"></use>
              </svg>
              <span className="navbar__link-text">Sushi</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <svg className="navbar__link-icon">
                <use xlinkHref="#svg-icon-10"></use>
              </svg>
              <span className="navbar__link-text">Noodles</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <svg className="navbar__link-icon">
                <use xlinkHref="#svg-icon-14"></use>
              </svg>
              <span className="navbar__link-text">Steaks</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <svg className="navbar__link-icon">
                <use xlinkHref="#svg-icon-32"></use>
              </svg>
              <span className="navbar__link-text">Desserts</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <svg className="navbar__link-icon">
                <use xlinkHref="#svg-icon-17"></use>
              </svg>
              <span className="navbar__link-text">Drinks</span>
            </a>
          </li>

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
            <span className="navbar__corbage">
              <svg className="header__right-svg">
                <use xlinkHref="#svg-cart"></use>
              </svg>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
