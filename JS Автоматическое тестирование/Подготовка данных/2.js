

let object = {
    0: 'Dmitry',
    home: [
      {first: {1: 'hello', 2: 'pepe'}},
      {second: [1, 5, 10, 15]},
    ],
    1: [1, 3, 4]
}

const test = _.set(object, [1], null);
console.log(test);
test[0] = 'Kappa';
console.log(test[0]);
console.log(test);


let kappa = {
    0: 1,
    1: 2,
  }
  
let kappa2 = {
    0: 1,
}

_.set(kappa2, [1], 2);
console.log(kappa2);
