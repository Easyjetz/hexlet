const getDifference = (arr1, arr2) => {
    const result = arr1.filter((element) => !arr2.includes(element));
    return result;
}

console.log(getDifference([2, 1], [2, 3]));

const check = (number) => {
    const result = number % 2 === 0 ? 'yes' : 'no';
    console.log(result);
};

const isEven = (number) => (number % 2 === 0) ? 'yes' : 'no';

const check = (number) => {
  const result = isEven(number);
  console.log(result);
};

const isEven = (number) => (number % 2 === 0);
const check = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  console.log(result);
};