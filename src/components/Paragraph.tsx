import { ReactNode } from "react";
import homeStyles from "../styles/home.module.css";

const Paragraph = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <p className={`${homeStyles.desc} ${className}`}>{children}</p>;
};

export default Paragraph;
