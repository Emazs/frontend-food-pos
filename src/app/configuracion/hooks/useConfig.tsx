import { useContext } from "react";
import ConfigContext  from "../context/confiContext";
import { ConfigContextProps } from "../config";

export const useConfig = () => {
  const context = useContext<ConfigContextProps>(ConfigContext);

  if (!context) {
    throw new Error("ConfigContext must be used within a ConfigProvider");
  }

  return context;
};
