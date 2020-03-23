const getTypes = (arr) => {
      let infoArray = [];
      const promise = arr.reduce((acc, path) => (
            acc.then(() => fs.stat(path))
            .catch(() => null)
            .then((content) => {
              if (content === null) {
                return content;
              }
              return content.isDirectory() === true ? 'directory' : 'file';
            })
            .then((e) => infoArray.push(e))
            .then(() => infoArray)
            
    ), Promise.resolve(infoArray));
  
    return promise;
}

// BEGIN
const getTypeName = (stat) => (stat.isDirectory() ? 'directory' : 'file');

export const getTypes = (filesPath) => {
  const processPath = (filepath, result) => fs.stat(filepath)
    .then((data) => [...result, getTypeName(data)])
    .catch(() => [...result, null]);

  const resultPromise = filesPath.reduce(
    (promise, filepath) => promise.then((result) => processPath(filepath, result)),
    Promise.resolve([]),
  );
  return resultPromise;
};
// END