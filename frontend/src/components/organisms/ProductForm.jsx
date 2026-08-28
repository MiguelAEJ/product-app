import { useProductForm } from "../../hooks/useProductForm";
import { Button } from "../atoms/Button";
import { FormField } from "../molecules/FormField";

function ProductForm({ editingProduct, onSave }) {
  const { name, price, stock, setName, setPrice, setStock, handleSubmit } = useProductForm(editingProduct, onSave);

  return (
    <form onSubmit={handleSubmit}>
      <FormField id="name" label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <FormField id="price" label="Price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      <FormField id="stock" label="Stock" type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
      <Button type="submit">{editingProduct ? "Update" : "Create"}</Button>
    </form>
  );
}

export default ProductForm;
