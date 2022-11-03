import React, { useEffect } from 'react';

import portrait from '../../../images/portrait.jpg'
import portrait2 from '../../../images/portrait-2.jpg'
import portrait3 from '../../../images/portrait-3.png'
import portrait4 from '../../../images/portrait-4.png'
import chief from '../../../images/chief.png'

import card1 from '../../../images/card1.jpg'
import card2 from '../../../images/card2.jpg'
import card3 from '../../../images/card3.jpg'
import card4 from '../../../images/card4.jpg'

import pepper from '../../../images/pepper.svg'
import vegan from '../../../images/vegan.svg'
import { useSelector } from 'react-redux';
import { ReduxState } from '../../../redux/store';
import Loader from '../../commons/loader';
import Card from '../../commons/card';
import fetchProducts from '../../../redux/reducers/productsReducer/actionCreators';
import { useDispatch } from 'react-redux';
import { setSlider } from '../../../utils';



const ServiceHome = () => {
    const { products, loading } = useSelector((state: ReduxState) => state.products)
    //const dispatch = useDispatch();

    useEffect(() => {
        setSlider();
    },[])
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
                            {loading && <Loader/>}
                            <div className="service-slider">
                                {!!products.length && products.map(product => {
                                    return (
                                        <div className="service__slide-item" key={product.id}>
                                            <div className="service__slide-item">
                                                <div className="card service__card">
                                                    <div className="card__header">
                                                        <img
                                                            src={card2}
                                                            alt=""
                                                            className="card__img"
                                                        />
                                                    </div>
                                                    <div className="card__body">
                                                        <h5 className="card__title">Pizza Bianca</h5>
                                                        <div className="card__icons">
                                                            <img
                                                                className="card__icon"
                                                                src={vegan}
                                                                alt=""
                                                            />
                                                            <img
                                                                className="card__icon"
                                                                src={pepper}
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
                                    )
                                })}



                                

                                {/* <div className="service__slide-item">

                                    <div className="card service__card">
                                        <div className="card__header">
                                            <img
                                                src={card1}
                                                alt=""
                                                className="card__img"
                                            />
                                        </div>
                                        <div className="card__body">
                                            <h5 className="card__title">Pizza Bianca</h5>
                                            <div className="card__icons">
                                                <img
                                                    className="card__icon"
                                                    src={vegan}
                                                    alt=""
                                                />
                                                <img
                                                    className="card__icon"
                                                    src={pepper}
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
                                                src={card2}
                                                alt=""
                                                className="card__img"
                                            />
                                        </div>
                                        <div className="card__body">
                                            <h5 className="card__title">Pizza Bianca</h5>
                                            <div className="card__icons">
                                                <img
                                                    className="card__icon"
                                                    src={vegan}
                                                    alt=""
                                                />
                                                <img
                                                    className="card__icon"
                                                    src={pepper}
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
                                                src={card3}
                                                alt=""
                                                className="card__img"
                                            />
                                        </div>
                                        <div className="card__body">
                                            <h5 className="card__title">Pizza Bianca</h5>
                                            <div className="card__icons">
                                                <img
                                                    className="card__icon"
                                                    src={vegan}
                                                    alt="vegan"
                                                />
                                                <img
                                                    className="card__icon"
                                                    src={pepper}
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
                                                src={card4}
                                                alt=""
                                                className="card__img"
                                            />
                                        </div>
                                        <div className="card__body">
                                            <h5 className="card__title">Pizza Bianca</h5>
                                            <div className="card__icons">
                                                <img
                                                    className="card__icon"
                                                    src={vegan}
                                                    alt=""
                                                />
                                                <img
                                                    className="card__icon"
                                                    src={pepper}
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
                                </div> */}
                                <div className="service__slide-item">
                                    <div className="card service__card service__card--view-more">
                                        <button className='card__btn-view-more'>View more</button>
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
