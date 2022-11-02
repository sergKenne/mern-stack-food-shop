import { combineReducers } from "redux";
import productReducer from "./productsReducer";


const reducers = combineReducers({
    products: productReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
