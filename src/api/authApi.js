import axios from "axios";

const authApi = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API_URL,
});

export async function login(credentials) {
  const response = await authApi.post("/login", credentials);
  return response.data;
}

export async function register(user) {
  const response = await authApi.post("/register", user);
  return response.data;
}

export async function getMe(token) {
  const response = await authApi.get("/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.user;
}
