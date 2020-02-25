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


const f2 = (tree) => {

    let result = tree;
      
    console.log(result);
    const filter = (tree) => {
      const {name, type, children} = tree;
  
      if (type === 'file') {
        tree.name = name.toLowerCase();
      }
  
      if (!children) {
          return;
      }
      children.filter(filter);
    }
    filter(result);
    console.log(tree);
    console.log(result);
}
//downcaseFileNames(tree);

// BEGIN
const downcaseFileNames = (node) => {
    if (name == 'file') {
      return { ...node, name: node.name.toLowerCase() };
    }
    return { ...node, children: node.children.map(downcaseFileNames) };
  };
downcaseFileNames(tree);  
// END
