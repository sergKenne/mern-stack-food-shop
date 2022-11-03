import React from 'react';

import card from '../../../images/card1.jpg';
import vegan from '../../../images/vegan.svg'
import pepper from '../../../images/pepper.svg'

const Menu = () => {
    return (
        <section className="menu">
            <div className="container">
                <ul className="menu__nav">
                    <li className="menu__nav-item menu__nav-item--active">Burgers</li>
                    <li className="menu__nav-item">Pizza</li>
                    <li className="menu__nav-item">Sushi</li>
                    <li className="menu__nav-item">Noodles</li>
                </ul>
                <ul className="menu__tabs">
                    <li className="menu__tabs-item menu__tabs-item--active">All</li>
                    <li className="menu__tabs-item">spicy</li>
                    <li className="menu__tabs-item">vegetarian</li>
                    <li className="menu__tabs-item">mushrooms</li>
                    <li className="menu__tabs-item">meat</li>
                    <li className="menu__tabs-item">seafood</li>
                </ul>
                <div className="menu__slider">
                    <div className="menu-slider">
                        <div className="menu__slide-item">
                            <div className="card service__card">
                                <div className="card__header">
                                    <img src={card} alt="" className="card__img" />
                                </div>
                                <div className="card__body">
                                    <h5 className="card__title">Pizza Bianca</h5>
                                    <div className="card__icons">
                                        <img className="card__icon" src={vegan} alt="" />
                                        <img className="card__icon" src={pepper} alt="" />
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
                        <div className="menu__slide-item">
                            <div className="card service__card">
                                <div className="card__header">
                                    <img src={card} alt="" className="card__img" />
                                </div>
                                <div className="card__body">
                                    <h5 className="card__title">Pizza Bianca</h5>
                                    <div className="card__icons">
                                        <img className="card__icon" src={vegan} alt="" />
                                        <img className="card__icon" src={pepper} alt="" />
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
                        <div className="menu__slide-item">
                            <div className="card service__card">
                                <div className="card__header">
                                    <img src={card} alt="" className="card__img" />
                                </div>
                                <div className="card__body">
                                    <h5 className="card__title">Pizza Bianca</h5>
                                    <div className="card__icons">
                                        <img className="card__icon" src={vegan} alt="" />
                                        <img className="card__icon" src={pepper} alt="" />
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
                        <div className="menu__slide-item">
                            <div className="card service__card">
                                <div className="card__header">
                                    <img src={card} alt="" className="card__img" />
                                </div>
                                <div className="card__body">
                                    <h5 className="card__title">Pizza Bianca</h5>
                                    <div className="card__icons">
                                        <img className="card__icon" src={vegan} alt="" />
                                        <img className="card__icon" src={pepper} alt="" />
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
                        <div className="menu__slide-item">
                            <div className="card service__card">
                                <div className="card__header">
                                    <img src={card} alt="" className="card__img" />
                                </div>
                                <div className="card__body">
                                    <h5 className="card__title">Pizza Bianca</h5>
                                    <div className="card__icons">
                                        <img className="card__icon" src={vegan} alt="" />
                                        <img className="card__icon" src={pepper} alt="" />
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
                        <div className="menu__slide-item">
                            <div className="card service__card">
                                <div className="card__header">
                                    <img src={card} alt="" className="card__img" />
                                </div>
                                <div className="card__body">
                                    <h5 className="card__title">Pizza Bianca</h5>
                                    <div className="card__icons">
                                        <img className="card__icon" src={vegan} alt="" />
                                        <img className="card__icon" src={pepper} alt="" />
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
                        <div className="menu__slide-item">
                            <div className="card service__card">
                                <div className="card__header">
                                    <img src={card} alt="" className="card__img" />
                                </div>
                                <div className="card__body">
                                    <h5 className="card__title">Pizza Bianca</h5>
                                    <div className="card__icons">
                                        <img className="card__icon" src={vegan} alt="" />
                                        <img className="card__icon" src={pepper} alt="" />
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
                        <div className="menu__slide-item">
                            <div className="card service__card">
                                <div className="card__header">
                                    <img src={card} alt="" className="card__img" />
                                </div>
                                <div className="card__body">
                                    <h5 className="card__title">Pizza Bianca</h5>
                                    <div className="card__icons">
                                        <img className="card__icon" src={vegan} alt="" />
                                        <img className="card__icon" src={pepper} alt="" />
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
                        <div className="menu__slide-item">
                            <div className="card service__card">
                                <div className="card__header">
                                    <img src={card} alt="" className="card__img" />
                                </div>
                                <div className="card__body">
                                    <h5 className="card__title">Pizza Bianca</h5>
                                    <div className="card__icons">
                                        <img className="card__icon" src={vegan} alt="" />
                                        <img className="card__icon" src={pepper} alt="" />
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
        </section>
    );
};

export default Menu;
