import { useState, useEffect } from "react";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../api/client";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const data = await getProducts();
    setProducts(data);
  }

  async function handleSave(productData) {
    if (editingProduct) {
      await updateProduct(editingProduct.id, productData);
    } else {
      await createProduct(productData);
    }
    setEditingProduct(null);
    await loadProducts();
  }

  async function handleDelete(id) {
    await deleteProduct(id);
    await loadProducts();
  }

  function handleEdit(product) {
    setEditingProduct(product);
  }

  return { products, editingProduct, handleSave, handleDelete, handleEdit };
}
