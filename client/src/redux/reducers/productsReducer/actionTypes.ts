import { IProduct } from '../../commons.types';

export enum ActionTypes {
  PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST',
  PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS',
  PRODUCT_LIST_ERROR = 'PRODUCT_LIST_ERROR',
}

interface ActionRequest {
  type: ActionTypes.PRODUCT_LIST_REQUEST;
}

interface ActionSuccess {
  type: ActionTypes.PRODUCT_LIST_SUCCESS;
  payload: IProduct[];
}

interface ActionError {
  type: ActionTypes.PRODUCT_LIST_ERROR;
  payload: string | null;
}

export type Action = ActionError | ActionRequest | ActionSuccess;
