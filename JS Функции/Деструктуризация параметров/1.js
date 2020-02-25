const f = (x) => {
    // параметру x будет присвоено
    // значение аргумента при вызове функции
    console.log(x);
}
f(1); // 1

// Это можно представить так, что
// внутри функции создаётся параметр x,
// которому присваивается значение аргумента:
// {
//   let x = 1;
//   console.log(x);
// };

func([1, 2]); // => [1, 2]
// Пример с передачей массива:
// {
//   let x = [1, 2];
//   console.log(x);
// };


// Деструктуризация массива

// Напишем функцию, которая принимает на вход массив из двух элементов и печатает их в терминал.

// Не самый выразительный вариант — прямое обращение к элементам массива по индексам:

const func = (arr) => {
    console.log(arr[0]);
    console.log(arr[1]);
  };
  
  // let arr = [1, 2];
  func([1, 2]);
  // => 1
  // => 2

// Более интересный вариант — дестракчеринг массива в теле функции:
const func = (arr) => {
    const [first, second] = arr;
    console.log(first);
    console.log(second);
}

// let arr = [1, 2];
func([1, 2]);
// => 1
// => 2

const func = ([first, second]) => {
    console.log(first);
    console.log(second);
}

// let [first, second] = [1, 2];
func([1, 2]);
// => 1
// => 2

// можно задавать значения по умолчанию
const func = ([first = 3, second = 555]) => {
}

// Деструктуризация объекта
const func = ({ name, surname }) => {
    console.log(name);
    console.log(surname);
};

const obj = { name: 'John', surname: 'Doe' };

const func = ({ surname }) => {
    // берём только значения surname
    console.log(surname);
  };
