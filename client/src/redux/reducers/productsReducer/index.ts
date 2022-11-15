import { Action, ActionTypes } from './actionTypes';
import { IStateProducts } from './type';

const initialState = {
  products: [],
  loading: false,
  error: '',
};

const productReducer = (
  state: IStateProducts = initialState,
  action: Action
): IStateProducts => {
  switch (action.type) {
    case ActionTypes.PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case ActionTypes.PRODUCT_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
