let animals = ['cats', 'birds', 'dogs'];

const apply = (arr, operationName, index, value) => {
    if (operationName == 'reset'){
        return arr = [];
    } else if (operationName == 'get') {
        return arr[index];
    } else if (operationName == 'change') {
        arr[index] = value;
    }
    return arr;
};

console.log(apply(animals, 'get', 1));

// решение учителя

// BEGIN
switch (operationName) {
    case 'reset':
      return [];
    case 'get':
      return arr[index];
    case 'change':
      arr[index] = value;
      return arr;
    default:
      return arr;
  }
  // END