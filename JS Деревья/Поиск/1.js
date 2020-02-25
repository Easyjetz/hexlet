import { reduce, isFile } from 'hexlet-immutable-fs-trees';

const findEmptyDirsDepth = (root, depth = 1) => {
  const iter = (n, currentDepth, acc) => {
    if (isFile(n) || currentDepth > depth) {
      return acc;
    }

    if (n.children.length === 0) {
      return [...acc, n.name];
    }
    return n.children.reduce((cAcc, nn) => iter(nn, currentDepth + 1, cAcc), acc);
  };

  return iter(root, 0, []);
};

const dirs = findEmptyDirsDepth(tree, 2);
console.log(dirs); // => ['apache']