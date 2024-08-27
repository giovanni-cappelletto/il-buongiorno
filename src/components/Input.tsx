import adminStyles from "../styles/admin.module.css";

const Input = ({
  text,
  type,
  placeholder,
  className,
  onChange,
}: {
  text?: string;
  type?: string | "text";
  placeholder?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={`${adminStyles.input} ${className}`}>
      {text && <span>{text}:</span>}
      <input type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default Input;
