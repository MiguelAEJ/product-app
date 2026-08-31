import { useState, useEffect, SubmitEvent } from "react";
import { ProductFormProps, UseProductFormReturn } from "../types/products";

export function useProductForm({ editingProduct, onSave }: ProductFormProps): UseProductFormReturn {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setPrice(String(editingProduct.price));
      setStock(String(editingProduct.stock));
    } else {
      setName("");
      setPrice("");
      setStock("");
    }
  }, [editingProduct]);

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const product = {
      name,
      price: Number(price),
      stock: Math.trunc(Number(stock)),
    };
    onSave(product);
    setName("");
    setPrice("");
    setStock("");
  }

  return { name, price, stock, setName, setPrice, setStock, handleSubmit };
}
