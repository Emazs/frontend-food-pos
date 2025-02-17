export const getCategoriesAPI = async () => {
  const URL_END_POINT =
    "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

  try {
    const response = await fetch(URL_END_POINT, {
      method: "GET",
    });

    const data = await response.json();
    const categories = data.meals.map(
      (meal: { strCategory: string }) => meal.strCategory
    );
    return categories;
  } catch (err) {
    console.error("Error al obtener las categorias:", err);
    return null;
  }
};

export const getFoodByCategoriesAPI = async (category: string) => {
  const URL_END_POINT = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

  try {
    const response = await fetch(URL_END_POINT, { method: "GET" });
    const data = await response.json()
/*     let price = (Math.random() * 3) + 2
    let available = Math.floor((Math.random() * 20) + 1) */
    const foods = data.meals.map((food: {idMeal: string, strMealThumb: string, strMeal: string}) => ({
      ...food,
      price:  (Math.random() * 3 + 2).toFixed(2),
      available: Math.floor((Math.random() * 20) + 1)
    }))
    
    return foods
  } catch (err) {
    console.error("Error al obtener las comidas:", err);
    return null;
  }
};

