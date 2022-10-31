import React from 'react';

import ban1 from '../../../images/banner-1.jpg';
import ban2 from '../../../images/banner-2.jpg';
import ban3 from '../../../images/banner-3.jpg';

import icon1 from '../../../images/ban-icon-1.png';
import icon2 from '../../../images/ban-icon-2.png';
import icon3 from '../../../images/ban-icon-3.png';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-slider">
        <div className="banner__slide-item">
          <img className="banner__img" src={ban2} alt="banner" />
          <div className="banner__overlay">
            <div className="banner__content">
              <div className="banner__inner">
                <img className="banner__icon" src={icon3} alt="" />
                <h1 className="banner__title">pepperino</h1>
                <span className="banner__subtitle">spicy</span>
                <button className="banner__btn">order now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="banner__slide-item">
          <img className="banner__img" src={ban1} alt="" />
          <div className="banner__overlay">
            <div className="banner__content">
              <div className="banner__inner">
                <img className="banner__icon" src={icon1} alt="" />
                <h1 className="banner__title">bruchettas</h1>
                <span className="banner__subtitle">gouda cheese</span>
                <button className="banner__btn">order now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="banner__slide-item">
          <img className="banner__img" src={ban3} alt="" />
          <div className="banner__overlay">
            <div className="banner__content">
              <div className="banner__inner">
                <img className="banner__icon" src={icon2} alt="" />
                <h1 className="banner__title">japanese tea</h1>
                <span className="banner__subtitle">traditional</span>
                <button className="banner__btn">order now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
