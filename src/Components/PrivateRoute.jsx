import { Navigate } from "react-router-dom"; //migration style
import { useAuth } from "../context/AuthContext";

// eslint-disable-next-line react/prop-types
function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login"></Navigate>;
}

export default PrivateRoute;
