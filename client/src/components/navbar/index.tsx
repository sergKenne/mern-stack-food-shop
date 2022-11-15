import React from 'react';
import { MENU_DATA, MENU_SOCIAL } from './constants';
import NavbarItem from './NavbarItem';
import NavbarSocial from './NavbarSocial';

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
