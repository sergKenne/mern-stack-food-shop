import React from 'react';
import logo from '../../images/logo-footer.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__address">
            <div>
              <a href="#" className="footer__link-logo">
                <img src={logo} alt="" className="footer__logo" />
              </a>
            </div>
            <div className="footer__phone">
              <svg className="footer__phone-svg">
                <use xlinkHref="#svg-phone"></use>
              </svg>
              <span className="footer__phone-number">+8 (800) 319-2121</span>
            </div>
            <p className="footer__location">
              555 California str, Suite 100
              <br />
              San Francisco, CA 94107
            </p>
          </div>
          <nav className="footer__nav">
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <h5 className="footer__head">Our Menu</h5>
              </li>
              <li className="footer__nav-item">
                <a href="" className="footer__nav-link">
                  Pizza
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="" className="footer__nav-link">
                  Burgers
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="" className="footer__nav-link">
                  Sushi
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="" className="footer__nav-link">
                  Steaks
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="" className="footer__nav-link">
                  Drinks
                </a>
              </li>
            </ul>
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <h5 className="footer__head">Pages</h5>
              </li>
              <li className="footer__nav-item">
                <a href="" className="footer__nav-link">
                  About
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="" className="footer__nav-link">
                  Contact
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="" className="footer__nav-link">
                  Blog
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="" className="footer__nav-link">
                  Blog Post
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="" className="footer__nav-link">
                  Wishlist
                </a>
              </li>
            </ul>
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <h5 className="footer__head">How can we help</h5>
              </li>
              <li className="footer__nav-item">
                <a href="" className="footer__nav-link">
                  Privacy Policy
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="" className="footer__nav-link">
                  Terms and conditions
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="" className="footer__nav-link">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
