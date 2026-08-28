export const Input = ({ id, type = "text", value, onChange, placeholder, disabled }) => (
  <input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} />
);
