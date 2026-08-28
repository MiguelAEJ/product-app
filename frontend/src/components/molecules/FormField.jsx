import { Label } from "../atoms/Label";
import { Input } from "../atoms/Input";

export const FormField = ({ id, label, type, value, onChange, placeholder }) => (
  <div>
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} />
  </div>
);
