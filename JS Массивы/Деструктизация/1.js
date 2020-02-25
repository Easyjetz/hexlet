// есть массив из двух элементов
const arr = [1, 2];
// можем обращаться по индексу arr[0] и arr[1]
// или присвоить понятные переменные
const firstIndex = arr[0];
const lastIndex = arr[1];

// destructuring позволяет извлекать элементы особым синтаксисом
const [firstName, lastName] = arr;

console.log(firstName);
// destructuring работает для любого кол-ва элементов

const [, secondElem, , fourthElement] = [1, 2, 3, 4];

// Если при дестракчеринге указать переменную так, 
// что ей не будет соответствовать ни один элемент массива, то в переменную запишется значение undefined.

const [firstElement, secondElement, thirdElement] = [1, 2];

console.log(thirdElement);  // => undefined

// можно подстраховаться и записать значение по умолчанию
const [firstElement, secondElement, thirdElement = 3] = [1, 2];

// разложение в массиве можно использовать не только как инструкцию, но и, например, в циклах.

const points = [
    [4, 3],
    [0, -5],

];

for (const [x, y] of points) {
    console.log([x, y])
}