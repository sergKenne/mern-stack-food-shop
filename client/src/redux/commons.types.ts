export enum HostName {
  LOCAL_HOST_NAME = 'http://localhost:3000', 

  //LOCAL_HOST_NAME ="https://food-shop-tscript.herokuapp.com",
}

export type IProduct = {
  id: number;
  img: string;
  category: string;
  name: string;
  ingredients: string[];
  composition?: {
    isPerpper: boolean;
    isVegan: boolean;
  };
  price: string;
  info?: {
    calories: number;
    totalFat: number;
    carbohydrates: number;
    protein: number;
  };
  type?: string;
  qty?: number;
};
