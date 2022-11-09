import { IProduct } from '../../commons.types';

export type IStateProductDetail = {
  productDetail: IProduct | null;
  loading: boolean;
  error: string | null;
};
