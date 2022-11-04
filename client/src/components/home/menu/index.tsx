import React, {useState, useEffect} from 'react';

import card from '../../../images/card1.jpg';
import vegan from '../../../images/vegan.svg'
import pepper from '../../../images/pepper.svg'

import { useSelector } from 'react-redux';
import { ReduxState } from '../../../redux/store';
import { IProduct } from '../../../redux/reducers/productsReducer/type';
import { setSlider, setTabs } from '../../../utils';

const Menu = () => {
    const { products } = useSelector((state: ReduxState) => state.products);
    console.log(products.filter(prod => prod.category === "burgers"));
    const [productsFiltered, setProductsFiltered] = useState<IProduct[]>(
        products.filter(prod => prod.category === "burgers")
    );
    

    const getProductByCategory = (category: string) => {
        setProductsFiltered(products.filter(product => product.category === category))
    };

    const getProductsType = () => {
       return productsFiltered .reduce((acc: any, curr: any) => curr.type ? [...acc, curr.type] : acc, [])
    }

    //console.log("productsFiltered:", productsFiltered)

    {
        console.log(
            productsFiltered.reduce((acc:any, curr:any) => {
            return curr.type ? [...acc, curr.type] : acc
            }, [])
        )
    }
      

    useEffect(() => {
        
        const tabItem = document.querySelectorAll('.menu__tabs-item');
        const menuNavItem = document.querySelectorAll('.menu__nav-item');

        setTabs(tabItem, 'menu__tabs-item--active');
        setTabs(menuNavItem, 'menu__nav-item--active');
    }, [productsFiltered])
    return (
        <section className="menu">
            <div className="container">
                <ul className="menu__nav">
                    <li className="menu__nav-item menu__nav-item--active" onClick={() => getProductByCategory("burgers")}>Burgers</li>
                    <li className="menu__nav-item" onClick={() => getProductByCategory("pizza")}>Pizza</li>
                    <li className="menu__nav-item" onClick={() => getProductByCategory("sushi")}>Sushi</li>
                    <li className="menu__nav-item" onClick={() => getProductByCategory("noodles")}>Noodles</li>
                </ul>
                
                {!!getProductsType().length && (
                    <ul className="menu__tabs">
                        <li className="menu__tabs-item menu__tabs-item--active">All</li>
                        {[...new Set(getProductsType())].map((elt: any) => (
                            <li key={elt} className="menu__tabs-item">{elt}</li>
                        ))}
                    </ul>
                )}

                <div className="menu__slider">
                    <div className="menu-slider">
                        {/* {!!productsFiltered.length && productsFiltered.map(prod => (
                            <div className="menu__slide-item" key={prod.id}>
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
                        ))} */}
                        
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
