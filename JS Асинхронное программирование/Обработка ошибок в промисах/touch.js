// BEGIN
export const touch = (filepath) => fs.access(filepath)
  .catch(() => fs.writeFile(filepath));
// END