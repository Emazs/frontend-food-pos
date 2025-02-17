import { useEffect, useState, MouseEvent } from "react";
import { useHome } from "../../home/hooks/useHome";
import { ConfigCard } from "../components/ConfigCard";
import { AddDishe } from "../components/AddDishe";
import { useConfig } from "../hooks/useConfig";

export const ProductsManagement = () => {
  const { categories, tableFoods, getCategories, getFoodByCategories } =
    useHome();
  const { modalOpen, setModalOpen } = useConfig();

  const [filterFood, setFilterFood] = useState(categories[0] || "Pasta");

  const changeFilterFood = async (event: MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;

    setFilterFood(name);
    getFoodByCategories(name);
  };

  useEffect(() => {
    getCategories();
    getFoodByCategories(filterFood);
  }, [filterFood]);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="w-full h-full p-2 md:p-4 flex flex-col gap-4">
      {modalOpen && <AddDishe closeModal={closeModal} />}

      <section className="flex justify-between md:text-left pb-4">
        <h1 className="text-lg md:text-2xl font-semibold">
          Gestion de producto
        </h1>

        <button
          onClick={() => setModalOpen((prev) => (prev == true ? false : true))}
          name="Agregar plato"
          className="py-2 px-4 rounded-md bg-green-700 cursor-pointer"
        >
          Agregar plato
        </button>
      </section>

      <section>
        <section
          id="categories"
          className="w-full flex border-0 border-b-1 border-b-[#393C49] mb-4 overflow-x-auto"
        >
          {categories.map((food: string) => (
            <button
              key={food}
              name={food}
              onClick={(e) => changeFilterFood(e)}
              className={`p-2 pl-0 pt-0 pr-8 text-[14px] w-fit font-bold ${
                filterFood == food &&
                "text-orange border-0 border-b-2 border-b-orange"
              }   cursor-pointer`}
            >
              <p>{food}</p>
            </button>
          ))}
        </section>
        <section>
          <section>
            <h2 className="font-semibold">Choose Dishes</h2>
          </section>
          <section className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto max-h-[500px]">
            {tableFoods.map((food) => (
              <ConfigCard food={food} key={food.strMeal}/>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};
