import { typeFoods } from "../../home/home";
import { useConfig } from "../hooks/useConfig";

export const ConfigCard = ({ food }: { food: typeFoods }) => {
  const { available, price, strMeal, strMealThumb, idMeal } = food;
  const { setDishe, setModalOpen } = useConfig();

  const editFood = () => {
    const foodData = {
      available: String(available),
      price,
      strMeal,
      strMealThumb,
      strMealThumbUrl: null,
      idMeal: Number(idMeal),
    };

    setDishe(foodData);
    setModalOpen(true);
  };

  return (
    <div
      id="card"
      className="bg-blue-card-bg rounded-lg text-white p-4 flex flex-col justify-center items-center"
      key={idMeal}
    >
      <img
        src={strMealThumb}
        alt="comida"
        className="w-[150px] object-center mb-6 rounded-[100%] "
      />
      <div className="text-center flex flex-col gap-2">
        <h2 className="text-[18px] max-w-[180px] font-semibold leading-[1]">
          {strMeal}
        </h2>
        <p className="text-[16px] font-semibold">$ {price}</p>
        <p className="text-[16px] text-[#ABBBC2]">
          {available} Platos disponibles
        </p>
        <div>
          <button
            name="Edit"
            onClick={() => editFood()}
            className="w-full py-2 px-4 rounded-b-lg bg-red/30 cursor-pointer text-red"
          >
            Editar Plato
          </button>
        </div>
      </div>
    </div>
  );
};
