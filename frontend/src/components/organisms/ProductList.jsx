import ProductItem from "./ProductItem";

function ProductList({ products, onDelete, onEdit }) {
  return (
    <table>
      <tbody>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;
