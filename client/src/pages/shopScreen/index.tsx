import React, { useState, useEffect } from 'react';
import Slider from "@mui/material/Slider";
import { Link } from 'react-router-dom';
import Card from '../../components/commons/card';
import { getTotalCartPrice } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { TypedDispatch, ReduxState } from '../../redux/store';
import Loader from '../../components/commons/loader';
import { deleteProductsFromCart } from '../../redux/reducers/cartReducer/actionCreator';
import fetchProducts from '../../redux/reducers/productsReducer/actionCreators';

const Shop = () => {
  const dispatch = useDispatch<TypedDispatch>();
  const { products, loading } = useSelector(
    (state: ReduxState) => state.products
  );

  const { cart } = useSelector((state: ReduxState) => state.cart);
  const [toggleSlide, setToggleSlide] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [range, setRange] = React.useState([0, 100]);
  function handleChanges(event: any, newValue: any) {
    setRange(newValue);
  }

  const getProductsByPriceFiltered = () => {
    return [...products].filter((item) => {
      return Number(item.price) >= range[0] && Number(item.price) <= range[1]
    });
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="products">
      <div className="container">
        <ul className="products__breadcrumb">
          <li className="products__b-item">
            <Link to="/">Home</Link>
          </li>
          <li className="products__b-item">Shop</li>
        </ul>
        <h1 className="products__title">Shop</h1>
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
                <Slider value={range} onChange={handleChanges} valueLabelDisplay="auto" />
                <p className="card__description">
                  Price: <span>${range[0]}</span> -{' '}
                  <span>${range[1]}</span>
                </p>
              </div>
              <br />
              <h4 className="products__filter-title">Cart</h4>
              {!cart?.length ? (
                <p style={{ color: '#fff', paddingTop: '15px' }}>
                  No products in the cart.
                </p>
              ) : (
                <>
                  <div className="products__filter-cart">
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
              <div className="products__filter-select">
                {/*  */}
              </div>
            </div>

            <div className="products__content">
              {loading && <Loader />}
              {!loading && !getProductsByPriceFiltered().length && (
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

export default Shop;
