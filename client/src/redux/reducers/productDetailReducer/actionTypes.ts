import { IProduct } from '../../commons.types';

export enum ActionTypes {
  PRODUCT_DETAIL_REQUEST = 'PRODUCT_DETAIL_REQUEST',
  PRODUCT_DETAIL_SUCCESS = 'PRODUCT_DETAIL_SUCCESS',
  PRODUCT_DETAIL_ERROR = 'PRODUCT_DETAIL_ERROR',
}

interface ActionRequest {
  type: ActionTypes.PRODUCT_DETAIL_REQUEST;
}

interface ActionSuccess {
  type: ActionTypes.PRODUCT_DETAIL_SUCCESS;
  payload: IProduct;
}

interface ActionError {
  type: ActionTypes.PRODUCT_DETAIL_ERROR;
  payload: string | null;
}

export type ActionProductDetail = ActionError | ActionRequest | ActionSuccess;
