import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./app/auth/context/AuthContext.tsx";
import { HomeProvider } from "./app/home/context/homeContext.tsx";
import { ConfigProvider } from "./app/configuracion/context/confiContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider>
      <HomeProvider>
        <ConfigProvider>
          <StrictMode>
            <App />
          </StrictMode>
        </ConfigProvider>
      </HomeProvider>
    </AuthProvider>
  </BrowserRouter>
);
