import React from 'react';

import announce1 from '../../../images/announce1.jpg';
import announce2 from '../../../images/announce2.jpg';

const Announce = () => {
  return (
    <section className="announce">
      <div className="container">
        <div className="announce__list">
          <div className="announce__item">
            <img
              src={announce1}
              alt=""
              className="announce__img announce__img--first"
            />
            <div className="announce__overlay">
              <div className="announce__content">
                <div className="announce__inner">
                  <span className="announce__subtitle">BUY 2 GET 3</span>
                  <h1 className="announce__title">BIG BURGERS</h1>
                  <span className="announce__btn">read more</span>
                </div>
              </div>
            </div>
          </div>
          <div className="announce__item">
            <img src={announce2} alt="" className="announce__img" />
            <div className="announce__overlay">
              <div className="announce__content">
                <div className="announce__inner">
                  <span className="announce__subtitle">spicy</span>
                  <h1 className="announce__title">JAPANESE SUSHI</h1>
                  <span className="announce__btn">read more</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announce;
