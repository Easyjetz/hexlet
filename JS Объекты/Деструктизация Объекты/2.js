const users = [
    { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
    { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
    { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
    { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
];

const getSortedNames = (arr) => {
    const size = arr.length;

    let result = [];

    for (let j = 0; j < size; j++) {
        const {name: pepeClown} = arr[j];
        result.push(pepeClown);
    }
    
    return result.sort();
}

console.log(getSortedNames(users));

// решение учителя

// BEGIN
export default (users) => {
    const names = [];
  
    for (const { name } of users) {
      names.push(name);
    }
  
    return names.sort();
  };
  // END