export const Input = ({ id, type, value, onChange, placeholder, disabled, min, step }) => (
  <input
    id={id}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    disabled={disabled}
    min={min}
    step={step}
    className="w-full px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
  />
);
