export const Label = ({ children, htmlFor }) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-text-h mb-1">
    {children}
  </label>
);
