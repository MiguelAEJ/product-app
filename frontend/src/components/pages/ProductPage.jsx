import { useProducts } from "../../hooks/useProducts";
import ProductForm from "../organisms/ProductForm";
import ProductList from "../organisms/ProductList";
import { PageLayout } from "../templates/PageLayout";

function ProductPage() {
  const { products, editingProduct, handleSave, handleDelete, handleEdit } = useProducts();

  return (
    <PageLayout
      title="Products"
      form={<ProductForm editingProduct={editingProduct} onSave={handleSave} />}
      list={<ProductList products={products} onDelete={handleDelete} onEdit={handleEdit} />}
    />
  );
}

export default ProductPage;
