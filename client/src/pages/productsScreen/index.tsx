import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { Link } from 'react-router-dom';
import Card from '../../components/commons/card';
import { getTabsElements, getTotalCartPrice, setTabs } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { TypedDispatch, ReduxState } from '../../redux/store';
import { getProductsByCategory } from '../../redux/reducers/productsCategoryReducer/actionCreators';
import { IProduct } from '../../redux/commons.types';
import Loader from '../../components/commons/loader';
import { deleteProductsFromCart } from '../../redux/reducers/cartReducer/actionCreator';

const Products = () => {
  const { category } = useParams();
  const dispatch = useDispatch<TypedDispatch>();
  const { productsCategory, loading } = useSelector(
    (state: ReduxState) => state.productsCategory
  );
  const { cart } = useSelector((state: ReduxState) => state.cart);
  const [productsFilter, setProductsFilter] = useState<IProduct[]>([]);
  const [toggleSlide, setToggleSlide] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [rangeValue, setRangeValue] = useState<any>({
    value: { min: 0, max: 110 },
  });

  const filterProductsByType = (name: string) => {
    if (name !== 'all') {
      setProductsFilter(productsCategory.filter((el) => el.type === name));
    } else {
      setProductsFilter(productsCategory);
    }
  };

  const getProductsByPriceFiltered = () => {
    return [...productsFilter].filter((item) => {
      return (
        item.price >= rangeValue.value.min && item.price <= rangeValue.value.max
      );
    });
  };

  useEffect(() => {
    const tabItem = document.querySelectorAll('.menu__tabs-item');
    setTabs(tabItem, 'menu__tabs-item--active');
    setProductsFilter(productsCategory);
  }, [productsCategory]);

  useEffect(() => {
    category && dispatch(getProductsByCategory(category));
  }, []);

  return (
    <div className="products">
      <div className="container">
        <ul className="products__breadcrumb">
          <li className="products__b-item">
            <Link to="/">Home</Link>
          </li>
          <li className="products__b-item">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="products__b-item">{category}</li>
        </ul>
        <h1 className="products__title">{category}</h1>
        <div className="products__inner">
          <div
            className={`products__filter ${
              toggleSlide ? 'toggle-sidebar' : ''
            }`}
          >
            <div className="products__filter-content">
              <span
                className="header__menu-close"
                onClick={() => setToggleSlide(false)}
              >
                <svg className="header__bar-svg">
                  <use xlinkHref="#svg-close"></use>
                </svg>
              </span>
              <h4 className="products__filter-title">Filter by price</h4>
              <div className="products__range">
                <InputRange
                  maxValue={110}
                  minValue={0}
                  value={rangeValue.value}
                  data-filter="range"
                  onChange={(value) => {
                    setRangeValue({ value });
                  }}
                />
                <p className="card__description">
                  Price: <span>${rangeValue.value.min}</span> -{' '}
                  <span>${rangeValue.value.max}</span>
                </p>
              </div>
              {/* <button className="card__btn card__btn--range">
                                <span>Filter</span>
                            </button> */}
              <br />
              <h4 className="products__filter-title">Cart</h4>
              {!cart?.length ? (
                <p style={{ color: '#fff', paddingTop: '15px' }}>
                  No products in the cart.
                </p>
              ) : (
                <>
                  <div className="product__filter-cart">
                    {cart?.map((prod: any) => (
                      <div className="card card--corbage" key={prod.id}>
                        <span
                          className="card__delete-icon"
                          onClick={() => dispatch(deleteProductsFromCart(prod))}
                        >
                          ×
                        </span>
                        <div className="card__header card__header--corbage">
                          <img src={prod.img} alt="" className="card__img" />
                        </div>
                        <div className="card__body">
                          <h5 className="card__title card__title--corbage">
                            {prod.name}
                          </h5>
                          <p className="card__description">
                            <span>{prod.qty}</span> × $<span>{prod.price}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="products__filter-subtotal">
                    <p className="card__description card__description--subtotal">
                      <span>Subtotal:</span>
                      <span className="card__filter-price">
                        ${getTotalCartPrice(cart)}
                      </span>
                    </p>
                  </div>
                  <div className="products__filter-btn">
                    <button className="card__btn card__btn--range">
                      <span>
                        <Link to="/cart">View Cart</Link>
                      </span>
                    </button>
                    <button className="card__btn card__btn--filter">
                      <span>Checkout</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="products__items">
            <div className="products__filter-sort">
              <span
                className="products__btn-show"
                onClick={() => setToggleSlide(true)}
              >
                <svg className="products__close-svg">
                  <use xlinkHref="#svg-filter"></use>
                </svg>
                <span>Filter</span>
              </span>

              {category &&
                !!getTabsElements(category, productsCategory).length && (
                  <ul className="menu__tabs">
                    <li
                      className="menu__tabs-item menu__tabs-item--active"
                      onClick={() => filterProductsByType('all')}
                    >
                      All
                    </li>
                    {getTabsElements(category, productsCategory).map(
                      (elt: any) => (
                        <li
                          key={elt}
                          className="menu__tabs-item"
                          onClick={() => filterProductsByType(elt)}
                        >
                          {elt}
                        </li>
                      )
                    )}
                  </ul>
                )}

              <div className="products__filter-select">
                <select name="" id="">
                  <option value="">filter1</option>
                  <option value="">filter2</option>
                  <option value="">filter3</option>
                </select>
              </div>
            </div>
            <div className="products__content">
              {loading && <Loader />}
              {!getProductsByPriceFiltered().length && (
                <p className="info__description info__description--noFound">
                  No products were found matching your selection.
                </p>
              )}
              {getProductsByPriceFiltered().map((prod) => (
                <Card
                  key={prod.id}
                  product={{ ...prod, addClass: 'products__card' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
