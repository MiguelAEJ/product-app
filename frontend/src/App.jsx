import ProductItem from "./components/ProductItem";
import ProductForm from "./components/ProductForm";
import { useProducts } from "./hooks/useProducts";

function App() {
  const { products, editingProduct, handleSave, handleDelete, handleEdit } = useProducts();

  return (
    <div>
      <h1>Products</h1>

      <ProductForm editingProduct={editingProduct} onSave={handleSave} />

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
            <ProductItem key={product.id} product={product} onDelete={handleDelete} onEdit={handleEdit} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
