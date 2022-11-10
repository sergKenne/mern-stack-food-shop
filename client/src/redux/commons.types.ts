export enum HostName {
  LOCAL_HOST_NAME = 'https://mern-stack-food-shop.herokuapp.com/', //http://localhost:3000
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
};
