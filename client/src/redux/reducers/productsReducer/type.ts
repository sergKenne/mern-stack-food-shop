import { IProduct } from './../../commons.types';

export type IStateProducts = {
  products: IProduct[];
  loading: boolean;
  error: string | null;
};
