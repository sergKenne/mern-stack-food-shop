import { IProduct } from './../../commons.types';
//import { CardProps } from './../../../components/commons/card/type';

export enum ActionTypes {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
  DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART',
}

interface ActionAddToCart {
  type: ActionTypes.ADD_PRODUCT_TO_CART;
  payload: IProduct[];
}

interface ActionRemoveFromCart {
  type: ActionTypes.REMOVE_PRODUCT_FROM_CART;
  payload: IProduct[];
}

interface ActionDeleteFromCart {
  type: ActionTypes.DELETE_PRODUCT_FROM_CART;
  payload: IProduct[];
}

export type ActionCart =
  | ActionAddToCart
  | ActionRemoveFromCart
  | ActionDeleteFromCart;
