import axios from "axios";
import { ProductInput } from "../types/products";

const url = "http://localhost:8081/api/products";

export const getProducts = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Error respose:", error.response);
    }
    return [];
  }
};

export const createProduct = async (product: ProductInput) => {
  try {
    const response = await axios.post(url, product);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Error respose:", error.response);
    }
  }
};

export const updateProduct = async (id: number, product: ProductInput) => {
  try {
    const response = await axios.put(`${url}/${id}`, product);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Error respose:", error.response);
    }
  }
};

export const deleteProduct = async (id: number) => {
  try {
    await axios.delete(`${url}/${id}`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Error respose:", error.response);
    }
  }
};
