import { MouseEvent, useEffect, useState } from "react";
import { search } from "../../../assets/svg/svg";
import { ItemsDelivery } from "../components/ItemsDelivery";
import "../style/home.css";
import { Card } from "../components/Card";
import { useHome } from "../hooks/useHome";
import { ModalPayment } from "../components/ModalPayment";

export const Home = () => {
  const {
    getCategories,
    categories,
    getFoodByCategories,
    setOrders,
    orders,
    filterFoodsByName,
    inputSearch,
    tableFoods,
  } = useHome();
  const [filterFood, setFilterFood] = useState(categories[0] || "Pasta");
  const [delivery, setDelivery] = useState("Dine In");
  const [subTotal, setSubTotal] = useState(0);
  const date = Date().split(" ", 4).join(" ");
  const [isModalopen, setIsModalopen] = useState(false);

  useEffect(() => {
    getCategories();
    getFoodByCategories(filterFood);
  }, [filterFood]);

  const changeFilterFood = async (
    event: MouseEvent<HTMLButtonElement>,
    delivery: string
  ) => {
    const { name } = event.currentTarget;

    if (delivery) {
      setDelivery(name);
    } else {
      setFilterFood(name);

      getFoodByCategories(name);
    }
  };

  const closeModal = () => {
    setOrders([]);
    setSubTotal(0);
    setDelivery("Dine In");
    setFilterFood("Pasta");

    setIsModalopen(false);
  };

  return (
    <section className="w-full flex max-[769px]:flex-col">
      {isModalopen && (
        <ModalPayment
          subTotal={subTotal}
          setSubTotal={setSubTotal}
          closeModal={closeModal}
        />
      )}

      <section
        className={`${
          orders.length == 0 ? "w-[100%]" : "w-[65%]"
        } p-4 max-[769px]:pt-0 transition-all duration-300 max-[768px]:w-full`}
      >
        <section className="max-[450px]:w-full max-[450px]:gap-4 max-[450px]:justify-center min-w-[80%] flex justify-between items-center flex-wrap text-white mb-8">
          <div className="max-[450px]:text-center">
            <h1 className="text-[27px] font-semibold">Jaegar Resto</h1>
            <h2 className="text-[15px] text-[#E0E6E9]">{date}</h2>
          </div>
          <div className="max-[450px]:w-full flex items-center gap-3 borde border-[#393C49] relative">
            <div className="absolute left-2">{search}</div>
            <input
              type="text"
              value={inputSearch}
              onChange={filterFoodsByName}
              placeholder="Search for food, coffe, etc.."
              className="max-[450px]:w-full placeholder:text-[#ABBBC2] bg-[#393C49] pr-4 pl-8 py-2 rounded-md text-[#ABBBC2] border border-gray-500"
            />
          </div>
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
                onClick={(e) => changeFilterFood(e, "")}
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
            <section className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tableFoods.map((food) => (
                <Card
                  food={food}
                  setOrders={setOrders}
                  key={food.idMeal}
                  setSubTotal={setSubTotal}
                />
              ))}
            </section>
          </section>
        </section>
      </section>

      {/* Ordenes */}
      <section
        data-testid="order-section"
        className={`w-[35%] p-4 h-screen bg-blue-card-bg sticky top-0 transition-all duration-300 max-[768px]:w-full ${
          orders.length == 0 ? "hidden" : "block"
        }`}
      >
        <section>
          <h2 className="text-[22px] mb-4">Orden #34562</h2>
          <div className="flex gap-4 mb-4">
            {["Dine In", "To Go", "Delivery"].map((item) => (
              <button
                key={item}
                onClick={(e) => changeFilterFood(e, "delivery")}
                name={item}
                className={`cursor-pointer border border-[#393C49] rounded-md font-semibold text-orange p-2 text-[14px] ${
                  delivery == item && "bg-orange text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        <section className="w-full pb-4 mb-4 border-0 border-b-1 border-[#393C49]">
          <section className="flex justify-between gap-6 font-semibold text-[16px]">
            <div className="w-[85%] flex justify-between">
              <p>Item</p>
              <p>Qty</p>
            </div>
            <div>
              <p>Price</p>
            </div>
          </section>
        </section>

        <section
          id="ocultar-scroll"
          className="flex flex-col gap-4 max-h-[500px]  overflow-y-auto"
        >
          {orders.map((order) => (
            <ItemsDelivery
              key={order.idMeal}
              order={order}
              setOrders={setOrders}
              setSubTotal={setSubTotal}
            />
          ))}
        </section>

        <section className="mt-4">
          <section className="flex flex-col gap-4 ">
            <div className="flex justify-between">
              <p className="text-[#ABBBC2]">Discount</p>
              <p>$ 0</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#ABBBC2]">Sub total</p>
              <p>$ {subTotal}</p>
            </div>
          </section>
          <section className="mt-4 flex flex-col-reverse gap-4">
            <button
              onClick={() => closeModal()}
              className="w-full border border-orange py-3 px-4 rounded-lg cursor-pointer"
            >
              Cancelar
            </button>
            <button
              onClick={() =>
                setIsModalopen((prev) => (prev == true ? false : true))
              }
              className="w-full bg-orange py-3 px-4 rounded-lg cursor-pointer"
            >
              Continue to Payment
            </button>
          </section>
        </section>
      </section>
    </section>
  );
};
