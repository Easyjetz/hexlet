// проверяем существует ли нужное св-во у объекта
// метод hasOwnProperty

const obj = {
    color: 'red',
    heigth: 10,
};

obj.hasOwnProperty('color'); // true

console.log(obj.hasOwnProperty('color'));

// для получения массива ключей у объекта есть специальный метод Object.keys().

// лучше вместо hasOwnProperty использовать has из lodash