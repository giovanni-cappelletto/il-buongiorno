const findPath = () => {
  const basePath: string = `${window.location.protocol}//${window.location.host}/`;
  const currentLocation: string = window.location.href.slice(basePath.length);

  return currentLocation;
};

export default findPath;
