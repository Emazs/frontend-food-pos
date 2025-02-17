import React, { useState } from "react";
import { ItemsDelivery } from "./ItemsDelivery";
import { useHome } from "../hooks/useHome";
import { PaymentCard } from "./PaymentCard";
import { creditCard, money, paypal } from "../../../assets/svg/svg";

export const ModalPayment = ({
  setSubTotal,
  subTotal,
  closeModal,
}: {
  subTotal: number;
  closeModal: () => void;
  setSubTotal: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { orders, setOrders } = useHome();
  const [methPayment, setMethPayment] = useState("Tarjeta de credito");

  return (
    <div className="fixed inset-0 bg-gray-500/50 flex items-center justify-end z-50">
      <div className="bg-blue-card-bg p-6 lg:w-2/3 w-full h-full flex lg:flex-row flex-col gap-4 overflow-y-auto">
        {/* Sección de Confirmación */}
        <section className="lg:w-1/2 w-full border-b lg:border-r border-[#393C49] pr-6 pb-6 lg:pb-0">
          <h2 className="text-lg lg:text-[24px] font-bold">Confirmación</h2>
          <p className="text-sm lg:text-[16px] mb-4 text-gray">Orden #34562</p>

          <section
            id="ocultar-scroll"
            className="flex flex-col gap-4 max-h-[650px] overflow-y-auto"
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

          <section className="flex flex-col gap-4 border-t border-[#393C49] mt-4 py-2">
            <div className="flex justify-between">
              <p className="text-[#ABBBC2]">Descuento</p>
              <p>$ 0</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#ABBBC2]">Subtotal</p>
              <p>$ {subTotal}</p>
            </div>
          </section>
        </section>

        {/* Sección de Métodos de Pago */}
        <section className="lg:w-1/2 w-full px-4">
          <h2 className="text-lg lg:text-[24px] font-bold">Pagos</h2>
          <p className="text-sm lg:text-[16px] mb-4 text-gray">
            3 métodos de pago disponibles
          </p>

          <section className="flex justify-between">
            {[
              { img: creditCard, title: "Tarjeta de credito" },
              { img: paypal, title: "Paypal" },
              { img: money, title: "Efectivo" },
            ].map((item) => (
              <PaymentCard
                key={item.title}
                img={item.img}
                title={item.title}
                methPayment={methPayment}
                setMethPayment={setMethPayment}
              />
            ))}
          </section>

          {/* Formulario según el método de pago seleccionado */}
          <section className="mt-4">
            {methPayment === "Tarjeta de credito" && (
              <form className="flex flex-col gap-4">
                <label>Nombre del titular</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full lg:w-[85%] px-4 py-2 bg-[#393C49] rounded-md"
                />
                <label>Número de la tarjeta</label>
                <input
                  type="text"
                  placeholder="2564 1421 0897 1244"
                  className="w-full lg:w-[85%] px-4 py-2 bg-[#393C49] rounded-md"
                />
                <div className="flex gap-2">
                  <div className="flex flex-col">
                    <label>Fecha de expiración</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-2 bg-[#393C49] rounded-md"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>CVV</label>
                    <input
                      type="password"
                      placeholder="•••"
                      className="w-full px-4 py-2 bg-[#393C49] rounded-md"
                    />
                  </div>
                </div>
              </form>
            )}
            {methPayment === "Paypal" && (
              <div className="text-center p-4 bg-[#393C49] rounded-md">
                <p>Redirigiendo a PayPal...</p>
                <button className="mt-4 bg-orange py-2 px-4 rounded-lg">
                  Pagar con PayPal
                </button>
              </div>
            )}
            {methPayment === "Efectivo" && (
              <div className="text-center p-4 bg-[#393C49] rounded-md">
                <p className="mb-4">Paga en efectivo al recibir tu pedido.</p>
                <div className="flex flex-col gap-4 text-left">
                  {[
                    { id: "nombre", label: "Nombre", placeholder: "Juan" },
                    {
                      id: "apellidos",
                      label: "Apellidos",
                      placeholder: "Pérez Gómez",
                    },
                    {
                      id: "telefono",
                      label: "Número de Teléfono",
                      placeholder: "+57 300 123 4567",
                    },
                    {
                      id: "direccion",
                      label: "Dirección",
                      placeholder: "Calle 123 #45-67, Ciudad",
                    },
                  ].map((field) => (
                    <section key={field.id}>
                      <label htmlFor={field.id}>{field.label}</label>
                      <input
                        type="text"
                        id={field.id}
                        placeholder={field.placeholder}
                        className="w-full mt-2 px-4 py-2 bg-[#2D2F3A] outline-0 rounded-md"
                      />
                    </section>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Botones de Cancelar y Confirmar */}
          <section className="flex gap-2 mt-4">
            <button
              onClick={() => closeModal()}
              className="w-full border border-orange py-3 px-4 rounded-lg cursor-pointer"
            >
              Cancelar
            </button>
            <button
              onClick={() => closeModal()}
              className="w-full bg-orange py-3 px-4 rounded-lg cursor-pointer"
            >
              Confirmar pago
            </button>
          </section>
        </section>
      </div>
    </div>
  );
};
