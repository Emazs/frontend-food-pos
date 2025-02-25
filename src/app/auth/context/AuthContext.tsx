import { createContext, ReactNode, useState } from "react";
import { AuthContextProps, authForm as typeForm } from "../auth";
import { login } from "../api/auth.api";

const defaultAuthContextValue: AuthContextProps = {
  authForm: { username: "", password: "" },
  setAuthForm: () => {},
  loginUser: async () => false,
  isLoading: false,
  setIsLoading: () => false,
  isAuthenticated: false,
  setIsAuthenticated: () => false,
};

const AuthContext = createContext<AuthContextProps>(defaultAuthContextValue);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>( !!sessionStorage.getItem('token') ||false)
  const [authForm, setAuthForm] = useState<typeForm>({
    username: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const loginUser = async (form: typeForm) => {
    const response = await login(form);

    if (!response || !response.token) {
      console.error("Login failed: No token received");
      return true;
    }

    sessionStorage.setItem("token", response.token);
    setIsAuthenticated(true)
    return false;
  };

  return (
    <AuthContext.Provider
      value={{ authForm, setAuthForm, loginUser, isLoading, setIsLoading, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
