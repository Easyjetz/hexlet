const { reduce, isDirectory } = require('@hexlet/immutable-fs-trees');


const calculateFilesSize = tree =>
  reduce((acc, node) => (!isDirectory(node) ? acc + node.meta.size : acc), tree, 0);

const du = tree => tree.children.map(n => 
    [n.name, calculateFilesSize(n)]).sort(([, size], [, size2]) => size > size2 ? -1 : 1);


// BEGIN
const calculatefilesSize = (node) => reduce((acc, n) => {
    if (isDirectory(n)) {
      return acc;
    }
  
    return acc + n.meta.size;
  }, node, 0);
  
  const du = (node) => {
    const result = node.children.map((n) => [n.name, calculatefilesSize(n)]);
    // Обычный дестракчеринг. JS позволяет пропускать имена если они не используются
    result.sort(([, size1], [, size2]) => size2 - size1);
    return result;
  };
  
  export default du;
// END