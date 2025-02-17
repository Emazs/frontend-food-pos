import { heart, restaurant } from "../../../assets/svg/svg";
import { ItemSettings } from "../components/ItemSettings";
import { ChangeEvent, useState } from "react";
import { ProductsManagement } from "./ProductsManagement";
import { ConfigView } from "./ConfigView";
import { UnderMaintenance } from "../../../shared/views/UnderMaintenance ";

const items = [
  {
    title: "Apariencia",
    subTitle: "Modo oscuro y claro, Tamaño de fuente",
    icon: heart,
    component: <UnderMaintenance />,
  },
  {
    title: "Tu restaurante",
    subTitle: "Modo oscuro y claro, Tamaño de fuente",
    icon: restaurant,
    component: <UnderMaintenance />,
  },
  {
    title: "Gestión de productos",
    subTitle: "Gestione sus productos, precios, etc.",
    icon: restaurant,
    component: <ProductsManagement />,
  },
  {
    title: "Notificaciones",
    subTitle: "Personaliza tus notificaciones",
    icon: restaurant,
    component: <UnderMaintenance />,
  },
  {
    title: "Seguridad",
    subTitle: "Configurar contraseña, PIN, etc.",
    icon: restaurant,
    component: <UnderMaintenance />,
  },
  {
    title: "Quiénes somos",
    subTitle: "Más información sobre Posly",
    icon: restaurant,
    component: <UnderMaintenance />,
  },
];

export const Configuracion = () => {
  const [selectedView, setSelectedView] = useState({
    component: <ConfigView />,
  });

  const changeView = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;

    const currentItem = items.find((item) => item.title == value);

    if (currentItem) {
      setSelectedView(currentItem);
    } else {
      setSelectedView({
        component: <ConfigView />,
      });
    }
  };
  return (
    <section className="w-full min-h-screen p-2 md:p-4 flex flex-col gap-4">
      <section className="text-center md:text-left pb-4">
        <h1 className="text-lg md:text-2xl font-semibold">Configuracion</h1>
      </section>

      <section className="w-full flex flex-col md:flex-row gap-4 px-4">
        <section className="w-full md:w-1/4">
          <section className="w-full bg-blue-card-bg p-4 py-6 flex flex-col gap-12 max-[426px]:hidden rounded-lg">
            {items.map((item) => (
              <div key={item.title} onClick={() => setSelectedView(item)}>
                <ItemSettings
                  title={item.title}
                  subTitle={item.subTitle}
                  icon={item.icon}
                />
              </div>
            ))}
          </section>

          <section className="hidden max-[426px]:flex">
            <select
              name="views"
              id="views"
              onChange={changeView}
              className="w-full border-1 border-gray-400 px-4 py-2 rounded-lg outline-0 text-center"
            >
              <option className="text-black ">Seleccione una opción</option>
              {items.map((item) => (
                <option
                  key={item.title}
                  value={item.title}
                  className="text-black "
                >
                  {item.title}
                </option>
              ))}
            </select>
          </section>
        </section>

        <section className="w-full md:w-3/4 bg-blue-card-bg p-4 rounded-lg">
          {selectedView.component}
        </section>
      </section>
    </section>
  );
};
