import { useState } from "react";
import { dele } from "../../../assets/svg/svg";
import { typeFoods } from "../context/homeContext";

export const ItemsDelivery = ({
  order,
  setOrders,
  setSubTotal,
}: {
  order: typeFoods;
  setOrders: React.Dispatch<React.SetStateAction<typeFoods[]>>;
  setSubTotal: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { price, strMeal, strMealThumb, idMeal } = order;
  const basePrice = parseFloat(price); // Ensure price is a number

  const [infoOrder, setInfoOrder] = useState({
    qty: 1,
    note: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = event.currentTarget;
  
    setInfoOrder((prev) => ({
      ...prev,
      [name]: value,
    }));
  
    if (name === "qty") {
      const newQty = parseInt(value, 10);
      if (isNaN(newQty) || newQty < 1) return;
  
      setOrders((prev) =>
        prev.map((item) =>
          item.idMeal === idMeal ? { ...item, qty: newQty } : item
        )
      );
  
      setSubTotal((prev) => {
        const oldQty = infoOrder.qty; // Cantidad anterior
        const priceNum = Number(price);
  
        const newSubTotal = prev - oldQty * priceNum + newQty * priceNum;
        return Number(newSubTotal.toFixed(2)); // Redondea a 2 decimales
      });
    }
  };
  

  const removeOrder = () => {
    setSubTotal((prev) => {
      const newTotal = prev - basePrice * infoOrder.qty;
      return Math.max(0, Math.round(newTotal * 100) / 100);
    });

    setOrders((prev) => prev.filter((order) => order.idMeal !== idMeal));
  };

  return (
    <section key={idMeal}>
      <div className="w-full flex justify-between items-center">
        <div className="w-[85%] flex justify-between items-center">
          <div className="w-full flex items-center gap-2">
            <img
              src={strMealThumb}
              alt=""
              className="w-[45px] rounded-[100%]"
            />
            <div>
              <h2 className="max-w-[150px] truncate">{strMeal}</h2>
              <p className="text-[#ABBBC2]">$ {parseFloat(price).toFixed(2)}</p>
            </div>
          </div>

          <div>
            <input
              type="number"
              min="1"
              value={infoOrder.qty}
              name="qty"
              onChange={handleChange}
              className="w-[35px] h-[35px] bg-[#393C49] outline-0 text-center rounded-md"
            />
          </div>
        </div>
        <p>$ {(basePrice * infoOrder.qty).toFixed(2)}</p>
      </div>

      <div className="w-full justify-between text-[13px] flex gap-2">
        <input
          type="text"
          placeholder="Order Note..."
          value={infoOrder.note}
          name="note"
          onChange={handleChange}
          className="w-[85%] mt-2 px-4 py-2 bg-[#393C49] outline-0 rounded-md"
        />

        <button
          onClick={removeOrder}
          className="px-3 py-2 rounded-lg border border-[#FF7CA3] cursor-pointer"
        >
          {dele}
        </button>
      </div>
    </section>
  );
};
