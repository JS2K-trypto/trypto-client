interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e?: any) => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`bg-yellow-300 py-4 px-5 rounded-3xl shadow-md ${props.className}`}
    >
      <div className="font-bold text-base">{props.children}</div>
    </div>
  );
};

export default Button;
