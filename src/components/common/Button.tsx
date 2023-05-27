interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`bg-yellow-300 py-4 px-5 rounded-3xl shadow-md ${className}`}
    >
      <div className="font-bold text-base">{children}</div>
    </div>
  );
};

export default Button;
