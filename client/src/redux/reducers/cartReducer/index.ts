import { ActionCart, ActionTypes } from './actionTypes';
import { IStateCartProducts } from './types';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart') || 'false') || [],
};

const cartReducer = (
  state: IStateCartProducts = initialState,
  action: ActionCart
) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_TO_CART:
      return {
        cart: action.payload,
      };
    case ActionTypes.REMOVE_PRODUCT_FROM_CART:
      return {
        cart: action.payload,
      };
    case ActionTypes.DELETE_PRODUCT_FROM_CART:
      return {
        cart: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
