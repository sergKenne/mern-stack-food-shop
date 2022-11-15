import { IProduct } from '../../commons.types';

export type IStateProductsCategory = {
  productsCategory: IProduct[];
  loading: boolean;
  error: string | null;
};
