import { useContext } from "react";
import { AuthContextProps } from "../auth";
import AuthContext from "../context/AuthContext";

export const useAuth = () => {
  const context = useContext<AuthContextProps>(AuthContext);
  if (!context) {
    throw new Error("AuthContext must be used within a AuthProvider");
  }

  return context;
};
