import { useState, useEffect } from "react";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./api/client";
import ProductItem from "./components/ProductItem";
import ProductForm from "./components/ProductForm";

function App() {
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

  return (
    <div>
      <h1>Products</h1>

      <ProductForm
        editingProduct={editingProduct}
        onSave={handleSave}
      />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
