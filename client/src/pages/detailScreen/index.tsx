import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Loader from '../../components/commons/loader';

import {
  addProductToCart,
  removeProductsFromCart,
} from '../../redux/reducers/cartReducer/actionCreator';
import { getProductDetail } from '../../redux/reducers/productDetailReducer/actionCreators';
import { ReduxState, TypedDispatch } from '../../redux/store';

const Detail = () => {
  const params = useParams();
  const dispatch = useDispatch<TypedDispatch>();
  const { productDetail, loading } = useSelector(
    (state: ReduxState) => state.productDetail
  );
  const [counter, setCounter] = useState<number>(0);
  const decreamentCounter = () => {
    if (counter <= 0) return;
    setCounter((prevState) => prevState - 1);
  };

  const increamentCounter = () => {
    setCounter((prevState) => prevState + 1);
  };

  useEffect(() => {
    params.id && dispatch(getProductDetail(params.id));
  }, []);

  return (
    <div className="detail">
      <div className="container">
        {loading ? (
          <Loader />
        ) : (
          <div className="detail__content">
            <div className="detail__picture">
              <img src={productDetail?.img} alt="" className="detail__img" />
            </div>
            <div className="detail__info">
              <div className="card detail__card">
                <div className="card__body">
                  <p className="card__description card__description--detail">
                    <span>
                      <Link to="/">Home - </Link>
                    </span>
                    <span>
                      <Link to="/shop">Shop - </Link>
                    </span>
                    <span>
                      <Link
                        to={`/products-category/${productDetail?.category}`}
                      >
                        {productDetail?.category} -{' '}
                      </Link>
                    </span>
                    <span>{productDetail?.name}</span>
                  </p>
                  <h5 className="card__title card__title--detail">
                    {productDetail?.name}
                  </h5>
                  <p className="card__description">
                    {productDetail?.ingredients.map((ing: any) => (
                      <span key={ing}>
                        {' · '}
                        {ing}
                      </span>
                    ))}
                  </p>
                  <h5 className="card__title">Description:</h5>
                  <p className="card__description card__description--info">
                    Vestibulum diam urna, maximus at facilisis sed, laoreet ac
                    diam. Sed dignissim placerat turpis eget posuere. Nam
                    ullamcorper sodales eros nec ultrices. Maecenas neque leo,
                    eleifend aliquam enim eu, pretium consectetur nisl. Maecenas
                    sagittis hendrerit dui, at pharetra elit lacinia sit amet.
                    Nam
                  </p>
                  <div className="card__price card__price--detail">
                    ${productDetail?.price}
                  </div>
                  <div className="detail__btn">
                    <button className="detail__counter">
                      <span
                        onClick={() => {
                          decreamentCounter();
                          new Promise((resolve) => {
                            if (!!productDetail) {
                              resolve(productDetail);
                            }
                          }).then((product: any) =>
                            dispatch(removeProductsFromCart(product))
                          );
                        }}
                      >
                        -
                      </span>
                      <span>{counter}</span>
                      <span
                        onClick={() => {
                          increamentCounter();
                          new Promise((resolve) => {
                            if (!!productDetail) {
                              resolve(productDetail);
                            }
                          }).then((product: any) =>
                            dispatch(addProductToCart(product))
                          );
                        }}
                      >
                        +
                      </span>
                    </button>
                    <button
                      className="card__btn card__btn--detail"
                      onClick={() => {
                        increamentCounter();
                        new Promise((resolve) => {
                          if (!!productDetail) {
                            resolve(productDetail);
                          }
                        }).then((product: any) =>
                          dispatch(addProductToCart(product))
                        );
                      }}
                    >
                      <svg className="card__btn-icon">
                        <use xlinkHref="#svg-cart"></use>
                      </svg>
                      <span>Add to card</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
