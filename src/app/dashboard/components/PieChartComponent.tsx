import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Comer en casa", value: 200, color: "#FF7CA3" },
  { name: "Para llevar", value: 122, color: "#EA7C69" },
  { name: "Entrega", value: 264, color: "#65B0F6" },
];

export const PieChartComponent = () => {
  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};
