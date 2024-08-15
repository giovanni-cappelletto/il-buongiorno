import { ReactNode } from "react";
import adminStyles from "../styles/admin.module.css";

const Button = ({
  children,
  theme,
  disabled,
}: {
  children: ReactNode;
  theme: string;
  disabled?: boolean;
}) => {
  return (
    <button className={`${theme} ${adminStyles.button}`} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
