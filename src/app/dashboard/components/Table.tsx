import { ColumnDashboard, RowDashboard } from "../dashboard";

export const Table = ({columns, rows}: {columns: ColumnDashboard[], rows: RowDashboard[]}) => {
  return (
    <section className="px-2 overflow-x-auto">
      <table className="w-full min-w-max border-collapse">
        <thead className="border-b border-[#393C49]">
          <tr>
            {columns.map((column) => (
              <th key={column.id} className="py-4 text-center">
                {column.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="text-gray">
          {rows.map((row) => (
            <tr key={row.cliente} className="border-b border-[#393C49]">
              {columns.map((column) => (
                <td key={column.id} className="py-4 text-center">
                  {column.name === "estado" ? (
                    <div
                      className={`py-1 px-2 rounded-full text-sm font-medium ${
                        row.estado === "Completado"
                          ? "text-green-600 bg-green-100"
                          : row.estado === "Pendiente"
                          ? "text-orange-600 bg-orange-100"
                          : "text-purple-600 bg-purple-100"
                      }`}
                    >
                      {row[column.name]}
                    </div>
                  ) : (
                    <div>{row[column.name]}</div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
