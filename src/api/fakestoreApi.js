import axios from "axios";

const fakestoreApi = axios.create({
  baseURL: import.meta.env.VITE_FAKESTORE_API_URL,
});

export async function getProducts() {
  const response = await fakestoreApi.get("/products");
  return response.data;
}

export async function getCategories() {
  const response = await fakestoreApi.get("/products/categories");
  return response.data;
}
