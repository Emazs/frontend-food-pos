import "./App.css";
import { Navigate, Route, Routes } from "react-router";
import { PublicLayout } from "./layouts/Public.layout";
import { Login } from "./app/auth/views/Login";
import PrivateRoute from "./utils/PrivateRoute";
import { NotFoundPage } from "./shared/views/NotFoundPage";
import { Home } from "./app/home/views/Home";
import { Dashboard } from "./app/dashboard/views/Dashboard";
import { Configuracion } from "./app/configuracion/views/Configuracion";
import { useAuth } from "./app/auth/hooks/useAuth";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Route>

      <Route path="/auth" element={<PrivateRoute isAuthenticated={isAuthenticated} redirectTo="/login"/>}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="config"  element={<Configuracion />} >
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
