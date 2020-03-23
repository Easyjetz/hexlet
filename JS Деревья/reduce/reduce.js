const tree = {
    name: '/',
    type: 'directory',
    meta: {},
    children: [
      {
        name: 'etc',
        type: 'directory',
        meta: {},
        children: [
          {
            name: 'nginx',
            type: 'directory',
            meta: {},
            children: [],
          },
          {
            name: 'consul',
            type: 'directory',
            meta: {},
            children: [{ name: 'config.json', type: 'file', meta: {} }],
          },
        ],
      },
      { name: 'hosts', type: 'file', meta: {}, },
    ],
}

const r = (f, tree, acc) => {
    const {type, children} = tree;
    const newAcc = f(acc, tree);
    if (!children) {
        return newAcc;
    }

    return children.reduce((iAcc, n) => r(f, n, iAcc), newAcc);
}

const actual2 = r((acc, n) => (n.type === 'file' ? acc + 1 : acc), tree, 0);

// BEGIN
const reduce = (f, node, acc) => {
    const newAcc = f(acc, node);
  
    if (isFile(node)) {
      return newAcc;
    }
    return node.children.reduce((iAcc, n) => reduce(f, n, iAcc), newAcc);
};
  
export default reduce;
// END