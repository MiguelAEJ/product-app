import { Button } from "../atoms/Button";

function ProductItem({ product, onDelete, onEdit }) {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.stock}</td>
      <td>
        <Button onClick={() => onEdit(product)}>Edit</Button>
        <Button onClick={() => onDelete(product.id)}>Delete</Button>
      </td>
    </tr>
  );
}

export default ProductItem;
