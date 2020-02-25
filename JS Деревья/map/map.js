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
            children: [{ name: 'confiG.json', type: 'file', meta: {} }],
          },
        ],
      },
      { name: 'hOsts', type: 'file', meta: {}, },
    ],
}

console.log(tree);


const m = (f, tree) => {
    const {children} = tree;

    const {name: newName} = f(tree);
  
    if (!children) {
      return {...tree, name: newName};
    }

    return {...tree, name: newName, children: children.map((c) => m(f, c))}
}

console.log(m(n => ({...n, name: n.name.toUpperCase()}), tree));

// BEGIN
const m = (f, node) => {
    const updatedNode = f(node);
  
    return isDirectory(node)
      ? { ...updatedNode, children: node.children.map((n) => m(f, n)) } : updatedNode;
  };
  
  export default m;
// END
