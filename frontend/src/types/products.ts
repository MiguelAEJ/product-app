export type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "primary" | "danger";
};

export type InputProps = React.ComponentProps<"input">;

export type LabelProps = React.ComponentProps<"label">;

export type FormFieldProps = React.ComponentProps<"input"> & {
  label?: string;
};

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export type ProductInput = Omit<Product, "id">;

export interface ProductFormProps {
  editingProduct: Product | null;
  onSave: (product: ProductInput) => void;
}

export interface ProductItemProps {
  product: Product;
  onDelete: (id: number) => void;
  onEdit: (product: Product) => void;
}

export interface ProductListProps {
  products: Product[];
  onDelete: (id: number) => void;
  onEdit: (product: Product) => void;
}

export interface PageLayoutProp {
  title: string;
  form: React.ReactNode;
  list: React.ReactNode;
}

export interface UseProductFormReturn {
  name: string;
  price: string;
  stock: string;
  setName: (value: string) => void;
  setPrice: (value: string) => void;
  setStock: (value: string) => void;
  handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
}

export interface UseProductsReturn {
  products: Product[];
  editingProduct: Product | null;
  handleSave: (productData: ProductInput) => Promise<void>;
  handleDelete: (id: number) => Promise<void>;
  handleEdit: (product: Product) => void;
}
