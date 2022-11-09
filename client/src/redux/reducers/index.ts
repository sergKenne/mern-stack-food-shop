import { combineReducers } from "redux";
import productDetailReducer from "./productDetailReducer";
import productsCategoryReducer from "./productsCategoryReducer";
import productReducer from "./productsReducer";


const reducers = combineReducers({
    products: productReducer,
    productsCategory: productsCategoryReducer,
    productDetail: productDetailReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
