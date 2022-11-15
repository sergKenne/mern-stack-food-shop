export type CardInfoProps = {
  setToggleInfo: React.Dispatch<React.SetStateAction<boolean>>;
  toggleInfo: boolean;
  info: {
    calories: number;
    carbohydrates: number;
    protein: number;
    totalFat: number;
  };
};

export type CardProps = {
  product: {
    id: number;
    img: string;
    category: string;
    name: string;
    ingredients: string[];
    composition?: { isPerpper: boolean; isVegan: boolean };
    price: string;
    info?: {
      calories: number;
      totalFat: number;
      carbohydrates: number;
      protein: number;
    };
    addClass?: string;
    type?: string;
    qty?: number;
  };
};
