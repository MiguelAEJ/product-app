import { LabelProps } from "../../types/products";

export const Label = ({ children, htmlFor }: LabelProps) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-text-h mb-1">
    {children}
  </label>
);
