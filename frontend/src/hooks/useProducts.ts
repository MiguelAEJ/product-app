import { useState, useEffect } from "react";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../api/client";
import { Product, ProductInput, UseProductsReturn } from "../types/products";

export function useProducts(): UseProductsReturn {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const data = await getProducts();
    setProducts(data);
  }

  async function handleSave(productData: ProductInput) {
    if (editingProduct) {
      await updateProduct(editingProduct.id, productData);
    } else {
      await createProduct(productData);
    }
    setEditingProduct(null);
    await loadProducts();
  }

  async function handleDelete(id: number) {
    await deleteProduct(id);
    await loadProducts();
  }

  function handleEdit(product: Product) {
    setEditingProduct(product);
  }

  return { products, editingProduct, handleSave, handleDelete, handleEdit };
}
