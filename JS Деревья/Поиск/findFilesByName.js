



const tree = {
    name: '/',
    type: 'directory',
    meta: {},
    children: [
      {
        name: 'eTc',
        type: 'directory',
        meta: {},
        children: [
          {
            name: 'NgiNx',
            type: 'directory',
            meta: {},
            children: [],
          },
          {
            name: 'CONSUL',
            type: 'directory',
            meta: {},
            children: [{ name: 'nfiG.json', type: 'file', meta: {} }],
          },
        ],
      },
      { name: 'cohOsts', type: 'file', meta: {}, },
    ],
}

// по сути эта задача мною даже не решена нормально.
const findFilesByName = (tree, str) => {
  let result = [];

  const iter = (n, str, acc, filePathArray, dSize, currentDirectory) => {

    if (!isFile(n)) {
      dSize = n.children.length;
      currentDirectory = n.name;
    }




    if (n.children && n.children.length !== 0) {
      filePathArray.push(n.name);
    }
    const sizePath = filePathArray.length;
    if (isFile(n)) {
      dSize--;
      if (n.name.includes(str)) {

        filePathArray.push(n.name);
        const filePath = filePathArray.join('/');
        result.push(path.join(filePath))
        filePathArray.splice(sizePath - 1, sizePath);
        return result;
      }
    }

    if (dSize == 0 && filePathArray.includes(currentDirectory)) {

      filePathArray.splice(sizePath - 1, sizePath);
    }
    if (!n.children) {
      return result;
    }

    return n.children.reduce((iAcc, nn) => iter(nn, str, iAcc, filePathArray, dSize, currentDirectory), acc, filePathArray);
  }

  return iter(tree, str, [], [], 0, '');
}

// BEGIN
const findFilesByName = (root, substr) => {
  const iter = (n, ancestry, acc) => {
    const newAncestry = path.join(ancestry, n.name);
    if (isFile(n)) {
      return n.name.includes(substr) ? [...acc, newAncestry] : acc;
    }
    return n.children.reduce((cAcc, nn) => iter(nn, newAncestry, cAcc), acc);
  };

  return iter(root, '', []);
};

findFilesByName(tree, 'co');

// export default findFilesByName;
// END