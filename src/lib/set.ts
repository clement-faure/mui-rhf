export const _isObject = (value: unknown): boolean => value === Object(value);

export const _set = (
  obj: Record<string, unknown>,
  path: string,
  value: unknown
): void => {
  // Split path
  const splitPath: string[] = path.split(".");
  const len = splitPath.length;

  let localObj: Record<string, unknown> = obj;

  for (let i = 0; i < len - 1; i++) {
    const accessor = splitPath[i];
    if (!localObj[accessor] || !_isObject(localObj[accessor])) {
      localObj = {};
    } else {
      // At this point, we know that localObj[accessor] is an object
      localObj = <Record<string, unknown>>localObj[accessor];
    }
  }

  localObj[splitPath[len - 1]] = value;
};
