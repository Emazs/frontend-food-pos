import { Navigate } from "react-router";
import { PrivateLayout } from "../layouts/Private.layout";

interface PrivateRouteProps {
  isAuthenticated: boolean;
  redirectTo: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticated,
  redirectTo,
}) => {
  return isAuthenticated ? <PrivateLayout /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
