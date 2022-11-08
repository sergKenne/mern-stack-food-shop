import { combineReducers } from "redux";
import productsCategoryReducer from "./productsCategoryReducer";
import productReducer from "./productsReducer";


const reducers = combineReducers({
    products: productReducer,
    productsCategory:productsCategoryReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
