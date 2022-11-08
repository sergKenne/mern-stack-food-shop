
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
