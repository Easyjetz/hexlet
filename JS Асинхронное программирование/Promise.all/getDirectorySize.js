const getDirectorySize = (dirpath) => {
    const promise = fs.readdir(dirpath)
    .catch(() => null)
    .then((files) => files.map((file) => path.join(dirpath, file)))
    .then((filepaths) => filepaths.map((filepath) => fs.stat(filepath)))
    .then((array) => Promise.all(array))
    .then((items) => {
      return items.map((item) => {
        if (!item.isDirectory()) {
          return item.size
        }
        return 0;
      })
    })
    .then((el) => _.sumBy(el))

    return promise
  
}


// BEGIN
export const getDirectorySize = (dirpath) => {
    const promise = fs.readdir(dirpath).then((filenames) => {
      const filepaths = filenames.map((name) => path.join(dirpath, name));
      const promises = filepaths.map(fs.stat);
      return Promise.all(promises);
    });
  
    return promise.then((stats) => _.sumBy(stats.filter((stat) => stat.isFile()), 'size'));
  };
// END

// переписал решение)0))
const gds = (dirpath) => {
    const promise = fs.readdir(dirpath).then((filenames) => {
        const filepaths = filenames.map((name) => path.join(dirpath, name));
        const promises = filepaths.map(fs.stat); // забыл эту штуку)
        return Promise.all(promises);
    });
    return promise.then((stats) => _.sumBy(stats.filter((stat) => stat.isFile(), 'size'))) // не понял как с size
}