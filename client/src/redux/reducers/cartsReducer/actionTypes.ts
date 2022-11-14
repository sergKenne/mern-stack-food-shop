import { IProduct } from './../../commons.types';

export enum ActionTypes {
    ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
    REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
    GET_TOTAL_PRICE = 'GET_TOTAL_PRICE',
    GET_TOTAL_ITEMS = 'GET_TOTAL_ITEMS',
}


// export const addToCart = (product, qty) => ({
//   type: ADD_PRODUCT_TO_CART,
//   payload: { product, qty },
// });

// export const deleteToCart = (id) => ({
//   type: REMOVE_PRODUCT_FROM_CART,
//   payload: id,
// }); 

interface ActionAddToCart {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: {
        product: IProduct,
        qty: number
    }
}

interface ActionRemoveFromCart {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: number
}





// interface ActionSuccess {
//   type: ActionTypes.PRODUCT_DETAIL_SUCCESS;
//   payload: IProduct;
// }

// interface ActionError {
//   type: ActionTypes.PRODUCT_DETAIL_ERROR;
//   payload: string | null;
// }

export type ActionProductCart = ActionAddToCart | ActionRemoveFromCart ;
