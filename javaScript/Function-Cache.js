// https://www.codewars.com/kata/525481903700c1a1ff0000e1

function cache(func) {
  const cachedResults = {};
  return (...args) => {
    const key = JSON.stringify(args);

    if (!(key in cachedResults)) {
      const result = func.apply(null, args);
      cachedResults[key] = result;
    }

    return cachedResults[key];
  };
}