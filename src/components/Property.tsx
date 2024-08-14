const Property = ({
  text,
  value,
}: {
  text: string;
  value: string | number;
}) => {
  return (
    <p className="dialog__property">
      {text}: <span className="value">{value}</span>
    </p>
  );
};

export default Property;
