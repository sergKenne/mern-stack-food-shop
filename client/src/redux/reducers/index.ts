import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productDetailReducer from './productDetailReducer';
import productsCategoryReducer from './productsCategoryReducer';
import productReducer from './productsReducer';

const reducers = combineReducers({
  products: productReducer,
  productsCategory: productsCategoryReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
