import { IProduct } from './../../commons.types';
import { Dispatch } from 'redux';
import { ActionCart, ActionTypes } from './actionTypes';

export const addProductToCart =
  (product: IProduct) => (dispatch: Dispatch<ActionCart>, getStore: any) => {
    const { id } = product;
    let { cart } = getStore().cart;
    const inCart = cart.find((item: any) => item.id === id);

    if (!!inCart) {
      inCart.qty = inCart.qty + 1;
    } else {
      product.qty = 1;
      cart = [...cart, { ...product, qty: 1 }];
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    dispatch({
      type: ActionTypes.ADD_PRODUCT_TO_CART,
      payload: cart,
    });
  };

export const removeProductsFromCart =
  (product: IProduct) => (dispatch: Dispatch<ActionCart>, getStore: any) => {
    const { id } = product;
    let { cart } = getStore().cart;
    const inCart = cart.find((item: any) => item.id === id);

    if (!!inCart) {
      if (inCart.qty === 1) {
        cart = cart.filter((el: any) => el.id !== inCart.id);
      } else {
        inCart.qty = inCart.qty - 1;
      }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    dispatch({
      type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
      payload: cart,
    });
  };

export const deleteProductsFromCart =
  (product: IProduct) => (dispatch: Dispatch<ActionCart>, getStore: any) => {
    let { cart } = getStore().cart;
    cart = cart.filter((el: any) => el.id !== product.id);
    localStorage.setItem('cart', JSON.stringify(cart));
    dispatch({
      type: ActionTypes.DELETE_PRODUCT_FROM_CART,
      payload: cart,
    });
  };
