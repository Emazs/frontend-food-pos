import { useContext } from "react";
import HomeContext from "../context/homeContext";
import { HomeContextProps } from "../home";

export const useHome = () => {
  const context = useContext<HomeContextProps>(HomeContext);

  if (!context) {
    throw new Error("HomeContext must be used within a HomeProvider");
  }

  return context;
};
