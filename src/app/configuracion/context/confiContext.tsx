import { createContext, ReactNode, useState } from "react";
import { ConfigContextProps } from "../config";

const defaultConfigContextValue: ConfigContextProps = {
  dishe: {
    available: "",
    idMeal: 0,
    price: "",
    strMeal: "",
    strMealThumb: "",
    strMealThumbUrl: null,
  },
  setDishe: () => {},
  addDishes: () => {},
  handleFileChange: () => {},
  modalOpen: false,
  setModalOpen: () => {},
};

const ConfigContext = createContext<ConfigContextProps>(defaultConfigContextValue);

export const ConfigProvider = ({ children }: { children: ReactNode }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [dishe, setDishe] = useState({
    available: "",
    idMeal: 0,
    price: "",
    strMeal: "",
    strMealThumb: "",
    strMealThumbUrl: null as File | null,
  });

  const addDishes = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.currentTarget;

    setDishe((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);

      setDishe((prev) => ({
        ...prev,
        strMealThumb: imageUrl,
        strMealThumbUrl: file,
      }));
    }
  };

  return (
    <ConfigContext.Provider
      value={{
        dishe,
        setDishe,
        addDishes,
        handleFileChange,
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigContext;
