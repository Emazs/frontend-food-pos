export interface ColumnDashboard {
  id: number;
  title: string;
  name: keyof RowDashboard
}

export interface RowDashboard {
  cliente: string;
  menu: string;
  pago_total: string;
  estado: string;
  [key: string]: string | number;
}