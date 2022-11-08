import axios from 'axios';
import { ActionProductsCategory, ActionTypes } from './actionTypes';
import { Dispatch } from 'redux';

export const getProductsByCategory =
  (category: string) => async (dispatch: Dispatch<ActionProductsCategory>) => {
    dispatch({ type: ActionTypes.PRODUCT_CATEGORY_LIST_REQUEST });
    try {
      const { data } = await axios.get(`http://localhost:3000/${category}`);
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
