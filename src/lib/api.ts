import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export const getProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const getProduct = async (id: string) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const searchProducts = async (query: string) => {
  const response = await api.get(`/products/search?q=${query}`);
  return response.data;
};

export const addProduct = async (product: any) => {
  const response = await api.post("/products/add", product);
  return response.data;
};

export const updateProduct = async (id: string, product: any) => {
  const response = await api.put(`/products/${id}`, product);
  return response.data;
};

export const deleteProduct = async (id: string) => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};