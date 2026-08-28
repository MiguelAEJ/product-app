import { useState, useEffect } from "react";

function ProductForm({ editingProduct, onSave }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setPrice(editingProduct.price);
      setStock(editingProduct.stock);
    } else {
      setName("");
      setPrice("");
      setStock("");
    }
  }, [editingProduct]);

  function handleSubmit(e) {
    e.preventDefault();
    const product = {
      name,
      price: Number(price),
      stock: Number(stock),
    };
    onSave(product);
    setName("");
    setPrice("");
    setStock("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <button type="submit">{editingProduct ? "Update" : "Create"}</button>
    </form>
  );
}

export default ProductForm;
