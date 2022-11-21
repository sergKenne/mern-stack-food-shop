import React, { useEffect } from 'react';

import portrait from '../../../images/portrait.jpg';
import portrait2 from '../../../images/portrait-2.jpg';
import portrait3 from '../../../images/portrait-3.png';
import portrait4 from '../../../images/portrait-4.png';
import chief from '../../../images/chief.png';

import { useSelector } from 'react-redux';
import { ReduxState } from '../../../redux/store';
import Loader from '../../commons/loader';
import Card from '../../commons/card';
import { setSlider } from '../../../utils';
import { Link } from 'react-router-dom';

const ServiceHome = () => {
  const { products, loading } = useSelector(
    (state: ReduxState) => state.products
  );

  useEffect(() => {
    setSlider();
  }, []);

  return (
    <section className="service">
      <div className="container service__content">
        <div className="service__inner">
          <div className="service__chief">
            <div className="service__portrait">
              <img src={portrait} alt="" className="service__portrait-img" />
              <img src={chief} alt="" className="service__portrait-icon" />
            </div>
            <img className="service__portrait-2" src={portrait2} alt="" />
            <img className="service__portrait-3" src={portrait3} alt="" />
            <img className="service__portrait-4" src={portrait4} alt="" />
          </div>
          <div className="service__products">
            <h3 className="service__title">WE SERVE PASSION</h3>
            <div className="service__slider">
              {loading && <Loader />}
              <div className="service-slider">
                {products.length &&
                  products
                    .filter((item) => item.category === 'pizza')
                    .slice(1, 6)
                    .map((product) => (
                      <div
                        key={`${Math.random()}${new Date()}`}
                        className="service__slide-item"
                      >
                        <Card
                          product={{ ...product, addClass: 'service__card' }}
                        />
                      </div>
                    ))}

                <div className="service__slide-item">
                  <div className="card service__card service__card--view-more">
                    <Link to="/products-category/pizza">
                      <button className="card__btn-view-more">View more</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHome;
