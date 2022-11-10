import { HostName } from './../../commons.types';
import axios from 'axios';
import { ActionTypes, ActionProductDetail } from './actionTypes';
import { Dispatch } from 'redux';

export const getProductDetail =
  (id: string) => async (dispatch: Dispatch<ActionProductDetail>) => {
    dispatch({ type: ActionTypes.PRODUCT_DETAIL_REQUEST });
    try {
      const { data } = await axios.get(
        `${HostName.LOCAL_HOST_NAME}/products-categories/${id}`
      );
      dispatch({
        type: ActionTypes.PRODUCT_DETAIL_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.PRODUCT_DETAIL_ERROR,
        payload: error.message,
      });
    }
  };
