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

export async function createProduct(product) {
  const response = await fakestoreApi.post("/products", product);
  return response.data;
}

export async function updateProduct(id, product) {
  const response = await fakestoreApi.put(`/products/${id}`, product);
  return response.data;
}

export async function deleteProduct(id) {
  await fakestoreApi.delete(`/products/${id}`);
}
