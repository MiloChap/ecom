import { createContext, useContext, useEffect, useState } from "react";
import { login, register, getMe } from "../../../api/authApi";
import Loader from "../../../components/Loader";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const token = sessionStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const userData = await getMe(token);
        setUser(userData);
      } catch {
        sessionStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    };
    checkToken();
  }, []);

  const loginUser = async (credentials) => {
    const data = await login(credentials);
    sessionStorage.setItem("token", data.token);
    const userData = await getMe(data.token);
    setUser(userData);
  };

  const registerUser = async (newUser) => {
    const data = await register(newUser);
    sessionStorage.setItem("token", data.token);
    setUser(data.user);
  };

  const logoutUser = () => {
    sessionStorage.removeItem("token");
    setUser(null);
  };

  const value = { user, loading, loginUser, registerUser, logoutUser };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
