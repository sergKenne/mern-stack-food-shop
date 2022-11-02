import { Action, ActionTypes } from './actionTypes';
import axios from "axios";
import { Dispatch } from "redux";



const fetchProducts = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionTypes.PRODUCT_LIST_REQUEST });
  try {
    const { data } = await axios.get(
      'http://localhost:3000/products-categories'
    );
    console.log('data:', data);
    dispatch({ type: ActionTypes.PRODUCT_LIST_SUCCESS, payload: data });
  } catch (err: any) {
    dispatch({ type: ActionTypes.PRODUCT_LIST_ERROR, payload: err.message });
  }
};

export default fetchProducts;