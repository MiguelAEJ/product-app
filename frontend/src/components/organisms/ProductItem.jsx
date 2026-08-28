import { Button } from "../atoms/Button";

function ProductItem({ product, onDelete, onEdit }) {
  return (
    <tr>
      <td className="border-b border-border py-3">{product.name}</td>
      <td className="border-b border-border py-3">{product.price}</td>
      <td className="border-b border-border py-3">{product.stock}</td>
      <td className="border-b border-border py-3">
        <div className="flex gap-2">
          <Button onClick={() => onEdit(product)}>Edit</Button>
          <Button variant="danger" onClick={() => onDelete(product.id)}>Delete</Button>
        </div>
      </td>
    </tr>
  );
}

export default ProductItem;
