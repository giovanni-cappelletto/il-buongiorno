import { ReactNode } from "react";

const Paragraph = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <p className={`desc ${className}`}>{children}</p>;
};

export default Paragraph;
