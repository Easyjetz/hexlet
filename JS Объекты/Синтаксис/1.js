// создание
const user = {name: 'Vasya', married: true, age: 25};

// получение данных(через квадратные скобки и точку)
// 1 способ
user['name']; // Vasya
user['age']; // 25
// кавычки обязательны т.к мы обращаемся к ключу, а не некой переменной name

const nick = 'name';
user[nick]; // Vasya

// это динамический способ задания ключа. Он полезен и активно используется, т.к мы не знаем
// какие конкретно ключи и в каком порядке нам понадобятся. Ключи сохраняются в переменные или массивы
// доступ к элементам объекта организуется через них.

// 2 способ : через точку
user.name; // Vasya
user.age; // 25

// если нужно использовать динамическое задание ключа или ключ состоит из нескольких слов через пробел -
// используем [], в остальных - через точку.

// Добавление, изменение и удаление элементов.

// для создания и обновления значений ключа используется присваивание

const person = {
    name: 'Dmitry',
    age: 19,
    married: false,
    work: false,
};

// изменяем
person.age = 20; // age: 20.

// добавляем
person.car = true;
console.log(person.car);

// удалить можно с помощью оператора delete
const user2 = { name: 'Vasya', wrongProp: 'bug' };

delete user2.wrongProp;
console.log(user);
// => { name: 'Vasya' }

// значением объекта может быть что угодно(массивы и другие объекты)

const people = { name: 'Vasya', married: true, age: 25 };

people.friends = ['Kolya', 'Petya'];

people.children = [
    { name: 'Mila', age: 1 },
    { name: 'Petr', age: 10 },
];


console.log(people); // =>
// { name: 'Vasya',
//   married: true,
//   age: 25,
//   friends: [ 'Kolya', 'Petya' ],
//   children: [ { name: 'Mila', age: 1 }, { name: 'Petr', age: 10 } ] }

// обращение

user.friends[1]; // 'Petya'
user.children[0].name; // 'Mila'

// можно динамически определять названия ключей.

const n = 'name';
const m = 'married';
const a = 'age';

const user3 = { [n]: 'Vasya', [m]: true, [a]: 25 };

// современный JS с лаконичным созданием объекта 

const firstName = 'Masha';
const newAge = 18;
const isMarried = false;

const user4 = {firstName, newAge, isMarried};
