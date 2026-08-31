import ProductItem from "./ProductItem";
import { ProductListProps } from "../../types/products";

function ProductList({ products, onDelete, onEdit }: ProductListProps) {
  return (
    <table className="w-full border-collapse text-left text-sm">
      <thead>
        <tr>
          <th className="border-b border-border pb-2 font-medium text-text">Name</th>
          <th className="border-b border-border pb-2 font-medium text-text">Price</th>
          <th className="border-b border-border pb-2 font-medium text-text">Stock</th>
          <th className="border-b border-border pb-2 font-medium text-text">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;
