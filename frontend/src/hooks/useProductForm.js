import { useState, useEffect } from "react";

export function useProductForm(editingProduct, onSave) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setPrice(editingProduct.price);
      setStock(editingProduct.stock);
    } else {
      setName("");
      setPrice("");
      setStock("");
    }
  }, [editingProduct]);

  function handleSubmit(e) {
    e.preventDefault();
    const product = {
      name,
      price: Number(price),
      stock: Number(stock),
    };
    onSave(product);
    setName("");
    setPrice("");
    setStock("");
  }

  return { name, price, stock, setName, setPrice, setStock, handleSubmit };
}
