import React, { useState, useRef } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';


import card from '../../images/card1.jpg'

const Products = () => {
    const [toggleSlide, setToggleSlide] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [rangeValue, setRangeValue] = useState<any>({
        value: { min: 0, max: 345 },
    });
    

    //const rangeRef = useRef()


    

    return (
        <div className="products">
            <div className="container">
                <ul className="products__breadcrumb">
                    <li className="products__b-item">Home</li>
                    <li className="products__b-item">Shop</li>
                    <li className="products__b-item">Steack</li>
                </ul>
                <h1 className="products__title">Steack</h1>
                <div className="products__filter-sort">
                    <span className="products__btn-show" onClick={() => setToggleSlide(true)}>
                        <svg className="products__close-svg"><use xlinkHref="#svg-filter"></use></svg>
                        <span>Filter</span>
                    </span>
                    <div className="products__filter-select">
                        <select name="" id="">
                            <option value="">filter1</option>
                        <option value="">filter2</option>
                        <option value="">filter3</option>
                        </select>
                    </div>
                </div>
                <div className="products__inner">
                    <div className={`products__filter ${toggleSlide ? "toggle-sidebar" : ""}`}>
                        <div className="products__filter-content">
                            <span className="header__menu-close" onClick={() => setToggleSlide(false)}>
                                <svg className="header__bar-svg"><use xlinkHref="#svg-close"></use></svg>
                            </span>
                            <h4 className="products__filter-title">Filter by price</h4>
                            <div className="products__range">
                                <InputRange
                                    maxValue={345}
                                    minValue={0}
                                    value={rangeValue.value}
                                    //ref={rangeRef}
                                    data-filter="range"
                                    onChange={(value) => { setRangeValue({ value }); }}
                                //onChangeComplete={(value) => console.log(value)}
                                />
                                <p className="card__description">Price: <span>${rangeValue.value.min}</span> - <span>${rangeValue.value.max}</span></p>
                            </div>

                            <button className="card__btn card__btn--range">
                                <span>Filter</span>
                            </button>
                            <br/><br/>
                            <h4 className="products__filter-title">Cart</h4>
                            <div className="product__filter-cart">
                                <div className="card card--corbage">
                                    <span className='card__delete-icon'>×</span>
                                    <div className="card__header card__header--corbage">
                                        <img src={card} alt="" className="card__img" />
                                    </div>
                                    <div className="card__body">
                                        <h5 className="card__title card__title--corbage">Pizza Bianca</h5>
                                        <p className="card__description"><span>1</span> × $<span>13.99</span></p>
                                    </div>
                                </div>
                                <div className="card card--corbage">
                                    <span className='card__delete-icon'>×</span>
                                    <div className="card__header card__header--corbage">
                                        <img src={card} alt="" className="card__img" />
                                    </div>
                                    <div className="card__body">
                                        <h5 className="card__title card__title--corbage">Pizza Bianca</h5>
                                        <p className="card__description"><span>1</span> × <span>$13.99</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="products__filter-subtotal">
                                <p className="card__description card__description--subtotal">
                                    <span>Subtotal:</span><span className='card__filter-price'>$13.99</span>
                                </p>
                            </div>
                            <div className="products__filter-btn">
                                <button className="card__btn card__btn--range">
                                    <span>View Cart</span>
                                </button>
                                <button className="card__btn card__btn--filter">
                                    <span>Checkout</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="products__items">
                        <div className="card products__card">
                            <div className="card__header">
                                <img src={card} alt="" className="card__img" />
                            </div>
                            <div className="card__body">
                                <h5 className="card__title">Pizza Bianca</h5>
                                <div className="card__icons">
                                    <img className="card__icon" src="images/vegan.svg" alt="" />
                                    <span>
                                        <svg className="card__icon"><use xlinkHref="#svg-info"></use></svg>
                                    </span>
                                </div>
                                <p className="card__description">Garlic Flatbread with Mozzarella · Parmesan · Garlic · Rosemary</p>
                                <div className="card__price">$13.99</div>
                                <button className="card__btn">
                                    <svg className="card__btn-icon"><use xlinkHref="#svg-cart"></use></svg>
                                    <span>add to card</span>
                                </button>
                            </div>
                        </div>
                        <div className="card products__card">
                            <div className="card__header">
                                <img src={card} alt="" className="card__img" />
                            </div>
                            <div className="card__body">
                                <h5 className="card__title">Pizza Bianca</h5>
                                <div className="card__icons">
                                    <img className="card__icon" src="images/vegan.svg" alt="" />
                                    <span>
                                        <svg className="card__icon"><use xlinkHref="#svg-info"></use></svg>
                                    </span>
                                </div>
                                <p className="card__description">Garlic Flatbread with Mozzarella · Parmesan · Garlic · Rosemary</p>
                                <div className="card__price">$13.99</div>
                                <button className="card__btn">
                                    <svg className="card__btn-icon"><use xlinkHref="#svg-cart"></use></svg>
                                    <span>add to card</span>
                                </button>
                            </div>
                        </div>
                        <div className="card products__card">
                            <div className="card__header">
                                <img src={card} alt="" className="card__img" />
                            </div>
                            <div className="card__body">
                                <h5 className="card__title">Pizza Bianca</h5>
                                <div className="card__icons">
                                    <img className="card__icon" src="images/vegan.svg" alt="" />
                                    <span>
                                        <svg className="card__icon"><use xlinkHref="#svg-info"></use></svg>
                                    </span>
                                </div>
                                <p className="card__description">Garlic Flatbread with Mozzarella · Parmesan · Garlic · Rosemary</p>
                                <div className="card__price">$13.99</div>
                                <button className="card__btn">
                                    <svg className="card__btn-icon"><use xlinkHref="#svg-cart"></use></svg>
                                    <span>add to card</span>
                                </button>
                            </div>
                        </div>
                        <div className="card products__card">
                            <div className="card__header">
                                <img src={card} alt="" className="card__img" />
                            </div>
                            <div className="card__body">
                                <h5 className="card__title">Pizza Bianca</h5>
                                <div className="card__icons">
                                    <img className="card__icon" src="images/vegan.svg" alt="" />
                                    <span>
                                        <svg className="card__icon"><use xlinkHref="#svg-info"></use></svg>
                                    </span>
                                </div>
                                <p className="card__description">Garlic Flatbread with Mozzarella · Parmesan · Garlic · Rosemary</p>
                                <div className="card__price">$13.99</div>
                                <button className="card__btn">
                                    <svg className="card__btn-icon"><use xlinkHref="#svg-cart"></use></svg>
                                    <span>add to card</span>
                                </button>
                            </div>
                        </div>
                        <div className="card products__card">
                            <div className="card__header">
                                <img src={card} alt="" className="card__img" />
                            </div>
                            <div className="card__body">
                                <h5 className="card__title">Pizza Bianca</h5>
                                <div className="card__icons">
                                    <img className="card__icon" src="images/vegan.svg" alt="" />
                                    <span>
                                        <svg className="card__icon"><use xlinkHref="#svg-info"></use></svg>
                                    </span>
                                </div>
                                <p className="card__description">Garlic Flatbread with Mozzarella · Parmesan · Garlic · Rosemary</p>
                                <div className="card__price">$13.99</div>
                                <button className="card__btn">
                                    <svg className="card__btn-icon"><use xlinkHref="#svg-cart"></use></svg>
                                    <span>add to card</span>
                                </button>
                            </div>
                        </div>
                        <div className="card products__card">
                            <div className="card__header">
                                <img src={card} alt="" className="card__img" />
                            </div>
                            <div className="card__body">
                                <h5 className="card__title">Pizza Bianca</h5>
                                <div className="card__icons">
                                    <img className="card__icon" src="images/vegan.svg" alt="" />
                                    <span>
                                        <svg className="card__icon"><use xlinkHref="#svg-info"></use></svg>
                                    </span>
                                </div>
                                <p className="card__description">Garlic Flatbread with Mozzarella · Parmesan · Garlic · Rosemary</p>
                                <div className="card__price">$13.99</div>
                                {/* <button className="card__btn">
                                  <svg className="card__btn-icon"><use xlinkHref="#svg-cart"></use></svg>
                                  <span>add to card</span>
                              </button> */}

                                <button className="card__counter">
                                    <span>-</span>
                                    <span>1</span>
                                    <span>+</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products