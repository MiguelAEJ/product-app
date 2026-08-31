import { useProductForm } from "../../hooks/useProductForm";
import { Button } from "../atoms/Button";
import { FormField } from "../molecules/FormField";
import { ProductFormProps } from "../../types/products";

function ProductForm({ editingProduct, onSave }: ProductFormProps) {
  const { name, price, stock, setName, setPrice, setStock, handleSubmit } = useProductForm({ editingProduct, onSave });

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-4">
      <FormField id="name" label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <FormField
        id="price"
        label="Price"
        type="number"
        min="0"
        step="0.01"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <FormField
        id="stock"
        label="Stock"
        type="number"
        min="0"
        step="1"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <Button type="submit">{"Save"}</Button>
    </form>
  );
}

export default ProductForm;
