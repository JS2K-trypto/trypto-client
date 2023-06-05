interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button = ({ children, onClick, className, disabled }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${
        disabled ? "bg-slate-300" : "bg-yellow-300"
      } py-4 px-5 rounded-3xl shadow-md ${className}`}
    >
      <div className="font-bold text-base">{children}</div>
    </button>
  );
};

export default Button;
