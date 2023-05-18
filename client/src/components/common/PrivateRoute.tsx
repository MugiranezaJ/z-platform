import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const isAuthenticated = useSelector((state: any) => state.auth.isLoggedIn);

  if (isAuthenticated) return <Outlet />;
  else return <Navigate to={"/login"} replace />;
};

export default PrivateRoute;
