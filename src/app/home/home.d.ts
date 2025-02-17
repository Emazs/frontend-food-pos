export interface HomeContextProps {
  getCategories: () => void;
  getFoodByCategories: (category: string) => void;
  categories: string[];
  foods: typeFoods[];
  tableFoods: typeFoods[];
  setTableFoods: React.Dispatch<React.SetStateAction<typeFoods[]>>;
  orders: typeFoods[];
  setOrders: React.Dispatch<React.SetStateAction<typeFoods[]>>;
  inputSearch: string;
  filterFoodsByName: ( event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export interface typeFoods {
  available: number;
  idMeal: string;
  price: string;
  strMeal: string;
  strMealThumb: string;
}
