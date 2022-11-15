import { IProduct } from '../../commons.types';

export enum ActionTypes {
  PRODUCT_CATEGORY_LIST_REQUEST = 'PRODUCT_CATEGORY_LIST_REQUEST',
  PRODUCT_CATEGORY_LIST_SUCCESS = 'PRODUCT_CATEGORY_LIST_SUCCESS',
  PRODUCT_CATEGORY_LIST_ERROR = 'PRODUCT_CATEGORY_LIST_ERROR',
}

interface ActionRequest {
  type: ActionTypes.PRODUCT_CATEGORY_LIST_REQUEST;
}

interface ActionSuccess {
  type: ActionTypes.PRODUCT_CATEGORY_LIST_SUCCESS;
  payload: IProduct[];
}

interface ActionError {
  type: ActionTypes.PRODUCT_CATEGORY_LIST_ERROR;
  payload: string | null;
}

export type ActionProductsCategory =
  | ActionError
  | ActionRequest
  | ActionSuccess;
