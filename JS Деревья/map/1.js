const dfs = (tree) => {
    // Получаем имя узла и его детей.
    const [name, children] = tree;
    // Приводим имя узла к нижнему регистру.
    const newName = name.toLowerCase();
    // Если узел не содержит детей,
    // возвращаем его с изменённым именем.
    if (!children) {
      return [newName];
    }
    // Вызываем функцию dfs для каждого ребёнка
    // и возвращаем узел с изменённым именем и детьми.
    return [newName, children.map(dfs)];
};

const tree = ['A', [
    ['B', [['E'], ['F']]],
    ['C'],
    ['D', [['G'], ['J']]],
]];

//JSON.stringify(dfs(tree));
  // '["a", [["b", [["e"], ["f"]]], ["c"], ["d", [["g"], ["j"]]]]]'

// В коде используются два разных map. Один самописный, другой на массиве. 

const map = (f, tree) => {
    // Извлекаем детей из узла.
    const [, children] = tree;

    // Применяем к узлу переданную функцию
    // и извлекаем имя изменённого узла.
    const [newName] = f(tree);
    if (!children) {
        return [newName];
    }
    // Возвращаем узел с именем и детьми,
    // для каждого из которых вызывается
    // наша функция map
    return [newName, children.map((c) => map(f, c))];
}

const tree2 = ['A', [
    ['B', [['E'], ['F']]],
    ['C'],
    ['D', [['G'], ['J']]],
]];

const mappedTree = map(([name]) => [name.toLowerCase()], tree);
// JSON.stringify(mappedTree);

