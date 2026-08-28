export const Button = ({ children, type = "button", onClick, disabled }) => (
  <button type={type} onClick={onClick} disabled={disabled}>
    {children}
  </button>
);
