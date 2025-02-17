export interface Dishe {
  available: string;
  idMeal: number;
  price: string;
  strMeal: string;
  strMealThumb: string;
  strMealThumbUrl?: File | null;
}

export interface ConfigContextProps {
  dishe: Dishe;
  setDishe: React.Dispatch<React.SetStateAction<Dishe>>;
  addDishes: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}