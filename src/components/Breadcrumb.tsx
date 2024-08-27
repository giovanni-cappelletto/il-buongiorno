import findPath from "../utils/findPath";

const Breadcrumb = () => {
  const path = findPath();

  const formattedPath: string[] = path
    .split("/")
    .map((value: string) => value.replace("%20", " ").replace("?", ""));

  return (
    <span>
      <a href="/">Home</a> &#62;{" "}
      {formattedPath.map((value, index) => {
        const word = value[0].toUpperCase() + value.slice(1);

        if (index === formattedPath.length - 1) {
          return <span key={index}>{word}</span>;
        }

        return (
          <span key={index}>
            <a href={`/${value}`}>{word}</a>
            &#20;&#62;&#20;
          </span>
        );
      })}
    </span>
  );
};

export default Breadcrumb;
