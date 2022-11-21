import { HostName } from './../../commons.types';
import axios from 'axios';
import { ActionProductsCategory, ActionTypes } from './actionTypes';
import { Dispatch } from 'redux';
import DB_PRODUCTS from '../../../../../db';

export const getProductsByCategory =
  (category: string) => async (dispatch: Dispatch<ActionProductsCategory>) => {
    dispatch({ type: ActionTypes.PRODUCT_CATEGORY_LIST_REQUEST });
    try {
      // const { data } = await axios.get(
      //   `${HostName.LOCAL_HOST_NAME}/${category}`
      // );
      const data = DB_PRODUCTS['products-categories'].filter(
        (el) => el.category == category
      );
      if (!data) throw new Error('product not found');
      dispatch({
        type: ActionTypes.PRODUCT_CATEGORY_LIST_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.PRODUCT_CATEGORY_LIST_ERROR,
        payload: error.message,
      });
    }
  };
