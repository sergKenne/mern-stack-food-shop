import { ActionProductsCategory, ActionTypes } from './actionTypes';
import { IStateProductsCategory } from './types';

const initialState = {
  productsCategory: [],
  loading: false,
  error: '',
};

const productsCategoryReducer = (
  state: IStateProductsCategory = initialState,
  action: ActionProductsCategory
) => {
  switch (action.type) {
    case ActionTypes.PRODUCT_CATEGORY_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.PRODUCT_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        productsCategory: action.payload,
        loading: false,
      };
    case ActionTypes.PRODUCT_CATEGORY_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsCategoryReducer;
