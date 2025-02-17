import React, { useState } from "react";
import { useHome } from "../../home/hooks/useHome";
import { disheSchema } from "../schemas/disheSchema.zod";
import { useConfig } from "../hooks/useConfig";

export const AddDishe = ({ closeModal }: { closeModal: () => void }) => {
  const { setTableFoods } = useHome();
  const { dishe, setDishe, addDishes, handleFileChange } = useConfig();

  const [errorsForm, setErrorsForm] = useState({
    available: "",
    price: "",
    strMeal: "",
    strMealThumb: "",
  });

  const closeAddDishe = () => {
    setDishe({
      available: "",
      idMeal: 0,
      price: "",
      strMeal: "",
      strMealThumb: "",
      strMealThumbUrl: null,
    });
    closeModal();
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const initialErrors = {
      available: "",
      price: "",
      strMeal: "",
      strMealThumb: "",
    };

    const result = disheSchema.safeParse(dishe);

    if (!result.success) {
      const newErrors = { ...initialErrors };
      result.error?.issues.forEach((issue) => {
        const path = issue.path[0];
        if (typeof path === "string" && path in newErrors) {
          newErrors[path as keyof typeof newErrors] = issue.message;
        }
      });
      setErrorsForm(newErrors);
      console.log(newErrors);

      return;
    } else {
      setErrorsForm(initialErrors);
      setTableFoods((prev) => {
        const newDishe = {
          ...dishe,
          available: Number(dishe.available),
          idMeal: String(dishe.idMeal),
        };

        const exists = prev.some((item) => item.idMeal === newDishe.idMeal);
        return exists
          ? prev.map((item) =>
              item.idMeal === newDishe.idMeal ? newDishe : item
            )
          : [newDishe, ...prev];
      });

      closeAddDishe();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500/50 flex items-center justify-center px-2 z-50">
      <div className="bg-blue-card-bg p-6 lg:w-2/3 w-full flex flex-col gap-4 overflow-y-auto">
        <section className="py-4">
          <h1 className="text-[18px] font-semibold">Agregar plato</h1>
        </section>

        <section className="pb-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <section>
              <label>Nombre del plato</label>
              <input
                type="text"
                name="strMeal"
                value={dishe.strMeal}
                onChange={addDishes}
                placeholder={"Fettuccine Alfredo"}
                className="w-full mt-2 px-4 py-2 bg-[#2D2F3A] outline-0 rounded-md"
              />
              <small className="text-orange text-[14px] font-semibold">
                {errorsForm.strMeal}
              </small>
            </section>

            <section>
              <label>Precio</label>
              <input
                type="text"
                name="price"
                value={dishe.price}
                onChange={addDishes}
                placeholder={"4.12"}
                className="w-full mt-2 px-4 py-2 bg-[#2D2F3A] outline-0 rounded-md"
              />
              <small className="text-orange text-[14px] font-semibold">
                {errorsForm.price}
              </small>
            </section>

            <section>
              <label>Cantidad de platos</label>
              <input
                type="text"
                name="available"
                value={dishe.available}
                onChange={addDishes}
                placeholder={"20"}
                className="w-full mt-2 px-4 py-2 bg-[#2D2F3A] outline-0 rounded-md"
              />
              <small className="text-orange text-[14px] font-semibold">
                {errorsForm.available}
              </small>
            </section>

            <section>
              <label>Imagen del plato</label>
              <input
                type="file"
                name="strMealThumb"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full mt-2 px-4 py-2 bg-[#2D2F3A] outline-0 rounded-md"
              />
              <small className="text-orange text-[14px] font-semibold">
                {errorsForm.strMealThumb}
              </small>
            </section>

            <section className="flex gap-2 mt-4 max-[426px]:flex-col-reverse">
              <button
                type="button"
                onClick={closeAddDishe}
                className="w-full border border-orange py-3 px-4 rounded-lg cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="w-full bg-orange py-3 px-4 rounded-lg cursor-pointer"
              >
                Agregar plato
              </button>
            </section>
          </form>
        </section>
      </div>
    </div>
  );
};
