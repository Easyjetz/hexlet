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

const filter = (fn, node) => {
    const {children, type} = node;
  if (!fn(node)) {
    return null;
  }
  if (!children) {
      return {...node};
  }
  const newChild = children.map((child) => filter(fn, child)).filter((v) => v);

  if (type === 'directory') {
    return {...node, children: newChild};
  } else {
    return {...node}
  }
}

const names = new Set(['/', 'hosts', 'etc', 'consul']);
const actual = filter((n) => names.has(n.name), tree)
console.log(actual);

// BEGIN
const fi = (f, node) => {
    if (!f(node)) {
      return null;
    }
    if (!isDirectory(node)) {
      return node;
    }
  
    const children = node.children.map((n) => fi(f, n)).filter((v) => v);
    return { ...node, children };
  };
  
  export default fi;
// END
