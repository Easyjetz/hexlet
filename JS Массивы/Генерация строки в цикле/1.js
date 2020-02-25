const buildDefinitionList = (arr) => {
    if (arr.length === 0) {
        return '';
    }

    const parts = [];
    let counter = 0;
    for (const item of arr) {
        parts.push(`<dt>${item[0]}</dt>`);
        parts.push(`<dd>${item[1]}</dd>`);
        counter++;
    }
    const innerValue = parts.join('');
    return `<dl>${innerValue}</dl>`;
}

const definitions = [
    ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
    ['Бобр', 'Животное из отряда грызунов'],
];

console.log(buildDefinitionList(definitions));

// решение учителя

// BEGIN
const buildDefinitionList = (definitions) => {
    if (definitions.length === 0) {
      return '';
    }
  
    const parts = [];
  
    for (const definition of definitions) {
      const name = definition[0];
      const description = definition[1];
      parts.push(`<dt>${name}</dt><dd>${description}</dd>`);
    }
  
    const innerValue = parts.join('');
    const result = `<dl>${innerValue}</dl>`;
  
    return result;
  };
  
  export default buildDefinitionList;
  // END
