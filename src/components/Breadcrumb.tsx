const Breadcrumb = () => {
  const path = findPath();

  return (
    <span>
      <a href="/">Home</a> &#62;{" "}
      {path.map((value, index) => {
        const word = value[0].toUpperCase() + value.slice(1);

        if (index === path.length - 1) {
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

const findPath = () => {
  const basePath: string = `${window.location.protocol}//${window.location.host}/`;
  const currentLocation: string = window.location.href.slice(basePath.length);

  const formattedCurrentLocation: string[] = currentLocation
    .split("/")
    .map((value) => value.replace("%20", " ").replace("?", ""));

  return formattedCurrentLocation;
};

export default Breadcrumb;
