import React, { FC, useState, useEffect } from 'react';
import { IProduct } from '../../../redux/commons.types';
import {
  addProductToCart,
  deleteProductsFromCart,
  removeProductsFromCart,
} from '../../../redux/reducers/cartReducer/actionCreator';
import { TypedDispatch } from '../../../redux/store';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

type ICartTable = {
  cartItem: IProduct;
};

const CartTable: FC<ICartTable> = ({ cartItem }) => {
  const dispatch = useDispatch<TypedDispatch>();
  const [counter, setCounter] = useState<number>(1);
  const { id, img, name, price, qty, category } = cartItem;
  const decreamentCounter = () => {
    if (counter <= 0) return;
    setCounter((prevState) => prevState - 1);
  };

  const increamentCounter = () => {
    setCounter((prevState) => prevState + 1);
  };

  useEffect(() => {
    qty && setCounter(qty);
  }, []);

  return (
    <tr key={id}>
      <td>
        <div className="card card--corbage" style={{ marginLeft: '0px' }}>
          <span
            className="card__delete-icon"
            onClick={() => dispatch(deleteProductsFromCart(cartItem))}
          >
            ×
          </span>
          <div className="card__header card__header--corbage card__header--table">
            <Link to={`/shop/${category}/${id}`}>
              <img src={img} alt="" className="card__img " />
            </Link>
          </div>
          <div className="card__body">
            <h5 className="card__title card__title--cart">
              <Link to={`/shop/${category}/${id}`} style={{ color: 'inherit' }}>
                {name}
              </Link>
            </h5>
          </div>
        </div>
      </td>
      <td className="products__cart-value-price">${price}</td>
      <td>
        <button className="detail__counter">
          <span
            onClick={() => {
              decreamentCounter();
              dispatch(removeProductsFromCart(cartItem));
            }}
          >
            -
          </span>
          <span>{counter}</span>
          <span
            onClick={() => {
              increamentCounter();
              dispatch(addProductToCart(cartItem));
            }}
          >
            +
          </span>
        </button>
      </td>
      <td>${qty ? (Number(price) * qty).toFixed(2) : price}</td>
    </tr>
  );
};

export default CartTable;
