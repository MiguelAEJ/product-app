export const Button = ({ children, type = "button", onClick, disabled, variant = "primary" }) => {
  const variants = {
    primary: "bg-accent text-white hover:opacity-90",
    danger: "bg-transparent text-red-600 border border-red-600 hover:bg-red-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]}`}>
      {children}
    </button>
  );
};
