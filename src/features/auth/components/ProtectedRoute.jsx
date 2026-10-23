import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";
import Loader from "../../../components/Loader";

function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (loading) return <Loader />;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
