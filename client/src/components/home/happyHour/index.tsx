import React from 'react';

import drink from '../../../images/drink.png';
import bgCocktail from '../../../images/bg-cocktail.png';
import cocktail from '../../../images/cocktail.jpg';

const HappyHour = () => {
  return (
    <section className="happy-hour">
      <div className="container">
        <div className="happy-hour__content">
          <div className="happy-hour__item">
            <img src={drink} alt="" className="happy-hour__icon" />
            <div className="happy-hour__time">mon - fri 7pm-8pm</div>
            <h5 className="happy-hour__title">visit us for happy hour!</h5>
            <span className="happy-hour__percent">15% off</span>
          </div>
          <div className="happy-hour__item happy-hour__item--picture">
            <img className="happy-hour__img1" src={bgCocktail} alt="" />
            <img className="happy-hour__img2" src={cocktail} alt="" />
          </div>
          <div className="happy-hour__item">
            <p className="happy-hour__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, sit provident tempore commodi ab qui accusantium
              minima
            </p>
            <button className="happy-hour__btn">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyHour;
