import { HostName } from './../../commons.types';
import { Action, ActionTypes } from './actionTypes';
import axios from 'axios';
import { Dispatch } from 'redux';

const fetchProducts = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionTypes.PRODUCT_LIST_REQUEST });
  try {
    const { data } = await axios.get(
      `${HostName.LOCAL_HOST_NAME}/products-categories`
    );

    dispatch({ type: ActionTypes.PRODUCT_LIST_SUCCESS, payload: data });
  } catch (err: any) {
    dispatch({ type: ActionTypes.PRODUCT_LIST_ERROR, payload: err.message });
  }
};

export default fetchProducts;
