import React from 'react';

import info1 from '../../../images/info1.svg';
import info2 from '../../../images/info2.svg';
import info3 from '../../../images/info3.svg';

const Info = () => {
  return (
    <section className="info">
      <div className="container">
        <div className="info__inner">
          <div className="info__item">
            <img src={info1} alt="" className="info__img" />
            <p className="info__subtitle">60 min Delivery</p>
            <p className="info__description">
              Blowzy red vixens fight for a quick jump
            </p>
          </div>
          <div className="info__item">
            <img src={info2} alt="" className="info__img" />
            <p className="info__subtitle">Best Shefs</p>
            <p className="info__description">
              The quick, brown fox jumps over a lazy dog
            </p>
          </div>
          <div className="info__item">
            <img src={info3} alt="" className="info__img" />
            <p className="info__subtitle">Fresh Ingredients</p>
            <p className="info__description">
              My faxed joke won a pager in the cable TV quiz show
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
