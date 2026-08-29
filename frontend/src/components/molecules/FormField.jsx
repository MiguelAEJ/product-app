import { Label } from "../atoms/Label";
import { Input } from "../atoms/Input";

export const FormField = ({ id, label, type, value, onChange, placeholder, min, step }) => (
  <div className="flex-1">
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} min={min} step={step} />
  </div>
);
