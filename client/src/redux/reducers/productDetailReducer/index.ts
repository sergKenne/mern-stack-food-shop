import { ActionTypes, ActionProductDetail } from './actionTypes';
import { IStateProductDetail } from './types';

const initialState = {
  productDetail: null,
  loading: false,
  error: '',
};

const productDetailReducer = (
  state: IStateProductDetail = initialState,
  action: ActionProductDetail
) => {
  switch (action.type) {
    case ActionTypes.PRODUCT_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        productDetail: action.payload,
        loading: false,
      };
    case ActionTypes.PRODUCT_DETAIL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productDetailReducer;
