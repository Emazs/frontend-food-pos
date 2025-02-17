import { createContext, ReactNode, useState } from "react";
import { getCategoriesAPI, getFoodByCategoriesAPI } from "../api/home.api";
import { HomeContextProps, typeFoods } from "../home";


const defaultContextValue: HomeContextProps = {
  getCategories: () => {},
  getFoodByCategories: () => {},
  categories: [],
  foods: [],
  tableFoods: [],
  setTableFoods: () => {},
  orders: [],
  setOrders: () => {},
  inputSearch: "",
  filterFoodsByName: () => {},
};

const HomeContext = createContext<HomeContextProps>(defaultContextValue);

export const HomeProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [foods, setFoods] = useState<typeFoods[]>([]);
  const [tableFoods, setTableFoods] = useState<typeFoods[]>([]);
  const [orders, setOrders] = useState<typeFoods[]>([]);
  const [inputSearch, setInputSearch] = useState("");

  const filterFoodsByName = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = event.currentTarget;

    setInputSearch(value);

    const foodFilter = foods.filter((food) =>
      food.strMeal.toLowerCase().includes(value.toLowerCase())
    );

    setTableFoods(foodFilter);
  };

  const getCategories = async () => {
    const categories = await getCategoriesAPI();

    if (!categories) {
      console.error("No se encontraron categorias");
      return true;
    }

    setCategories(categories.slice(7));
  };

  const getFoodByCategories = async (category: string) => {
    const foods = await getFoodByCategoriesAPI(category);

    if (!foods) {
      console.error("No se encontraron comidas disponibles");
      return true;
    }

    setFoods(foods);
    setTableFoods(foods);
  };

  return (
    <HomeContext.Provider
      value={{
        getCategories,
        categories,
        getFoodByCategories,
        foods,
        setOrders,
        orders,
        filterFoodsByName,
        inputSearch,
        tableFoods,
        setTableFoods,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContext;
