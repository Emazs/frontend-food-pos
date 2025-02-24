import { Cards } from "../components/Cards";
import { customer, dollar, page } from "../../../assets/svg/svg";
import { ColumnDashboard as Column, RowDashboard as Row } from "../dashboard";
import { Table } from "../components/Table";
import { ItemsOrders } from "../components/ItemsOrders";
import { PieChartComponent } from "../components/PieChartComponent";

export const Dashboard = () => {
  const date = new Date().toDateString();

  const columns: Column[] = [
    { id: 1, title: "Cliente", name: "cliente" },
    { id: 2, title: "Menú", name: "menu" },
    { id: 3, title: "Pago total", name: "pago_total" },
    { id: 4, title: "Estado", name: "estado" },
  ];

  const rows: Row[] = [
    {
      cliente: "Juan Pérez",
      menu: "Spaghetti Carbonara, Coca Cola",
      pago_total: "$28.48",
      estado: "Pendiente",
    },
    {
      cliente: "María Gómez",
      menu: "Pizza Margarita, Agua",
      pago_total: "$12.49",
      estado: "Preparando",
    },
    {
      cliente: "Carlos López",
      menu: "Hamburguesa BBQ, Papas Fritas, Jugo de Naranja",
      pago_total: "$16.49",
      estado: "Completado",
    },
    {
      cliente: "Ana Torres",
      menu: "Ensalada César, Té Helado",
      pago_total: "$9.99",
      estado: "Pendiente",
    },
    {
      cliente: "Luis Fernández",
      menu: "Sushi Roll",
      pago_total: "$31.98",
      estado: "Completado",
    },
    {
      cliente: "Elena Rojas",
      menu: "Lasaña de Carne, Vino Tinto",
      pago_total: "$19.49",
      estado: "Preparando",
    },
    {
      cliente: "Pedro Castillo",
      menu: "Pollo a la Parrilla, Puré de Papas",
      pago_total: "$15.50",
      estado: "Pendiente",
    },
    {
      cliente: "Sofía Méndez",
      menu: "Tacos al Pastor, Limonada",
      pago_total: "$14.47",
      estado: "Completado",
    },
  ];

  return (
    <section className="w-full min-h-screen p-2 md:p-4 flex flex-col md:flex-row gap-4">
      <section className="w-full md:w-3/5">
        <section className="text-center md:text-left border-b border-[#393C49] pb-4">
          <h1 className="text-lg md:text-2xl font-semibold">Dashboard</h1>
          <h2 className="text-sm md:text-base text-[#E0E6E9]">{date}</h2>
        </section>

        <section className="flex gap-4 my-6 flex-wrap">
          <Cards
            title="Ingresos totales"
            total="$10,243.00"
            percent="32.40"
            img={dollar}
          />
          <Cards
            title="Total de platos pedidos"
            total="23,456"
            percent="12.40"
            img={page}
          />
          <Cards
            title="Cliente total"
            total="1,234"
            percent="2.40"
            img={customer}
          />
        </section>

        <section className="w-full rounded-md bg-blue-card-bg overflow-hidden">
          <section className="p-4">
            <h2 className="text-lg md:text-xl font-semibold">
              Informe de pedido
            </h2>
          </section>

          <Table columns={columns} rows={rows} />
        </section>
      </section>

      <section className="w-full md:w-1/3 flex flex-col gap-4">
        <section className=" bg-blue-card-bg rounded-md flex-1">
          <section className="px-4">
            <h2 className="text-lg md:text-xl font-semibold py-[22px] border-b border-[#393C49]">
              Mas ordenados
            </h2>
          </section>

          <section className="p-4 flex flex-col gap-4">
            <ItemsOrders
              title="Chilli prawn linguine"
              url="https://www.themealdb.com/images/media/meals/usywpp1511189717.jpg"
              dishes="200"
            />
            <ItemsOrders
              title="Fettuccine Alfredo"
              url="https://www.themealdb.com/images/media/meals/0jv5gx1661040802.jpg"
              dishes="120"
            />
            <ItemsOrders
              title="Grilled Mac and Cheese Sandwich"
              url="https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg"
              dishes="80"
            />
            <ItemsOrders
              title="Chilli prawn linguine"
              url="https://www.themealdb.com/images/media/meals/usywpp1511189717.jpg"
              dishes="200"
            />
            <ItemsOrders
              title="Fettuccine Alfredo"
              url="https://www.themealdb.com/images/media/meals/0jv5gx1661040802.jpg"
              dishes="120"
            />
          </section>
        </section>

        <section className=" bg-blue-card-bg rounded-md flex-1">
          <section className="px-4">
            <h2 className="text-lg md:text-xl font-semibold py-[22px] border-b border-[#393C49]">
              Tipo de pedido
            </h2>
          </section>

          <section className="p-4 flex justify-center">
            <PieChartComponent />
          </section>
        </section>
      </section>
    </section>
  );
};
