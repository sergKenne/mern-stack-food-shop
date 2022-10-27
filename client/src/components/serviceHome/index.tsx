import React from 'react';
import portrait from '../../images/portrait.jpg'
import portrait2 from '../../images/portrait-2.jpg'
import portrait3 from '../../images/portrait-3.png'
import portrait4 from '../../images/portrait-4.png'
import chief from '../../images/chief.png'

const ServiceHome = () => {
  return (
    <section className="service">
      <div className="container service__content">
        <div className="service__inner">
          <div className="service__chief">
            <div className="service__portrait">
              <img
                src={portrait}
                alt=""
                className="service__portrait-img"
              />
              <img
                src={chief}
                alt=""
                className="service__portrait-icon"
              />
            </div>
            <img
              className="service__portrait-2"
              src={portrait2}
              alt=""
            />
            <img
              className="service__portrait-3"
               src={portrait3}
              alt=""
            />
            <img
              className="service__portrait-4"
              src={portrait4}
              alt=""
            />
          </div>
          <div className="service__products">
            <h3 className="service__title">WE SERVE PASSION</h3>
            <div className="service__slider">
              <div className="service-slider">
                <div className="service__slide-item">
                  <div className="card service__card">
                    <div className="card__header">
                      <img
                        src="images/card1.jpg"
                        alt=""
                        className="card__img"
                      />
                    </div>
                    <div className="card__body">
                      <h5 className="card__title">Pizza Bianca</h5>
                      <div className="card__icons">
                        <img
                          className="card__icon"
                          src="images/vegan.svg"
                          alt=""
                        />
                        <img
                          className="card__icon"
                          src="images/pepper.svg"
                          alt=""
                        />
                        <span>
                          <svg className="card__icon">
                            <use xlinkHref="#svg-info"></use>
                          </svg>
                        </span>
                      </div>
                      <p className="card__description">
                        Garlic Flatbread with Mozzarella · Parmesan · Garlic ·
                        Rosemary
                      </p>
                      <div className="card__price">$13.99</div>
                      <button className="card__btn">
                        <svg className="card__btn-icon">
                          <use xlinkHref="#svg-cart"></use>
                        </svg>
                        <span>add to card</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="service__slide-item">
                  <div className="card service__card">
                    <div className="card__header">
                      <img
                        src="images/card2.jpg"
                        alt=""
                        className="card__img"
                      />
                    </div>
                    <div className="card__body">
                      <h5 className="card__title">Pizza Bianca</h5>
                      <div className="card__icons">
                        <img
                          className="card__icon"
                          src="images/vegan.svg"
                          alt=""
                        />
                        <img
                          className="card__icon"
                          src="images/pepper.svg"
                          alt=""
                        />
                        <span>
                          <svg className="card__icon">
                            <use xlinkHref="#svg-info"></use>
                          </svg>
                        </span>
                      </div>
                      <p className="card__description">
                        Garlic Flatbread with Mozzarella · Parmesan · Garlic ·
                        Rosemary
                      </p>
                      <div className="card__price">$13.99</div>
                      <button className="card__btn">
                        <svg className="card__btn-icon">
                          <use xlinkHref="#svg-cart"></use>
                        </svg>
                        <span>add to card</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="service__slide-item">
                  <div className="card service__card">
                    <div className="card__header">
                      <img
                        src="images/card3.jpg"
                        alt=""
                        className="card__img"
                      />
                    </div>
                    <div className="card__body">
                      <h5 className="card__title">Pizza Bianca</h5>
                      <div className="card__icons">
                        <img
                          className="card__icon"
                          src="images/vegan.svg"
                          alt=""
                        />
                        <img
                          className="card__icon"
                          src="images/pepper.svg"
                          alt=""
                        />
                        <span>
                          <svg className="card__icon">
                            <use xlinkHref="#svg-info"></use>
                          </svg>
                        </span>
                      </div>
                      <p className="card__description">
                        Garlic Flatbread with Mozzarella · Parmesan · Garlic ·
                        Rosemary
                      </p>
                      <div className="card__price">$13.99</div>
                      <button className="card__btn">
                        <svg className="card__btn-icon">
                          <use xlinkHref="#svg-cart"></use>
                        </svg>
                        <span>add to card</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="service__slide-item">
                  <div className="card service__card">
                    <div className="card__header">
                      <img
                        src="images/card4.jpg"
                        alt=""
                        className="card__img"
                      />
                    </div>
                    <div className="card__body">
                      <h5 className="card__title">Pizza Bianca</h5>
                      <div className="card__icons">
                        <img
                          className="card__icon"
                          src="images/vegan.svg"
                          alt=""
                        />
                        <img
                          className="card__icon"
                          src="images/pepper.svg"
                          alt=""
                        />
                        <span>
                          <svg className="card__icon">
                            <use xlinkHref="#svg-info"></use>
                          </svg>
                        </span>
                      </div>
                      <p className="card__description">
                        Garlic Flatbread with Mozzarella · Parmesan · Garlic ·
                        Rosemary
                      </p>
                      <div className="card__price">$13.99</div>
                      <button className="card__btn">
                        <svg className="card__btn-icon">
                          <use xlinkHref="#svg-cart"></use>
                        </svg>
                        <span>add to card</span>
                      </button>
                    </div>
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
