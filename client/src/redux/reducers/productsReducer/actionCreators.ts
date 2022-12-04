import { HostName } from './../../commons.types';
import { Action, ActionTypes } from './actionTypes';
import axios from 'axios';
import { Dispatch } from 'redux';
import DB_PRODUCTS from '../../../../../db';

const fetchProducts = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionTypes.PRODUCT_LIST_REQUEST });
  try {
    //for json server//
    // const { data } = await axios.get(
    //   `${HostName.LOCAL_HOST_NAME}/products-categories`
    // );

    const data = DB_PRODUCTS['products-categories'];

    dispatch({ type: ActionTypes.PRODUCT_LIST_SUCCESS, payload: data });
  } catch (err: any) {
    dispatch({ type: ActionTypes.PRODUCT_LIST_ERROR, payload: err.message });
  }
};

export default fetchProducts;
