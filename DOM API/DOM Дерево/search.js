export default (document, tagname) => {
    const result = [];
    const f = (node, acc) => {
      if (node.tagName.toLowerCase() === tagname) {
        acc.push(node);
      }
  
      else if (!node.children) {
        return acc;
      }
  
      const children = node.children;
      children.toString();
      const nodeArr = [...children];
  
      return nodeArr.reduce(((acc, node) => f(node, acc)), acc);
  
  
    }
  
    return f(document.documentElement, []);
}

// BEGIN
const search = (doc, tag) => {
    const coll = [...doc.children];
    const initAcc = coll.filter(e => e.tagName === tag.toUpperCase());
    return coll.reduce((acc, child) => [...acc, ...search(child, tag)], initAcc);
  };
  
  export default search;
    // END