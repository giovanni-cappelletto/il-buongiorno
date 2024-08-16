import { ReactNode } from "react";
import adminStyles from "../styles/admin.module.css";

const Button = ({
  children,
  theme,
  onClick,
}: {
  children: ReactNode;
  theme: string;
  onClick?: () => void;
}) => {
  return (
    <button className={`${theme} ${adminStyles.button}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
