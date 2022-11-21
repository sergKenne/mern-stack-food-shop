import { HostName } from './../../commons.types';
import axios from 'axios';
import { ActionTypes, ActionProductDetail } from './actionTypes';
import { Dispatch } from 'redux';
import DB_PRODUCTS from '../../../../../db';

export const getProductDetail =
  (id: string) => async (dispatch: Dispatch<ActionProductDetail>) => {
    dispatch({ type: ActionTypes.PRODUCT_DETAIL_REQUEST });
    try {
      // const { data } = await axios.get(
      //   `${HostName.LOCAL_HOST_NAME}/products-categories/${id}`
      // );
      const data = DB_PRODUCTS['products-categories'].find((el) => el.id == Number(id));
      if(!data) throw new Error("product not found");
      
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
