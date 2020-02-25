/*
Пошаговый перебор элементов дерева по связям между узлами-предками и узлами-потомками называется 
обходом дерева. Подразумевается, что в процессе обхода каждый узел будет затронут только один раз. 
По большому счёту, всё так же, как и в обходе любой коллекции, используя цикл или рекурсию. 
Только в случае деревьев способов обхода больше, чем просто слева направо и справа налево. 
В данном курсе используется один порядок обхода — обход в глубину, так как он естественным образом 
получается при рекурсивном обходе.
*/


// Обход в глубину (Depth-first search)

/*
const tree = ['A', [
    ['B', [['E'], ['F']]],
    ['C'],
    ['D', [['G'], ['J']]],
  ]];

const dfs = (tree) => {
    const [element, children] = tree;
    console.log(element);
    
    if (!children) {
        return;
    }
    children.map(dfs);
}
*/
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

// понять как блять вообще работают эти деревья, мап и прочая срань.


// const c = tree.reduce(({name, type, children}) => name {

// });

// f(tres);
/*
const r = (tres) => {
    tres.reduce((acc, currentValue) => {
        console.log(acc);
        return acc;
    });
    return;
}

r(tres);
*/


// начинаем тесты

function dfs(tree) {
  const [name, children] = tree;
  tree.name = 'Kappa';
  if (!children) {
    return;
  }
  children.reduce(dfs);
};

const tree2 = ['A', [
  ['B', [['E'], ['F']]],
  ['C'],
  ['D', [['G'], ['J']]],
]];

// dfs(tree2);

const downcaseFileNames = (tree) => {

  let result = {};

  const f = (tree) => {
    const {name, type, meta, children} = tree;

    if (type === 'file') {
      const lowerName = name.toLowerCase();
      tree.name = lowerName;
    }
    
    if (!children) {
      return;
    }
    console.log(result);
    console.log(result.length);
    if (result.name == undefined) {
      result.name = name;
      result.type = type;
      result.meta = meta;
      result.children = children;
    }
    result.children = children;
    console.log(result);
    
    children.map(f);
  }

  return result;
}

// downcaseFileNames(tree);

const s = (tree) => {
  // отдельную функцию для фильтра
  const result = tree;
  console.log(result);
  console.log(tree);
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
s(tree);

