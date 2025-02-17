import { typeFoods } from "../home";

export const Card = ({
  food,
  setOrders,
  setSubTotal,
}: {
  food: typeFoods;
  setOrders: React.Dispatch<React.SetStateAction<typeFoods[]>>;
  setSubTotal: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { available, price, strMeal, strMealThumb, idMeal } = food;

  const addOrder = () => {
    setOrders((prev) => {
      const orderExists = prev.find((item) => item.idMeal == idMeal);

      if (orderExists) {
        return prev.map((item) => item);
      } else {
        setSubTotal((prev) => Number((prev + Number(price)).toFixed(2)));
        return [
          ...prev,
          { available, price, strMeal, strMealThumb, idMeal, qty: 1 },
        ];
      }
    });
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
          {available} Bowls available
        </p>
        <div>
          <button
            onClick={addOrder}
            name="Spicy seasoned seafood noodles"
            className="py-2 px-4 rounded-md bg-green-700 cursor-pointer"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
